# TVFussball.de – Transfer-Center: Quellen & Pflege-Leitfaden

Stand: 12.07.2026 · Sommer-Transferfenster 2026/27

Dieses Dokument hält die offiziellen/verlässlichen Quellen fest, mit denen sich das
Transfer-Center (`TRANSFERS`-Array in `index.html` / `news.html` / `highlights.html`)
**täglich nachpflegen** lässt. Reihenfolge: erst offizielle Ligaliste, dann Transfermarkt,
dann seriöse Reporter (Romano, Di Marzio, kicker, Sky).

## Offizielle / verlässliche Übersichten pro Liga

| Liga | Primärquelle (offiziell) | Ergänzend |
|------|--------------------------|-----------|
| **Bundesliga** | bundesliga.com → „Der offizielle Transfermarkt 2026/27" (alle Klubs, Zu-/Abgänge) | kicker, sportschau Wechselbörse |
| **2. Bundesliga** | bundesliga.com (2BL, gleiche Übersicht) | kicker |
| **Premier League** | premierleague.com/transfers · football365 „Every PL transfer confirmed" | ESPN, Sky Sports Transfer Centre, TEAMtalk |
| **LaLiga** | laliga.com/transfers | Marca, AS, footballtransfers.com |
| **Serie A** | football-italia.net „done deals tracker" | Gianluca Di Marzio, Sky Italia, Calciomercato |
| **Ligue 1** | getfootballnewsfrance.com/transfers | transferfeed.com, L'Équipe, RMC |
| **Eredivisie / Primeira / Süper Lig / Saudi / MLS** | Transfermarkt (Liga-Transferseite) | jeweilige Ligaseite, Fabrizio Romano |
| **Übergreifend** | transfermarkt.de (Marktwerte!) · Fabrizio Romano | 90min, Sky, BBC Sport |

Konkrete URLs (Stand jetzt – Slugs ändern sich ggf. pro Saison):
- Bundesliga: https://www.bundesliga.com/de/bundesliga/news/offizieller-transfermarkt-alle-wechsel-transfers-ubersicht-11850
- Premier League: https://www.premierleague.com/en/transfers/2026-27/summer · https://www.football365.com/news/every-premier-league-transfer-confirmed-in-the-summer-of-2026
- LaLiga: https://www.laliga.com/en-GB/transfers/laliga-easports
- Serie A: https://football-italia.net/summer-transfer-window-live-serie-a-done-deals-tracker/
- Ligue 1: https://www.getfootballnewsfrance.com/transfers/
- Transfermarkt (Marktwerte je Liga): z. B. https://www.transfermarkt.de/ligue-1/transfers/wettbewerb/FR1

## Datenmodell (ein Objekt pro Transfer im `TRANSFERS`-Array)

```js
{
  p:"Spielername", pos:"ST", age:24,
  from:"Abgebender Verein", fl:"<liga-id>",
  to:"Aufnehmender Verein", tl:"<liga-id>",
  fee:22,        // Ablöse in Mio. € (ca.). 0 = ablösefrei/Leihe/offen
  mv:28,         // Marktwert in Mio. € (geschätzt, Quelle: Transfermarkt)
  sal:6,         // Jahresgehalt in Mio. € brutto (geschätzt)
  date:"2026-07-10",
  st:"fix",      // fix = offiziell | einig = geeinigt | ger = Gerücht
  known:"Kurz: Stärken des Spielers",
  imp:"1–2 Sätze: Was der Wechsel für beide Vereine bedeutet.",
  free:true,     // optional, wenn ablösefrei
  loan:true      // optional, wenn Leihe
}
```

**Liga-IDs (`fl`/`tl`):** `bl1` Bundesliga · `bl2` 2. Bundesliga · `pl` Premier League ·
`ll` LaLiga · `sa` Serie A · `l1` Ligue 1 · `ere` Eredivisie · `pt` Primeira Liga ·
`spl` Saudi Pro League · `tsl` Süper Lig · `mls` MLS · `misc` sonstige/international.

Neue Liga? In `LEAGUES` (Name/Kürzel/Farbe) **und** `LEAGUE_ORDER` ergänzen; neue
Vereinsfarbe optional in `CLUB_COL` (sonst automatische Fallback-Farbe). Ligen ohne
Einträge werden automatisch ausgeblendet.

## Regeln fürs Nachpflegen (Qualität)
1. **Nur echte Transfers** aufnehmen – „Leihe beendet" / Rückkehr aus Leihe sind KEINE Transfers.
2. **Ein Objekt pro Transfer** (nicht doppelt beim abgebenden und aufnehmenden Klub anlegen).
3. **Richtung prüfen**: `from` = wo er gespielt hat, `to` = wohin er wechselt (häufigste Fehlerquelle).
4. Ablösen aus der Quelle übernehmen (£ → € ca. ×1,17). Marktwert/Gehalt bleiben Schätzungen.
5. Status ehrlich setzen: nur mit offizieller Bestätigung `fix`; sonst `einig` oder `ger`.
6. Gerüchte (`ger`) erscheinen nur, wenn im UI „+ Gerüchte" aktiviert ist.

## Fortschritt (Ligen)
- [x] Bundesliga (vollständig, offizielle DFL-Liste)
- [x] 2. Bundesliga (Kernwechsel)
- [x] Premier League (vollständig, alle 20 Klubs)
- [x] LaLiga (Kern-Deals + Korrekturen)
- [ ] Serie A (nächster Schritt)
- [ ] Ligue 1 (Grundstock vorhanden, Ausbau offen)
- [ ] Eredivisie / Primeira / Süper Lig / Saudi / MLS
