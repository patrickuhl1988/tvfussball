#!/usr/bin/env node
/**
 * TVFussball.de – täglicher Spiel-Alarm via OneSignal
 *
 * - Extrahiert das MATCHES-Array aus app-core.js + app-data.js (inkl. der Sender-Konstanten,
 *   die im selben <script>-Block davor definiert sind) und wertet es in einer
 *   Node-VM-Sandbox aus. Damit sind auch Referenzen wie tv:{DE:[ARD,MAG]}
 *   sauber aufgelöst – robuster als reines Regex-Parsing der Objekte.
 * - Findet alle HEUTIGEN Spiele (Zeitzone Europe/Berlin).
 * - Baut pro beteiligtem Verein EINE Nachricht (mehrere Spiele werden gebündelt)
 *   und sendet sie über die OneSignal REST API mit Tag-Filter (club_<slug> = 1).
 * - DST-sicher: läuft nur, wenn es in Berlin gerade 08:00 Uhr ist
 *   (Workflow triggert um 06:00 UND 07:00 UTC; der falsche Slot beendet sich still).
 *
 * ENV:
 *   ONESIGNAL_REST_API_KEY  (GitHub Secret – niemals im Repo speichern!)
 *   ONESIGNAL_APP_ID
 *   SITE_URL                (Default: https://tvfussball.de)
 *   FORCE_SEND=true         (DST-/Uhrzeit-Check überspringen, für manuelle Runs)
 *   DRY_RUN=true            (nur loggen, nichts senden)
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";
import { createHash } from "node:crypto";

/* Deterministische UUID (v5-Format) aus einem Namen – OneSignal verlangt fuer
   den Idempotenz-Key eine valide UUID; gleicher Verein+Tag => gleiche UUID. */
function idemUuid(name) {
  const h = createHash("sha1").update("tvfussball.de:" + name).digest();
  h[6] = (h[6] & 0x0f) | 0x50;
  h[8] = (h[8] & 0x3f) | 0x80;
  const x = h.subarray(0, 16).toString("hex");
  return `${x.slice(0,8)}-${x.slice(8,12)}-${x.slice(12,16)}-${x.slice(16,20)}-${x.slice(20,32)}`;
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SITE_URL = process.env.SITE_URL || "https://tvfussball.de";
const APP_ID = process.env.ONESIGNAL_APP_ID || "94a57127-83f5-4bd7-af6c-294c041a3958";
const API_KEY = process.env.ONESIGNAL_REST_API_KEY || "";
const DRY = String(process.env.DRY_RUN).toLowerCase() === "true";
const FORCE = String(process.env.FORCE_SEND).toLowerCase() === "true";

/* ---------- 0) Berliner Zeit & DST-Check ---------- */
function berlinParts(d = new Date()) {
  const fmt = new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hour12: false,
  });
  const p = Object.fromEntries(fmt.formatToParts(d).map(x => [x.type, x.value]));
  return { dmy: `${p.day}.${p.month}.${p.year}`, hour: parseInt(p.hour, 10) };
}
const { dmy: TODAY, hour: BERLIN_HOUR } = berlinParts();

/* GitHub-Cron laeuft oft 1-2h verspaetet, daher Fenster statt exakter Stunde.
   Doppel-Versand (beide Cron-Slots im Fenster) verhindert die deterministische
   Idempotenz-UUID: gleicher Verein+Tag => gleiche UUID => OneSignal dedupliziert. */
if (!FORCE && (BERLIN_HOUR < 8 || BERLIN_HOUR > 11)) {
  console.log(`Berlin ist gerade ${BERLIN_HOUR}:xx Uhr (Sendefenster 08-11 Uhr verfehlt) – Beende ohne Versand.`);
  process.exit(0);
}
if (!API_KEY && !DRY) {
  console.error("FEHLER: ONESIGNAL_REST_API_KEY ist nicht gesetzt. Bitte als GitHub Secret anlegen (Repo → Settings → Secrets → Actions).");
  process.exit(1);
}

/* ---------- 1) MATCHES aus app-core.js + app-data.js extrahieren ----------
   Seit v28 liegen die Sender-Konstanten (ARD, MAG, …) in app-core.js und
   das MATCHES-Array am Anfang von app-data.js (nicht mehr inline in index.html). */
const core = readFileSync(join(ROOT, "app-core.js"), "utf-8");
const dataJs = readFileSync(join(ROOT, "app-data.js"), "utf-8");

const matchesIdx = dataJs.indexOf("const MATCHES = [");
if (matchesIdx < 0) { console.error("FEHLER: 'const MATCHES = [' nicht in app-data.js gefunden."); process.exit(1); }
// Ende des MATCHES-Arrays: erstes "\n];" nach dem Array-Start
const arrEnd = dataJs.indexOf("\n];", matchesIdx);
if (arrEnd < 0) { console.error("FEHLER: Ende des MATCHES-Arrays nicht gefunden."); process.exit(1); }
const code = core + "\n" + dataJs.slice(matchesIdx, arrEnd + 3);

