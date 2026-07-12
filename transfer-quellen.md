# TVFussball.de – Transfer-Center: Quellen & Pflege-Leitfaden

Stand: 12.07.2026 · Sommer-Transferfenster 2026/27 — ALLE geplanten Ligen erfasst

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
| **Serie A** | football-italia.net „done deals tracker" | Gianluca Di Marzio, Sky Italia, Calciomercato, OneFootball-Tracker; Gerüchte: transferfeed.com |
| **Ligue 1** | getfootballnewsfrance.com/transfers | transferfeed.com, L'Équipe, RMC |
| **Eredivisie / Primeira / Süper Lig / Saudi / MLS** | Transfermarkt (Liga-Transferseite) | jeweilige Ligaseite, Fabrizio Romano |
| **Übergreifend** | transfermarkt.de (Marktwerte!) · Fabrizio Romano | 90min, Sky, BBC Sport |

Konkrete URLs (Stand jetzt – Slugs ändern sich ggf. pro Saison):
- Bundesliga: https://www.bundesliga.com/de/bundesliga/news/offizieller-transfermarkt-alle-wechsel-transfers-ubersicht-11850
- Premier League: https://www.premierleague.com/en/transfers/2026-27/summer · https://www.football365.com/news/every-premier-league-transfer-confirmed-in-the-summer-of-2026
- LaLiga: https://www.laliga.com/en-GB/transfers/laliga-easports
- Serie A (Done Deals): https://football-italia.net/summer-transfer-window-live-serie-a-done-deals-tracker/ · https://onefootball.com/en/competition/serie-a-13/transfers
- Serie A (Reporter/Gerüchte): https://www.gianlucadimarzio.com/ · https://www.transferfeed.com/leagues/serie-a/136
- Ligue 1 (Done Deals): https://onefootball.com/en/competition/ligue-1-23/transfers · https://www.getfootballnewsfrance.com/transfers/
- Ligue 1 (Reporter/Gerüchte): L'Équipe, RMC · https://www.transferfeed.com/leagues/ligue-1/ · Tribuna Club-Seiten
- Eredivisie (Done Deals): https://www.vi.nl/nieuws/zomertransfers-eredivisie-seizoen-2026-27-alle-clubs-op-een-rij · https://www.voetbalprimeur.nl/ · https://www.ajaxshowtime.com/
- Eredivisie (Reporter/Gerüchte): footballtransfers.com (NL) · VoetbalPrimeur #DoneDeal
- Primeira Liga (Done Deals): https://onefootball.com/en/competition/liga-portugal-35/transfers · portugoal.net
- Primeira Liga (Reporter/Gerüchte): A Bola, Record · https://www.transferfeed.com/leagues/liga-portugal/161 · Fabrizio Romano
- Süper Lig (Done Deals): https://onefootball.com/en/competition/sueper-lig-8/transfers · https://www.transfermarkt.de/super-lig/startseite/wettbewerb/TR1
- Süper Lig (Reporter/Gerüchte): Fanatik, Fotomaç · https://www.transferfeed.com/leagues/super-lig/206
- Saudi Pro League (Done Deals): https://www.spl.com.sa/en · https://www.transfermarkt.de/saudi-professional-league/startseite/wettbewerb/SA1 (Sommerfenster oeffnet ~18.07.2026)
- Saudi Pro League (Reporter/Gerüchte): Fabrizio Romano · https://tribuna.com/en/league/saudi-prof-league/transfers/ · footballtransfers.com
- MLS (Done Deals): https://www.mlssoccer.com/news/topics/transfer-tracker/ · https://www.spotrac.com/mls/transactions/ (Secondary Window ~Juli–Aug 2026)
- MLS (Reporter/Gerüchte): Tom Bogert, The Athletic · si.com/soccer/mls
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
- [x] Serie A (Kern-Deals + Gerüchte: Fiorentina-Cluster, Gaetano, Zaniolo, Esposito; Gerüchte Kolo Muani, Bremer, Vlahović, Doué)
- [x] Ligue 1 (Ausbau: Lyon/Rennes-Zugänge – Bidstrup, Kamara, Szymański, G. Oliveira, Nartey; Gerüchte Greenwood, Balogun)
- [x] Eredivisie (Mijnans→PSV, Weghorst→Twente, Vanhoutte→Feyenoord, De Busser→AZ, Paredes & Alarcón→Utrecht [korrigiert]; Gerüchte Pepi, Ueda, Dest)
- [x] Primeira Liga (Travassos→Braga, Altimira→Sporting, Pietuszewski→Porto, R. Ribeiro→Augsburg; Gerüchte Mora, Diogo Costa, Diomande)
- [x] Süper Lig (Kökçü→Besiktas, Aké & Cherif→Fenerbahçe, Cabral & Muci→Trabzonspor, Oh→Besiktas, Asprilla→Galatasaray; Gerüchte Marmoush, Sarr, Semedo)
- [x] Saudi Pro League (nur Gerüchte – Fenster oeffnet ~18.07.: Bruno Fernandes→Al-Hilal, Casado→Al-Ittihad, Guirassy→Al-Ahli; Deals nachziehen sobald Fenster offen)
- [x] MLS (Secondary Window: Méndez→Columbus, Herrera→Columbus, Choinière→LAFC, Karic→Kansas City; Gerüchte Dybala→Miami, Abou Ali→Columbus)

**Alle geplanten Ligen sind erfasst.** Ab jetzt nur noch tägliches Nachpflegen über die oben verlinkten Quellen (Status ehrlich: fix/einig/ger).
