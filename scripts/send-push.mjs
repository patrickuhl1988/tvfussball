#!/usr/bin/env node
/**
 * TVFussball.de – täglicher Spiel-Alarm via OneSignal
 *
 * - Extrahiert das MATCHES-Array aus index.html (inkl. der Sender-Konstanten,
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

if (!FORCE && BERLIN_HOUR !== 8) {
  console.log(`Berlin ist gerade ${BERLIN_HOUR}:xx Uhr (nicht 08:xx) – falscher Cron-Slot (Sommer-/Winterzeit). Beende ohne Versand.`);
  process.exit(0);
}
if (!API_KEY && !DRY) {
  console.error("FEHLER: ONESIGNAL_REST_API_KEY ist nicht gesetzt. Bitte als GitHub Secret anlegen (Repo → Settings → Secrets → Actions).");
  process.exit(1);
}

/* ---------- 1) MATCHES aus index.html extrahieren ---------- */
const html = readFileSync(join(ROOT, "index.html"), "utf-8");

const matchesIdx = html.indexOf("const MATCHES = [");
if (matchesIdx < 0) { console.error("FEHLER: 'const MATCHES = [' nicht in index.html gefunden."); process.exit(1); }
// Start des umgebenden <script>-Blocks (enthält die Sender-Konstanten wie ARD, MAG, …)
const scriptOpen = html.lastIndexOf("<script>", matchesIdx);
if (scriptOpen < 0) { console.error("FEHLER: umgebendes <script> nicht gefunden."); process.exit(1); }
const codeStart = html.indexOf(">", scriptOpen) + 1;
// Ende des MATCHES-Arrays: erstes "\n];" nach dem Array-Start
const arrEnd = html.indexOf("\n];", matchesIdx);
if (arrEnd < 0) { console.error("FEHLER: Ende des MATCHES-Arrays nicht gefunden."); process.exit(1); }
const code = html.slice(codeStart, arrEnd + 3);

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
/* Slug muss identisch zur Frontend-Funktion clubSlug() in index.html sein! */
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

/* ---------- 3) Versand über OneSignal REST API ---------- */
const clickUrl = `${SITE_URL}/?utm_source=onesignal&utm_medium=web_push&utm_campaign=matchday#liveBoard`;
const dateKey = TODAY.replace(/\./g, "");
let sent = 0, failed = 0;

for (const [slug, { club, lines }] of perClub) {
  const content = lines.join("\n"); // Spiele desselben Vereins gebündelt → max. 1 Push pro Verein/Tag
  const payload = {
    app_id: APP_ID,
    target_channel: "push",
    name: `matchday-${slug}-${dateKey}`,
    external_id: `tvf-${slug}-${dateKey}`, // Idempotenz: verhindert Doppel-Versand bei Retries
    headings: { en: `${club} spielt heute!`, de: `${club} spielt heute!` },
    contents: { en: content, de: content },
    url: clickUrl,
    filters: [{ field: "tag", key: slug, relation: "=", value: "1" }],
    ttl: 43200, // nach 12h nicht mehr zustellen (Spieltag vorbei)
  };

  if (DRY) { console.log(`[DRY] ${slug}:\n${content}\n`); sent++; continue; }

  try {
    const res = await fetch("https://api.onesignal.com/notifications", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
        authorization: `Key ${API_KEY}`,
      },
      body: JSON.stringify(payload),
    });
    const body = await res.json().catch(() => ({}));
    // "All included players are not subscribed" ist OK: für diesen Verein hat (noch) niemand abonniert.
    if (res.ok && !body.errors) {
      console.log(`✔ ${club} (${slug}): gesendet, id=${body.id || "-"} recipients=${body.recipients ?? "?"}`);
      sent++;
    } else if (body.errors && JSON.stringify(body.errors).includes("not subscribed")) {
      console.log(`– ${club} (${slug}): keine Abonnenten mit diesem Tag – übersprungen.`);
    } else {
      console.error(`✖ ${club} (${slug}): HTTP ${res.status}`, JSON.stringify(body));
      failed++;
    }
  } catch (e) {
    console.error(`✖ ${club} (${slug}): ${e.message}`);
    failed++;
  }
  await new Promise(r => setTimeout(r, 350)); // sanftes Rate-Limit
}

console.log(`Fertig. Gesendet/geplant: ${sent}, Fehler: ${failed}, Vereine mit Spiel heute: ${perClub.size}`);
process.exit(failed ? 1 : 0);