const sandbox = { console: { log(){}, warn(){}, error(){} } };
vm.createContext(sandbox);
try {
  vm.runInContext(code + "\n;globalThis.__MATCHES = MATCHES;", sandbox, { timeout: 15000 });
} catch (e) {
  console.error("FEHLER beim Auswerten der MATCHES-Daten:", e.message);
  process.exit(1);
}
const MATCHES = sandbox.__MATCHES;
if (!Array.isArray(MATCHES) || !MATCHES.length) { console.error("FEHLER: MATCHES leer."); process.exit(1); }
console.log(`MATCHES geladen: ${MATCHES.length} Einträge. Heute (Berlin): ${TODAY}`);

/* ---------- 2) Heutige Spiele + Vereins-Zuordnung ---------- */
/* Slug muss identisch zur Frontend-Funktion clubSlug() in app-main.js sein! */
function clubSlug(name) {
  return "club_" + String(name).toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").replace(/_{2,}/g, "_");
}
function bestSender(m) {
  const de = (m.tv && m.tv.DE) || [];
  const list = de.filter(s => s && s.n);
  const free = list.find(s => s.t === "fta");
  return (free || list[0] || {}).n || "TV/Stream (Details auf TVFussball.de)";
}
const todays = MATCHES.filter(m => typeof m.day === "string" && m.day.endsWith(TODAY) && m.h && m.a);
console.log(`Heutige Spiele: ${todays.length}`);

const perClub = new Map(); // slug -> { club, lines[] }
for (const m of todays) {
  const time = m.time && /^\d{1,2}:\d{2}$/.test(m.time) ? m.time : "heute";
  const line = `⚽ ${m.h} – ${m.a} heute ${time !== "heute" ? time + " Uhr" : ""} live auf ${bestSender(m)}`.replace(/\s+/g, " ").trim();
  for (const club of [m.h, m.a]) {
    const slug = clubSlug(club);
    if (!perClub.has(slug)) perClub.set(slug, { club, lines: [] });
    if (!perClub.get(slug).lines.includes(line)) perClub.get(slug).lines.push(line);
  }
}
if (!perClub.size) { console.log("Keine heutigen Spiele – nichts zu senden."); process.exit(0); }

/* Liga-Abos: 1 Digest pro Liga mit allen heutigen Spielen dieser Liga */
function ligaSlug(comp) {
  const base = String(comp || "").split(" \u00b7 ")[0].trim();
  if (!base) return null;
  return { slug: "liga_" + clubSlug(base).slice(5), name: base };
}
const perLiga = new Map();
for (const m of todays) {
  const L = ligaSlug(m.comp); if (!L) continue;
  const time = m.time && /^\d{1,2}:\d{2}$/.test(m.time) ? m.time + " Uhr" : "heute";
  const line = `\u26bd ${m.h} \u2013 ${m.a} \u00b7 ${time} \u00b7 ${bestSender(m)}`;
  if (!perLiga.has(L.slug)) perLiga.set(L.slug, { name: L.name, lines: [] });
  if (!perLiga.get(L.slug).lines.includes(line)) perLiga.get(L.slug).lines.push(line);
}

/* ---------- 3) Versand über OneSignal REST API ---------- */
const clickUrl = `${SITE_URL}/?utm_source=onesignal&utm_medium=web_push&utm_campaign=matchday#liveBoard`;
const dateKey = TODAY.replace(/\./g, "");
let sent = 0, failed = 0, scheduled = 0;

/* Berliner Uhrzeit (DD.MM.YYYY + HH:MM) nach UTC-Timestamp (DST-sicher) */
function berlinToUtcMs(dmy, hm) {
  const [d, m, y] = dmy.split(".").map(Number);
  const [hh, mm] = hm.split(":").map(Number);
  for (const off of [2, 1]) { // CEST / CET durchprobieren und verifizieren
    const t = Date.UTC(y, m - 1, d, hh - off, mm);
    const parts = Object.fromEntries(new Intl.DateTimeFormat("de-DE", {
      timeZone: "Europe/Berlin", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false,
    }).formatToParts(new Date(t)).map(x => [x.type, x.value]));
    if (parseInt(parts.day) === d && parseInt(parts.hour) === hh && parseInt(parts.minute) === mm) return t;
  }
  return null;
}

async function postNote(payload, label) {
  if (DRY) { console.log(`[DRY] ${label}${payload.send_after ? " (geplant: " + payload.send_after + ")" : ""}:\n${payload.contents.de}\n`); return true; }
  try {
    const res = await fetch("https://api.onesignal.com/notifications", {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8", authorization: `Key ${API_KEY}` },
      body: JSON.stringify(payload),
    });
    const body = await res.json().catch(() => ({}));
    if (res.ok && !body.errors) {
      console.log(`\u2714 ${label}: ${payload.send_after ? "geplant fuer " + payload.send_after : "gesendet"}, id=${body.id || "-"}`);
      return true;
    } else if (body.errors && JSON.stringify(body.errors).includes("not subscribed")) {
      console.log(`\u2013 ${label}: keine Abonnenten mit diesem Tag \u2013 uebersprungen.`);
      return null;
    } else {
      console.error(`\u2716 ${label}: HTTP ${res.status}`, JSON.stringify(body).slice(0, 300));
      return false;
    }
  } catch (e) { console.error(`\u2716 ${label}: ${e.message}`); return false; }
  finally { await new Promise(r => setTimeout(r, 350)); }
}

/* --- 3a) Morgen-Digest: 1 Push pro Verein mit allen heutigen Spielen --- */
for (const [slug, { club, lines }] of perClub) {
  const content = lines.join("\n");
  const ok = await postNote({
    app_id: APP_ID,
    target_channel: "push",
    name: `matchday-${slug}-${dateKey}`,
    external_id: idemUuid(`${slug}-${dateKey}`),
    headings: { en: `${club} spielt heute!`, de: `${club} spielt heute!` },
    contents: { en: content, de: content },
    url: clickUrl,
    filters: [{ field: "tag", key: slug, relation: "=", value: "1" }],
    ttl: 43200,
  }, `${club} (${slug})`);
  if (ok === true) sent++; else if (ok === false) failed++;
}

/* --- 3a2) Liga-Digests --- */
for (const [slug, { name, lines }] of perLiga) {
  const shown = lines.slice(0, 8);
  const content = shown.join("\n") + (lines.length > 8 ? `\n\u2026 und ${lines.length - 8} weitere Spiele` : "");
  const ok = await postNote({
    app_id: APP_ID, target_channel: "push",
    name: `ligaday-${slug}-${dateKey}`,
    external_id: idemUuid(`${slug}-${dateKey}`),
    headings: { en: `${name} heute: ${lines.length} Spiel${lines.length===1?"":"e"}`, de: `${name} heute: ${lines.length} Spiel${lines.length===1?"":"e"}` },
    contents: { en: content, de: content },
    url: clickUrl,
    filters: [{ field: "tag", key: slug, relation: "=", value: "1" }],
    ttl: 43200,
  }, `Liga ${name} (${slug})`);
  if (ok === true) sent++; else if (ok === false) failed++;
}

/* --- 3b) Anpfiff-Erinnerung: 30 Min vor jedem Spiel, via send_after von OneSignal
       sekundengenau zugestellt (unabhaengig von Cron-Verspaetungen) --- */
const PRE_MIN = 30;
for (const m of todays) {
  if (!m.time || !/^\d{1,2}:\d{2}$/.test(m.time)) continue;
  const kickUtc = berlinToUtcMs(TODAY, m.time);
  if (!kickUtc) continue;
  const fireAt = kickUtc - PRE_MIN * 60000;
  if (fireAt < Date.now() + 3 * 60000) continue; // schon (fast) vorbei -> nur Morgen-Digest
  const sender = bestSender(m);
  const content = `\u26bd ${m.h} \u2013 ${m.a} \u00b7 Anpfiff ${m.time} Uhr \u00b7 live auf ${sender}`;
  for (const club of [m.h, m.a]) {
    const slug = clubSlug(club);
    const ok = await postNote({
      app_id: APP_ID,
      target_channel: "push",
      name: `prekick-${slug}-${dateKey}-${m.time.replace(":", "")}`,
      external_id: idemUuid(`${slug}-${dateKey}-pre-${m.time}`),
      headings: { en: `\u23f0 Gleich Anpfiff: ${club}!`, de: `\u23f0 Gleich Anpfiff: ${club}!` },
      contents: { en: content, de: content },
      url: clickUrl,
      filters: (function(){
        const f=[{ field:"tag", key:slug, relation:"=", value:"1" }];
        const L=ligaSlug(m.comp);
        if(L){ f.push({operator:"OR"},{ field:"tag", key:L.slug, relation:"=", value:"1" }); }
        return f;
      })(),
      send_after: new Date(fireAt).toISOString(),
      ttl: 5400,
    }, `Erinnerung ${club} ${m.time}`);
    if (ok === true) scheduled++; else if (ok === false) failed++;
  }
}

console.log(`Fertig. Morgen-Digest gesendet: ${sent}, Erinnerungen geplant: ${scheduled}, Fehler: ${failed}, Vereine mit Spiel heute: ${perClub.size}`);
process.exit(failed ? 1 : 0);
