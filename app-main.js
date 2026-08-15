

/* News — DFB-Team + 18 Bundesligavereine (Teamliste mit Farben/Kürzel) */
const TEAMS = [
  {id:"wm",name:"WM 2026",short:"WM",color:"#0b9d6e",fg:"#fff"},
  {id:"bayern",name:"FC Bayern München",short:"FCB",color:"#dc052d"},
  {id:"psg",name:"Paris Saint-Germain",short:"PSG",color:"#004170",fg:"#fff"},
  {id:"dfb",name:"DFB-Team",short:"DFB",color:"#c7a008",nat:true},
  {id:"bvb",name:"Borussia Dortmund",short:"BVB",color:"#f4c400",fg:"#1a1a1a"},
  {id:"rbl",name:"RB Leipzig",short:"RBL",color:"#d4023a"},
  {id:"vfb",name:"VfB Stuttgart",short:"VfB",color:"#e32219"},
  {id:"b04",name:"Bayer Leverkusen",short:"B04",color:"#b1080f"},
  {id:"scf",name:"SC Freiburg",short:"SCF",color:"#e1000f"},
  {id:"sge",name:"Eintracht Frankfurt",short:"SGE",color:"#1a1a1a"},
  {id:"tsg",name:"TSG Hoffenheim",short:"TSG",color:"#1c63b7"},
  {id:"fca",name:"FC Augsburg",short:"FCA",color:"#ba3733"},
  {id:"m05",name:"1. FSV Mainz 05",short:"M05",color:"#c3141e"},
  {id:"fcu",name:"1. FC Union Berlin",short:"FCU",color:"#d4011d"},
  {id:"bmg",name:"Bor. Mönchengladbach",short:"BMG",color:"#00a859"},
  {id:"hsv",name:"Hamburger SV",short:"HSV",color:"#003da5"},
  {id:"koeln",name:"1. FC Köln",short:"KOE",color:"#e2001a"},
  {id:"svw",name:"SV Werder Bremen",short:"SVW",color:"#169b62"},
  {id:"s04",name:"FC Schalke 04",short:"S04",color:"#004d9d"},
  {id:"sve",name:"SV Elversberg",short:"SVE",color:"#c8102e"},
  {id:"scp",name:"SC Paderborn",short:"SCP",color:"#005ca9"},
  {id:"esp",name:"Spain",short:"ESP",color:"#c60b1e",fg:"#fff",nat:true},
  {id:"laliga",name:"LaLiga",short:"LL",color:"#ee8707",fg:"#fff"},
  {id:"fra",name:"France",short:"FRA",color:"#1e40af",fg:"#fff",nat:true},
  {id:"eng",name:"England",short:"ENG",color:"#cf142b",fg:"#fff",nat:true},
  {id:"epl",name:"Premier League",short:"PL",color:"#37003c",fg:"#fff"},
  {id:"seriea",name:"Serie A",short:"SA",color:"#1f4e9c",fg:"#fff"},
  {id:"wc",name:"World Cup 2026",short:"WC",color:"#0b9d6e",fg:"#fff"}
];
const T = Object.fromEntries(TEAMS.map(t=>[t.id,t]));



const PROVIDERS = [
  {name:"DAZN", kind:"pay", countries:["DE","AT","CH"], price:"34,99 €/Mon", sub:"Jahresabo · 44,99 € monatl. · Super Sports ab 19,99 €",
   comps:["Bundesliga","Champions League","La Liga","Serie A","Ligue 1"], url:"https://www.dazn.com",
   de:"Größtes Sport-Streaming in DE: Bundesliga am Sonntag plus Samstags-Konferenz, der Großteil der Champions League sowie La Liga, Serie A und Ligue 1.",
   en:"Germany's biggest sport streamer: Bundesliga on Sunday plus the Saturday Konferenz, most of the Champions League and La Liga, Serie A and Ligue 1."},
  {name:"Sky / WOW", kind:"pay", countries:["DE","AT"], price:"ab 29,99 €/Mon", sub:"WOW Live-Sport oder Sky Bundesliga-Paket",
   comps:["Bundesliga","2. Bundesliga","Premier League","DFB-Pokal"], url:"https://www.wow.de",
   de:"Heimat der Bundesliga: Freitag und Samstag inkl. Topspiel, die komplette 2. Bundesliga und der DFB-Pokal. Flexibel als WOW oder klassisch über Sky.",
   en:"Home of the Bundesliga: Friday and Saturday incl. the top game, the full 2. Bundesliga and the DFB-Pokal. Flexible as WOW or classic Sky."},
  {name:"MagentaTV", kind:"pay", countries:["DE"], price:"ab 9,95 €/Mon", sub:"MagentaSport · WM-2026-Paket separat",
   comps:["WM 2026","3. Liga"], url:"https://www.telekom.de/magenta-tv",
   de:"Telekom-Plattform mit allen 104 Spielen der WM 2026 (44 davon exklusiv) sowie der 3. Liga — in UHD/4K. Unabhängig vom Internetanbieter nutzbar.",
   en:"Telekom platform with all 104 matches of the 2026 World Cup (44 exclusive) plus the 3. Liga — in UHD/4K. Usable regardless of your ISP."},
  {name:"Amazon Prime Video", kind:"pay", countries:["DE","UK"], price:"8,99 €/Mon", sub:"Prime-Mitgliedschaft (89,90 €/Jahr)",
   comps:["Champions League"], url:"https://www.amazon.de/prime",
   de:"Zeigt in Deutschland das Dienstags-Topspiel der Champions League. Im Prime-Abo enthalten, das auch Versand und Streaming abdeckt.",
   en:"Shows the Tuesday top Champions League game in Germany. Included in the Prime membership that also covers delivery and streaming."},
  {name:"RTL+", kind:"pay", countries:["DE"], price:"ab 6,99 €/Mon", sub:"RTL+ Premium",
   comps:["Europa League","Conference League"], url:"https://plus.rtl.de",
   de:"Hauptsender für Europa League und Conference League in Deutschland, dazu ausgewählte Länderspiele.",
   en:"Main home of the Europa League and Conference League in Germany, plus selected internationals."},
  {name:"ARD", kind:"free", countries:["DE"], price:"kostenlos", sub:"Rundfunkbeitrag",
   comps:["WM 2026","DFB-Pokal","Sportschau"], url:"https://www.sportschau.de",
   de:"Öffentlich-rechtlich und kostenlos: ausgewählte WM-Spiele, DFB-Pokal-Partien und die Sportschau mit den Bundesliga-Highlights.",
   en:"Public-service and free: selected World Cup matches, DFB-Pokal games and the Sportschau with Bundesliga highlights."},
  {name:"ZDF", kind:"free", countries:["DE"], price:"kostenlos", sub:"Rundfunkbeitrag",
   comps:["WM 2026","DFB-Pokal"], url:"https://www.zdf.de",
   de:"Öffentlich-rechtlich: WM-Spiele inkl. Eröffnung und Finale sowie ausgewählte DFB-Pokal-Partien — frei empfangbar.",
   en:"Public-service: World Cup matches incl. opening and final plus selected DFB-Pokal games — free to air."},
  {name:"Sport1", kind:"free", countries:["DE"], price:"kostenlos", sub:"Free-TV / Stream",
   comps:["2. Bundesliga","Frauen-Bundesliga"], url:"https://www.sport1.de",
   de:"Free-TV-Sender mit dem 2.-Bundesliga-Topspiel am Montag, der Frauen-Bundesliga und zahlreichen Highlight-Formaten.",
   en:"Free-TV channel with the Monday 2. Bundesliga top game, the women's Bundesliga and many highlight shows."},
  {name:"ORF", kind:"free", countries:["AT"], price:"kostenlos", sub:"ORF-Beitrag (Österreich)",
   comps:["WM 2026","Champions League"], url:"https://sport.orf.at",
   de:"Österreichs öffentlich-rechtlicher Sender: rund die Hälfte der WM-2026-Spiele frei sowie Champions-League-Begegnungen.",
   en:"Austria's public broadcaster: around half of the 2026 World Cup matches free plus Champions League games."},
  {name:"ServusTV", kind:"free", countries:["AT"], price:"kostenlos", sub:"Free-TV (Österreich)",
   comps:["WM 2026","Champions League"], url:"https://www.servustv.com",
   de:"Privater Free-TV-Sender in Österreich mit der zweiten Hälfte der WM-2026-Spiele und Champions-League-Partien.",
   en:"Private free-TV channel in Austria with the other half of the 2026 World Cup matches and Champions League games."},
  {name:"SRF", kind:"free", countries:["CH"], price:"kostenlos", sub:"Serafe-Abgabe (Schweiz)",
   comps:["WM 2026"], url:"https://www.srf.ch/sport",
   de:"Schweizer öffentlich-rechtlicher Sender — überträgt die WM 2026 frei empfangbar (SRF zwei / SRF info, dazu RTS und RSI).",
   en:"Swiss public broadcaster — shows the 2026 World Cup free to air (SRF zwei / SRF info, plus RTS and RSI)."},
  {name:"blue Sport", kind:"pay", countries:["CH"], price:"ab CHF 24.90/Mon", sub:"Swisscom blue (Schweiz)",
   comps:["Bundesliga","Champions League","Premier League","Serie A"], url:"https://www.blue.ch/sport",
   de:"Schweizer Pay-Anbieter (Swisscom) mit Bundesliga, Champions League, Premier League und Serie A.",
   en:"Swiss pay provider (Swisscom) with Bundesliga, Champions League, Premier League and Serie A."},
  {name:"BBC", kind:"free", countries:["UK"], price:"kostenlos", sub:"TV licence (UK)",
   comps:["WM 2026","FA Cup","Länderspiele"], url:"https://www.bbc.co.uk/sport",
   de:"Gebührenfinanziert in UK: WM 2026, FA Cup, Länderspiele und Match of the Day — frei empfangbar.",
   en:"Licence-funded in the UK: 2026 World Cup, FA Cup, internationals and Match of the Day — free to air."},
  {name:"ITV", kind:"free", countries:["UK"], price:"kostenlos", sub:"TV licence (UK)",
   comps:["WM 2026","FA Cup","Länderspiele"], url:"https://www.itv.com",
   de:"Britischer Free-TV-Sender mit WM 2026, FA Cup und Länderspielen, im Wechsel mit der BBC.",
   en:"UK free-TV channel with the 2026 World Cup, FA Cup and internationals, alternating with the BBC."},
  {name:"Sky Sports", kind:"pay", countries:["UK"], price:"ab £26/Mon", sub:"Sky / NOW (UK)",
   comps:["Premier League","EFL"], url:"https://www.skysports.com",
   de:"Wichtigster Pay-Sender in UK für die Premier League und die EFL.",
   en:"The main UK pay broadcaster for the Premier League and the EFL."},
  {name:"TNT Sports", kind:"pay", countries:["UK"], price:"ab £30.99/Mon", sub:"über discovery+ (UK)",
   comps:["Champions League","Europa League","Premier League"], url:"https://www.tntsports.co.uk",
   de:"UK-Pay-Anbieter (über discovery+) mit Champions League, Europa League und Premier-League-Spielen.",
   en:"UK pay provider (via discovery+) with Champions League, Europa League and Premier League games."}
];

let LANG="de", LANG_LOCKED=false, LIVE_SEL=new Set([]), FILTER_USERSET=false, LIVE_Q="", HL_FILTER="all", HL_Q="", NEWS_TEAM="", NEWS_Q="", PROV_FILTER="all", PROV_Q="";
let NEWS_MODE="transfers", TR_SORT="fee", TR_DIR="desc", TR_LEAGUE="", TR_CLUB="", TR_Q="", TR_SHOW="fix";
let LIVE_SHOWN=20, HL_SHOWN=20, NEWS_SHOWN=20, TR_SHOWN=20; const PAGE_SIZE=20;
const FORMATS = [
  {id:"deadline-day", day:"Dienstag, 01.09.2026", time:"09:00", name:"Deadline Day – Transferschluss live", ch:"Sky Sport News", icon:"📞", kind:"live", live:true,
   when_de:"Letzter Tag der Sommer-Transferperiode", when_en:"Final day of the summer transfer window",
   desc_de:"Sky Sport News sendet ab etwa 9 Uhr durchgehend live bis zum Transferschluss: In Deutschland müssen alle Unterlagen bis 18 Uhr bei der DFL liegen. Der Sender kommt wie jedes Jahr ganz in Gelb, mit Schalten zu den Reportern sowie zu Sky UK und Sky Italia. Am Abend folgt die Sendung „Transfer Update – die Deadline Day Show“. Wie im Vorjahr fällt der Termin nicht auf den 31. August, sondern einen Tag später – weil in England der letzte Montag im August ein Feiertag ist und sich die Top-5-Ligen auf einen gemeinsamen Stichtag verständigt haben.",
   desc_en:"Sky Sport News goes live from around 9am until the window shuts – in Germany all paperwork must reach the DFL by 6pm. The channel turns yellow as every year, with links to reporters and to Sky UK and Sky Italia; the evening brings \u201cTransfer Update \u2013 the Deadline Day Show\u201d. As last year the date falls a day later than usual because of the English bank holiday.",
   stream:"skysport.de / Sky Sport App", url:"https://sport.sky.de/fussball/artikel/deadlineday/11129720/34240"},
  {id:"cl-po-los", day:"Montag, 03.08.2026", time:"12:00", name:"Champions League · Play-off-Auslosung", ch:"UEFA.tv / uefa.com", icon:"🎱", kind:"auslosung", live:true,
   when_de:"Play-off-Runde · Auslosung in Nyon", when_en:"Play-off round · draw in Nyon",
   desc_de:"Im Haus des Europäischen Fußballs in Nyon werden die letzten 14 Teams den Play-offs zugeordnet – Hinspiele am 18./19. August, Rückspiele am 25./26. August. Die UEFA veröffentlicht Setzlisten und Ablauf ab 8:30 Uhr, Die Ziehung beginnt um 12:00 Uhr und läuft im Livestream auf UEFA.tv.",
   desc_en:"At UEFA\u2019s headquarters in Nyon the final 14 teams are paired for the play-offs (first legs 18/19 August, returns 25/26 August). UEFA publishes seedings and procedure from 8:30 CET; The draw starts at 12:00 CET and is streamed on UEFA.tv.",
   stream:"uefa.com Livestream", url:"https://de.uefa.com/uefachampionsleague/draws/"},
  {id:"el-po-los", day:"Montag, 03.08.2026", time:"13:00", name:"Europa League · Play-off-Auslosung", ch:"UEFA.tv / uefa.com", icon:"🎱", kind:"auslosung", live:true,
   when_de:"Play-off-Runde · Auslosung in Nyon", when_en:"Play-off round · draw in Nyon",
   desc_de:"Direkt nach der Champions-League-Ziehung werden die Europa-League-Play-offs gelost. Die Hinspiele steigen am 20. August, die Rückspiele am 27. August – die Sieger stehen in der Ligaphase.",
   desc_en:"Straight after the Champions League draw the Europa League play-offs are paired; first legs on 20 August, returns on 27 August.",
   stream:"uefa.com Livestream", url:"https://de.uefa.com/uefaeuropaleague/draws/"},
  {id:"ecl-po-los", day:"Montag, 03.08.2026", time:"14:00", name:"Conference League · Play-off-Auslosung", ch:"UEFA.tv / uefa.com", icon:"🎱", kind:"auslosung", live:true,
   when_de:"Play-off-Runde · Auslosung in Nyon", when_en:"Play-off round · draw in Nyon",
   desc_de:"Die dritte Ziehung des Tages betrifft die Conference League. Für Rapid Wien und die Wiener Austria ist sie nur relevant, wenn sie die dritte Quali-Runde überstehen – Hinspiele der Play-offs am 20. August.",
   desc_en:"The third draw of the day covers the Conference League \u2013 play-off first legs on 20 August.",
   stream:"uefa.com Livestream", url:"https://de.uefa.com/uefaconferenceleague/draws/"},
  {id:"cl-lp-los", day:"Donnerstag, 27.08.2026", time:"—", name:"Champions League · Auslosung der Ligaphase", ch:"UEFA.tv / uefa.com", icon:"🏆", kind:"auslosung", live:true,
   when_de:"Ligaphase 2026/27 · alle 36 Teams", when_en:"League phase 2026/27 · all 36 teams",
   desc_de:"Der wichtigste Lostag des Sommers: Für alle 36 Teilnehmer werden je acht Gegner gezogen – zwei aus jedem der vier Lostöpfe. Aus der Bundesliga sind vier Klubs dabei. Die Ligaphase startet am 8. September. Ein deutscher TV-Sender ist noch nicht bestätigt; DAZN und Prime Video halten die Spielrechte.",
   desc_en:"The biggest draw of the summer: each of the 36 teams is given eight opponents, two from each of the four pots. Four Bundesliga clubs take part; the league phase starts on 8 September.",
   stream:"uefa.com Livestream", url:"https://de.uefa.com/uefachampionsleague/draws/"},
  {id:"el-lp-los", day:"Freitag, 28.08.2026", time:"—", name:"Europa League · Auslosung der Ligaphase", ch:"UEFA.tv / uefa.com", icon:"🏆", kind:"auslosung", live:true,
   when_de:"Ligaphase 2026/27 · 36 Teams, acht Spiele", when_en:"League phase 2026/27 · 36 teams, eight games",
   desc_de:"Einen Tag nach der Königsklasse wird in Nyon die Europa-League-Ligaphase gelost: 36 Teams, vier Lostöpfe, je acht verschiedene Gegner. Der Weg führt zum Finale am 26. Mai 2027 in Frankfurt.",
   desc_en:"A day after the Champions League, Nyon pairs the Europa League league phase \u2013 36 teams, four pots, eight different opponents each, on the road to the final in Frankfurt on 26 May 2027.",
   stream:"uefa.com Livestream", url:"https://de.uefa.com/uefaeuropaleague/draws/"},
  {id:"ecl-lp-los", day:"Freitag, 28.08.2026", time:"—", name:"Conference League · Auslosung der Ligaphase", ch:"UEFA.tv / uefa.com", icon:"🏆", kind:"auslosung", live:true,
   when_de:"Ligaphase 2026/27 · gemeinsam mit der Europa League", when_en:"League phase 2026/27 · together with the Europa League",
   desc_de:"Im Anschluss an die Europa-League-Ziehung folgt die Conference League: Hier werden sechs Lostöpfe verwendet, jedes Team bekommt sechs Gegner. Kein Startplatz ist direkt vergeben – alle 36 Teilnehmer kommen aus der Qualifikation.",
   desc_en:"The Conference League follows the Europa League draw: six pots, six opponents per team \u2013 and every one of the 36 places comes through qualifying.",
   stream:"uefa.com Livestream", url:"https://de.uefa.com/uefaconferenceleague/draws/"},
  {id:"ard-wm", day:"Donnerstag, 25.06.2026", time:"21:00", name:"Sportschau live – WM 2026", ch:"Das Erste (ARD)", icon:"📡", kind:"live", live:true,
   when_de:"WM 2026 · Live-Spiele & Studio", when_en:"World Cup 2026 · live games & studio",
   desc_de:"Die ARD überträgt im Wechsel mit dem ZDF Live-Spiele der WM 2026 – inklusive Vorbericht, Analysen und Studio. Ein mögliches Achtel- und Halbfinale mit deutscher Beteiligung läuft live in der ARD.",
   desc_en:"ARD shows live World Cup 2026 matches (alternating with ZDF), including pre-match coverage, analysis and studio. A possible round of 16 and semi-final with German participation airs live on ARD.",
   stream:"sportschau.de / ARD Mediathek", url:"https://www.sportschau.de/"},
  {id:"zdf-wm", day:"Freitag, 26.06.2026", time:"20:15", name:"ZDF sportstudio live – WM 2026", ch:"ZDF", icon:"📡", kind:"live", live:true,
   when_de:"WM 2026 · Live-Spiele & WM-Studio", when_en:"World Cup 2026 · live games & studio",
   desc_de:"Das ZDF zeigt 30 WM-Spiele live aus dem WM-Studio im Zollernhof in Berlin – mit Vorberichten, Experten-Analysen und Schalten ins DFB-Quartier. Das WM-Finale am 19. Juli 2026 läuft live im ZDF.",
   desc_en:"ZDF broadcasts 30 World Cup matches live from its studio in Berlin – with previews, expert analysis and links to the German team's camp. The World Cup final on 19 July 2026 airs live on ZDF.",
   stream:"sportstudio.de / ZDF Mediathek", url:"https://www.zdf.de/sport/sportstudio-live"},
  {id:"wm-vorbericht", day:"Donnerstag, 25.06.2026", time:"05:30", name:"ZDF-Morgenmagazin – WM-Vorberichte", ch:"ZDF", icon:"🎙️", kind:"vorbericht", live:true,
   when_de:"Mo–Fr · 05:30–09:00", when_en:"Mon–Fri · 05:30–09:00",
   desc_de:"Während der WM berichtet das „Moma“ täglich aus dem DFB-Quartier in North Carolina – mit Vorberichten, Interviews und Experten-Einschätzungen (u. a. René Adler) rund um das DFB-Team.",
   desc_en:"During the World Cup, ZDF's morning show reports daily from the German team's camp in North Carolina, with previews, interviews and expert views (incl. René Adler).",
   stream:"ZDF Mediathek", url:"https://www.zdf.de/"},
  {id:"sportschau-sa", day:"Samstag, 29.08.2026", time:"18:30", name:"Sportschau – Bundesliga", ch:"Das Erste (ARD)", icon:"⚽", kind:"highlights",
   when_de:"Samstags · ab 18:30 (Saison)", when_en:"Saturdays · from 18:30 (in season)",
   desc_de:"Der Klassiker am Samstagabend: Zusammenfassungen aller Bundesliga-Spiele des Nachmittags, ab ca. 18:00 Uhr mit der 3. Liga. Aktuell Sommerpause – Start der Saison 2026/27 im August.",
   desc_en:"The Saturday-night institution: highlights of all afternoon Bundesliga games, with 3rd-division reports from around 18:00. Currently on summer break – the 2026/27 season starts in August.",
   stream:"sportschau.de / ARD Mediathek", url:"https://www.sportschau.de/"},
  {id:"sportschau-so", day:"Sonntag, 30.08.2026", time:"18:00", name:"Sportschau am Sonntag", ch:"Das Erste (ARD)", icon:"⚽", kind:"highlights",
   when_de:"Sonntags · 18:00 (Saison)", when_en:"Sundays · 18:00 (in season)",
   desc_de:"Die Sonntagsausgabe fasst die Bundesliga-Sonntagsspiele zusammen und blickt auf das Spieltags-Geschehen zurück.",
   desc_en:"The Sunday edition rounds up the Sunday Bundesliga games and reviews the matchday.",
   stream:"ARD Mediathek", url:"https://www.sportschau.de/"},
  {id:"sportstudio", day:"Samstag, 29.08.2026", time:"23:00", name:"das aktuelle sportstudio", ch:"ZDF", icon:"🥅", kind:"magazin",
   when_de:"Samstags · ab 23:00 (Stream ab 22:30)", when_en:"Saturdays · from 23:00 (stream 22:30)",
   desc_de:"Seit 1963 das Kult-Sportmagazin am Samstagabend: Bundesliga-Highlights, Analysen, prominente Gäste und das legendäre Torwandschießen. Während der WM als „sportstudio live“ im WM-Modus.",
   desc_en:"The cult Saturday-night sports magazine since 1963: Bundesliga highlights, analysis, celebrity guests and the legendary Torwand shootout. During the World Cup it runs as 'sportstudio live'.",
   stream:"sportstudio.de / ZDF Mediathek", url:"https://www.zdf.de/sport/das-aktuelle-sportstudio"},
  {id:"doppelpass", day:"Sonntag, 30.08.2026", time:"11:00", name:"Der CHECK24 Doppelpass", ch:"SPORT1", icon:"🗣️", kind:"talk",
   when_de:"Sonntags · 11:00–13:30 (Saison)", when_en:"Sundays · 11:00–13:30 (in season)",
   desc_de:"Deutschlands bekanntester Fußball-Stammtisch: Moderator und Experten diskutieren die heißesten Themen des Bundesliga-Wochenendes, dazu Highlight-Szenen des Spieltags.",
   desc_en:"Germany's best-known football talk show: host and pundits debate the hottest topics of the Bundesliga weekend, with matchday highlight clips.",
   stream:"sport1.de", url:"https://www.sport1.de/news/doppelpass/info"},
  {id:"vor-acht", day:"Freitag, 28.08.2026", time:"19:55", name:"Sportschau vor acht", ch:"Das Erste (ARD)", icon:"📅", kind:"vorbericht",
   when_de:"Werktags · vor der Tagesschau (Saison)", when_en:"Weekdays · before the 8pm news (in season)",
   desc_de:"Kurzer Sport-Ausblick vor der 20-Uhr-Tagesschau – freitags mit Vorschau auf den anstehenden Bundesliga-Spieltag.",
   desc_en:"A short sports preview before the 8pm news – on Fridays with an outlook on the upcoming Bundesliga matchday.",
   stream:"ARD Mediathek", url:"https://www.sportschau.de/"},
  {id:"ran", day:"Samstag, 22.08.2026", time:"19:45", name:"ran Fußball – Supercup & DFB-Pokal", ch:"SAT.1", icon:"🏆", kind:"live",
   when_de:"Bei ausgewählten Spielen", when_en:"At selected matches",
   desc_de:"Unter dem „ran“-Label zeigt SAT.1 im Free-TV ausgewählte Top-Spiele wie den Supercup (22.08.2026, Dortmund – Bayern) und das DFB-Pokal-Finale – jeweils mit ausführlicher Vorberichterstattung.",
   desc_en:"Under the 'ran' brand, SAT.1 shows selected top matches free-to-air, such as the Supercup (22 Aug 2026, Dortmund vs Bayern) and the German Cup final – each with extensive pre-match coverage.",
   stream:"ran.de / Joyn", url:"https://www.ran.de/"}
];

const FORMATS_OD = [
  {id:"kicker-wmdaily", od:true, name:"kicker WM-Daily", ch:"kicker", icon:"\uD83C\uDFA7", kind:"podcast",
   when_de:"T\u00e4glich \u00b7 6:00 Uhr (bis 19.07.)", when_en:"Daily \u00b7 6:00 (until 19 Jul)",
   desc_de:"Der t\u00e4gliche WM-Podcast der kicker-Redaktion: In rund 15 Minuten ordnet das Team jeden Morgen die Spiele der Nacht und die wichtigsten Themen des Turniers ein.",
   desc_en:"kicker's daily World Cup podcast: every morning the team sorts through the night's games and the key tournament topics in around 15 minutes.",
   stream:"Spotify / Apple Podcasts / kicker", url:"https://www.kicker.de/"},
  {id:"kicker-dazn", od:true, name:"kicker meets DAZN", ch:"kicker & DAZN", icon:"\uD83C\uDFA7", kind:"podcast",
   when_de:"Montags \u00b7 Bundesliga-Spieltag", when_en:"Mondays \u00b7 Bundesliga matchday",
   desc_de:"Der Bundesliga-Podcast f\u00fcr alle Fans: kicker-Redakteure und das DAZN-Team analysieren jeden Montag die Highlights des Spieltags \u2013 mit Interviews und einer Portion Streitkultur.",
   desc_en:"The Bundesliga podcast for fans: kicker editors and the DAZN team break down the matchday highlights every Monday, with interviews and plenty of debate.",
   stream:"Spotify / Apple Podcasts", url:"https://www.kicker.de/"},
  {id:"sportschau-wm", od:true, name:"Wir Weltmeister.", ch:"Sportschau (ARD)", icon:"\uD83C\uDFA7", kind:"podcast",
   when_de:"W\u00f6chentlich \u00b7 ARD Audiothek", when_en:"Weekly \u00b7 ARD Audiothek",
   desc_de:"Der Fu\u00dfball-Podcast der Sportschau rund um die Nationalmannschaft und die gro\u00dfen Turniere \u2013 mit Reportern, Experten und Geschichten hinter den Spielen.",
   desc_en:"The Sportschau football podcast around the national team and the big tournaments \u2013 with reporters, experts and the stories behind the games.",
   stream:"ARD Audiothek / Spotify", url:"https://www.sportschau.de/"},
  {id:"bohndesliga", od:true, name:"Bohndesliga", ch:"Rocket Beans \u00b7 YouTube", icon:"\u25B6\uFE0F", kind:"video",
   when_de:"W\u00f6chentlich \u00b7 YouTube (Saison)", when_en:"Weekly \u00b7 YouTube (in season)",
   desc_de:"Das Bundesliga-Videoformat von Rocket Beans: Nils Bomhoff, Etienne Gard\u00e9 und Tobias Escher nehmen den Spieltag taktisch und mit viel Meinung auseinander \u2013 floskelarm und diskussionsfreudig.",
   desc_en:"Rocket Beans' Bundesliga video show: the hosts dissect the matchday tactically and with strong opinions \u2013 low on clich\u00e9s, high on debate.",
   stream:"YouTube", url:"https://www.youtube.com/@Bohndesliga"},
  {id:"luppen", od:true, name:"Einfach mal Luppen", ch:"Toni & Felix Kroos", icon:"\uD83C\uDFA7", kind:"podcast",
   when_de:"W\u00f6chentlich \u00b7 Podcast", when_en:"Weekly \u00b7 podcast",
   desc_de:"Toni und Felix Kroos plaudern aus dem N\u00e4hk\u00e4stchen des Profifu\u00dfballs \u2013 pers\u00f6nliche Einblicke, Anekdoten und klare Meinungen zu den aktuellen Themen.",
   desc_en:"Toni and Felix Kroos chat from inside professional football \u2013 personal insights, anecdotes and clear opinions on current topics.",
   stream:"Spotify / YouTube", url:"https://www.youtube.com/@einfachmalluppen"}
];

const FOLLOW = new Set();   // gefolgte Teams (jetzt mit localStorage-Persistenz)

/* ---------- Persistenz: funktionaler localStorage (kein Tracking) ---------- */
const LS_OK=(function(){ try{ const k="tvf:v1:__t"; localStorage.setItem(k,"1"); localStorage.removeItem(k); return true; }catch(e){ return false; } })();
const LS_KEY={ follow:"tvf:v1:follow", filters:"tvf:v2:filters", lang:"tvf:v1:lang", theme:"tvf:v1:theme", geo:"tvf:v1:geo", market:"tvf:v1:market" };
function lsGet(k){ if(!LS_OK) return null; try{ return localStorage.getItem(k); }catch(e){ return null; } }
function lsSet(k,v){ if(!LS_OK) return; try{ localStorage.setItem(k,v); }catch(e){} }
function saveFollow(){ lsSet(LS_KEY.follow, JSON.stringify([...FOLLOW])); }
function saveFilters(){ lsSet(LS_KEY.filters, JSON.stringify([...LIVE_SEL])); }
/* Standardfilter je Land: CL, EL, alle WM-Spiele + nationale Liga(en) & nationaler Pokal (sofern vorhanden) */
function countryDefaultCats(cc){
  const base=["wm","cl","el"];
  const NAT={ DE:["bl","bl2","bl3","dfb"], UK:["pl","facup"], FR:["l1"], IT:["it"], ES:["es"] };
  return base.concat(NAT[cc]||[]);
}
function applyCountryDefaultFilter(){ if(FILTER_USERSET) return; LIVE_SEL.clear(); /* Standard: "Alle" (kein Vorfilter) */ }
function saveLang(){ lsSet(LS_KEY.lang, JSON.stringify(LANG)); }
function loadPersisted(){
  try{ const raw=lsGet(LS_KEY.follow); if(raw!==null){ const a=JSON.parse(raw); if(Array.isArray(a)){ FOLLOW.clear(); a.forEach(x=>FOLLOW.add(x)); } } }catch(e){}
  try{ const raw=lsGet(LS_KEY.filters); if(raw!==null){ const a=JSON.parse(raw); if(Array.isArray(a)){ LIVE_SEL.clear(); a.forEach(x=>LIVE_SEL.add(x)); FILTER_USERSET=true; if(LIVE_SEL.has("wm")){ LIVE_SEL.delete("wm"); } ["tonight","format","bl2","bl3","el","facup","test"].forEach(function(k){ LIVE_SEL.delete(k); }); } } }catch(e){}
  try{ const raw=lsGet(LS_KEY.lang); if(raw!==null){ const v=JSON.parse(raw); if(v==="de"||v==="en"){ LANG=v; LANG_LOCKED=true; } } }catch(e){}
  try{ const raw=lsGet(LS_KEY.market); if(raw!==null){ const v=JSON.parse(raw); if(typeof v==="string"&&v){ COUNTRY=v; MARKET_LOCKED=true; } } }catch(e){}
}
const ABO_SEL = {};         // im Abo-Rechner gewählte Wettbewerbe (id -> true)

/* =========================================================================
   ABO-RECHNER · Anbieter-, Preis- & Rechte-Daten   (Markt: Deutschland)
   ▸ EINZIGE Quelle für den Rechner — hier Preise/Rechte pflegen.
   ▸ price = günstigster regulärer Einstieg pro Monat (ca.), Stand Juni 2026.
     DAZN 34,99 (Jahresabo) · Sky/WOW 29,99 · MagentaSport 9,95 ·
     Prime 8,99 · RTL+ 6,99 · ARD/ZDF beitragsfinanziert = 0.
   ▸ AFFILIATE: Das Feld "aff" ist ein Platzhalter und greift NUR, wenn
     AFFILIATE_ENABLED = true. Default AUS -> es werden neutrale url-Links genutzt.
   ========================================================================= */
const AFFILIATE_ENABLED = false; // Feature-Flag: Affiliate-Links AUS (Standard)

/* =========================================================================
   LIVE-SCORES (ESPN, keyless, graceful fallback)
   - Zeigt Ergebnis + Minute + Status in bestehende Karten; ergaenzt nur,
     ersetzt nie. Bei Fehler/CORS/Timeout: still nichts tun.
   - LIVE_SOURCE als Konstante -> spaeter Cloudflare-Worker-Proxy moeglich,
     ohne Codeaenderung. LIVE_LEAGUE="ger.1" fuer die Bundesliga-Saison.
   ========================================================================= */
const LIVE_ENABLED = true;
/* cat/comp -> ESPN-Liga-Slug (kostenlose ESPN-Scoreboard-API, kein Key noetig) */
function espnLeagueFor(m){ var c=m.cat;
  if(c==="cl") return /Quali/.test(m.comp||"") ? "uefa.champions_qual" : "uefa.champions";
  if(c==="el") return /Quali/.test(m.comp||"") ? "uefa.europa_qual" : "uefa.europa";
  if(c==="ecl") return /Quali/.test(m.comp||"") ? "uefa.europa.conf_qual" : "uefa.europa.conf";
  return ({wm:"fifa.world",bl:"ger.1",bl2:"ger.2",bl3:"ger.3",dfb:"ger.dfb_pokal",pl:"eng.1",facup:"eng.fa",it:"ita.1",es:"esp.1",l1:"fra.1",test:"club.friendly"})[c]||null; }
/* nur die Ligen abfragen, die heute (+/-1 Tag) ein Spiel haben -> spart Requests */
function liveLeaguesToday(){ var tk=todayKeyNow(), set={}; for(var i=0;i<MATCHES.length;i++){ var m=MATCHES[i]; if(m.tba) continue; var re=/(\d{2})\.(\d{2})\.(\d{4})/g,x,hit=false; while((x=re.exec(String(m.day)))){ var k=(+x[3])*10000+(+x[2])*100+(+x[1]); if(k>=tk-1&&k<=tk+1){ hit=true; break; } } if(!hit) continue; var lg=espnLeagueFor(m); if(lg) set[lg]=true; } return Object.keys(set); }
function liveSources(){ return liveLeaguesToday().map(function(lg){ return "https://site.api.espn.com/apis/site/v2/sports/soccer/"+lg+"/scoreboard"; }); }
const LIVE_POLL_MS = 45000;
const LIVE_ALIAS = {
  "Ivory Coast":"Elfenbeinküste","Côte d'Ivoire":"Elfenbeinküste","Cote d'Ivoire":"Elfenbeinküste",
  "Netherlands":"Niederlande","Germany":"Deutschland","Morocco":"Marokko","Sweden":"Schweden",
  "South Africa":"Südafrika","Canada":"Kanada","Norway":"Norwegen","France":"Frankreich",
  "Mexico":"Mexiko","Belgium":"Belgien","Spain":"Spanien","Austria":"Österreich",
  "Brazil":"Brasilien","Switzerland":"Schweiz","Algeria":"Algerien","Australia":"Australien",
  "Egypt":"Ägypten","Colombia":"Kolumbien","Croatia":"Kroatien","Argentina":"Argentinien",
  "DR Congo":"DR Kongo","Congo DR":"DR Kongo","Democratic Republic of the Congo":"DR Kongo",
  "United States":"USA","USA":"USA",
  "Bosnia and Herzegovina":"Bosnien-Herzegowina","Bosnia & Herzegovina":"Bosnien-Herzegowina",
  "Bosnia-Herzegovina":"Bosnien-Herzegowina","Bosnien-H.":"Bosnien-Herzegowina",
  "Cape Verde":"Kap Verde","Cabo Verde":"Kap Verde","Qatar":"Katar","Saudi Arabia":"Saudi-Arabien",
  "Uzbekistan":"Usbekistan","Turkey":"Türkei","Türkiye":"Türkei","South Korea":"Südkorea",
  "Italy":"Italien","England":"England","Senegal":"Senegal","Ghana":"Ghana","Japan":"Japan",
  "Paraguay":"Paraguay","Ecuador":"Ecuador","Portugal":"Portugal","Iran":"Iran","Curaçao":"Curaçao",
  "Vardar":"Vardar Skopje","Iberia 1999":"Iberia Tiflis","Flora":"Flora Tallinn","Inter D'Escaldes":"Inter Escaldes","Györi ETO FC":"ETO Győr","Vikingur Reykjavik":"Víkingur Reykjavík","Sabah FK":"Sabah FC","Drita Gjilan":"FC Drita","Kauno Zalgiris":"Kauno Žalgiris","Larne":"Larne FC","Floriana FC":"Floriana","Sutjeska":"Sutjeska Nikšić","Klaksvik":"KÍ Klaksvík","KI Klaksvik":"KÍ Klaksvík","FK Vitebsk":"Vitebsk","U Craiova":"Universitatea Craiova","Petrocub Hincesti":"Petrocub","Egnatia Rrogozhine":"Egnatia","FK Qarabag":"Qarabağ Agdam","Qarabag":"Qarabağ Agdam","Dynamo Kyiv":"Dynamo Kiew","CSKA Sofia":"ZSKA Sofia","MSK Zilina":"MSK Žilina","Zilina":"MSK Žilina","Ferencvaros":"Ferencváros","Ferencvarosi TC":"Ferencváros",
  "Bayern Munich":"FC Bayern München","Bayer Leverkusen":"Bayer 04 Leverkusen","Borussia Monchengladbach":"Borussia Mönchengladbach","Werder Bremen":"SV Werder Bremen","Union Berlin":"1. FC Union Berlin","FC Cologne":"1. FC Köln","1. FC Koln":"1. FC Köln","Cologne":"1. FC Köln","Mainz":"1. FSV Mainz 05","Mainz 05":"1. FSV Mainz 05","Schalke 04":"FC Schalke 04","Hamburg":"Hamburger SV","Paderborn":"SC Paderborn 07","1899 Hoffenheim":"TSG Hoffenheim","Hoffenheim":"TSG Hoffenheim","Elversberg":"SV Elversberg","Inter Milan":"Inter Mailand","Internazionale":"Inter Mailand","AC Milan":"AC Mailand","Juventus":"Juventus Turin","Napoli":"SSC Neapel","AS Roma":"AS Rom","Roma":"AS Rom","Lazio":"Lazio Rom","Atalanta":"Atalanta Bergamo","Fiorentina":"AC Florenz","Bologna":"FC Bologna","Torino":"FC Turin","Genoa":"CFC Genua","Como":"Como 1907","Udinese":"Udinese Calcio","Cagliari":"Cagliari Calcio","Parma":"Parma Calcio","Lecce":"US Lecce","Sassuolo":"US Sassuolo","Venezia":"FC Venedig","Monza":"AC Monza","Barcelona":"FC Barcelona","Atletico Madrid":"Atlético Madrid","Athletic Club":"Athletic Bilbao","Real Betis":"Betis Sevilla","Villarreal":"FC Villarreal","Valencia":"FC Valencia","Sevilla":"FC Sevilla","Espanyol":"Espanyol Barcelona","Getafe":"FC Getafe","Osasuna":"CA Osasuna","Elche":"FC Elche","Levante":"UD Levante","Alaves":"Deportivo Alavés","Celta Vigo":"Celta Vigo","Marseille":"Olympique Marseille","Lyon":"Olympique Lyon","Lille":"OSC Lille","Nice":"OGC Nizza","Monaco":"AS Monaco","Lens":"RC Lens","Strasbourg":"RC Straßburg","Rennes":"Stade Rennes","Brest":"Stade Brest","Toulouse":"FC Toulouse","Auxerre":"AJ Auxerre","Angers":"SCO Angers","Le Havre":"Le Havre AC","Lorient":"FC Lorient","Liverpool":"FC Liverpool","Chelsea":"FC Chelsea","Arsenal":"FC Arsenal","Everton":"FC Everton","Fulham":"FC Fulham","Brentford":"FC Brentford","Leeds United":"Leeds United","Sunderland":"AFC Sunderland","Bournemouth":"AFC Bournemouth","Brighton & Hove Albion":"Brighton & Hove Albion","Brighton":"Brighton & Hove Albion",
  "Rapid Vienna":"SK Rapid Wien","SK Rapid Vienna":"SK Rapid Wien",
  "Mjallby":"Mjällby AIF","Mjallby AIF":"Mjällby AIF","Red Star Belgrade":"Crvena Zvezda","Sabah FK":"Sabah FC","KI Klaksvik":"KÍ Klaksvík","Kauno Zalgiris":"Kauno Žalgiris","AGF":"Aarhus GF","AGF Aarhus":"Aarhus GF","Lech Poznan":"Lech Posen","CSU Craiova":"Universitatea Craiova","Omonia Nicosia":"Omonia Nikosia","Fenerbahce":"Fenerbahçe","Gornik Zabrze":"Górnik Zabrze","SK Sturm Graz":"Sturm Graz","Heart of Midlothian FC":"Heart of Midlothian","Hapoel Be'er":"Hapoel Be'er Sheva","Vikingur Reykjavik":"Víkingur Reykjavík","Iberia 1999":"Iberia Tiflis","Larne":"Larne FC",
  "CSKA Sofia":"ZSKA Sofia","FK Qarabag":"Qarabağ Agdam","Qarabag":"Qarabağ Agdam","PAOK Salonika":"PAOK Saloniki","Dynamo Kyiv":"Dynamo Kiew","Anderlecht":"RSC Anderlecht","Maccabi Tel-Aviv":"Maccabi Tel Aviv","FC Hradec Králové":"Hradec Králové","Hradec Kralove":"Hradec Králové","Tromso":"Tromsø IL","Ferencvaros":"Ferencváros","FC Twente":"Twente Enschede","Benfica":"Benfica Lissabon","St. Gallen":"FC St. Gallen","Pafos":"Pafos FC","Besiktas JK":"Besiktas","LASK":"Linzer ASK","LASK Linz":"Linzer ASK","Fortuna Dusseldorf":"Fortuna Düsseldorf","Wrexham":"Wrexham AFC","Hamburg SV":"Hamburger SV","Sevilla FC":"FC Sevilla","Eintracht Frankfurt":"Eintracht Frankfurt","Waldhof Mannheim":"SV Waldhof Mannheim",
  "1860 Munich":"TSV 1860 München","Ajax":"Ajax Amsterdam","Aston Villa":"Aston Villa","Atletic Escaldes":"Atletic Escaldes","Aue":"FC Erzgebirge Aue","Augsburg":"FC Augsburg","Austria Vienna":"FK Austria Wien","BSC Young Boys":"BSC Young Boys","Basel":"FC Basel","Besiktas":"Besiktas","Betis":"Betis Sevilla","Bochum":"VfL Bochum","Braunschweig":"Eintracht Braunschweig","Brondby":"Brøndby IF","Burnley":"FC Burnley","Celtic":"Celtic Glasgow","Cerezo Osaka":"Cerezo Osaka","Club Brugge":"Club Brügge","Crystal Palace":"Crystal Palace","Darmstadt":"SV Darmstadt 98","Duisburg":"MSV Duisburg","Dukagjini":"KF Dukagjini","Dynamo Kiev":"Dynamo Kiew","FC Nordsjaelland":"FC Nordsjaelland","FC Porto":"FC Porto","FC Santa Coloma":"FC Santa Coloma","FC St Pauli":"FC St. Pauli","FK Austria Wien":"FK Austria Wien","FK Liepaja":"FK Liepaja","Fagiano Okayama":"Fagiano Okayama","Fenerbahce SK":"Fenerbahçe","Feyenoord":"Feyenoord Rotterdam","Freiburg":"SC Freiburg","GAIS":"GAIS Göteborg","Galatasaray":"Galatasaray","Genk":"KRC Genk","Girona":"FC Girona","Grasshoppers":"Grasshopper Zürich","Greuther Furth":"SpVgg Greuther Fürth","Hammarby":"Hammarby IF","Hannover 96":"Hannover 96","Hansa Rostock":"F.C. Hansa Rostock","Heidenheim":"1. FC Heidenheim","Hertha BSC":"Hertha BSC","Hertha Berlin":"Hertha BSC","Inter Escaldes":"Atletic Escaldes","Ipswich":"Ipswich Town","Ipswich Town":"Ipswich Town","Kaiserslautern":"1. FC Kaiserslautern","Karlsruhe":"Karlsruher SC","Karlsruher SC":"Karlsruher SC","Kickers Offenbach":"Kickers Offenbach","Leicester":"Leicester City","Leicester City":"Leicester City","Liepaja":"FK Liepaja","Lugano":"FC Lugano","Magdeburg":"1. FC Magdeburg","Mallorca":"RCD Mallorca","Malmo FF":"Malmö FF","Manchester City":"Manchester City","Manchester United":"Manchester United","Midtjylland":"FC Midtjylland","Molde":"Molde FK","Newcastle":"Newcastle United","Newcastle United":"Newcastle United","Nomme Kalju":"Nomme Kalju FC","Nordsjaelland":"FC Nordsjaelland","Nottingham Forest":"Nottingham Forest","Nuremberg":"1. FC Nürnberg","Nurnberg":"1. FC Nürnberg","Offenbach":"Kickers Offenbach","Olympique Lyonnais":"Olympique Lyon","PAOK":"PAOK Saloniki","PSV Eindhoven":"PSV Eindhoven","Paris Saint-Germain":"Paris Saint-Germain","Preussen Munster":"SC Preußen Münster","Rangers":"Glasgow Rangers","Rayo Vallecano":"Rayo Vallecano","Red Bull Salzburg":"RB Salzburg","Rosenborg":"Rosenborg BK","Rot-Weiss Essen":"Rot-Weiss Essen","Saarbrucken":"1. FC Saarbrücken","Salzburg":"RB Salzburg","Santa Coloma":"FC Santa Coloma","Servette":"Servette Genf","Shakhtar Donetsk":"Schachtar Donezk","Shelbourne":"FC Shelbourne","Sporting CP":"Sporting Lissabon","Sporting Lisbon":"Sporting Lissabon","St. Pauli":"FC St. Pauli","Standard Liege":"Standard Lüttich","Stoke":"Stoke City","Stoke City":"Stoke City","Sturm Graz":"Sturm Graz","Stuttgart":"VfB Stuttgart","Swansea":"Swansea City","Swansea City":"Swansea City","Tottenham Hotspur":"Tottenham Hotspur","Udinese Calcio":"Udinese Calcio","Vaduz":"FC Vaduz","VfL Bochum":"VfL Bochum","VfL Wolfsburg":"VfL Wolfsburg","Viktoria Koln":"FC Viktoria Köln","Wehen Wiesbaden":"SV Wehen Wiesbaden","West Ham":"West Ham United","West Ham United":"West Ham United","Wolfsberger AC":"Wolfsberger AC","Wolfsburg":"VfL Wolfsburg","Wolverhampton Wanderers":"Wolverhampton Wanderers","Young Boys":"BSC Young Boys",
  "1. FC Heidenheim 1846":"1. FC Heidenheim","1. FSV Mainz 05":"1. FSV Mainz 05","Alemannia Aachen":"Alemannia Aachen","Borussia Mönchengladbach":"Borussia Mönchengladbach","Eintracht Braunschweig":"Eintracht Braunschweig","FC Ingolstadt 04":"FC Ingolstadt 04","Fortuna Köln":"SC Fortuna Köln","Jahn Regensburg":"SSV Jahn Regensburg","Preußen Münster":"SC Preußen Münster","SV 07 Elversberg":"SV Elversberg","SV Darmstadt 98":"SV Darmstadt 98","SV Meppen":"SV Meppen","SpVgg Greuther Fürth":"SpVgg Greuther Fürth","TSG 1899 Hoffenheim II":"TSG Hoffenheim II","TSV Havelse":"TSV Havelse","VfB Stuttgart II":"VfB Stuttgart II","Viktoria Köln":"FC Viktoria Köln","Würzburger Kickers":"FC Würzburger Kickers",
  "DSC Arminia Bielefeld":"Arminia Bielefeld","SC Paderborn 07":"SC Paderborn",
  "Bodo/Glimt":"FK Bodø/Glimt","NEC":"NEC Nijmegen","Olympiacos":"Olympiakos Piräus","Sparta Prague":"Sparta Prag","Union St.-Gilloise":"Union Saint-Gilloise"
};
/* ===== Zweitquelle: OpenLigaDB (kostenlos, ohne Key, CORS offen) =====
   Greift nur fuer deutsche Wettbewerbe und nur dort, wo ESPN nichts liefert.
   Liefert Tore mit Minute/Schuetze, aber keine Karten und keine Spieluhr. */
const OLDB_LEAGUE = {bl:"bl1", bl2:"bl2", bl3:"bl3", dfb:"dfb"};
function liveOldbSources(){
  var tk=todayKeyNow(), set={};
  for(var i=0;i<MATCHES.length;i++){
    var m=MATCHES[i]; if(m.tba) continue;
    var sc=OLDB_LEAGUE[m.cat]; if(!sc) continue;
    var re=/(\d{2})\.(\d{2})\.(\d{4})/g, x, hit=false;
    while((x=re.exec(String(m.day)))){ var k=(+x[3])*10000+(+x[2])*100+(+x[1]); if(k>=tk-1&&k<=tk+1){ hit=true; break; } }
    if(hit) set[sc]=true;
  }
  return Object.keys(set).map(function(sc){ return "https://api.openligadb.de/getmatchdata/"+sc; });
}
function _oldbEntry(mm){
  try{
    var hn=liveNorm(mm.team1&&mm.team1.teamName), an=liveNorm(mm.team2&&mm.team2.teamName);
    if(!hn||!an) return null;
    var koMs=Date.parse(mm.matchDateTimeUTC||mm.matchDateTime||"");
    if(!koMs) return null;
    var now=Date.now(), state;
    if(mm.matchIsFinished) state="post";
    else if(now>=koMs && now<koMs+3.5*3600000) state="in";
    else state=(now>=koMs)?"post":"pre";
    var goals=(mm.goals||[]), evs=[], ph=0, pa=0, hs="0", as="0";
    for(var i=0;i<goals.length;i++){
      var g=goals[i], gh=+g.scoreTeam1, ga=+g.scoreTeam2;
      var side=(gh>ph)?"h":((ga>pa)?"a":"");
      if(g.isOwnGoal && side) side=(side==="h")?"a":"h";   /* Name steht beim Spieler, nicht beim Nutznießer */
      ph=gh; pa=ga; hs=String(gh); as=String(ga);
      evs.push({t:"goal", min:(g.matchMinute?String(g.matchMinute)+"'":""), who:g.goalGetterName||"", side:side, og:!!g.isOwnGoal, pen:!!g.isPenalty});
    }
    var res=(mm.matchResults||[]);
    for(var r=0;r<res.length;r++){ if(res[r].resultTypeID===2){ hs=String(res[r].pointsTeam1); as=String(res[r].pointsTeam2); } }
    return {key:livePairKey(hn,an)+"@"+_berlinKey(koMs),
            val:{state:state, id:String(mm.matchID||""), hn:hn, an:an, hs:hs, as:as, clock:"", half:false, hyd:false, events:evs, src:"oldb"}};
  }catch(e){ return null; }
}
let LIVE_CACHE = {};
let _livePoll = null, _liveBusy = false;
function liveNorm(s){ s=String(s||"").trim(); return LIVE_ALIAS[s]||s; }
function livePairKey(a,b){ return [a,b].sort().join("~"); }
function _berlinKey(ms){ try{ var p=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Berlin",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(ms)); var o={}; p.forEach(function(x){ o[x.type]=x.value; }); return (+o.year)*10000+(+o.month)*100+(+o.day); }catch(e){ return 0; } }
function liveKey(m){ return livePairKey(liveNorm(m.h),liveNorm(m.a))+"@"+dayKey(m.day); }
function _liveAnyMatchedIn(){ for(var i=0;i<MATCHES.length;i++){ var m=MATCHES[i]; if(m.tba) continue; var d=LIVE_CACHE[liveKey(m)]; if(d&&d.state==="in") return true; } return false; }
function liveSchedule(){ if(!LIVE_ENABLED) return; if(_liveAnyMatchedIn()){ if(!_livePoll) _livePoll=setInterval(liveFetch, LIVE_POLL_MS); } else if(_livePoll){ clearInterval(_livePoll); _livePoll=null; } }
function liveBadge(d, hs, as){ var de=(LANG==="de"); if(d.state==="in"){ var clk=d.clock?('<span class="lv-min">'+esc(d.clock)+'</span>'):""; return '<span class="lv-score">'+esc(hs)+':'+esc(as)+'</span>'+clk+'<span class="lv-badge live">LIVE</span>'; } if(d.state==="post"){ return '<span class="lv-score">'+esc(hs)+':'+esc(as)+'</span><span class="lv-badge done">'+(de?"Ende":"FT")+'</span>'; } return ""; }
function liveApplyDOM(){ if(!LIVE_ENABLED) return; try{ var els=document.querySelectorAll("[data-live]"); for(var i=0;i<els.length;i++){ var el=els[i]; var d=LIVE_CACHE[el.getAttribute("data-live")]; var clk=el.parentNode?el.parentNode.querySelector(".time-clock"):null; if(!d||d.state==="pre"){ el.innerHTML=""; if(clk) clk.style.display=""; continue; } var home=el.getAttribute("data-lh"); var hs=(d.hn===home)?d.hs:d.as, as=(d.hn===home)?d.as:d.hs; el.innerHTML=liveBadge(d,hs,as); if(clk) clk.style.display="none"; } try{liveApplyTicker();}catch(_e){} }catch(e){} }
function _lvMin(mn){ var m=String(mn||"").match(/\d+/); return m?+m[0]:9999; }
/* Spielername kompakt: kuerzt lange Vornamen ab, statt den Namen abzuschneiden */
function _lvtWho(n){
  n=String(n||"").trim(); if(n.length<=14) return n;
  var p=n.split(/\s+/); if(p.length<2) return n;
  var PART={"van":1,"von":1,"de":1,"del":1,"della":1,"der":1,"den":1,"di":1,"da":1,"dos":1,"do":1,"la":1,"le":1,"el":1,"al":1,"bin":1,"ben":1,"mac":1,"mc":1};
  var i=p.length-1, last=p[i];
  while(i-1>=1 && PART[String(p[i-1]).toLowerCase().replace(/[^a-z\u00e4\u00f6\u00fc\u00df]/g,"")]){ last=p[i-1]+" "+last; i--; }
  var out=p[0].charAt(0).toUpperCase()+". "+last;
  if(out.length>18){ var bare=p[p.length-1]; if(bare.length<out.length) out=bare; }
  return out.length<n.length ? out : n;
}
/* Teamname als Achsenbeschriftung: kurz und wiedererkennbar */
function _lvtTeam(n){
  n=String(n||"").trim(); if(!n) return "";
  if(n.length<=13) return n;
  var w=n.replace(/\b(1\.|FC|SV|SK|SC|VfL|VfB|TSG|TSV|RB|AS|AC|SS|SSC|FK|NK|MSK|KF|BSC|AFC|CF|CD|UD|RC|US|SG|CFC|AJ|OGC|OSC|II|04|05|07|09|1907|1911|1921|1999)\b/gi,"").trim().split(/\s+/).filter(Boolean);
  var best=w.length?w.reduce(function(x,y){ return y.length>=x.length?y:x; },""):n;
  return best.length>13 ? best.slice(0,12)+"\u2026" : best;
}
function renderLiveTicker(d,home){
  var de=(LANG==="de");
  var live=(d.state==="in"), post=(d.state==="post");
  var away=(d.hn===home)?d.an:d.hn;

  /* --- Achse statt Score-Kopf: Score/Minute/LIVE stehen bereits in der Zeile darueber.
         Hier zaehlt nur, welche Spalte zu welchem Team gehoert. --- */
  var mid="";
  if(live && (d.half||d.hyd)){
    var pauseLbl = d.hyd ? (de?"Trinkpause":"Cooling break") : (de?"Halbzeit":"Half-time");
    mid='<span class="lvt-pill pause"><span class="lvt-dot"></span>'+esc(pauseLbl)+'</span>';
  }
  var axis='<div class="lvt-axis">'
    +'<span class="lvt-ax home"><b>'+esc(_lvtTeam(home))+'</b><i class="lvt-axb">'+flag(home)+'</i></span>'
    +'<span class="lvt-mid">'+mid+'</span>'
    +'<span class="lvt-ax away"><i class="lvt-axb">'+flag(away)+'</i><b>'+esc(_lvtTeam(away))+'</b></span>'
    +'</div>';

  /* --- Fortschrittsleiste (nur laufendes Spiel) --- */
  var prog="";
  if(live){
    var mnum=parseInt(String(d.clock||"").replace(/[^0-9]/g,""),10);
    if(d.half) mnum=45;
    if(isFinite(mnum) && mnum>0){
      var pct=Math.max(4, Math.min(100, Math.round(mnum/90*100)));
      prog='<div class="lvt-prog" role="img" aria-label="'+esc((de?"Spielminute ":"Minute ")+mnum)+'"><i style="width:'+pct+'%"></i><span></span></div>';
    }
  }

  /* --- Ereignisse --- */
  var evs=(d.events||[]).slice().sort(function(a,b){ return _lvMin(a.min)-_lvMin(b.min); });
  var hg=0, ag=0, rows="", lastHalf=0;
  var brk='<div class="lvt-break"><span>'+(de?"Halbzeit":"Half-time")+'</span></div>';
  evs.forEach(function(e,idx){
    var mn=_lvMin(e.min), half=(mn>45&&mn<9999)?2:1;
    if(half===2 && lastHalf===1){ rows+=brk; }
    lastHalf=half;
    var run="";
    if(e.t==="goal"){ var sc=e.og?(e.side==="h"?"a":"h"):e.side; if(sc==="h") hg++; else if(sc==="a") ag++; run='<span class="lvt-run">'+hg+':'+ag+'</span>'; }
    var isHome=(e.side!=="a");
    var icon = e.t==="goal" ? '<span class="lvt-ic goal">\u26bd</span>' : '<span class="lvt-ic"><span class="lvt-card '+(e.t==="red"?"red":"yellow")+'"></span></span>';
    var tags=[]; if(e.t==="goal"){ if(e.og) tags.push(de?"ET":"OG"); if(e.pen) tags.push(de?"FE":"Pen"); }
    var tag = tags.length?(' <span class="lvt-tag">'+esc(tags.join(" "))+'</span>'):"";
    var name='<span class="lvt-who">'+esc(_lvtWho(e.who||""))+tag+'</span>';
    /* Zwischenstand immer innen an der Zeitachse -> laesst sich als Spalte lesen */
    var content = isHome ? (name+icon+run) : (run+icon+name);
    var cls='lvt-row '+e.t+((live && idx===evs.length-1)?' is-last':'');
    rows+='<div class="'+cls+'"><div class="lvt-cell left">'+(isHome?content:"")+'</div><div class="lvt-node"><span class="lvt-min">'+esc(e.min||"")+'</span></div><div class="lvt-cell right">'+(isHome?"":content)+'</div></div>';
  });
  if(live && d.half && lastHalf!==2){ rows+=brk; }
  var emptyTxt = live ? (de?"L\u00e4uft \u2013 noch keine Tore oder Karten.":"Under way \u2013 no goals or cards yet.")
                      : (de?"Keine Tore, keine Karten.":"No goals or cards.");
  var body = rows ? ('<div class="lvt-timeline">'+rows+'</div>') : ('<div class="lvt-empty">'+emptyTxt+'</div>');
  return axis+prog+body;
}
/* Anstoss als Zeitstempel (Spielzeiten sind Berliner Zeit, Nutzer koennen anderswo sitzen) */
function _koMs(day,time){
  try{
    var dm=String(day||"").match(/(\d{2})\.(\d{2})\.(\d{4})/), tm=String(time||"").match(/(\d{1,2}):(\d{2})/);
    if(!dm||!tm) return 0;
    var y=+dm[3], mo=+dm[2], d=+dm[1], hh=+tm[1], mi=+tm[2];
    var probe=new Date(Date.UTC(y,mo-1,d,12,0,0));
    var h=+new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Berlin",hour:"2-digit",hour12:false}).format(probe);
    var off=h-12; if(off<0||off>3) off=2;
    return Date.UTC(y,mo-1,d,hh-off,mi,0);
  }catch(e){ return 0; }
}
/* Ehrlicher Hinweis, wenn unsere Live-Quelle ein angepfiffenes Spiel nicht abdeckt */
/* Erster Sender/Stream des Spiels als Rettungsanker im Hinweis */
function _lvSrcAttr(m){
  try{
    var tv=m.tv||{}, list=tv[COUNTRY]||tv.DE||tv.AT||tv.CH||[];
    for(var i=0;i<list.length;i++){ if(list[i]&&list[i].u&&list[i].n) return ' data-lvsn="'+esc(list[i].n)+'" data-lvsu="'+esc(list[i].u)+'"'; }
  }catch(e){}
  return "";
}
function liveNoDataNote(el){
  var ko=+(el.getAttribute("data-lvko")||0); if(!ko) return "";
  var now=Date.now(); if(now < ko+90000 || now > ko+5*3600000) return "";
  var de=(LANG==="de");
  var sn=el.getAttribute("data-lvsn"), su=el.getAttribute("data-lvsu");
  var link = (sn&&su) ? ('<a class="lvt-nd-link" href="'+su+'" target="_blank" rel="noopener">'+(de?"Live bei ":"Watch on ")+sn+' \u2197</a>') : "";
  return '<div class="lvt-nodata"><span class="lvt-nd-ic">\u26A1</span><span>'+(de
    ? "Zu diesem Spiel liefert unsere Live-Quelle keine Daten \u2013 Ergebnis und Analyse folgen nach Abpfiff unter Highlights."
    : "Our live data source doesn\u2019t cover this match \u2013 result and analysis will follow under Highlights after the final whistle.")+link+'</span></div>';
}
function liveApplyTicker(){
  try{ var els=document.querySelectorAll("[data-lvt]"); for(var i=0;i<els.length;i++){ var el=els[i]; var d=LIVE_CACHE[el.getAttribute("data-lvt")]; var home=el.getAttribute("data-lh"); el.innerHTML=(d&&d.state&&d.state!=="pre")?renderLiveTicker(d,home):liveNoDataNote(el); } }catch(e){}
}
async function liveFetch(){ if(!LIVE_ENABLED||_liveBusy) return; _liveBusy=true; var ac=new AbortController(); var to=setTimeout(function(){ try{ ac.abort(); }catch(e){} }, 8000); try{ var srcs=liveSources(); var osrcs=liveOldbSources(); if(!srcs.length&&!osrcs.length){ if(_livePoll){clearInterval(_livePoll);_livePoll=null;} if(Object.keys(LIVE_CACHE).length){ LIVE_CACHE={}; try{liveApplyDOM();}catch(_e){} } return; } var jsons=await Promise.all(srcs.map(function(src){ return fetch(src,{signal:ac.signal,cache:"no-store"}).then(function(r){ return (r&&r.ok)?r.json():null; }).catch(function(){ return null; }); })); var evs=[]; jsons.forEach(function(j){ if(j&&j.events&&j.events.length) evs=evs.concat(j.events); }); var next={}; for(var i=0;i<evs.length;i++){ try{ var ev=evs[i]; var comp=ev.competitions&&ev.competitions[0]; if(!comp) continue; var cs=comp.competitors||[]; if(cs.length<2) continue; var home=null,away=null; for(var k=0;k<cs.length;k++){ if(cs[k].homeAway==="home") home=cs[k]; else if(cs[k].homeAway==="away") away=cs[k]; } if(!home||!away) continue; var hn=liveNorm(home.team&&home.team.displayName), an=liveNorm(away.team&&away.team.displayName); if(!hn||!an) continue; var st=ev.status&&ev.status.type&&ev.status.type.state; var _stt=(ev.status&&ev.status.type)||{}; var _stn=String(_stt.name||""); var _std=String(_stt.description||_stt.detail||_stt.shortDetail||""); var _half=/HALFTIME/i.test(_stn)||/halftime|half.?time|halbzeit/i.test(_std); var _hyd=/(cooling|hydration|drinks)\s*break|trinkpause|k\u00fchlungspause/i.test(_std); var _hid=(home.team&&home.team.id), _aid=(away.team&&away.team.id); var _evts=[]; var _det=(comp.details||[]); for(var _di=0;_di<_det.length;_di++){ try{ var _d=_det[_di]; var _min=(_d.clock&&_d.clock.displayValue)||""; var _tid=(_d.team&&_d.team.id)||""; var _side=(_tid&&_hid&&_tid===_hid)?"h":((_tid&&_aid&&_tid===_aid)?"a":""); var _who=(_d.athletesInvolved&&_d.athletesInvolved[0]&&(_d.athletesInvolved[0].displayName||_d.athletesInvolved[0].shortName))||""; if(_d.scoringPlay){ _evts.push({t:"goal",min:_min,who:_who,side:_side,og:!!_d.ownGoal,pen:!!_d.penaltyKick}); } else if(_d.redCard){ _evts.push({t:"red",min:_min,who:_who,side:_side}); } else if(_d.yellowCard){ _evts.push({t:"yellow",min:_min,who:_who,side:_side}); } }catch(_e){} } var key=livePairKey(hn,an)+"@"+_berlinKey(Date.parse(ev.date)); next[key]={ state:st, id:(ev.id||""), hn:hn, an:an, hs:(home.score!=null?String(home.score):""), as:(away.score!=null?String(away.score):""), clock:(ev.status&&ev.status.displayClock)||"", half:_half, hyd:_hyd, events:_evts }; }catch(e){} } if(osrcs.length){ var ojs=await Promise.all(osrcs.map(function(u){ return fetch(u,{signal:ac.signal,cache:"no-store"}).then(function(r){ return (r&&r.ok)?r.json():null; }).catch(function(){ return null; }); }));
   ojs.forEach(function(arr){ if(!arr||!arr.length) return; for(var i=0;i<arr.length;i++){ var e=_oldbEntry(arr[i]); if(e && e.val.state!=="pre" && !next[e.key]) next[e.key]=e.val; } }); }
 LIVE_CACHE=next; liveApplyDOM(); liveSchedule(); }catch(e){ /* graceful: Seite bleibt unveraendert */ } finally{ clearTimeout(to); _liveBusy=false; } }
/* ===== /LIVE-SCORES ===== */

const ABO_PROVIDERS = {
  ard_zdf:{name:"ARD / ZDF",          free:true,  price:0,     note:{de:"Beitragsfinanziert, frei empfangbar", en:"Licence-funded, free to air"}, url:"https://www.sportschau.de",        aff:""},
  magenta:{name:"MagentaTV",          free:false, price:9.95,  note:{de:"MagentaSport · WM-Paket separat",      en:"MagentaSport · WC package separate"}, url:"https://www.telekom.de/magenta-tv", aff:""},
  sky:    {name:"Sky / WOW",          free:false, price:29.99, note:{de:"WOW Live-Sport oder Sky Bundesliga",   en:"WOW Live-Sport or Sky Bundesliga"},   url:"https://www.wow.de",               aff:""},
  dazn:   {name:"DAZN",               free:false, price:34.99, note:{de:"Unlimited · Jahresabo",               en:"Unlimited · annual plan"},           url:"https://www.dazn.com",             aff:""},
  prime:  {name:"Amazon Prime Video", free:false, price:8.99,  note:{de:"in der Prime-Mitgliedschaft",          en:"part of Prime membership"},          url:"https://www.amazon.de/prime",      aff:""},
  rtl:    {name:"RTL+",               free:false, price:6.99,  note:{de:"RTL+ Premium",                        en:"RTL+ Premium"},                      url:"https://plus.rtl.de",              aff:""}
};
/* Wettbewerb -> Carrier · cov: "full" (zeigt alle Spiele) | "part" (nur Auswahl) */
const ABO_COMPS = [
  {id:"wm",   name:{de:"WM 2026",en:"World Cup 2026"},            carriers:[{p:"ard_zdf",cov:"part"},{p:"magenta",cov:"full"}]},
  {id:"bl",   name:{de:"Bundesliga",en:"Bundesliga"},            carriers:[{p:"sky",cov:"part"},{p:"dazn",cov:"part"}]},
  {id:"bl2",  name:{de:"2. Bundesliga",en:"2. Bundesliga"},      carriers:[{p:"sky",cov:"full"}]},
  {id:"dfb",  name:{de:"DFB-Pokal",en:"DFB-Pokal"},              carriers:[{p:"sky",cov:"full"},{p:"ard_zdf",cov:"part"}]},
  {id:"cl",   name:{de:"Champions League",en:"Champions League"},carriers:[{p:"dazn",cov:"full"},{p:"prime",cov:"part",req:false}]},
  {id:"el",   name:{de:"Europa League",en:"Europa League"},      carriers:[{p:"rtl",cov:"full"}]},
  {id:"ecl",  name:{de:"Conference League",en:"Conference League"},carriers:[{p:"rtl",cov:"full"}]},
  {id:"pl",   name:{de:"Premier League",en:"Premier League"},    carriers:[{p:"sky",cov:"full"}]},
  {id:"liga", name:{de:"La Liga",en:"La Liga"},                  carriers:[{p:"dazn",cov:"full"}]},
  {id:"sa",   name:{de:"Serie A",en:"Serie A"},                  carriers:[{p:"dazn",cov:"full"}]},
  {id:"l3",   name:{de:"3. Liga",en:"3. Liga"},                  carriers:[{p:"magenta",cov:"full"}]}
];

/* TODO (Backend/später, nicht im HTML-Prototyp):
   - Eigene Domain + Next.js + indexierbare Einzel-Spiel-Landingpages für SEO
     (z. B. /verein-a-gegen-verein-b-heute-uebertragung).
   - Newsletter/Push für Wiederkehr, unabhängig von Google-SEO.
   - FOLLOW + ABO_SEL serverseitig/lokal persistieren (hier bewusst nur In-Memory). */

/* ---------- Seiten-Routing (eigene URL pro Tab → getrennte Analytics-Aufrufe) ----------
   Jeder Tab ist eine echte HTML-Datei. data-page am <body> bestimmt die aktive Seite.
   Sprache/Theme werden über URL-Parameter (?lang=en&theme=dark) zwischen den Seiten
   weitergereicht — kein Browser-Storage. */
const PAGE = (document.body && document.body.dataset.page) || "live";
const CONSENT_KEY="tvf_consent";
function consentGet(){ try{ return localStorage.getItem(CONSENT_KEY); }catch(e){ return null; } }
function consentSet(v){ try{ localStorage.setItem(CONSENT_KEY,v); }catch(e){} }
function consentApply(v){ if(v==="yes" && typeof gtag==="function"){ gtag('consent','update',{'analytics_storage':'granted'}); } }
consentApply(consentGet());
const PAGE_FILES = {live:"index.html", hl:"highlights.html", anbieter:"anbieter.html"};
function navUrl(tab){ const ps=[];
  if(LANG==="en") ps.push("lang=en");
  if(document.documentElement.dataset.theme==="dark") ps.push("theme=dark");
  return PAGE_FILES[tab]+(ps.length?"?"+ps.join("&"):""); }
function activatePage(tab){
  document.querySelectorAll(".navitem").forEach(x=>x.setAttribute("aria-selected", x.dataset.tab===tab?"true":"false"));
  document.querySelectorAll(".tabpane").forEach(p=>p.classList.remove("active"));
  const pane=document.getElementById("pane-"+tab); if(pane) pane.classList.add("active"); }

/* ---------- Helpers ---------- */
const CHEV='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
const SHARE_ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.3M8.3 13.3l7.4 4.3"/></svg>';
const CAL_ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>';
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function chNm(s){ return (s&&s.u) ? '<a class="streamlink" href="'+esc(s.u)+'" target="_blank" rel="noopener">'+s.n+'</a>' : (s?s.n:''); }
function shareBar(title,text,url){const t=I18N[LANG];
  return '<div class="sharebar"><button class="sharebtn" data-share data-share-title="'+esc(title)+'" data-share-text="'+esc(text)+'" data-share-url="'+esc(url)+'">'+SHARE_ICON+'<span>'+t.share+'</span></button></div>';}
function followBtn(team){ const on=FOLLOW.has(team), t=I18N[LANG];
  return '<button class="sharebtn folbtn'+(on?' done':'')+'" data-follow="'+esc(team)+'" title="'+esc(team)+' '+(on?t.following:t.follow)+'">'+(on?'★ ':'☆ ')+'<span>'+esc(team)+'</span></button>'; }
function liveActions(m){const t=I18N[LANG];
  const ch=(tvOf(m,COUNTRY)||[]).map(s=>s.n).join(", ");
  const cal='<button class="sharebtn calbtn" data-cal data-day="'+esc(m.day)+'" data-time="'+esc(m.time)+'" data-h="'+esc(m.h)+'" data-a="'+esc(m.a)+'" data-comp="'+esc(m.comp||"")+'" data-ch="'+esc(ch)+'">'+CAL_ICON+'<span>'+t.cal_add+'</span></button>';
  const share='<button class="sharebtn" data-share data-share-title="'+esc(m.h+" – "+m.a)+'" data-share-text="'+esc(m.h+" – "+m.a+" · "+(m.comp||"")+" (TVFussball.de)")+'" data-share-url="https://tvfussball.de">'+SHARE_ICON+'<span>'+t.share+'</span></button>';
  return '<div class="actwrap">'+
    '<div class="actrow main">'+cal+share+'</div>'+
  '</div>';
}

/* Übersetzungs-Helfer für deutschsprachige Datenfelder */
const WD_FULL={Montag:"Monday",Dienstag:"Tuesday",Mittwoch:"Wednesday",Donnerstag:"Thursday",Freitag:"Friday",Samstag:"Saturday",Sonntag:"Sunday"};
const WD_ABBR={Mo:"Mon",Di:"Tue",Mi:"Wed",Do:"Thu",Fr:"Fri",Sa:"Sat",So:"Sun"};
function locDay(s){ return LANG==="de"?s:s.replace(/^([A-Za-zäöü]+)/,(m,w)=>WD_FULL[w]||w); }
function locDate(s){ return LANG==="de"?s:s.replace(/^([A-Za-zäöü]{2}),/,(m,w)=>(WD_ABBR[w]||w)+","); }
function locComp(s){ return LANG==="de"?s:s.replace("WM 2026","World Cup 2026").replace("Gruppe","Group").replace("Spieltag","Matchday"); }
function locAvail(s){ return LANG==="de"?s:s.replace(/^noch (\d+) Tage$/,"$1 days left").replace(/^noch 1 Tag$/,"1 day left"); }
function locMin(s){ return LANG==="de"?s:s.replace(" Min."," min"); }
function qBadge(q){ if(!q) return ""; const c=q==="4K"?"k4":(q==="8K"?"k8":""); return '<span class="q '+c+'">'+q+'</span>'; }
function tagFor(t){ const x=I18N[LANG]; return '<span class="tag '+t+'">'+(t==="fta"?x.fta:x.pay)+'</span>'; }
function chComm(s,m){ if(!m || COUNTRY!=="DE") return ""; if(s.t==="fta") return m.komm||""; if(s.n==="MagentaTV"){ var anyFree=(tvOf(m,"DE")||[]).some(function(x){return x.t==="fta";}); return anyFree?(m.kommMag||""):(m.komm||m.kommMag||""); } return ""; }
function chList(list,m){
  if(!list || !list.length) return '<div class="chrow"><span class="none">— keine Übertragung gelistet —</span></div>';
  return list.map(function(s){ var kc=chComm(s,m); return '<div class="chrow"><span class="nm">'+chNm(s)+(kc?' <span class="komm">🎙️ '+kc+'</span>':'')+'</span>'+qBadge(s.q)+tagFor(s.t)+'</div>'; }).join("");
}
const RADIO_C={DE:"ARD WM-Radio",AT:"Ö3 (ORF)",CH:"Radio SRF",UK:"BBC Radio 5 Live",ES:"RNE Radio Nacional",IT:"Rai Radio 1",FR:"RMC Sport",NL:"NPO Radio 1",US:"Westwood One",CA:"TSN Radio"};
const TICKER_C={DE:"kicker Liveticker",AT:"LAOLA1",CH:"blue Sport",UK:"BBC Sport",ES:"Marca",IT:"La Gazzetta",FR:"L'Équipe",NL:"NOS Sport",US:"FOX Sports",CA:"TSN",TH:"beIN Sports"};
function getRadio(m){ if(m.radio) return m.radio; return (isWMm(m)&&RADIO_C[COUNTRY])?[RADIO_C[COUNTRY]]:[]; } /* WM-Radio-Fallback nur noch für WM-Spiele */
function getTicker(m){ if(m.ticker) return m.ticker; return [TICKER_C[COUNTRY]||"FIFA.com"]; }
const RADIO_URL={"ARD WM-Radio":"https://www.ardaudiothek.de/","Ö3 (ORF)":"https://oe3.orf.at/","Radio SRF":"https://www.srf.ch/radio-srf-3","BBC Radio 5 Live":"https://www.bbc.co.uk/sounds/play/live:bbc_radio_five_live","RNE Radio Nacional":"https://www.rtve.es/play/radio/","Rai Radio 1":"https://www.raiplaysound.it/radio1","RMC Sport":"https://rmc.bfmtv.com/","NPO Radio 1":"https://www.nporadio1.nl/","Westwood One":"https://westwoodonesports.com/","TSN Radio":"https://www.tsn.ca/radio","VfB Radio (Senzel/Beisch)":"https://www.vfb.de/de/1893/aktuell/vfb-fanradio/","ARD Audiothek":"https://www.sportschau.de/fussball/bundesliga/alle-audiostreams-der-fussball-bundesliga,audiostreams-bundesliga-uebersicht-100.html"};
const TICKER_URL={"kicker Liveticker":"https://www.kicker.de/","LAOLA1":"https://www.laola1.at/","blue Sport":"https://www.blue.ch/de/sport","BBC Sport":"https://www.bbc.co.uk/sport/football","Marca":"https://www.marca.com/futbol/mundial.html","La Gazzetta":"https://www.gazzetta.it/","L'Équipe":"https://www.lequipe.fr/Football/","NOS Sport":"https://nos.nl/sport","FIFA.com":"https://www.fifa.com/","FOX Sports":"https://www.foxsports.com/soccer/fifa-world-cup","TSN":"https://www.tsn.ca/fifa-world-cup","beIN Sports":"https://www.beinsports.com/"};
function auxLink(x,u){ return u?'<a class="streamlink" href="'+esc(u)+'" target="_blank" rel="noopener">'+x+'</a>':x; }
function auxRows(m){ const t=I18N[LANG];
  var rkc=(COUNTRY==="DE"&&m.kommRadio)?' <span class="komm">🎙️ '+m.kommRadio+'</span>':''; const r=getRadio(m).map(x=>'<div class="chrow"><span class="nm">'+auxLink(x,RADIO_URL[x])+rkc+'</span><span class="tag aux">'+t.aux_radio+'</span></div>');
  const k=getTicker(m).map(x=>'<div class="chrow"><span class="nm">'+auxLink(x,TICKER_URL[x])+'</span><span class="tag aux">'+t.aux_ticker+'</span></div>');
  return r.concat(k).join(""); }
function isWMm(m){ return /^WM/i.test(m.comp||""); }
function tvOf(m,cc){ return (m.tv && m.tv[cc]) || (isWMm(m)?(WM_INTL[cc]||null):null) || null; }
function railClass(m){ const list=tvOf(m,COUNTRY)||[]; if(list.some(s=>s.t==="fta")) return "free"; if(getRadio(m).length) return "radio"; if(!list.length) return "none"; return "pay"; }
function bestFree(m){
  const t=I18N[LANG], list=tvOf(m,COUNTRY)||[];
  const fta=list.find(s=>s.t==="fta");
  if(fta) return '<span class="freebest tv">▣ '+t.best_free+' · '+fta.n+(m.komm?(' · 🎙️ '+m.komm):'')+'</span>';
  const pay=list.find(s=>s.t==="pay"); const r=getRadio(m); let payout=""; if(pay) payout+='<span class="freebest pay">'+pay.n+(m.komm?(' · 🎙️ '+m.komm):'')+'</span>'; if(r.length) payout+='<span class="freebest radio">♪ '+t.best_radio+' · '+r[0]+(m.kommRadio?(' · 🎙️ '+m.kommRadio):'')+'</span>';
  const none=!list.length;
  return payout || '<span class="freebest '+(none?'none':'pay')+'">'+(none?t.best_none:t.best_pay)+'</span>';
}
function adSlotHTML(){ const t=I18N[LANG]; if(ADS_ENABLED) return '<div class="adslot"><div class="lbl">'+t.ad_on+'</div></div>';
  return '<div class="adslot"><div class="lbl">'+t.ad_label+'</div><div class="sub">'+t.ad_sub+'</div></div>'; }

/* ---------- Render: Live (day-grouped) ---------- */
var USER_TZ=(function(){ try{ return Intl.DateTimeFormat().resolvedOptions().timeZone||"Europe/Berlin"; }catch(e){ return "Europe/Berlin"; } })();
const MKT_TZ={DE:"Europe/Berlin",AT:"Europe/Vienna",CH:"Europe/Zurich",UK:"Europe/London",IE:"Europe/Dublin",FR:"Europe/Paris",IT:"Europe/Rome",ES:"Europe/Madrid",NL:"Europe/Amsterdam",SE:"Europe/Stockholm",FI:"Europe/Helsinki",TR:"Europe/Istanbul",US:"America/New_York",CA:"America/Toronto",MX:"America/Mexico_City",TH:"Asia/Bangkok",SG:"Asia/Singapore",BD:"Asia/Dhaka"};
function viewTZ(){ return (MARKET_LOCKED && MKT_TZ[COUNTRY]) || USER_TZ; } // manuell gewaehltes Land bestimmt auch die angezeigte Uhrzeit
function _tzParts(tz,ms){ try{ return new Intl.DateTimeFormat("en-CA",{timeZone:tz,hour12:false,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).formatToParts(new Date(ms)).reduce(function(a,x){a[x.type]=x.value;return a;},{}); }catch(e){ return null; } }
function _tzOffMin(tz,ms){ var p=_tzParts(tz,ms); if(!p) return 0; var h=(p.hour==="24"?0:+p.hour); var asUTC=Date.UTC(+p.year,+p.month-1,+p.day,h,+p.minute); return Math.round((asUTC-ms)/60000); }
function matchUTCms(m){ var dm=String(m.day).match(/(\d{2})\.(\d{2})\.(\d{4})/), tm=String(m.time).match(/(\d{1,2}):(\d{2})/); if(!dm||!tm) return null;
  var guess=Date.UTC(+dm[3],+dm[2]-1,+dm[1],+tm[1],+tm[2]); var off=_tzOffMin("Europe/Berlin",guess); return guess-off*60000; }
var WD_DE=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
function locMatch(m){ var ms=matchUTCms(m); if(ms==null) return {day:m.day,time:m.time,ms:null};
  var p=_tzParts(viewTZ(),ms); if(!p) return {day:m.day,time:m.time,ms:ms};
  var hh=(p.hour==="24"?"00":p.hour);
  var wd=WD_DE[new Date(Date.UTC(+p.year,+p.month-1,+p.day)).getUTCDay()];
  return {day:wd+", "+p.day+"."+p.month+"."+p.year, time:hh+":"+p.minute, ms:ms}; }
function tzLabel(ms){ try{ var parts=new Intl.DateTimeFormat(LANG==="de"?"de-DE":"en-US",{timeZone:viewTZ(),timeZoneName:"short",hour:"2-digit"}).formatToParts(new Date(ms)); var z=parts.find(function(p){return p.type==="timeZoneName";}); return z?z.value:I18N[LANG].tz; }catch(e){ return I18N[LANG].tz; } }
function timeCellHTML(m){ var lm=locMatch(m); var lbl=(lm.ms!=null)?tzLabel(lm.ms):I18N[LANG].tz; return '<div class="time">'+(LIVE_ENABLED?('<div class="livewrap" data-live="'+esc(liveKey(m))+'" data-lh="'+esc(liveNorm(m.h))+'"></div>'):"")+'<span class="time-clock">'+esc(lm.time)+'<small>'+esc(lbl)+'</small></span></div>'; }
function dayKey(s){const x=String(s).match(/(\d{2})\.(\d{2})\.(\d{4})/); return x?(+x[3])*10000+(+x[2])*100+(+x[1]):0;}
function catOf(m){ if(m.cat) return m.cat; const c=m.comp||""; if(/^WM/i.test(c)) return "wm"; if(/DFB/i.test(c)) return "dfb"; if(/Bundesliga/i.test(c)) return "bl"; if(/Champions/i.test(c)) return "cl"; return "other"; }
function soonHint(t,cat){ let title=t.soon_title, sub=t.soon_sub; if(cat==="bl"){ title=t.soon_bl_t; sub=t.soon_bl; } return '<div class="soonbox"><span class="ic">🗓️</span><div><b>'+title+'</b><span>'+sub+'</span></div></div>'; }
function isFreeTV(m){ return !m.tba && ((tvOf(m,COUNTRY)||[]).some(s=>s.t==="fta")); }
function todayKeyNow(){ const d=new Date(); return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate(); }
function matchStart(m){ var ms=matchUTCms(m); return ms==null?null:new Date(ms); }
function isLiveNow(m){ if(m.tba) return false; const s=matchStart(m); if(!s) return !!m.live;
  const now=Date.now(); return now>=s.getTime() && now<=s.getTime()+115*60000; }
function windowEndKey7(){ var d=new Date(Date.now()+7*864e5); return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate(); }
function isTonight(m){ var lm=locMatch(m); var dk=dayKey(lm.day); if(!dk) return false;
  return dk>=todayKeyNow() && dk<=windowEndKey7(); }
function isTonightFmt(f){ var lm=locMatch(f); var dk=dayKey(lm.day); if(!dk) return false;
  return dk>=todayKeyNow() && dk<=windowEndKey7(); }
function isFinished(m){ if(m.tba) return false; if(LIVE_ENABLED){ var _ld=LIVE_CACHE[liveKey(m)]; if(_ld&&_ld.state==="in") return false; } const s=matchStart(m); if(!s){ /* ohne Anstosszeit: Karte gilt als beendet, wenn ihr letztes Datum vor heute liegt */ let mx=0,re=/(\d{2})\.(\d{2})\.(\d{4})/g,x; while((x=re.exec(String(m.day)))) mx=Math.max(mx,(+x[3])*10000+(+x[2])*100+(+x[1])); return mx>0 && mx<todayKeyNow(); } /* Spielende ~Anpfiff+115min; danach noch 60min sichtbar lassen */ return Date.now() > s.getTime()+175*60000; }
function mineCount(){ let n=0; MATCHES.forEach(m=>{ if(!isFinished(m) && (FOLLOW.has(m.h)||FOLLOW.has(m.a)||FOLLOW.has("liga:"+m.cat))) n++; }); FORMATS.forEach(f=>{ if(!isFinished(f) && FOLLOW.has(f.id)) n++; }); return n; }
/* Länderabhängige Schnellauswahl in der „Meine"-Ansicht (Reihenfolge wie gewünscht) */
const MINE_QUICK={
 DE:[["liga:bl","Bundesliga"],["liga:cl","Champions League"],["liga:dfb","DFB-Pokal"],["Deutschland","Deutschland"],["FC Bayern München","Bayern München"],["Paris Saint-Germain","Paris Saint-Germain"],["Borussia Mönchengladbach","Borussia M'gladbach"]],
 AT:[["liga:cl","Champions League"],["liga:el","Europa League"],["Deutschland","Deutschland"],["Real Madrid","Real Madrid"],["FC Bayern München","Bayern München"],["Paris Saint-Germain","Paris Saint-Germain"]],
 CH:[["liga:cl","Champions League"],["liga:el","Europa League"],["Real Madrid","Real Madrid"],["FC Bayern München","Bayern München"],["Paris Saint-Germain","Paris Saint-Germain"]],
 UK:[["liga:pl","Premier League"],["liga:cl","Champions League"],["liga:facup","FA Cup"],["England","England"],["Manchester City","Manchester City"],["FC Liverpool","Liverpool"],["Real Madrid","Real Madrid"]],
 FR:[["liga:l1","Ligue 1"],["liga:cl","Champions League"],["Frankreich","Frankreich"],["Paris Saint-Germain","Paris Saint-Germain"],["Olympique Marseille","Olympique Marseille"],["Real Madrid","Real Madrid"]],
 IT:[["liga:it","Serie A"],["liga:cl","Champions League"],["Juventus Turin","Juventus"],["Inter Mailand","Inter"],["AC Mailand","AC Milan"],["Real Madrid","Real Madrid"]],
 ES:[["liga:es","LaLiga"],["liga:cl","Champions League"],["Spanien","Spanien"],["Real Madrid","Real Madrid"],["FC Barcelona","FC Barcelona"],["Atlético Madrid","Atlético Madrid"]],
 _default:[["liga:cl","Champions League"],["liga:el","Europa League"],["Real Madrid","Real Madrid"],["FC Bayern München","Bayern München"],["Paris Saint-Germain","Paris Saint-Germain"],["Manchester City","Manchester City"]]
};
function renderMineQuick(){
  const box=document.getElementById("mineQuick"); if(!box) return;
  if(!LIVE_SEL.has("mine")){ box.innerHTML=""; box.style.display="none"; return; }
  box.style.display="flex";
  const list=MINE_QUICK[COUNTRY]||MINE_QUICK._default;
  const lbl=LANG==="de"?"Schnell hinzufügen:":"Quick add:";
  box.innerHTML='<span class="mq-lbl">'+lbl+'</span>'+list.map(function(p){
    const on=FOLLOW.has(p[0]);
    return '<button class="mq-chip'+(on?" on":"")+'" data-follow="'+esc(p[0])+'" aria-pressed="'+on+'">'+(on?"★ ":"+ ")+esc(p[1])+'</button>';
  }).join("");
}
/* ---------- "Top": die grossen Wettbewerbe, saisonabhaengig ---------- */
let TOP_CLUBS=null;
function topClubs(){
  if(TOP_CLUBS) return TOP_CLUBS;
  TOP_CLUBS=new Set();
  MATCHES.forEach(function(m){
    if(["bl","pl","es","it","l1"].indexOf(catOf(m))>=0){ TOP_CLUBS.add(m.h); TOP_CLUBS.add(m.a); }
  });
  return TOP_CLUBS;
}
/* Laufen in den naechsten Tagen ueberhaupt Top-Ligaspiele? Sonst: Sommerpause */
let _quietCache=null, _quietAt=0;
function topSeasonQuiet(){
  var now=Date.now();
  if(_quietCache!==null && now-_quietAt<600000) return _quietCache;
  var hit=MATCHES.some(function(m){
    if(["bl","pl","es","it","l1"].indexOf(catOf(m))<0) return false;
    var ko=_koMs(m.day,m.time);
    return ko && ko>now-10800000 && ko<now+4*86400000;
  });
  _quietCache=!hit; _quietAt=now; return _quietCache;
}
function isTopMatch(m){
  var c=catOf(m), comp=String(m.comp||"");
  if(["bl","pl","es","it","l1","dfb","facup","wm"].indexOf(c)>=0) return true;   /* Top-Ligen, Pokale, Laenderspiele */
  if((c==="cl"||c==="el") && !/Quali/i.test(comp)) return true;                  /* CL/EL ab Playoff & Gruppenphase */
  var big=topClubs();
  if(c==="test") return big.has(m.h)||big.has(m.a);                              /* Testspiel nur mit Top-Klub */
  if(["cl","el","ecl"].indexOf(c)>=0){
    if(big.has(m.h)||big.has(m.a)) return true;
    return topSeasonQuiet() && !!(m.lohnt && m.lohnt.score>=55);   /* Sommerpause: nur die groesseren Quali-Duelle */
  }
  return false;
}
function renderLiveFilters(){ const t=I18N[LANG];
  const up=MATCHES.filter(m=>!isFinished(m)), upF=FORMATS.filter(f=>!isFinished(f));
  const cnt={
    all: up.length+upF.length,
    top: up.filter(isTopMatch).length,
    mine: up.filter(m=>FOLLOW.has(m.h)||FOLLOW.has(m.a)||FOLLOW.has("liga:"+m.cat)).length + upF.filter(f=>FOLLOW.has(f.id)).length,
    free: up.filter(isFreeTV).length,
    tonight: up.filter(isTonight).length + upF.filter(isTonightFmt).length,
    format: upF.length,
    wm: up.filter(m=>catOf(m)==="wm").length,
    dfb: up.filter(m=>catOf(m)==="dfb").length,
    bl: up.filter(m=>catOf(m)==="bl").length,
    bl2: up.filter(m=>catOf(m)==="bl2").length,
    bl3: up.filter(m=>catOf(m)==="bl3").length,
    cl: up.filter(m=>catOf(m)==="cl").length,
    el: up.filter(m=>catOf(m)==="el").length,
    pl: up.filter(m=>catOf(m)==="pl").length,
    facup: up.filter(m=>catOf(m)==="facup").length,
    it: up.filter(m=>catOf(m)==="it").length,
    es: up.filter(m=>catOf(m)==="es").length,
    l1: up.filter(m=>catOf(m)==="l1").length,
    ecl: up.filter(m=>catOf(m)==="ecl").length,
    test: up.filter(m=>catOf(m)==="test").length
  };
  const blChip = cnt.bl>0 ? [["bl",t.f_bl]] : [];
  const wmChip = []; /* WM 2026 beendet – Chip entfernt */
  const dfbChip = cnt.dfb>0 ? [["dfb",t.f_dfb]] : [];
  const defs=[["all",t.f_all],["top",t.f_top||"Top"]].concat(wmChip).concat(blChip).concat(dfbChip)
    .concat([["mine",t.f_mine],["free",t.f_free]])
    .concat([["cl",t.f_cl],["ecl",t.f_ecl||"Conference League"],["pl",t.f_pl],["it",t.f_it],["es",t.f_es],["l1",t.f_l1]].filter(d=>cnt[d[0]]>0));
  const chips = defs.map(d=>{
    const c=cnt[d[0]];
    return '<button class="fchip" data-livef="'+d[0]+'" aria-pressed="'+(d[0]==="all"?LIVE_SEL.size===0:LIVE_SEL.has(d[0]))+'">'+d[1]+(c?'<span class="fcount">'+c+'</span>':'')+'</button>';
  });
  syncMktFlag();
  document.getElementById("liveFilters").innerHTML = chips.join("");
}

/* ---------- Land wählen (Markt manuell setzen, z.B. auf Reisen) ---------- */
const MKT_LIST=["DE","AT","CH","UK","IE","FR","IT","ES","NL","SE","FI","TR","US","CA","MX","TH","SG","BD"];
const MKT_FLAG={DE:"\uD83C\uDDE9\uD83C\uDDEA",AT:"\uD83C\uDDE6\uD83C\uDDF9",CH:"\uD83C\uDDE8\uD83C\uDDED",UK:"\uD83C\uDDEC\uD83C\uDDE7",IE:"\uD83C\uDDEE\uD83C\uDDEA",FR:"\uD83C\uDDEB\uD83C\uDDF7",IT:"\uD83C\uDDEE\uD83C\uDDF9",ES:"\uD83C\uDDEA\uD83C\uDDF8",NL:"\uD83C\uDDF3\uD83C\uDDF1",SE:"\uD83C\uDDF8\uD83C\uDDEA",FI:"\uD83C\uDDEB\uD83C\uDDEE",TR:"\uD83C\uDDF9\uD83C\uDDF7",US:"\uD83C\uDDFA\uD83C\uDDF8",CA:"\uD83C\uDDE8\uD83C\uDDE6",MX:"\uD83C\uDDF2\uD83C\uDDFD",TH:"\uD83C\uDDF9\uD83C\uDDED",SG:"\uD83C\uDDF8\uD83C\uDDEC",BD:"\uD83C\uDDE7\uD83C\uDDE9"};
function mktName(cc){ try{ const n=new Intl.DisplayNames([LANG==="de"?"de":"en"],{type:"region"}).of(cc==="UK"?"GB":cc); if(n) return n; }catch(e){} return cc; }
function mktChip(){
  const de=LANG==="de";
  const opts=MKT_LIST.map(c=>'<option value="'+c+'"'+(c===COUNTRY?" selected":"")+'>'+MKT_FLAG[c]+' '+mktName(c)+'</option>').join("");
  const auto='<option value="__auto">'+(de?"\uD83C\uDF10 Automatisch (Standort)":"\uD83C\uDF10 Automatic (location)")+'</option>';
  return '<label class="fchip fchip-mkt" title="'+(de?"Land w\u00e4hlen \u2013 Sender f\u00fcr diesen Markt anzeigen":"Choose country \u2013 show broadcasters for this market")+'">'+
    '<span class="mkt-ico" aria-hidden="true">'+(MKT_FLAG[COUNTRY]||"\uD83C\uDF10")+'</span>'+
    '<select id="mktSel" aria-label="'+(de?"Land w\u00e4hlen":"Choose country")+'">'+opts+auto+'</select>'+
    '<span class="mkt-caret" aria-hidden="true">\u25BE</span></label>';
}
/* ---------- Standortwahl im Header ---------- */
function syncMktFlag(){
  var el=document.getElementById("mktFlag"); if(!el) return;
  el.textContent = MKT_FLAG[COUNTRY] || "\uD83C\uDF10";
  var b=document.getElementById("mktToggle");
  if(b) b.setAttribute("aria-label",(LANG==="de"?"Standort w\u00e4hlen \u2013 aktuell: ":"Choose location \u2013 currently: ")+mktName(COUNTRY));
}
function renderMktMenu(){
  var de=(LANG==="de");
  var ttl=document.getElementById("mktPopTitle"); if(ttl) ttl.textContent = de?"W\u00e4hle deinen aktuellen Standort":"Choose your current location";
  var list=document.getElementById("mktPopList"); if(!list) return;
  var html=MKT_LIST.map(function(c){
    return '<button class="mktopt" data-mkt="'+c+'" aria-current="'+((c===COUNTRY&&MARKET_LOCKED)?"true":"false")+'">'
      +'<span class="fl" aria-hidden="true">'+MKT_FLAG[c]+'</span><span class="nm">'+esc(mktName(c))+'</span></button>';
  }).join("");
  html+='<button class="mktopt auto" data-mkt="__auto" aria-current="'+(MARKET_LOCKED?"false":"true")+'">'
    +'<span class="fl" aria-hidden="true">\uD83C\uDF10</span><span class="nm">'+(de?"Automatisch (Standort)":"Automatic (location)")+'</span></button>';
  list.innerHTML=html;
}
function mktPopOpen(open){
  var pop=document.getElementById("mktPop"), btn=document.getElementById("mktToggle");
  if(!pop||!btn) return;
  if(open){ renderMktMenu(); pop.hidden=false; btn.setAttribute("aria-expanded","true"); }
  else { pop.hidden=true; btn.setAttribute("aria-expanded","false"); }
}
document.addEventListener("click", function(e){
  var btn=e.target.closest? e.target.closest("#mktToggle") : null;
  if(btn){ e.preventDefault(); mktPopOpen(document.getElementById("mktPop").hidden); return; }
  var opt=e.target.closest? e.target.closest(".mktopt") : null;
  if(opt){
    var v=opt.getAttribute("data-mkt");
    mktPopOpen(false);
    if(v==="__auto"){
      MARKET_LOCKED=false; try{ localStorage.removeItem(LS_KEY.market); }catch(_){}
      var c=geoCacheGet(); if(c){ applyGeo(c); } else { geoInit(); }
      renderAll(); syncMktFlag(); return;
    }
    COUNTRY=v; MARKET_LOCKED=true; lsSet(LS_KEY.market, JSON.stringify(v));
    applyCountryDefaultFilter(); renderAll(); syncMktFlag(); return;
  }
  var pop=document.getElementById("mktPop");
  if(pop && !pop.hidden && !(e.target.closest && e.target.closest("#mktPop"))) mktPopOpen(false);
});
document.addEventListener("keydown", function(e){ if(e.key==="Escape") mktPopOpen(false); });
document.addEventListener("change", function(e){
  if(!e.target || e.target.id!=="mktSel") return;
  const v=e.target.value;
  if(v==="__auto"){
    MARKET_LOCKED=false;
    try{ localStorage.removeItem(LS_KEY.market); }catch(_){}
    const c=geoCacheGet();
    if(c){ applyGeo(c); } else { geoInit(); }
    renderAll();
  } else {
    COUNTRY=v; MARKET_LOCKED=true;
    lsSet(LS_KEY.market, JSON.stringify(v));
    applyCountryDefaultFilter();
    renderAll();
  }
});

function smBtn(kind,total,shown){ if(total<=shown) return ""; var rest=total-shown, add=Math.min(PAGE_SIZE,rest); var lbl=(LANG==="de"?"Mehr anzeigen":"Show more"); return '<div class="showmore-wrap"><button class="showmore" data-showmore="'+kind+'">'+lbl+' <span class="sm-n">+'+add+'</span></button></div>'; }
function renderLive(){
  renderMineQuick();
  const t=I18N[LANG], board=document.getElementById("liveBoard");
  document.getElementById("liveNote").innerHTML = t.live_note;
  const openKeys=[...board.querySelectorAll(".row.open")].map(r=>r.dataset.k);
  const q=(LIVE_Q||"").trim().toLowerCase();
  const SEL=LIVE_SEL, none=SEL.size===0;
  const catSel=["wm","dfb","bl","bl2","bl3","cl","el","ecl","pl","facup","it","es","l1","test"].filter(c=>SEL.has(c));
  const wantFmt=SEL.has("format");
  const wantTop=SEL.has("top");
  const cond=SEL.has("mine")||SEL.has("free")||SEL.has("tonight")||wantTop;
  const condOnly=cond && catSel.length===0 && !wantFmt;
  // Spiele filtern
  let mList = (none || catSel.length>0 || condOnly) ? MATCHES.filter(m=>!isFinished(m)) : [];
  if(catSel.length)      mList = mList.filter(m=>catSel.includes(catOf(m)));
  if(wantTop)            mList = mList.filter(isTopMatch);
  if(SEL.has("mine"))    mList = mList.filter(m=>FOLLOW.has(m.h)||FOLLOW.has(m.a)||FOLLOW.has("liga:"+m.cat));
  if(SEL.has("free"))    mList = mList.filter(isFreeTV);
  if(SEL.has("tonight")) mList = mList.filter(isTonight);
  if(q) mList = mList.filter(m=>((m.h+" "+m.a+" "+(m.comp||"")).toLowerCase().includes(q)));
  // Formate filtern (alle Free-TV)
  let fList = ((none || wantFmt || condOnly) && !wantTop) ? FORMATS.filter(f=>!isFinished(f)) : [];
  if(SEL.has("mine"))    fList = fList.filter(f=>FOLLOW.has(f.id));
  if(SEL.has("tonight")) fList = fList.filter(isTonightFmt);
  if(q) fList = fList.filter(f=>((f.name+" "+f.ch+" "+(LANG==="de"?f.when_de:f.when_en)).toLowerCase().includes(q)));
  // Spiele + Formate mischen, nach Datum & Uhrzeit sortieren
  let items = mList.map(m=>{var lm=locMatch(m); return {day:lm.day,sk:skOf(lm.day,lm.time),k:"m",o:m};})
                   .concat(fList.map(f=>{var lf=locMatch(f); return {day:lf.day,sk:skOf(lf.day,lf.time),k:"f",o:f};}));
  function skOf(day,time){ var mm=String(time).match(/(\d{1,2}):(\d{2})/); return dayKey(day)*10000+(mm?(+mm[1])*60+(+mm[2]):9998); }
  if(wantFmt && typeof FORMATS_OD!=="undefined" && FORMATS_OD.length){
    let odl=FORMATS_OD.slice();
    if(SEL.has("mine")) odl=odl.filter(f=>FOLLOW.has(f.id));
    if(q) odl=odl.filter(f=>((f.name+" "+f.ch+" "+(LANG==="de"?f.desc_de:f.desc_en)).toLowerCase().includes(q)));
    const anchor=items.length?Math.min.apply(null,items.map(it=>dayKey(it.day))):todayKeyNow();
    items=items.concat(odl.map(f=>({day:"__od__",sk:anchor*10000+9999,k:"f",o:f})));
  }
  items.sort((a,b)=> a.sk-b.sk);
  var _liveTotal=items.length; if(items.length>LIVE_SHOWN) items=items.slice(0,LIVE_SHOWN);
  let html="", curDay="";
  items.forEach(it=>{
    if(it.day!==curDay){ curDay=it.day; const dlabel=it.day==="__od__"?(LANG==="de"?"\uD83C\uDFA7 Podcasts & Abruf \u00b7 jederzeit":"\uD83C\uDFA7 Podcasts & on-demand \u00b7 anytime"):locDay(it.day); let dtag=""; if(it.day!=="__od__"){ const dk=dayKey(it.day), tk=todayKeyNow(); const tmr=new Date(Date.now()+864e5), tmk=tmr.getFullYear()*10000+(tmr.getMonth()+1)*100+tmr.getDate(); if(dk===tk) dtag='<span class="dtag">'+(LANG==="de"?"HEUTE":"TODAY")+'</span>'; else if(dk===tmk) dtag='<span class="dtag tm">'+(LANG==="de"?"MORGEN":"TOMORROW")+'</span>'; } html += '<div class="daybar">'+dtag+'<span class="d">'+dlabel+'</span><span class="ln"></span>'+(html===""?'<span class="social"><a href="https://www.facebook.com/share/17qkMgZEbd/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15.4 8.2h1.8V5.3c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5v2.1H7.5v3.1h2.8V22h3.4v-7.1h2.7l.4-3.1h-3.1V9.9c0-.9.3-1.7 1.7-1.7z"/></svg></a><a href="https://www.instagram.com/tvfussballl?igsh=MXFrbGU0N3dlZjJwcA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg></a></span>':"")+'</div>'; }
    html += it.k==="m" ? matchRow(it.o) : formatRow(it.o);
  });
  let hint="";
  if(!q && (SEL.has("bl")||SEL.has("cl"))) hint = soonHint(t, SEL.has("bl")?"bl":"cl");
  if(!items.length && !hint){
    if(SEL.has("mine") && !mineCount()) hint='<div class="empty">'+t.mine_empty+'</div>';
    else if(cond || wantFmt || catSel.length) hint='<div class="empty">'+t.filt_empty+'</div>';
    else hint = q ? soonHint(t) : '<div class="empty">'+(LANG==="de"?"Aktuell keine anstehenden Spiele — vergangene Spiele findest du unter Highlights.":"No upcoming matches right now — past games are under Highlights.")+'</div>';
  }
  let blHint="";
  if(!q && MATCHES.some(m=>!isFinished(m) && (catOf(m)==="bl"||catOf(m)==="bl2"))){
    blHint='<div class="blhint" data-blhint="1" role="button" tabindex="0"><span class="blhint-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2.5"/><path d="M3 9.5h18"/><path d="M8 3v3M16 3v3"/><path d="M8.4 14.6l2.3 2.3 4.9-4.8"/></svg></span><span class="blhint-tx"><b>'+t.blhint_t+'</b><span>'+t.blhint_s+'</span></span><span class="blhint-cta">'+t.blhint_cta+'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h12.5M11.5 5.5l6.5 6.5-6.5 6.5"/></svg></span></div>';
  }
  var wmFooter=(SEL.has("wm") && !q && _liveTotal<=LIVE_SHOWN) ? wmSectionsHint() : "";
  board.innerHTML = html + hint + smBtn("live",_liveTotal,LIVE_SHOWN) + wmFooter + supportBlock(); try{liveApplyDOM();}catch(e){}
  /*auto-open*/ let _restored=false;
  openKeys.forEach(k=>{ const r=board.querySelector('.row[data-k="'+CSS.escape(k)+'"]');
    if(r){ r.classList.add("open"); const h=r.querySelector(".rowhead"); if(h) h.setAttribute("aria-expanded","true"); _restored=true; } });
  if(!_restored){ const _nx=items.find(it=>it.k==="m" && !it.o.tba);
    if(_nx){ const r=board.querySelector('.row[data-k="'+CSS.escape(rowKey(_nx.o))+'"]');
      if(r){ r.classList.add("open"); const h=r.querySelector(".rowhead"); if(h) h.setAttribute("aria-expanded","true"); } } }
}
/* === WM-Abschluss-Hinweis + Feedback ============================== */
const FEEDBACK_KEY="tvf:v1:feedback";
/* Optional: Formspree-/FormSubmit-URL eintragen, dann geht Feedback zusaetzlich zentral raus. Leer = nur lokal. */
const FEEDBACK_ENDPOINT="";
function renderBlHintTop(){
  var el=document.getElementById("blHintTop"); if(!el) return;
  var de=(LANG==="de");
  var arw='<svg class="nb-arw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';
  var icT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3l4 4-4 4"/><path d="M20 7H8"/><path d="M8 21l-4-4 4-4"/><path d="M4 17h12"/></svg>';
  var icH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';
  el.innerHTML='<div class="navbanner">'
    +'<a class="nb-btn" href="'+navUrl("news")+'"><span class="nb-ic">'+icT+'</span><span class="nb-tx"><b>Transfers</b><span>'+(de?"Wechsel & Ger\u00fcchte":"Deals & rumours")+'</span></span>'+arw+'</a>'
    +'<a class="nb-btn" href="'+navUrl("hl")+'"><span class="nb-ic">'+icH+'</span><span class="nb-tx"><b>Highlights</b><span>'+(de?"Videos & Analysen":"Recaps & analysis")+'</span></span>'+arw+'</a>'
  +'</div>';
}
function feedbackBlock(){
  var de=LANG==="de";
  var stars=[1,2,3,4,5].map(function(n){return '<button type="button" class="fbk-star" data-star="'+n+'" aria-label="'+n+'/5">\u2605</button>';}).join("");
  return '<div class="fbk">'
    +'<div class="fbk-h">'+(de?"Feedback? Immer her damit.":"Got feedback? Bring it on.")+'</div>'
    +'<div class="fbk-stars" data-rating="0" role="radiogroup" aria-label="'+(de?"Bewertung":"Rating")+'">'+stars+'</div>'
    +'<textarea class="fbk-text" rows="3" placeholder="'+(de?"Was gef\u00e4llt dir, was fehlt, was nervt?":"What do you like, what\u2019s missing, what bugs you?")+'"></textarea>'
    +'<div class="fbk-row"><span class="fbk-hint">'+(de?"Bleibt lokal auf diesem Ger\u00e4t.":"Stays local on this device.")+'</span><button type="button" class="fbk-send" data-fb-send>'+(de?"Absenden":"Send")+'</button></div>'
  +'</div>';
}
function supportBlock(){
  var de=LANG==="de";
  var shI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>';
  var fbI='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15.4 8.2h1.8V5.3c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5v2.1H7.5v3.1h2.8V22h3.4v-7.1h2.7l.4-3.1h-3.1V9.9c0-.9.3-1.7 1.7-1.7z"/></svg>';
  var igI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>';
  return '<div class="sup">'
    +'<div class="sup-h">'+(de?"Unterst\u00fctzt uns":"Support us")+'</div>'
    +'<div class="sup-s">'+(de?"TVFUSSBALL lebt von euch \u2013 teilt die Seite und folgt uns:":"TVFUSSBALL runs on you \u2013 share the site and follow us:")+'</div>'
    +'<button type="button" class="sup-share" data-share>'+shI+'<span class="sup-share-tx">'+(de?"Seite mit Freunden teilen":"Share with friends")+'</span></button>'
    +'<div class="sup-social">'
      +'<a class="sup-soc fb" href="https://www.facebook.com/share/17qkMgZEbd/" target="_blank" rel="noopener noreferrer">'+fbI+'Facebook</a>'
      +'<a class="sup-soc ig" href="https://www.instagram.com/tvfussballl?igsh=MXFrbGU0N3dlZjJwcA==" target="_blank" rel="noopener noreferrer">'+igI+'Instagram</a>'
    +'</div></div>';
}
function fbLoad(){ try{ var r=lsGet(FEEDBACK_KEY); var a=r?JSON.parse(r):[]; return Array.isArray(a)?a:[]; }catch(e){ return []; } }
function fbSubmit(text,rating){
  text=(text||"").trim(); if(!text && !rating) return false;
  var entry={ text:text, rating:rating||0, ts:new Date().toISOString(), page:(location.pathname.split("/").pop()||"index.html"), lang:LANG };
  var list=fbLoad(); list.push(entry); lsSet(FEEDBACK_KEY, JSON.stringify(list));
  if(FEEDBACK_ENDPOINT){ try{ fetch(FEEDBACK_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(entry)}); }catch(e){} }
  return true;
}
function fbEscape(v){ return String(v==null?"":v).replace(/[<>&]/g,function(c){return {"<":"&lt;",">":"&gt;","&":"&amp;"}[c];}); }
function fbToCSV(list){
  var q=function(v){ return '"'+String(v==null?"":v).replace(/"/g,'""')+'"'; };
  var rows=[["Datum","Bewertung","Seite","Sprache","Text"]].concat(list.map(function(e){return [e.ts,e.rating,e.page,e.lang,e.text];}));
  return rows.map(function(r){return r.map(q).join(",");}).join("\n");
}
function fbAdminOpen(){
  var de=LANG==="de", list=fbLoad(), rev=list.slice().reverse();
  var body=rev.length? rev.map(function(e){ return '<div class="fba-item"><div class="fba-meta">'+(e.rating?"\u2605".repeat(e.rating):"\u2013")+' \u00b7 '+new Date(e.ts).toLocaleString()+' \u00b7 '+fbEscape(e.page)+'</div><div class="fba-tx">'+(e.text?fbEscape(e.text):'<i>('+(de?"nur Bewertung":"rating only")+')</i>')+'</div></div>'; }).join("")
    : '<div class="fba-empty">'+(de?"Noch kein Feedback gespeichert.":"No feedback stored yet.")+'</div>';
  var ov=document.getElementById("fbAdmin");
  if(!ov){ ov=document.createElement("div"); ov.id="fbAdmin"; ov.className="fba-ov"; document.body.appendChild(ov); }
  ov.innerHTML='<div class="fba-box"><div class="fba-top"><b>Feedback ('+list.length+')</b><div class="fba-actions"><button type="button" data-fb-copy>'+(de?"Kopieren":"Copy")+'</button><button type="button" data-fb-csv>CSV</button><button type="button" data-fb-clear>'+(de?"Leeren":"Clear")+'</button><button type="button" data-fb-close aria-label="Close">\u2715</button></div></div><div class="fba-list">'+body+'</div></div>';
  ov.classList.add("show");
}
function fbAdminClose(){ var ov=document.getElementById("fbAdmin"); if(ov) ov.classList.remove("show"); if(location.hash==="#feedback"){ try{history.replaceState(null,"",location.pathname+location.search);}catch(e){} } }
function rowKey(m){ return esc(m.day+"|"+m.time+"|"+m.h+"|"+m.a); }
function folMark(team){ const on=FOLLOW.has(team), t=I18N[LANG], lbl=esc(team)+" "+(on?t.following:t.follow);
  return '<span class="favstar'+(on?' on':'')+'" data-follow="'+esc(team)+'" role="button" tabindex="0" aria-pressed="'+on+'" aria-label="'+lbl+'" title="'+lbl+'">'+(on?'★':'☆')+'</span>'; }
function formatRow(f){
  const t=I18N[LANG], on=FOLLOW.has(f.id);
  const when=LANG==="de"?f.when_de:f.when_en, desc=LANG==="de"?f.desc_de:f.desc_en;
  const kindlbl=t["fk_"+f.kind]||f.kind;
  const live=f.live?'<span class="fmt-live">'+t.fmt_live+'</span>':'';
  const timeCell=f.od?'<div class="time"><span class="odtime">'+(LANG==="de"?"Abruf":"On-dem.")+'</span></div>':'<div class="time">'+esc(f.time)+'<small>'+t.tz+'</small></div>';
  const star='<span class="favstar'+(on?' on':'')+'" data-follow="'+esc(f.id)+'" role="button" tabindex="0" aria-pressed="'+on+'" aria-label="'+esc(f.name)+'" title="'+esc(f.name)+'">'+(on?'★':'☆')+'</span>';
  return '<div class="row fmt free" data-k="fmt-'+esc(f.id)+'">'+
    '<button class="rowhead" aria-expanded="false">'+timeCell+
      '<div class="teams">'+
        '<div class="t"><span class="fmticon">'+(f.icon||'📺')+'</span><span>'+esc(f.name)+'</span>'+star+live+'</div>'+
        '<div class="meta"><span class="comp">'+esc(f.ch)+'</span>'+(f.od?'<span class="freebest '+(f.kind==="video"?"tv":"radio")+'">'+(f.kind==="video"?"▶ Video":"🎧 Podcast")+'</span>':'<span class="freebest tv">▣ '+t.best_free+'</span>')+'</div>'+
        '<div class="fmtwhen">'+esc(when)+'</div>'+
      '</div>'+
      '<span class="chev">'+CHEV+'</span>'+
    '</button>'+
    '<div class="panel"><div class="panel-in"><div class="panel-pad">'+
      '<div class="fmtkind"><span class="tag">'+esc(kindlbl)+'</span></div>'+
      '<p class="fmtdesc">'+esc(desc)+'</p>'+
      '<div class="chlist"><div class="chrow"><span class="nm">'+esc(f.ch)+'</span><span class="tag '+(f.od?"aux":"fta")+'">'+(f.od?(f.kind==="video"?"Video":"Podcast"):t.best_free)+'</span></div>'+
        (f.stream?'<div class="chrow"><span class="nm">'+esc(f.stream)+'</span><span class="tag aux">Stream</span></div>':'')+'</div>'+
      (f.url?'<a class="fmtlink" href="'+esc(f.url)+'" target="_blank" rel="noopener">'+t.fmt_more+' ↗</a>':'')+
    '</div></div></div>'+
  '</div>';
}

function tbaRow(m,t){
  const share = shareBar(m.h+" – "+m.a, m.h+" – "+m.a+" · "+m.comp+" (TVFussball.de)", "https://tvfussball.de");
  return '<div class="row tba" data-k="'+rowKey(m)+'">'+
    '<button class="rowhead" aria-expanded="false">'+
      timeCellHTML(m)+
      '<div class="teams">'+
        '<div class="t"><span class="flag">'+flag(m.h)+'</span><span>'+m.h+'</span>'+folMark(m.h)+'</div>'+
        '<div class="t" style="margin-top:3px"><span class="flag">'+flag(m.a)+'</span><span>'+m.a+'</span>'+folMark(m.a)+'</div>'+
        '<div class="meta"><span class="comp">'+locComp(m.comp)+'</span><span class="freebest pay">'+t.tba_chip+'</span></div>'+
      '</div>'+
      '<div class="rh-right"><span class="chev">'+CHEV+'</span></div>'+
    '</button>'+
    '<div class="panel"><div class="panel-in"><div class="panel-pad">'+
      '<div class="soonbox sm"><span class="ic">📺</span><div><b>'+t.tba_note_t+'</b><span>'+t.tba_note_s+'</span></div></div>'+
      renderLohnt(m)+
      liveActions(m)+
    '</div></div></div>'+
  '</div>';
}
function sendRow(cc,list){
  const chans=(list&&list.length)?list.map(s=>'<span class="ch '+(s.t==="fta"?"fta":"pay")+'">'+chNm(s)+'</span>').join(""):'<span class="none">'+(LANG==="de"?"k. A.":"n/a")+'</span>';
  return '<div class="sendrow"><span class="sflag">'+(CFLAG[cc]||"🏳️")+'</span><span class="schans">'+chans+'</span></div>';
}
const MCHEV='<svg class="mchev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
const ODDS_DISCLAIMER={de:"Gl\u00fccksspiel kann s\u00fcchtig machen. Hilfe unter check-dein-spiel.de. Teilnahme ab 18.",en:"Gambling can be addictive. 18+ only."};
function biln(x){ if(x==null) return ""; if(typeof x==="string") return x; return x[LANG]||x.de||x.en||""; }
function locISO(iso){ if(!iso) return ""; const p=String(iso).split("-"); if(p.length!==3) return String(iso);
  if(LANG==="de") return p[2]+"."+p[1]+"."+p[0];
  const M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return (M[parseInt(p[1],10)-1]||p[1])+" "+p[2]+", "+p[0]; }
function fmtKm(n){ const s=String(n); return LANG==="de"?s.replace(".",","):s.replace(",","."); }
function fmtNote(n){ if(n==null) return ""; const s=Number(n).toFixed(1); return LANG==="de"?s.replace(".",","):s; }
/* ---- Feature A: Lohnt sich's? ---- */
function lhStimmen(arr,t){ if(!arr||!arr.length) return "";
  const rows=arr.slice(0,3).map(function(s){
    if(!s||!s.text||!s.person||!s.datum) return "";
    const tip=(s.typ==="tipp")?'<span class="lh-tag">'+t.lh_tip+'</span>':'';
    const rolle=s.rolle?', '+esc(biln(s.rolle)):'';
    const src=s.quelle?' <a class="lh-src" href="'+esc(s.quelle)+'" target="_blank" rel="noopener">'+t.lh_src+' \u2197</a>':'';
    return '<div class="lh-voice">'+tip+'<span class="lh-qt">'+esc(biln(s.text))+'</span><span class="lh-by">\u2014 '+esc(s.person)+rolle+' \u00b7 '+locISO(s.datum)+src+'</span></div>';
  }).filter(Boolean).join("");
  return rows?('<div class="lh-sec"><div class="lh-h">'+t.lh_voices+'</div>'+rows+'</div>'):""; }
function lhQuoten(q,t){ if(!q||!q.werte||!q.werte.length||!q.stand) return "";
  const cells=q.werte.map(function(w){ return '<span class="lh-od"><b>'+esc(w.sel)+'</b>'+esc(w.wert)+'</span>'; }).join("");
  const prov=q.anbieter?'<span class="lh-prov">'+esc(q.anbieter)+'</span>':'';
  return '<div class="lh-sec"><div class="lh-h">'+t.lh_odds+prov+'</div>'+
    '<div class="lh-odds">'+cells+'</div>'+
    '<div class="lh-upd">'+t.lh_odds_upd+' '+locISO(q.stand)+'</div>'+
    '<div class="lh-disc"><span class="lh-18">18+</span><span>'+esc(biln(ODDS_DISCLAIMER))+'</span></div></div>'; }
function hlKey(m){ return m.h+"__"+m.a; }
function hlLinkFor(x,y){ if(!x||!y||typeof HL==="undefined") return null;
  for(var i=0;i<HL.length;i++){ var e=HL[i]; if((e.h===x&&e.a===y)||(e.h===y&&e.a===x)) return "highlights.html?m="+encodeURIComponent(hlKey(e)); }
  return null; }
function openDeepLinkHL(){ try{
  var pr=new URLSearchParams(location.search); var key=pr.get("m"); if(!key) return; key=decodeURIComponent(key);
  var board=document.getElementById("hlBoard"); if(!board) return;
  var rows=board.querySelectorAll(".row[data-hl]"), target=null;
  for(var i=0;i<rows.length;i++){ if(rows[i].getAttribute("data-hl")===key){ target=rows[i]; break; } }
  if(!target) return;
  board.querySelectorAll(".row.open").forEach(function(r){ if(r!==target){ r.classList.remove("open"); var hh=r.querySelector(".rowhead"); if(hh) hh.setAttribute("aria-expanded","false"); } });
  target.classList.add("open"); var h=target.querySelector(".rowhead"); if(h) h.setAttribute("aria-expanded","true");
  target.scrollIntoView({behavior:"smooth",block:"center"});
}catch(e){} }
function lhLast(list,teamX){ if(!list||!list.length) return "";
  return list.slice(0,5).map(function(p){
    const cls=p.ausgang==="S"?"win":(p.ausgang==="N"?"loss":"draw");
    const dt=p.datum?'<span class="lh-pd">'+locISO(p.datum)+'</span>':'';
    const inner='<span class="lh-out '+cls+'">'+esc(p.ausgang||"")+'</span><span class="lh-res">'+esc(p.ergebnis||"")+'</span><span class="lh-opp">'+esc(p.gegner||"")+'</span>'+dt;
    const lnk=hlLinkFor(teamX,p.gegner);
    return lnk?('<a class="lh-match lh-link" href="'+esc(lnk)+'">'+inner+'</a>'):('<span class="lh-match">'+inner+'</span>');
  }).join(""); }
function lhLetzte(lp,m,t){ if(!lp||(!lp.teamA&&!lp.teamB)) return "";
  let out='<div class="lh-sec"><div class="lh-h">'+t.lh_last+'</div>';
  if(lp.teamA&&lp.teamA.length) out+='<div class="lh-team"><span class="lh-tn">'+esc(m.h)+'</span><div class="lh-mrow">'+lhLast(lp.teamA,m.h)+'</div></div>';
  if(lp.teamB&&lp.teamB.length) out+='<div class="lh-team"><span class="lh-tn">'+esc(m.a)+'</span><div class="lh-mrow">'+lhLast(lp.teamB,m.a)+'</div></div>';
  return out+'</div>'; }
function lhScore(s,t){ if(s==null) return ""; const v=Math.max(0,Math.min(100,Math.round(s)));
  const col=v>=75?"#16a34a":(v>=55?"#84cc16":(v>=35?"#f59e0b":"#dc2626"));
  return '<div class="lh-score"><div class="lh-sc-top"><span class="lh-sc-lbl">'+t.lohnt_score+'</span><b class="lh-sc-val" style="color:'+col+'">'+v+'</b><span class="lh-sc-max">/100</span></div><div class="lh-sc-bar"><span style="width:'+v+'%;background:'+col+'"></span></div></div>'; }
function hlNote(m){ var sp=m.analyse&&m.analyse.spielnote; if(!sp||sp.wert==null) return ""; return '<span class="hl-note" title="'+esc(I18N[LANG].tvf_rating)+'">\u2605 '+esc(fmtNote(sp.wert))+'</span>'; }
function renderLohnt(m){ const L=m.lohnt; if(!L) return ""; const t=I18N[LANG];
  let inner=lhScore(L.score,t);
  if(L.einordnung) inner+='<p class="lh-txt">'+esc(biln(L.einordnung))+'</p>';
  if(L.story) inner+='<p class="lh-txt">'+esc(biln(L.story))+'</p>';
  inner+=lhStimmen(L.stimmen,t)+lhLetzte(L.letztePartien,m,t);
  if(!inner) return "";
  return '<button class="morebtn lh-btn" data-more data-lo="'+esc(t.lohnt_t)+'" data-lc="'+esc(t.lohnt_t)+'" aria-expanded="false"><span class="mlbl">'+t.lohnt_t+'</span>'+MCHEV+'</button><div class="morewrap"><div class="lohntwrap">'+inner+'</div></div>'; }
/* ---- Feature B: Spielanalyse ---- */
function anGoals(arr,t){ if(!arr||!arr.length) return "";
  const rows=arr.map(function(g){
    const fl=(g.elfmeter?' <span class="an-fl">('+t.an_pen+')</span>':'')+(g.eigentor?' <span class="an-fl">('+t.an_og+')</span>':'');
    return '<div class="an-li"><span class="an-min">'+esc(String(g.minute))+'\u2032</span><span class="an-pl">'+esc(g.spieler||"")+'</span>'+fl+'</div>';
  }).join("");
  return '<div class="an-sec"><div class="an-h">'+t.an_goals+'</div>'+rows+'</div>'; }
function anCards(arr,t){ if(!arr||!arr.length) return "";
  const rows=arr.map(function(c){
    const cl=c.typ==="rot"?"red":(c.typ==="gelbrot"?"yr":"yel");
    return '<div class="an-li"><span class="an-min">'+esc(String(c.minute))+'\u2032</span><span class="an-card '+cl+'"></span><span class="an-pl">'+esc(c.spieler||"")+'</span></div>';
  }).join("");
  return '<div class="an-sec"><div class="an-h">'+t.an_cards+'</div>'+rows+'</div>'; }
function anNote(sp,t){ if(!sp||sp.wert==null) return "";
  return '<div class="an-noterow"><span class="an-noteic" title="'+esc(t.tvf_rating)+'">\u2605</span><b class="an-noteval">'+esc(fmtNote(sp.wert))+'</b>'+(sp.label?'<span class="an-notelbl">'+esc(biln(sp.label))+'</span>':'')+'</div>'; }
function anMotm(p,t,m){ if(!p||!p.name) return "";
  const img=(p.bildRechte===true&&p.bild)?'<img class="an-mimg" src="'+esc(p.bild)+'" alt="">':'';
  const tn=(p.team==="A"&&m)?m.h:((p.team==="B"&&m)?m.a:(p.team||"")); const team=tn?'<span class="an-mtm">'+flag(tn)+'<span>'+esc(tn)+'</span></span>':'';
  const note=(p.note!=null)?'<span class="an-mnote">'+esc(fmtNote(p.note))+'</span>':'';
  const why=p.begruendung?'<span class="an-mwhy">'+esc(biln(p.begruendung))+'</span>':'';
  return '<div class="an-sec"><div class="an-h">'+t.an_motm+'</div><div class="an-motm">'+img+'<div class="an-mbody"><div class="an-mtop">'+note+'<span class="an-mname">'+esc(p.name)+team+'</span></div>'+why+'</div></div></div>'; }
function anInjuries(arr,t){ if(!arr||!arr.length) return "";
  const rows=arr.map(function(v){ return '<div class="an-li"><span class="an-min">'+esc(String(v.minute))+'\u2032</span><span class="an-pl">'+esc(v.spieler||"")+'</span>'+(v.art?'<span class="an-sub">'+esc(biln(v.art))+'</span>':'')+'</div>'; }).join("");
  return '<div class="an-sec"><div class="an-h">'+t.an_inj+'</div>'+rows+'</div>'; }
function anRef(r,t){ if(!r||!r.name) return "";
  const land=r.land?' ('+esc(r.land)+')':'';
  const note=(r.note!=null)?'<span class="an-rnote">'+esc(fmtNote(r.note))+'</span>':'';
  return '<div class="an-sec"><div class="an-h">'+t.an_ref+'</div><div class="an-ref">'+esc(r.name)+land+note+'</div></div>'; }
function anBar(poss,t){ if(!poss||poss.a==null||poss.b==null) return "";
  return '<div class="an-sec"><div class="an-h">'+t.an_poss+'</div><div class="an-bar"><span class="an-ba" style="width:'+esc(String(poss.a))+'%">'+esc(String(poss.a))+'%</span><span class="an-bb" style="width:'+esc(String(poss.b))+'%">'+esc(String(poss.b))+'%</span></div></div>'; }
function anChances(ch,t){ if(!ch||ch.a==null||ch.b==null) return "";
  return '<div class="an-sec"><div class="an-h">'+t.an_chances+'</div><div class="an-cmp"><b>'+esc(String(ch.a))+'</b><span>:</span><b>'+esc(String(ch.b))+'</b></div></div>'; }
function anRun(r,t){ if(!r||!r.spieler) return "";
  return '<div class="an-sec"><div class="an-h">'+t.an_run+'</div><div class="an-run">'+esc(r.spieler)+(r.team?' \u00b7 '+esc(r.team):'')+' \u2014 <b>'+fmtKm(r.km)+' km</b></div></div>'; }
function anEvents(A,t,m){ const ev=[];
  (A.tore||[]).forEach(function(g){ ev.push({min:g.minute, ic:"\u26BD", who:g.spieler, team:g.team, ex:(g.elfmeter?" ("+t.an_pen+")":"")+(g.eigentor?" ("+t.an_og+")":"")}); });
  (A.karten||[]).forEach(function(c){ var ic=c.typ==="rot"?"\uD83D\uDFE5":(c.typ==="gelbrot"?"\uD83D\uDFE8\uD83D\uDFE5":"\uD83D\uDFE8"); ev.push({min:c.minute, ic:ic, who:c.spieler, team:c.team, ex:""}); });
  if(!ev.length) return "";
  ev.sort(function(a,b){ return (parseInt(a.min)||0)-(parseInt(b.min)||0); });
  const rows=ev.map(function(e){ const tm=(e.team==="A")?m.h:(e.team==="B"?m.a:""); const fl=tm?'<span class="an-etm">'+flag(tm)+'</span>':'';
    var tnm=tm?'<span class="an-etn" title="'+esc(tm)+'">'+esc(tm)+'</span>':'';
    return '<div class="an-ev"><span class="an-eic">'+e.ic+'</span>'+((e.min!=null&&e.min!=="")?'<span class="an-emin">'+esc(String(e.min))+'\u2032</span>':"")+fl+'<span class="an-epl">'+esc(e.who||"")+'</span>'+(e.ex?'<span class="an-fl">'+esc(e.ex)+'</span>':'')+tnm+'</div>'; }).join("");
  return '<div class="an-sec"><div class="an-h">'+t.an_events+'</div>'+rows+'</div>'; }
function anFazit(txt,t){ if(!txt) return "";
  return '<div class="an-sec"><div class="an-h">'+t.an_summary+'</div><p class="an-fazit">'+esc(biln(txt))+'</p></div>'; }
function renderAnalyse(m,t){ const A=m.analyse; if(!A) return "";
  let e1=anNote(A.spielnote,t)+anEvents(A,t,m)+anMotm(A.spielerDesSpiels,t,m)+anFazit(A.fazit,t);
  let e2=anInjuries(A.verletzungen,t)+anRef(A.schiri,t)+anBar(A.ballbesitz,t)+anChances(A.chancen,t)+anRun(A.laufwunder,t);
  if(A.quelleStatistik) e2+='<div class="an-srcline">'+t.an_src+': '+esc(A.quelleStatistik)+'</div>';
  if(!e1&&!e2) return "";
  let html='<button class="morebtn an-btn" data-more data-lo="'+esc(t.an_t)+'" data-lc="'+esc(t.an_t)+'" aria-expanded="false"><span class="mlbl">'+t.an_t+'</span>'+MCHEV+'</button><div class="morewrap"><div class="analysewrap">'+e1;
  if(e2) html+='<button class="morebtn an-sub2" data-more data-lo="'+esc(t.an_more)+'" data-lc="'+esc(t.an_more)+'" aria-expanded="false"><span class="mlbl">'+t.an_more+'</span>'+MCHEV+'</button><div class="morewrap"><div class="analyse2">'+e2+'</div></div>';
  html+='</div></div>';
  return html; }
function lineupSection(m){
  if(m.tba) return "";
  var lg=espnLeagueFor(m); if(!lg) return "";
  var lbl=(LANG==="de")?"Aufstellung":"Line-ups";
  return '<button class="morebtn lu-btn" data-more data-lineup="1" data-lo="'+esc(lbl)+'" data-lc="'+esc(lbl)+'" aria-expanded="false"><span class="mlbl">'+esc(lbl)+'</span>'+MCHEV+'</button>'+
    '<div class="morewrap"><div class="lineupwrap" data-lu="'+esc(liveKey(m))+'" data-lg="'+esc(lg)+'" data-hn="'+esc(m.h)+'" data-an="'+esc(m.a)+'"></div></div>';
}
function _luName(p){ var a=p.athlete||{}; return a.displayName||a.shortName||a.fullName||""; }
function _luNo(p){ return p.jersey||(p.athlete&&p.athlete.jersey)||""; }
function _luLine(p){
  var pos=(p.position||{}); var s=String(pos.name||pos.displayName||pos.abbreviation||"").toLowerCase(); var ab=String(pos.abbreviation||"").toLowerCase();
  if(/keeper|goalie/.test(s)||ab==="g"||ab==="gk") return 0;
  if(/back|defen/.test(s)||/^(d|cb|lb|rb|lwb|rwb|wb|sw)$/.test(ab)) return 1;
  if(/midfield/.test(s)||/^(m|cm|dm|am|lm|rm|cdm|cam|rdm|ldm|rcm|lcm)$/.test(ab)) return 2;
  if(/forward|strik|wing|attack/.test(s)||/^(f|cf|st|lw|rw|w|ss)$/.test(ab)) return 3;
  return -1;
}
function renderLineup(rosters){
  if(!rosters||rosters.length<2) return "";
  var de=(LANG==="de"), H=null, A=null;
  rosters.forEach(function(r){ if(r.homeAway==="home") H=r; else if(r.homeAway==="away") A=r; });
  if(!H||!A){ H=rosters[0]; A=rosters[1]; }
  var hStart=(H.roster||[]).filter(function(p){return p.starter;});
  var aStart=(A.roster||[]).filter(function(p){return p.starter;});
  if(!hStart.length && !aStart.length) return "";
  var hBench=(H.roster||[]).filter(function(p){return !p.starter;});
  var aBench=(A.roster||[]).filter(function(p){return !p.starter;});
  function player(p,side){
    var cap=p.captain?'<span class="lu-c" title="'+(de?"Kapit\u00e4n":"Captain")+'">C</span>':"";
    return '<div class="lu-p '+side+'"><span class="lu-no">'+esc(_luNo(p))+'</span><span class="lu-nm">'+esc(_luName(p))+cap+'</span></div>';
  }
  var canGroup = hStart.concat(aStart).every(function(p){ return _luLine(p)>=0; });
  var grid;
  if(canGroup){
    var LINES=[de?"Tor":"GK", de?"Abwehr":"DEF", de?"Mittelfeld":"MID", de?"Angriff":"FWD"];
    grid="";
    for(var li=0; li<4; li++){
      var hL=hStart.filter(function(p){return _luLine(p)===li;});
      var aL=aStart.filter(function(p){return _luLine(p)===li;});
      if(!hL.length && !aL.length) continue;
      grid+='<div class="lu-line"><div class="lu-line-col home">'+hL.map(function(p){return player(p,"home");}).join("")+'</div><div class="lu-line-lbl">'+LINES[li]+'</div><div class="lu-line-col away">'+aL.map(function(p){return player(p,"away");}).join("")+'</div></div>';
    }
  } else {
    grid='<div class="lu-grid"><div class="lu-line-col home">'+hStart.map(function(p){return player(p,"home");}).join("")+'</div><div class="lu-line-col away">'+aStart.map(function(p){return player(p,"away");}).join("")+'</div></div>';
  }
  function bench(list){ return list.map(function(p){ return '<span class="lu-sub"><span class="lu-no sm">'+esc(_luNo(p))+'</span>'+esc(_luName(p))+'</span>'; }).join(""); }
  var hName=esc((H.team&&(H.team.shortDisplayName||H.team.displayName))||"");
  var aName=esc((A.team&&(A.team.shortDisplayName||A.team.displayName))||"");
  var hForm=H.formation?(' <span class="lu-form">'+esc(H.formation)+'</span>'):"";
  var aForm=A.formation?('<span class="lu-form">'+esc(A.formation)+'</span> '):"";
  var out='<div class="lu"><div class="lu-head"><span class="lu-t">'+hName+hForm+'</span><span class="lu-t right">'+aForm+aName+'</span></div>'+grid;
  if(hBench.length||aBench.length){
    out+='<div class="lu-bank"><div class="lu-bank-h">'+(de?"Bank":"Bench")+'</div><div class="lu-bank-grid"><div class="lu-bank-col">'+bench(hBench)+'</div><div class="lu-bank-col right">'+bench(aBench)+'</div></div></div>';
  }
  return out+'</div>';
}
async function loadLineup(host){
  if(!host || host.dataset.loaded==="1" || host.dataset.loading==="1") return;
  host.dataset.loading="1";
  var de=(LANG==="de");
  host.innerHTML='<div class="lu-note">'+(de?"Aufstellung wird geladen \u2026":"Loading line-ups \u2026")+'</div>';
  try{
    var key=host.getAttribute("data-lu"), lg=host.getAttribute("data-lg");
    var hn=host.getAttribute("data-hn"), an=host.getAttribute("data-an");
    var id=(LIVE_CACHE[key]&&LIVE_CACHE[key].id)||"";
    if(!id && lg){ try{ var sb=await fetch("https://site.api.espn.com/apis/site/v2/sports/soccer/"+lg+"/scoreboard",{cache:"no-store"}).then(function(r){return r.ok?r.json():null;}); if(sb&&sb.events){ var hnn=liveNorm(hn), ann=liveNorm(an); for(var i=0;i<sb.events.length;i++){ var ev=sb.events[i], cs=(ev.competitions&&ev.competitions[0]&&ev.competitions[0].competitors)||[]; var nm=cs.map(function(c){return liveNorm(c.team&&c.team.displayName);}); if(nm.indexOf(hnn)>=0&&nm.indexOf(ann)>=0){ id=ev.id; break; } } } }catch(_e){} }
    if(!id){ host.innerHTML='<div class="lu-note">'+(de?"Aufstellung noch nicht verf\u00fcgbar \u2013 erscheint meist rund um den Anpfiff.":"Line-ups not available yet \u2013 usually posted around kick-off.")+'</div>'; host.dataset.loading=""; return; }
    var sum=await fetch("https://site.api.espn.com/apis/site/v2/sports/soccer/"+lg+"/summary?event="+id,{cache:"no-store"}).then(function(r){return r.ok?r.json():null;});
    var html=renderLineup((sum&&sum.rosters)||[]);
    host.innerHTML = html || ('<div class="lu-note">'+(de?"Aufstellung noch nicht ver\u00f6ffentlicht.":"Line-ups not published yet.")+'</div>');
    if(html) host.dataset.loaded="1";
  }catch(e){ host.innerHTML='<div class="lu-note">'+(de?"Aufstellung konnte nicht geladen werden.":"Couldn\u2019t load line-ups.")+'</div>'; }
  host.dataset.loading="";
}
function matchRow(m){
  const t=I18N[LANG];
  if(m.tba) return tbaRow(m,t);
  const free=(tvOf(m,COUNTRY)||[]).some(s=>s.t==="fta"); let rail=railClass(m); if(isLiveNow(m)) rail+=(rail?" ":"")+"onair";
  const timeCell = timeCellHTML(m);
  const isWM = /^WM/i.test(m.comp||"");
  const sccs = ["DE","AT","CH","UK"].concat(isWM?["FR","IT","ES","NL","TH","CA","US","IE","FI","SG","BD","TR","SE","MX"]:[]).filter(cc=>cc!==COUNTRY);
  const groups = sccs.map(cc=>{ const list = tvOf(m,cc); return list?sendRow(cc,list):""; }).filter(Boolean).join("");
  const share = shareBar(m.h+" – "+m.a, m.h+" – "+m.a+" · "+m.comp+" — "+(LANG==="de"?"wo läuft das Spiel?":"where to watch?")+" (TVFussball.de)", "https://tvfussball.de");
  return '<div class="row'+(rail?' '+rail:'')+'"'+tintStyle(m)+' data-k="'+rowKey(m)+'">'+
    '<button class="rowhead" aria-expanded="false">'+timeCell+
      '<div class="teams">'+
        '<div class="t"><span class="flag">'+flag(m.h)+'</span><span>'+m.h+'</span>'+folMark(m.h)+'</div>'+
        '<div class="t" style="margin-top:3px"><span class="flag">'+flag(m.a)+'</span><span>'+m.a+'</span>'+folMark(m.a)+'</div>'+
        '<div class="meta"><span class="comp">'+locComp(m.comp)+'</span>'+bestFree(m)+'</div>'+
      '</div>'+
      '<div class="rh-right"><span class="chev">'+CHEV+'</span></div>'+
    '</button>'+
    '<div class="panel"><div class="panel-in"><div class="panel-pad">'+
      '<div class="lvticker" data-lvt="'+esc(liveKey(m))+'" data-lh="'+esc(liveNorm(m.h))+'" data-lvko="'+_koMs(m.day,m.time)+'"'+_lvSrcAttr(m)+'></div>'+
      '<div class="dh"><span class="ff">'+CFLAG[COUNTRY]+'</span>'+t.where+' '+CNAME[LANG][COUNTRY]+'</div>'+
      '<div class="chlist">'+chList(tvOf(m,COUNTRY),m)+auxRows(m)+'</div>'+
      (groups?'<button class="morebtn" data-more aria-expanded="false"><span class="mlbl">'+t.more+'</span><svg class="mchev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button><div class="morewrap"><div class="sendlist">'+groups+'</div></div>':"")+
      lineupSection(m)+
      renderLohnt(m)+
      liveActions(m)+
    '</div></div></div>'+
  '</div>';
}

/* ---------- Render: Highlights ---------- */
let HL_COMP = "*"; // Wettbewerbsfilter der Highlights (voller Wettbewerbsname, dynamisch aus den Daten)
function hlCompOf(m){ return String(m.g||"").split(" \u00b7 ")[0]||""; }
function hlComps(){ var seen={},out=[]; HL.forEach(function(m){ var c=hlCompOf(m); if(c&&!seen[c]){ seen[c]=1; out.push(c); } }); return out; }
function renderHLFilters(){ const t=I18N[LANG];
  const defs=[["c:*",t.f_all],["top80",t.f_hltop||"\u2605 8,0+"]].concat(hlComps().map(function(c){ return ["c:"+c,c]; })).concat([["relive",t.f_relive]]);
  document.getElementById("hlFilters").innerHTML = defs.map(d=>{
    const on = d[0].indexOf("c:")===0 ? (HL_COMP===d[0].slice(2) && HL_FILTER==="all") : (HL_FILTER===d[0]);
    return '<button class="fchip" data-hlf="'+d[0]+'" aria-pressed="'+on+'">'+d[1]+'</button>';
  }).join("");
}
function hlGoals(s){ const p=s.split(":").map(n=>parseInt(n,10)); return (p[0]||0)+(p[1]||0); }
function renderHL(){
  const t=I18N[LANG], board=document.getElementById("hlBoard");
  document.getElementById("hlNote").innerHTML=t.hl_note;
  let list=HL.filter(m=>{
    if(HL_COMP!=="*" && hlCompOf(m)!==HL_COMP) return false;
    if(HL_FILTER==="relive" && !m.full) return false;
    if(HL_FILTER==="top80"){ var _w=m.analyse&&m.analyse.spielnote&&m.analyse.spielnote.wert; if(!(_w>=8)) return false; }
    if(HL_Q){const q=HL_Q.toLowerCase(); if(!((m.h+" "+m.a).toLowerCase().includes(q))) return false;}
    return true;
  });
  document.getElementById("hlCount").textContent="["+list.length+"]";
  var _hlTotal=list.length; list=list.slice(0,HL_SHOWN);
  if(!list.length){board.innerHTML='<div class="empty">'+t.nohits+'</div>'; return;}
  let html="", curDate="";
  list.forEach(m=>{
    if(m.date!==curDate){curDate=m.date; html+='<div class="daybar"><span class="d">'+locDate(m.date)+' 2026</span><span class="ln"></span></div>';}
    html+=hlRow(m,t);
  });
  board.innerHTML=html+smBtn("hl",_hlTotal,HL_SHOWN);
  /*hl-auto-open*/ const _hf=board.querySelector(".row");
  if(_hf){ _hf.classList.add("open"); const _hh=_hf.querySelector(".rowhead"); if(_hh) _hh.setAttribute("aria-expanded","true"); }
}
const YT_PLAY_SVG='<svg viewBox="0 0 68 48" aria-hidden="true"><path d="M66.5 7.7c-.8-3-2.5-5.4-5.5-6.2C55.6.1 34 0 34 0S12.4.1 7 1.5C4 2.3 2.3 4.7 1.5 7.7 0 13.1 0 24 0 24s0 10.9 1.5 16.3c.8 3 2.5 5.4 5.5 6.2C12.4 47.9 34 48 34 48s21.6-.1 27-1.5c3-.8 4.7-3.2 5.5-6.2C68 34.9 68 24 68 24s0-10.9-1.5-16.3z" fill="#f00"/><path d="M27 34.5l18-10.5-18-10.5z" fill="#fff"/></svg>';
function ytEmbed(id,label){
  return '<div class="ytembed" data-yt="'+id+'" role="button" tabindex="0" aria-label="'+(label||"Video")+'">'+
    '<img class="thumb" loading="lazy" src="https://i.ytimg.com/vi/'+id+'/hqdefault.jpg" alt="">'+
    '<span class="pbtn">'+YT_PLAY_SVG+'</span>'+
    (label?'<span class="plabel">'+label+'</span>':'')+'</div>';
}
function ytEmbedPlay(el){
  if(!el||el.dataset.loaded) return;
  var id=el.getAttribute("data-yt"); if(!id) return;
  el.dataset.loaded="1";
  el.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
}
document.addEventListener("click",function(e){var el=e.target.closest?e.target.closest(".ytembed[data-yt]"):null; if(el) ytEmbedPlay(el);});
document.addEventListener("keydown",function(e){if(e.key!=="Enter"&&e.key!==" ")return; var el=e.target.closest?e.target.closest(".ytembed[data-yt]"):null; if(el){e.preventDefault(); ytEmbedPlay(el);}});
function hlRow(m,t){
  const tot=hlGoals(m.s);
  // Zusammenfassungen
  let sums="";
  const deMkt=(COUNTRY==="DE"||COUNTRY==="AT"||COUNTRY==="CH");
  if(m.magenta) sums+='<div class="sumrow"><span class="slabel magenta">MagentaTV</span><span class="sname">YouTube · Highlights</span><span class="sright"><a class="swatch" href="'+m.magenta+'" target="_blank" rel="noopener noreferrer">'+t.hl_watch+' ↗</a></span></div>';
  if(deMkt && m.kicker) sums+='<div class="sumrow"><span class="slabel kicker">kicker</span><span class="sname">kicker.de · Highlights</span>'+
    '<span class="sright"><a class="swatch" href="'+m.kicker+'" target="_blank" rel="noopener">'+t.hl_watch+' ↗</a></span></div>';
  if(deMkt && m.zdf) sums+='<div class="sumrow"><span class="slabel zdf">ZDF</span><span class="sname">sportstudio · '+t.hl_checked+'</span>'+
    '<span class="sright"><span class="slen">'+locMin(m.zdf[0])+'</span><a class="swatch" href="'+m.zdf[1]+'" target="_blank" rel="noopener">'+t.hl_watch+' ↗</a></span></div>';
  function hlTok(n){ var w=String(n||"").replace(/\b(FC|SK|SV|RW|AFC|NK|FK|ASK|1\.|04|05|07|1907|1999)\b/g,"").trim().split(/\s+/).filter(Boolean); if(!w.length) return String(n||""); return w.reduce(function(a,b){return b.length>=a.length?b:a;},""); }
  const hlQ=encodeURIComponent(hlTok(m.h)+" "+hlTok(m.a));
  const hlQF=encodeURIComponent(String(m.h||"")+" "+String(m.a||""));
  const hlYt=(typeof HL_YT!=="undefined"&&HL_YT[(m.h||"")+"|"+(m.a||"")])||{};
  const hlFam=String(m.g||"").indexOf("Testspiel")===0?"test":(/^(Champions League|Europa League|Conference League)/.test(String(m.g||""))?"cl":"wm");
  function srow(label,cls,name,href,direct){
    /* Regel: nur Direktlinks aufs Spiel - Ausnahme YouTube (Suche dort ist erlaubt) */
    if(!href) return "";
    if(!direct && !/^https?:\/\/(www\.)?youtube\.com\//.test(href)) return "";
    return '<div class="sumrow'+(direct?" is-direct":"")+'"><span class="slabel '+cls+'">'+label+'</span><span class="sname">'+name+(direct?' <span class="sdirect">'+(LANG==="de"?"direkt":"direct")+'</span>':"")+'</span>'+
    '<span class="sright"><a class="swatch" href="'+href+'" target="_blank" rel="noopener">'+t.hl_watch+' ↗</a></span></div>'; }
  /* 1. verifizierte Direktlinks aufs Spiel */
  hlDirect(m).forEach(function(d){ sums+=srow(d[0],"yt",d[1],d[2],true); });
  /* 2. spielgenaue Suche ueber alle YouTube-Kanaele */
  sums+=srow("YT","yt","YouTube · Suche zum Spiel","https://www.youtube.com/results?search_query="+hlQF+"+Highlights");
  if(hlFam==="wm"){
    /* WM: Rechtehalter-Quellen, matchspezifisch verlinkt */
    (HL_SRC[COUNTRY]||HL_SRC._en).forEach(function(s){ sums+=srow(s[0],(s[3]||""),s[1],String(s[2]).replace("{q}",hlQ)); });
    sums+=srow("MAG","yt","MagentaTV · Clips (YouTube)", hlYt.m||("https://www.youtube.com/@MagentaSport/search?query="+hlQ));
    sums+=srow("KIC","yt","kicker (YouTube)", hlYt.k||("https://www.youtube.com/@kicker/search?query="+hlQ));
  } else if(hlFam==="cl"){
      sums+=srow("OF","","OneFootball · Highlights & Re-Live","https://onefootball.com/de/suche?q="+hlQ);
      sums+=srow("UEF","","UEFA.tv · Suche zum Spiel","https://www.uefa.tv/search?query="+hlQ);
    /* CL-Quali: keine dt. Quellen – Sky Austria & ORF haben die Clips */
    sums+=srow("SKY","yt","Sky Sport Austria · Highlights (YouTube)", hlYt.k||("https://www.youtube.com/@SkySportAustria/search?query="+hlQ));
    sums+=srow("ORF","","ORF ON · Suche zum Spiel","https://on.orf.at/suche?q="+hlQ);
  } else {
    /* Testspiele: die tatsächlichen Übertragungs-Sender des Spiels (aus dem Spielplan), plus Direktvideo falls verifiziert */
    var HL_SENDER_DEEP={"skysport.de / YouTube":"https://www.youtube.com/@skysportde/search?query={q}",
      "HSVtv / YouTube":"https://www.youtube.com/@hsv/search?query={q}",
      "Juventus.com / App":"https://www.youtube.com/@juventus/search?query={q}",
      "BVB-TV":"https://www.youtube.com/@bvb/search?query={q}",
      "FC Bayern TV PLUS":"https://fcbayern.com/fcbayerntv/de/suche?q={q}"};
    var mm=(typeof MATCHES!=="undefined")?MATCHES.find(function(x){return x.h===m.h&&x.a===m.a&&x.tv;}):null;
    var senders=(mm&&mm.tv&&(mm.tv.DE||mm.tv.AT||mm.tv.CH))||[];
    var seen={};
    senders.forEach(function(sd){ if(!sd||!sd.n||seen[sd.n]) return; seen[sd.n]=1;
      var pat=HL_SENDER_DEEP[sd.n]; if(!pat) return;   /* nur spielgenaue Links, keine Kanal-Startseiten */
        var href=pat.replace("{q}",hlQ);
      sums+=srow(sd.n.slice(0,3).toUpperCase(), (href.indexOf("youtube")>=0?"yt":""), sd.n+(href.indexOf("search?query")>=0?" · Highlights":""), href);
    });
    if(hlYt.k) sums+=srow("VID","yt","Highlights · Direktvideo", hlYt.k);
    if(!senders.length) sums+=srow("YT","yt","YouTube-Suche zum Spiel","https://www.youtube.com/results?search_query="+hlQ+"+highlights");
  }
  // Komplettes Spiel — nur zeigen, wenn es kostenlos (Free-TV/Relive) nachschaubar ist
  let full="";
  if(m.full){
    full='<div class="dh">'+t.hl_full+'</div>'+
      '<a class="fullm" href="'+m.full[3]+'" target="_blank" rel="noopener">'+
      '<span class="fic">▶</span><span class="ftx"><b>'+t.hl_whole+'</b><span>'+t.hl_free_stream+'</span></span>'+
      '<span class="fmeta"><b>'+m.full[0]+'</b>'+(m.full[1]?locMin(m.full[1])+' · ':'')+locAvail(m.full[2])+'</span></a>';
  }
  const share = shareBar(m.h+" "+m.s+" "+m.a, m.h+" "+m.s+" "+m.a+" · "+(LANG==="de"?"Highlights & Relive":"highlights & replay")+" (TVFussball.de)", m.full?m.full[3]:(m.zdf?m.zdf[1]:"https://tvfussball.de"));
  return '<div class="row"'+tintStyle(m)+' data-hl="'+esc(hlKey(m))+'">'+
    '<button class="rowhead" aria-expanded="false">'+
      '<div class="time">'+m.s+'<small>'+t.ft+'</small>'+hlNote(m)+'</div>'+
      '<div class="teams">'+
        '<div class="t"><span class="flag">'+flag(m.h)+'</span><span>'+m.h+'</span></div>'+
        '<div class="t" style="margin-top:3px"><span class="flag">'+flag(m.a)+'</span><span>'+m.a+'</span></div>'+
        '<div class="meta"><span class="comp">'+locComp(m.g)+'</span><span class="freebest pay">'+locDate(m.date)+'</span>'+
          (tot>=3?'<span class="freebest tv">'+tot+' '+t.goals+'</span>':"")+
          (m.full?'<span class="freebest radio">▶ '+t.f_relive+'</span>':"")+'</div>'+
      '</div><div class="rh-right"><span class="chev">'+CHEV+'</span></div>'+
    '</button>'+
    '<div class="panel"><div class="panel-in"><div class="panel-pad">'+
      '<div class="dh">'+t.hl_summaries+'</div><div class="chlist">'+sums+'</div>'+
      full+
      renderAnalyse(m,t)+
      share+
    '</div></div></div>'+
  '</div>';
}

/* ---------- Transfer-Center ---------- */
const LEAGUES={
  bl1:{name:"Bundesliga",short:"BL",color:"#d20515"},
  bl2:{name:"2. Bundesliga",short:"BL2",color:"#e2661f"},
  pl:{name:"Premier League",short:"PL",color:"#37003c"},
  ll:{name:"LaLiga",short:"LL",color:"#ee8707"},
  sa:{name:"Serie A",short:"SA",color:"#008fd7"},
  l1:{name:"Ligue 1",short:"L1",color:"#0a1c3e"},
  ere:{name:"Eredivisie",short:"ERE",color:"#e4002b"},
  pt:{name:"Primeira Liga",short:"PT",color:"#006543"},
  spl:{name:"Saudi Pro League",short:"SPL",color:"#006c35"},
  tsl:{name:"S\u00fcper Lig",short:"TR",color:"#e30a17"},
  mls:{name:"MLS",short:"MLS",color:"#1a1f71"},
  misc:{name:"Weitere Ligen",short:"INT",color:"#5A6B86"}
};
const LEAGUE_ORDER=["bl1","bl2","pl","ll","sa","l1","ere","pt","spl","tsl","mls","misc"];
const CLUB_COL={
  "Bayern München":"#dc052d","Borussia Dortmund":"#f4c400","Bayer Leverkusen":"#b1080f","Eintracht Frankfurt":"#e1000f","VfL Wolfsburg":"#65b32e","Bor. Mönchengladbach":"#00a859","RB Leipzig":"#d4023a","SC Freiburg":"#e1000f","1. FC Köln":"#e2001a","TSG Hoffenheim":"#1c63b7","Union Berlin":"#d4011d","Werder Bremen":"#169b62","Hamburger SV":"#003da5","VfB Stuttgart":"#e32219","Schalke 04":"#004d9d","SV Elversberg":"#c8102e","Hertha BSC":"#005ca9",
  "Manchester City":"#6cabdd","Tottenham":"#132257","Newcastle":"#241f20","Arsenal":"#ef0107","Brighton":"#0057b8","West Ham":"#7a263a","Nottingham Forest":"#dd0000","Burnley":"#6c1d45","Manchester United":"#da291c","Bournemouth":"#d31920","Chelsea":"#034694","Liverpool":"#c8102e",
  "FC Barcelona":"#a50044","Atlético Madrid":"#cb3524","Real Madrid":"#00529f",
  "Paris SG":"#004170","Olympique Marseille":"#2faee0","Paris FC":"#12235e","AS Monaco":"#e51b22","RC Lens":"#ffed00",
  "AC Milan":"#fb090b","Juventus":"#111111","Napoli":"#12a0d7","Inter":"#0b1560","Lazio":"#5aa7dc","Fiorentina":"#59319c","Udinese":"#1a1a1a","Genoa":"#c8102e",
  "PSV Eindhoven":"#ed1c24","FC Utrecht":"#e5001a","Feyenoord":"#e30613",
  "Sporting Braga":"#b3151a","Hammarby IF":"#00A651","Hradec Králové":"#111111","Tromsø IL":"#E2001A","Twente Enschede":"#E2001A","FC Midtjylland":"#111111","Pafos FC":"#0057B8","Maccabi Tel Aviv":"#FFD200","FC St. Gallen":"#00843D","Benfica Lissabon":"#E2001A","PAOK Saloniki":"#111111","RSC Anderlecht":"#4d1f8c","Club Brugge":"#0057b8","Besiktas":"#111111","Galatasaray":"#e00c17","Fenerbahce":"#00296b","Trabzonspor":"#8a1538","Orlando City":"#633492","RB Salzburg":"#d2001f","Sanfrecce Hiroshima":"#5a2d81",
  "Roma":"#8e1f2f","FC Porto":"#005bab","Sporting CP":"#008057","Atalanta":"#1d1d1b","Bologna":"#a81e2c","Cagliari":"#b01e28","Grêmio":"#0d80c1","AZ Alkmaar":"#d4021d","FC Twente":"#e2261b","OGC Nice":"#c8102e","Go Ahead Eagles":"#e2001a","CA Osasuna":"#0a346f","Toulouse":"#6a1f7a","Stade Rennes":"#e23026","Stade Reims":"#c81a2b","Ajax":"#d2122e","Strasbourg":"#0089cf","AIK":"#16223f","Middlesbrough":"#e21b22","Benfica":"#e2001a",
  "Aston Villa":"#670e36","Everton":"#003399","Ipswich":"#3a64a3","Sunderland":"#eb172b","Leeds":"#1d428a","Brentford":"#e30613","Fulham":"#111111","Crystal Palace":"#1b458f","Al-Hilal":"#003f7d","Al-Ittihad":"#f2a900","Al-Ahli":"#009639","Columbus Crew":"#fedd00","Los Angeles FC":"#111111","Sporting Kansas City":"#93b1d7","Inter Miami":"#f5b5cd","Chicago Fire":"#c8102e"
,
  "1. FC Heidenheim":"#e30613","1. FC Kaiserslautern":"#e2001a","1. FC Magdeburg":"#005ca9","1. FC Nürnberg":"#90192a","1. FC Phönix Lübeck":"#00843d","1. FC Saarbrücken":"#005ca9","1. FC Union Berlin":"#eb1923","1. FSV Mainz 05":"#c3141e","AC Florenz":"#5a2d81","AC Mailand":"#fb090b","AC Monza":"#ee0e33","AD Ceuta":"#111111","AFC Bournemouth":"#da291c","AFC Sunderland":"#eb172b","AJ Auxerre":"#005ca9","AS Rom":"#8e1f2f","Aarhus GF":"#005ca9","Algerien":"#006233","Aluminij":"#e2001a","Ararat-Armenia":"#d0103a","Argentinien":"#75aadb","Arminia Bielefeld":"#005ca9","Atalanta Bergamo":"#1e71b8","Atert Bissen":"#f7d000","Athletic Bilbao":"#ee2523","Australien":"#ffcd00","Bahlinger SC":"#e2001a","Bayer 04 Leverkusen":"#b1080f","Belgien":"#e30613","Betis Sevilla":"#00954c","Borac Banja Luka":"#e2001a","Borussia Mönchengladbach":"#009a3d","Bosnien-H.":"#002f6c","Bosnien-Herzegowina":"#002f6c","Brasilien":"#ffdf00","Brighton & Hove Albion":"#0057b8","CFC Genua":"#a21c26","Cagliari Calcio":"#b01028","Celta Vigo":"#8ac3ee","Cerezo Osaka":"#e75297","Como 1907":"#003057","Coventry City":"#59c2e2","Crvena Zvezda":"#e2001a","Curaçao":"#002b7f","DR Kongo":"#007fff","DSC Arminia Bielefeld":"#005ca9","Deportivo Alavés":"#143d8d","Deportivo La Coruña":"#005ca9","Derry City":"#c8102e","Deutschland":"#111111","Dinamo Zagreb":"#005ca9","Dynamo Dresden":"#fdc300","Dynamo Kiew":"#005ca9","ESTAC Troyes":"#005ca9","ETO Győr":"#00843d","Ecuador":"#ffd100","Egnatia":"#005ca9","Eintracht Braunschweig":"#f7d000","Elfenbeinküste":"#f77f00","Energie Cottbus":"#e2001a","England":"#c8102e","Espanyol Barcelona":"#007fc8","F.C. Hansa Rostock":"#005ca9","FC Arsenal":"#ef0107","FC Astoria Walldorf":"#005ca9","FC Augsburg":"#ba3733","FC Basel":"#d20a10","FC Bayern München":"#dc052d","FC Bologna":"#a21c26","FC Brentford":"#e30613","FC Carl Zeiss Jena":"#00457c","FC Chelsea":"#034694","FC Drita":"#005ca9","FC Elche":"#00843d","FC Energie Cottbus":"#e2001a","FC Erzgebirge Aue":"#6a2a8a","FC Everton":"#003399","FC Fulham":"#111111","FC Getafe":"#005999","FC Gießen":"#e2001a","FC Liverpool":"#c8102e","FC Lorient":"#ff8f1c","FC Rottach-Egern":"#00843d","FC Schalke 04":"#004d9d","FC Sevilla":"#d8121a","FC St. Pauli":"#614434","FC Thun":"#e2001a","FC Toulouse":"#6a2a8a","FC Turin":"#8a1e03","FC Valencia":"#f7a800","FC Venedig":"#ff6b00","FC Viktoria Köln":"#e2001a","FC Villarreal":"#ffdd00","FC Winterthur":"#e2001a","FC Würzburger Kickers":"#e2001a","FSV Schöningen":"#005ca9","Fagiano Okayama":"#8c0f2f","Fenerbahçe":"#00296b","Ferencváros":"#0b6e4f","Flora Tallinn":"#00843d","Floriana":"#00843d","Fortuna Düsseldorf":"#e2001a","Frankreich":"#002395","Frosinone Calcio":"#ffd200","Ghana":"#fcd116","Górnik Zabrze":"#005ca9","HEBC Hamburg":"#c8102e","Haiti":"#00209f","Hajduk Split":"#0057b8","Hallescher FC":"#e2001a","Hannover 96":"#c8102e","Hapoel Be'er Sheva":"#e2001a","Heart of Midlothian":"#800910","Holstein Kiel":"#0a5ca8","Hull City":"#f5a12d","Iberia Tiflis":"#0057b8","Inter Escaldes":"#f7d000","Inter Mailand":"#0068a8","Ipswich Town":"#003c71","Irak":"#007a3d","Iran":"#da0000","Japan":"#003580","Jordanien":"#ce1126","Juventus Turin":"#111111","Kairat Almaty":"#ffd200","Kanada":"#e2001a","Kap Verde":"#003893","Karlsruher SC":"#00457c","Katar":"#8d1b3d","Kauno Žalgiris":"#00843d","Kolumbien":"#fcd116","Kroatien":"#e2001a","KuPS Kuopio":"#ffd200","KÍ Klaksvík":"#005ca9","Larne FC":"#e2001a","Lazio Rom":"#87d8f7","Le Havre AC":"#009fe3","Le Mans FC":"#ffd200","Lech Posen":"#005ca9","Leeds United":"#ffcd00","Levski Sofia":"#005ca9","Lincoln Red Imps":"#e2001a","Linzer ASK":"#111111","Lüneburger SK Hansa":"#c8102e","MSK Žilina":"#ffd200","MSV Duisburg":"#005ca9","Marokko":"#c1272d","Mexiko":"#006847","Mjällby AIF":"#00a651","Málaga CF":"#2d9bd6","NK Celje":"#ffd200","Neuseeland":"#111111","Newcastle United":"#241f20","Niederlande":"#f36c21","Norwegen":"#ba0c2f","OGC Nizza":"#c8102e","OSC Lille":"#e01e13","Olympique Lyon":"#14387f","Omonia Nikosia":"#00843d","Panama":"#da121a","Paraguay":"#d52b1e","Paris Saint-Germain":"#004170","Parma Calcio":"#ffd200","Petrocub":"#ffd200","Portugal":"#d20a11","Qarabağ Agdam":"#0a4d8c","RC Straßburg":"#009fe3","RW Oberhausen":"#e2001a","Racing Santander":"#00913d","Rayo Vallecano":"#e2001a","Real Betis":"#00954c","Real Sociedad":"#0067b1","Riga FC":"#111111","Rot-Weiss Essen":"#e2001a","SC Paderborn":"#005ca9","SC Paderborn 07":"#005ca9","SC Preußen Münster":"#00843d","SC St. Tönis 1911/20":"#005ca9","SC Verl":"#00a651","SCO Angers":"#111111","SG Dynamo Dresden":"#fdc300","SG Sonnenhof Großaspach":"#005ca9","SK Rapid Wien":"#00843d","SSC Neapel":"#12a0d7","SSV Jeddeloh":"#005ca9","SV Darmstadt 98":"#1a5dad","SV Eintracht Trier":"#005ca9","SV Hemelingen":"#00843d","SV Waldhof Mannheim":"#1e5cb3","SV Wehen Wiesbaden":"#e2001a","SV Werder Bremen":"#1d9053","SV Westfalia Rhynern":"#111111","Sabah FC":"#111111","Saudi-Arabien":"#006c35","Schottland":"#0065bf","Schweden":"#ffcd00","Schweiz":"#da291c","Senegal":"#00853f","Shamrock Rovers":"#00843d","Sheriff Tiraspol":"#ffd200","Slovan Bratislava":"#6cace4","SpVgg Greuther Fürth":"#009a3d","Spanien":"#c60b1e","Stade Brest":"#e2001a","Sturm Graz":"#111111","Sutjeska Nikšić":"#005ca9","Südafrika":"#007a4d","Südkorea":"#cd2e3a","TSG 1899 Hoffenheim":"#1961b5","TSV 1860 München":"#1e73be","TSV Schott Mainz":"#005ca9","The New Saints":"#00843d","Tottenham Hotspur":"#132257","Tre Fiori":"#f7d000","Tschechien":"#d7141a","Tunesien":"#e70013","Türkei":"#e30a17","UD Levante":"#b4053f","US Lecce":"#f7d000","US Sassuolo":"#00a752","USA":"#002868","Udinese Calcio":"#111111","Universitatea Cluj":"#111111","Universitatea Craiova":"#005ca9","Uruguay":"#5cb3e4","Usbekistan":"#0099b5","VSG Altglienicke Berlin":"#00843d","Vardar Skopje":"#e2001a","Vestri":"#005ca9","VfB 1921 Krieschow":"#005ca9","VfL Bochum":"#005ca9","VfL Osnabrück":"#6a2a8a","Vitebsk":"#005ca9","Vojvodina":"#e2001a","Víkingur Reykjavík":"#c8102e","WSG Tirol":"#00843d","Wrexham AFC":"#e2001a","ZSKA Sofia":"#e2001a","Ägypten":"#ce1126","Österreich":"#ed2939"
,
  "Ajax Amsterdam":"#d2122e","Al Ahly":"#e30613","Angers SCO":"#111111","BSC Young Boys":"#ffd500","Beşiktaş":"#111111","Brøndby IF":"#ffd800","Club Brügge":"#0057b8","FC Burnley":"#6c1d45","FC Girona":"#d50032","FC-Astoria Walldorf":"#005ca9","Girona":"#d50032","Grasshopper Zürich":"#0057b8","Istanbul Basaksehir":"#16345c","Jagiellonia Białystok":"#ffd200","KRC Genk":"#005ca9","Leicester City":"#003090","Newell’s Old Boys":"#e2001a","River Plate":"#e2001a","Royal Antwerp FC":"#e2001a","Sporting Lissabon":"#008457","Union Saint-Gilloise":"#ffd800","VV St. Truiden":"#ffd200","Çorum FK":"#e2001a"
};
function clubColor(n){ if(CLUB_COL[n]) return CLUB_COL[n]; var h=0; for(var i=0;i<n.length;i++){h=(h*31+n.charCodeAt(i))>>>0;} return "hsl("+(h%360)+" 42% 52%)"; }
function fmtM(n){ var s=(Math.round(n*10)/10).toString(); if(LANG==="de") s=s.replace(".",","); return s; }

function trDirIcon(key){
  var up=(TR_SORT===key && TR_DIR==="asc");
  return '<span class="tdir" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">'+(up?'<path d="M12 19V6M7 11l5-5 5 5"/>':'<path d="M12 5v13M7 13l5 5 5-5"/>')+'</svg></span>';
}
/* ---------- Render: News ---------- */
const NEWS_OWN=new Set(["DE","AT","CH","ES","FR","UK","IT"]);
function newsRelevant(n){ const mk=n.mkt;
  if(mk){ if(mk.indexOf("*")>=0) return true; if(mk.indexOf(COUNTRY)>=0) return true; if(mk.indexOf("EN")>=0 && !NEWS_OWN.has(COUNTRY)) return true; return false; }
  return COUNTRY==="DE"||COUNTRY==="AT"||COUNTRY==="CH"; }
function mono(s){const w=s.replace(/[^A-Za-z0-9 ]/g," ").split(" ").filter(Boolean);
  if(w.length>=2) return (w[0][0]+w[1][0]).toUpperCase(); return s.replace(/[^A-Za-z0-9]/g,"").slice(0,2).toUpperCase();}

/* ---------- Render: Providers ---------- */
function renderProvFilters(){ const t=I18N[LANG];
  const defs=[["all",t.f_all],["DE","DE"],["AT","AT"],["CH","CH"],["UK","UK"],["free",t.best_free],["pay","Pay"],["Bundesliga","Bundesliga"],["Champions League","CL"],["WM 2026","WM 2026"],["Premier League","PL"]];
  document.getElementById("provFilters").innerHTML = defs.map(d=>
    '<button class="fchip" data-provf="'+d[0]+'" aria-pressed="'+(PROV_FILTER===d[0])+'">'+d[1]+'</button>').join("");
}
function renderProviders(){
  const t=I18N[LANG], box=document.getElementById("provList");
  const fmt = p => p.kind==="free" ? (LANG==="de"?"kostenlos":"free") : (p.price.indexOf("ab ")===0 ? t.price_from+" "+t.price_approx+" "+p.price.slice(3) : t.price_approx+" "+p.price);
  document.getElementById("provNote").textContent=t.prov_note;
  let list=PROVIDERS.filter(p=>{
    const f=PROV_FILTER;
    if(f && f!=="all"){
      if(["DE","AT","CH","UK"].includes(f)){ if(!p.countries.includes(f)) return false; }
      else if(f==="free"||f==="pay"){ if(p.kind!==f) return false; }
      else { if(!p.comps.includes(f)) return false; }
    }
    if(PROV_Q){ const q=PROV_Q.toLowerCase();
      if(!((p.name+" "+p[LANG]+" "+p.comps.join(" ")+" "+p.countries.join(" ")+" "+p.kind).toLowerCase().includes(q))) return false; }
    return true;
  });
  document.getElementById("provCount").textContent="["+list.length+"]";
  if(!list.length){box.innerHTML='<div class="empty">'+t.nohits+'</div>'; return;}
  box.innerHTML=list.map(p=>{
    const badge=p.kind==="free"?'<span class="tag fta">'+t.p_free+'</span>':'<span class="tag pay">'+t.p_pay+'</span>';
    const comps='<div class="pcomps">'+p.comps.map(c=>'<span class="pcomp">'+c+'</span>').join("")+'</div>';
    return '<div class="pcard"><div class="phead">'+
      '<div class="plogo '+(p.kind==="free"?"free":"")+'">'+mono(p.name)+'</div>'+
      '<div style="min-width:0"><div class="pname">'+p.name+'</div><div class="pcc">'+p.countries.join(" · ")+'</div></div>'+badge+'</div>'+
      '<p>'+p[LANG]+'</p>'+comps+
      '<div class="pfoot"><div class="pprice">'+fmt(p)+'<small>'+p.sub+'</small><small class="pcheck">'+t.prov_check+' ↗</small></div>'+
        '<a class="pvisit" href="'+p.url+'" target="_blank" rel="noopener">'+t.visit+' ↗</a></div></div>';
  }).join("");
}

/* ---------- i18n / theme ---------- */
function applyLang(){
  const t=I18N[LANG];
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n; if(t[k]) el.textContent=t[k];});
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{const k=el.dataset.i18nPh; if(t[k]) el.placeholder=t[k];});
  document.documentElement.lang=LANG;
  document.getElementById("hlSearch").placeholder = LANG==="de"?"Mannschaft suchen … (z. B. Frankreich)":"Search team … (e.g. France)";
  document.getElementById("liveSearch").placeholder = LANG==="de"?"Weitere Wettbewerbe oder Teams suchen …":"Search other competitions or teams …";

  document.getElementById("provSearch").placeholder = LANG==="de"?"Anbieter, Wettbewerb oder Land suchen …":"Search provider, competition or country …";

  if(LEGAL_CUR && document.getElementById("legalOv").classList.contains("show")) openLegal(LEGAL_CUR);
}
const ICON_MOON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 13.3A8 8 0 1 1 10.7 3.5a6.3 6.3 0 0 0 9.8 9.8z"/></svg>';
const ICON_SUN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.3M12 19.2v2.3M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.3M19.2 12h2.3M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>';
function setTheme(th){ document.documentElement.dataset.theme=th; const b=document.getElementById("themeToggle"); if(b) b.innerHTML=th==="dark"?ICON_SUN:ICON_MOON; lsSet(LS_KEY.theme, JSON.stringify(th)); }

let TOAST_TIMER;
function toast(msg){ const el=document.getElementById("toast"); el.textContent=msg; el.classList.add("show");
  clearTimeout(TOAST_TIMER); TOAST_TIMER=setTimeout(()=>el.classList.remove("show"),1900); }
function icsPad(n){return String(n).padStart(2,"0");}
function icsRange(day,time){
  const dm=String(day).match(/(\d{2})\.(\d{2})\.(\d{4})/), tm=String(time).match(/(\d{1,2}):(\d{2})/);
  if(!dm||!tm) return null;
  const start=new Date(Date.UTC(+dm[3],+dm[2]-1,+dm[1],+tm[1],+tm[2]));
  const end=new Date(start.getTime()+120*60000);
  const f=d=>d.getUTCFullYear()+icsPad(d.getUTCMonth()+1)+icsPad(d.getUTCDate())+"T"+icsPad(d.getUTCHours())+icsPad(d.getUTCMinutes())+"00";
  return {s:f(start), e:f(end)};
}
function icsEsc(t){return String(t||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\n/g,"\\n");}
const ICS_TZ=["BEGIN:VTIMEZONE","TZID:Europe/Berlin",
 "BEGIN:DAYLIGHT","TZOFFSETFROM:+0100","TZOFFSETTO:+0200","TZNAME:CEST","DTSTART:19700329T020000","RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU","END:DAYLIGHT",
 "BEGIN:STANDARD","TZOFFSETFROM:+0200","TZOFFSETTO:+0100","TZNAME:CET","DTSTART:19701025T030000","RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU","END:STANDARD",
 "END:VTIMEZONE"];
function addToCalendar(d){
  const t=I18N[LANG], r=icsRange(d.day,d.time);
  if(!r){ toast(LANG==="de"?"Termin konnte nicht erstellt werden":"Could not create event"); return; }
  const now=new Date();
  const fz=x=>x.getUTCFullYear()+icsPad(x.getUTCMonth()+1)+icsPad(x.getUTCDate())+"T"+icsPad(x.getUTCHours())+icsPad(x.getUTCMinutes())+icsPad(x.getUTCSeconds())+"Z";
  const uid=r.s+"-"+(d.h+d.a).replace(/[^A-Za-z0-9]/g,"")+"@tvfussball.de";
  const sum="⚽ "+d.h+" – "+d.a;
  const desc=(d.comp||"")+(d.ch?" · "+(LANG==="de"?"Sender":"Channel")+": "+d.ch:"")+" — TVFussball.de";
  let lines=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//TVFussball.de//Spielplan//DE","CALSCALE:GREGORIAN","METHOD:PUBLISH"]
    .concat(ICS_TZ)
    .concat(["BEGIN:VEVENT","UID:"+uid,"DTSTAMP:"+fz(now),
      "DTSTART;TZID=Europe/Berlin:"+r.s,"DTEND;TZID=Europe/Berlin:"+r.e,
      "SUMMARY:"+icsEsc(sum),"DESCRIPTION:"+icsEsc(desc)]);
  if(d.ch) lines.push("LOCATION:"+icsEsc(d.ch));
  lines=lines.concat(["BEGIN:VALARM","TRIGGER:-PT15M","ACTION:DISPLAY","DESCRIPTION:"+icsEsc(sum),"END:VALARM","END:VEVENT","END:VCALENDAR"]);
  const blob=new Blob([lines.join("\r\n")],{type:"text/calendar;charset=utf-8"});
  const url=URL.createObjectURL(blob), a=document.createElement("a");
  a.href=url; a.download=(d.h+"-"+d.a).replace(/[^A-Za-z0-9ÄÖÜäöüß]+/g,"_")+".ics";
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url),1500);
  toast(t.cal_done);
}
async function doShare(btn){
  const t=I18N[LANG];
  const title=btn.dataset.shareTitle||"TVFussball.de";
  const text=btn.dataset.shareText||title;
  const url=btn.dataset.shareUrl||"https://tvfussball.de";
  if(navigator.share){
    try{ await navigator.share({title,text,url}); return; }
    catch(err){ if(err && err.name==="AbortError") return; }
  }
  try{ await navigator.clipboard.writeText(text+" "+url); }catch(_){}
  toast(t.shared);
  btn.classList.add("done");
  const lbl=btn.querySelector("span"); const old=lbl.textContent; lbl.textContent=t.shared_btn;
  setTimeout(()=>{ btn.classList.remove("done"); lbl.textContent=old; },1800);
}

/* ---------- Render: Abo-Rechner ---------- */
function eur(n){ const s=Number(n).toFixed(2); return (LANG==="de"?s.replace(".",","):s)+" €"; }
function aboReqCarriers(c){ return c.carriers.filter(ca=>ca.req!==false); }
function aboBestCombo(selIds){
  const provIds=Object.keys(ABO_PROVIDERS), comps=ABO_COMPS.filter(c=>selIds.includes(c.id));
  if(!comps.length) return null;
  const n=provIds.length; let best=null;
  for(let mask=0; mask<(1<<n); mask++){
    const chosen=[]; for(let i=0;i<n;i++) if(mask&(1<<i)) chosen.push(provIds[i]);
    if(!comps.every(c=>aboReqCarriers(c).some(ca=>chosen.includes(ca.p)))) continue; // jeder Wettbewerb braucht ≥1 Carrier
    const cost=chosen.reduce((s,p)=>s+ABO_PROVIDERS[p].price,0);
    if(!best || cost<best.cost || (cost===best.cost && chosen.length<best.chosen.length)) best={chosen,cost};
  }
  return best;
}
function aboCompCoverage(c, chosen){
  const reqIn=c.carriers.filter(ca=>ca.req!==false && chosen.includes(ca.p));
  const cov=reqIn.some(ca=>ca.cov==="full")?"full":"part";
  const viaFree=reqIn.some(ca=>ABO_PROVIDERS[ca.p].free);
  let hint=null;
  if(cov!=="full"){
    const fullC=c.carriers.find(ca=>ca.cov==="full" && ca.req!==false && !chosen.includes(ca.p));
    if(fullC) hint=[fullC.p];
    else { const miss=c.carriers.filter(ca=>ca.req!==false && !chosen.includes(ca.p)).map(ca=>ca.p); if(miss.length) hint=miss; }
  }
  return {cov,viaFree,hint};
}
function aboLink(p){ return (AFFILIATE_ENABLED && p.aff) ? p.aff : p.url; }
function renderAbo(){
  const t=I18N[LANG], chipsEl=document.getElementById("aboChips"), res=document.getElementById("aboRes");
  if(!chipsEl||!res) return;
  chipsEl.innerHTML = ABO_COMPS.map(c=>{ const on=!!ABO_SEL[c.id];
    return '<button class="abo-chip" data-aboc="'+c.id+'" aria-pressed="'+on+'">'+(on?'<span class="ck">✓</span>':'')+c.name[LANG]+'</button>'; }).join("");
  const sel=ABO_COMPS.filter(c=>ABO_SEL[c.id]).map(c=>c.id);
  if(!sel.length){ res.innerHTML='<div class="abo-empty">'+t.abo_pick_none+'</div>'; return; }
  const best=aboBestCombo(sel), chosen=best.chosen;
  const ordered=chosen.slice().sort((a,b)=>ABO_PROVIDERS[b].price-ABO_PROVIDERS[a].price); // teuerste zuerst, gratis zuletzt
  let html="";
  if(best.cost<=0) html+='<div class="abo-totbar free"><span class="abo-totlbl">'+t.abo_total+'</span><span class="abo-tot free">'+t.abo_free_only+'</span></div>';
  else html+='<div class="abo-totbar"><span class="abo-totlbl">'+t.abo_total+'</span><span class="abo-tot">'+eur(best.cost)+'<small> '+t.abo_month+'</small></span></div>';
  html+='<div class="abo-need">'+t.abo_need+'</div>';
  ordered.forEach(pid=>{ const p=ABO_PROVIDERS[pid];
    html+='<div class="abo-prov"><div class="abo-plogo'+(p.free?' free':'')+'">'+mono(p.name)+'</div>'+
      '<div class="abo-pmid"><div class="abo-pname">'+p.name+'</div><div class="abo-pnote">'+p.note[LANG]+'</div></div>'+
      '<div class="abo-pprice'+(p.free?' free':'')+'">'+(p.free?(LANG==="de"?"gratis":"free"):eur(p.price)+" "+t.abo_month)+'</div></div>'; });
  html+='<div class="abo-cov">';
  sel.forEach(id=>{ const c=ABO_COMPS.find(x=>x.id===id), cv=aboCompCoverage(c,chosen);
    const pill=cv.viaFree?'<span class="abo-pill free">'+t.fta+'</span>':(cv.cov==="full"?'<span class="abo-pill full">'+t.abo_full+'</span>':'<span class="abo-pill part">'+t.abo_partial+'</span>');
    let row='<div class="abo-covrow"><span class="cn">'+c.name[LANG]+'</span>'+pill;
    if(cv.hint&&cv.hint.length){ row+='<span class="abo-hint">↳ '+t.abo_complete+' '+cv.hint.map(p=>ABO_PROVIDERS[p].name).join(" + ")+'</span>'; }
    html+=row+'</div>'; });
  html+='</div>';
  const freeComps=sel.map(id=>ABO_COMPS.find(x=>x.id===id)).filter(c=>aboCompCoverage(c,chosen).viaFree);
  if(freeComps.length) html+='<div class="abo-covrow" style="margin-top:10px"><span class="abo-pill free">'+t.fta+'</span><span class="cn">'+t.abo_free_keeps+': '+freeComps.map(c=>c.name[LANG]).join(", ")+'</span></div>';
  html+='<div class="abo-foot">';
  ordered.forEach(pid=>{ const p=ABO_PROVIDERS[pid];
    html+='<a class="abo-visit'+(p.free?' free':'')+'" href="'+aboLink(p)+'" target="_blank" rel="noopener nofollow sponsored">'+t.abo_visit+': '+p.name+' ↗</a>'; });
  html+='<button class="abo-reset" id="aboReset">'+t.abo_reset+'</button></div>';
  html+='<div class="abo-affnote">'+t.abo_aff_note+'</div>';
  res.innerHTML=html;
}

/* ---------- Preisdeal-Wecker ---------- */
const WECKER_KEY="tvf_dealwecker";
const WECKER_SEL=new Set();
let WECKER_DONE=false, WECKER_MAIL="";
const WECKER_TO="patrick.uhl1988@googlemail.com";
function weckerLoad(){ try{ const r=JSON.parse(localStorage.getItem(WECKER_KEY)||"null");
  if(r){ WECKER_MAIL=r.email||""; (r.providers||[]).forEach(p=>WECKER_SEL.add(p)); WECKER_DONE=!!r.done; } }catch(e){} }
function weckerSave(done){ try{ localStorage.setItem(WECKER_KEY, JSON.stringify({email:WECKER_MAIL, providers:[...WECKER_SEL], done:!!done, ts:Date.now()})); }catch(e){} }
function emailOK(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v||"").trim()); }
function renderWecker(){
  const t=I18N[LANG], box=document.getElementById("weckerBox"); if(!box) return;
  const pays=PROVIDERS.filter(p=>p.kind==="pay");
  let html='<div class="wk-h"><span class="em">\uD83D\uDD14</span><span>'+t.wk_title+'</span><span class="wk-soon">'+t.wk_soon+'</span></div>'+
    '<p class="wk-sub">'+t.wk_sub+'</p>';
  if(WECKER_DONE){
    html+='<div class="wk-done"><span class="wk-ic">\u2705</span><div><b>'+t.wk_done_t+'</b><span>'+t.wk_done_s+'</span></div></div>'+
      '<button class="wk-change" id="wkChange">'+t.wk_change+'</button>';
    box.innerHTML=html; return;
  }
  html+='<div class="wk-pick">'+t.wk_pick+'</div><div class="wk-chips">'+
    pays.map(p=>{ const on=WECKER_SEL.has(p.name);
      return '<button class="wk-chip" data-wk="'+esc(p.name)+'" aria-pressed="'+on+'"><span class="ck">\u2713</span>'+esc(p.name)+'</button>'; }).join("")+
    '</div>'+
    '<div class="wk-form"><input id="wkEmail" class="wk-email" type="email" inputmode="email" autocomplete="email" placeholder="'+esc(t.wk_email_ph)+'" value="'+esc(WECKER_MAIL)+'">'+
    '<button class="wk-btn" id="wkSubmit">'+t.wk_btn+'</button></div>'+
    '<p class="wk-priv">'+t.wk_priv+'</p>';
  box.innerHTML=html;
}
function weckerSubmit(){
  const t=I18N[LANG], inp=document.getElementById("wkEmail");
  const mail=inp?inp.value.trim():"";
  if(WECKER_SEL.size===0){ toast(t.wk_need_prov); return; }
  if(!emailOK(mail)){ toast(t.wk_need_mail); if(inp) inp.focus(); return; }
  WECKER_MAIL=mail;
  const sel=[...WECKER_SEL];
  const body=t.wk_mail_l1+"\n\n"+t.wk_mail_prov+" "+sel.join(", ")+"\n"+t.wk_mail_mail+" "+mail+"\n\n"+t.wk_mail_foot;
  weckerSave(true); WECKER_DONE=true; renderWecker();
  location.href="mailto:"+WECKER_TO+"?subject="+encodeURIComponent(t.wk_mail_subject)+"&body="+encodeURIComponent(body);
}
function renderAll(){ renderBlHintTop(); renderLiveFilters(); renderLive(); renderHLFilters(); renderHL(); renderProvFilters(); renderProviders(); renderAbo(); renderWecker(); applyLang(); }

/* ---------- Events ---------- */
document.addEventListener("keydown", e=>{
  const fav=e.target.closest&&e.target.closest("[data-follow]");
  if(fav && (e.key==="Enter"||e.key===" ")){ e.preventDefault(); e.stopPropagation();
    const team=fav.dataset.follow; FOLLOW.has(team)?FOLLOW.delete(team):FOLLOW.add(team); saveFollow();
    renderLiveFilters(); renderLive(); }
});
document.addEventListener("click", e=>{
  if(e.target.closest(".tstrength-pop")){ e.preventDefault(); e.stopPropagation(); return; }
  var _tstr=e.target.closest(".tstrength");
  document.querySelectorAll(".tstrength.open").forEach(function(o){ if(o!==_tstr){ o.classList.remove("open"); o.setAttribute("aria-expanded","false"); } });
  if(_tstr){ e.preventDefault(); e.stopPropagation(); var _op=_tstr.classList.toggle("open"); _tstr.setAttribute("aria-expanded",_op?"true":"false"); return; }
  const ca=e.target.closest("[data-cal]");
  if(ca){ addToCalendar(ca.dataset); return; }
  const sh=e.target.closest("[data-share]");
  if(sh){ doShare(sh); return; }
  const fol=e.target.closest("[data-follow]");
  if(fol){ const team=fol.dataset.follow; FOLLOW.has(team)?FOLLOW.delete(team):FOLLOW.add(team); saveFollow();
    renderLiveFilters(); renderLive(); return; }
  const ac=e.target.closest("[data-aboc]");
  if(ac){ const id=ac.dataset.aboc; if(ABO_SEL[id]) delete ABO_SEL[id]; else ABO_SEL[id]=true; renderAbo(); return; }
  const wk=e.target.closest("[data-wk]");
  if(wk){ const nm=wk.dataset.wk; if(WECKER_SEL.has(nm)){WECKER_SEL.delete(nm); wk.setAttribute("aria-pressed","false");} else {WECKER_SEL.add(nm); wk.setAttribute("aria-pressed","true");} return; }
  if(e.target.id==="wkSubmit" || e.target.closest("#wkSubmit")){ weckerSubmit(); return; }
  if(e.target.id==="wkChange" || e.target.closest("#wkChange")){ WECKER_DONE=false; weckerSave(false); renderWecker(); return; }
  if(e.target.id==="aboReset" || e.target.closest("#aboReset")){ Object.keys(ABO_SEL).forEach(k=>delete ABO_SEL[k]); renderAbo(); return; }
  const wopt=e.target.closest("[data-wq]");
  if(wopt){ wmAnswer(+wopt.dataset.wq, +wopt.dataset.wo); return; }
  const wlike=e.target.closest("[data-wm-like]");
  if(wlike){ const i=wlike.dataset.wmLike; WM_LIKES[i]=!WM_LIKES[i];
    wlike.classList.toggle("on",WM_LIKES[i]); wlike.querySelector("span").textContent=WM_LIKES[i]?1:0;
    wlike.firstChild.textContent=WM_LIKES[i]?"❤️ ":"🤍 "; return; }
  if(e.target.id==="wm-quizReset"){  return; }
  const lg=e.target.closest("[data-legal]");
  if(lg){ e.preventDefault(); openLegal(lg.dataset.legal); return; }
  if(e.target.id==="legalClose"||e.target.id==="legalOv"){ closeLegal(); return; }
  const head=e.target.closest(".rowhead");
  if(head){const row=head.closest(".row"); const willOpen=!row.classList.contains("open");
    if(willOpen){ const _bd=row.closest(".board"); if(_bd) _bd.querySelectorAll(".row.open").forEach(o=>{ if(o!==row){ o.classList.remove("open"); const oh=o.querySelector(".rowhead"); if(oh) oh.setAttribute("aria-expanded","false"); } }); }
    row.classList.toggle("open"); head.setAttribute("aria-expanded",willOpen); return;}
  const more=e.target.closest("[data-more]");
  if(more){const w=more.nextElementSibling; const show=w.classList.toggle("show");
    more.setAttribute("aria-expanded",show); const lbl=more.querySelector(".mlbl"); if(lbl){const lo=more.getAttribute("data-lo"),lc=more.getAttribute("data-lc"); lbl.textContent=show?(lc||I18N[LANG].less):(lo||I18N[LANG].more);} if(show&&more.hasAttribute("data-lineup")){try{loadLineup(w.querySelector(".lineupwrap"));}catch(_e){}} return;}
  const smb=e.target.closest("[data-showmore]");
  if(smb){ var _k=smb.dataset.showmore;
    if(_k==="live"){LIVE_SHOWN+=PAGE_SIZE; renderLive();}
    else if(_k==="hl"){HL_SHOWN+=PAGE_SIZE; renderHL();}
    else if(_k==="news"){NEWS_SHOWN+=PAGE_SIZE; }
    else if(_k==="tr"){TR_SHOWN+=PAGE_SIZE; }
    return; }
  var fov=e.target.closest(".fba-ov");
  if(fov && e.target===fov){ fbAdminClose(); return; }
  if(e.target.closest("[data-fb-close]")){ fbAdminClose(); return; }
  var fst=e.target.closest(".fbk-star");
  if(fst){ var sb=fst.closest(".fbk-stars"); var sv=+fst.dataset.star; sb.dataset.rating=sv; sb.querySelectorAll(".fbk-star").forEach(function(s){ s.classList.toggle("on",(+s.dataset.star)<=sv); }); return; }
  var fsend=e.target.closest("[data-fb-send]");
  if(fsend){ var fw=fsend.closest(".fbk"); var fta=fw.querySelector(".fbk-text"); var fsb=fw.querySelector(".fbk-stars"); var frt=fsb?(+fsb.dataset.rating||0):0; var de=LANG==="de";
    if(fbSubmit(fta?fta.value:"", frt)){ fw.innerHTML='<div class="fbk-done">'+(de?"Danke f\u00fcr dein Feedback! \ud83d\ude4c":"Thanks for your feedback! \ud83d\ude4c")+'</div>'; }
    else if(fta){ fta.classList.add("shake"); fta.focus(); setTimeout(function(){fta.classList.remove("shake");},400); }
    return; }
  var shb=e.target.closest("[data-share]");
  if(shb){ var su=location.origin+location.pathname; var sd={title:"TVFUSSBALL.de",text:(LANG==="de"?"Fu\u00dfball-TV-Guide \u2013 wer zeigt was? Schau mal:":"Football TV guide \u2013 who shows what? Take a look:"),url:su};
    if(navigator.share){ navigator.share(sd).catch(function(){}); }
    else { try{ navigator.clipboard.writeText(su); var stx=shb.querySelector(".sup-share-tx"); if(stx){ var so=stx.textContent; stx.textContent=(LANG==="de"?"Link kopiert!":"Link copied!"); setTimeout(function(){stx.textContent=so;},1400);} }catch(err){} }
    return; }
  var fcpy=e.target.closest("[data-fb-copy]");
  if(fcpy){ try{ navigator.clipboard.writeText(JSON.stringify(fbLoad(),null,2)); var o=fcpy.textContent; fcpy.textContent=(LANG==="de"?"Kopiert!":"Copied!"); setTimeout(function(){fcpy.textContent=o;},1200);}catch(err){} return; }
  var fcsv=e.target.closest("[data-fb-csv]");
  if(fcsv){ try{ var bl=new Blob([fbToCSV(fbLoad())],{type:"text/csv;charset=utf-8"}); var a=document.createElement("a"); a.href=URL.createObjectURL(bl); a.download="tvfussball-feedback.csv"; document.body.appendChild(a); a.click(); a.remove(); }catch(err){} return; }
  var fclr=e.target.closest("[data-fb-clear]");
  if(fclr){ if(confirm(LANG==="de"?"Alles lokal gespeicherte Feedback l\u00f6schen?":"Delete all locally stored feedback?")){ lsSet(FEEDBACK_KEY,"[]"); fbAdminOpen(); } return; }
  const tab=e.target.closest(".navitem");
  if(tab){ e.preventDefault();
    const dest=tab.dataset.tab;
    if(dest===PAGE){ window.scrollTo({top:0,behavior:"smooth"}); return; } // schon auf dieser Seite
    location.href = navUrl(dest); return; }
  const lb=e.target.closest("[data-lang]");
  if(lb){document.querySelectorAll("[data-lang]").forEach(x=>x.setAttribute("aria-pressed","false"));
    lb.setAttribute("aria-pressed","true"); LANG=lb.dataset.lang; LANG_LOCKED=true; saveLang(); renderAll(); return;}
  const bh=e.target.closest("[data-blhint]");
  if(bh){ FILTER_USERSET=true; LIVE_SEL.clear(); LIVE_SEL.add("bl"); LIVE_SEL.add("bl2"); saveFilters(); LIVE_SHOWN=20; renderLiveFilters(); renderLive(); window.scrollTo({top:0,behavior:"smooth"}); return; }
  const lf=e.target.closest("[data-livef]");
  if(lf){ const k=lf.dataset.livef; FILTER_USERSET=true;
    if(k==="all") LIVE_SEL.clear();
    else if(k==="tonight"){ if(LIVE_SEL.size===1 && LIVE_SEL.has("tonight")) LIVE_SEL.clear(); else { LIVE_SEL.clear(); LIVE_SEL.add("tonight"); } }
    else { /* Single-Select: neuer Filter ersetzt den bisherigen; erneuter Klick = zurück zu "Alle" */ if(LIVE_SEL.size===1 && LIVE_SEL.has(k)){ LIVE_SEL.clear(); } else { LIVE_SEL.clear(); LIVE_SEL.add(k); } }
    saveFilters(); LIVE_SHOWN=20;
    renderLiveFilters(); renderLive(); return;}
  const hlf=e.target.closest("[data-hlf]");
  if(hlf){const v=hlf.dataset.hlf;
    /* Single-Select: es ist immer genau ein Filter aktiv */
    if(v.indexOf("c:")===0){ HL_COMP=v.slice(2); HL_FILTER="all"; }
    else if(HL_FILTER===v){ HL_FILTER="all"; HL_COMP="*"; }
    else { HL_FILTER=v; HL_COMP="*"; }
    HL_SHOWN=20; renderHLFilters(); renderHL(); return;}
  const nmo=e.target.closest("[data-newsmode]");
  if(nmo){NEWS_MODE=nmo.dataset.newsmode; NEWS_SHOWN=20; TR_SHOWN=20;   if(NEWS_MODE==="transfers")  return;}
  const nf=e.target.closest("[data-newsf]");
  if(nf){NEWS_MODE="news"; NEWS_TEAM=nf.dataset.newsf; NEWS_SHOWN=20;    return;}
  const trs=e.target.closest("[data-trsort]");
  if(trs){ var _ns=trs.dataset.trsort; if(_ns===TR_SORT){ TR_DIR=(TR_DIR==="asc"?"desc":"asc"); } else { TR_SORT=_ns; TR_DIR="desc"; } TR_SHOWN=20;  return;}
  const trl=e.target.closest("[data-trleague]");
  if(trl){TR_LEAGUE=trl.dataset.trleague; TR_CLUB=""; TR_SHOWN=20;  return;}
  const trc=e.target.closest("[data-trclub]");
  if(trc){TR_CLUB=trc.dataset.trclub; TR_SHOWN=20;  return;}
  const trr=e.target.closest("[data-trshow]");
  if(trr){TR_SHOW=trr.dataset.trshow; TR_CLUB=""; TR_SHOWN=20;  return;}
  const pf=e.target.closest("[data-provf]");
  if(pf){PROV_FILTER=pf.dataset.provf; renderProvFilters(); renderProviders(); return;}
  if(e.target.closest("#themeToggle")){ setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark"); return; }
  if(e.target.id==="consentYes"||e.target.id==="consentNo"){document.getElementById("consent").classList.add("hide");
    consentSet(e.target.id==="consentYes"?"yes":"no");
    if(e.target.id==="consentYes"){ consentApply("yes"); }}
});
document.addEventListener("keydown",function(e){ if(e.key==="Escape"){ document.querySelectorAll(".tstrength.open").forEach(function(o){ o.classList.remove("open"); o.setAttribute("aria-expanded","false"); }); } });
document.getElementById("liveSearch").addEventListener("input",e=>{LIVE_Q=e.target.value; LIVE_SHOWN=20; renderLive();});
document.getElementById("hlSearch").addEventListener("input",e=>{ HL_Q=e.target.value;
  /* Tippen ersetzt den aktiven Filter */
  if(HL_Q){ HL_COMP="*"; HL_FILTER="all"; }
  HL_SHOWN=20; renderHLFilters(); renderHL();});
document.getElementById("provSearch").addEventListener("input",e=>{PROV_Q=e.target.value; renderProviders();});
/* ===================== WM-Tab ===================== */
const WM_GROUPS=[
 ["A",[["Mexiko","🇲🇽",6,2,2,0,0,3,0],["Südkorea","🇰🇷",3,2,1,0,1,2,2],["Tschechien","🇨🇿",1,2,0,1,1,2,3],["Südafrika","🇿🇦",1,2,0,1,1,1,3]]],
 ["B",[["Kanada","🇨🇦",4,2,1,1,0,7,1],["Schweiz","🇨🇭",4,2,1,1,0,5,2],["Bosnien-Herz.","🇧🇦",1,2,0,1,1,2,5],["Katar","🇶🇦",1,2,0,1,1,1,7]]],
 ["C",[["Brasilien","🇧🇷",4,2,1,1,0,4,1],["Marokko","🇲🇦",4,2,1,1,0,2,1],["Schottland","🏴󠁧󠁢󠁳󠁣󠁴󠁿",3,2,1,0,1,1,1],["Haiti","🇭🇹",0,2,0,0,2,0,4]]],
 ["D",[["USA","🇺🇸",6,2,2,0,0,6,1],["Australien","🇦🇺",3,2,1,0,1,2,2],["Paraguay","🇵🇾",3,2,1,0,1,2,4],["Türkei","🇹🇷",0,2,0,0,2,0,3]]],
 ["E",[["Deutschland","🇩🇪",6,2,2,0,0,9,2],["Elfenbeinküste","🇨🇮",3,2,1,0,1,2,2],["Ecuador","🇪🇨",1,2,0,1,1,0,1],["Curaçao","🇨🇼",1,2,0,1,1,1,7]]],
 ["F",[["Niederlande","🇳🇱",4,2,1,1,0,7,3],["Japan","🇯🇵",4,2,1,1,0,6,2],["Schweden","🇸🇪",3,2,1,0,1,6,6],["Tunesien","🇹🇳",0,2,0,0,2,1,9]]],
 ["G",[["Ägypten","🇪🇬",4,2,1,1,0,4,2],["Iran","🇮🇷",2,2,0,2,0,2,2],["Belgien","🇧🇪",2,2,0,2,0,1,1],["Neuseeland","🇳🇿",1,2,0,1,1,3,5]]],
 ["H",[["Spanien","🇪🇸",4,2,1,1,0,4,0],["Uruguay","🇺🇾",2,2,0,2,0,3,3],["Kap Verde","🇨🇻",2,2,0,2,0,2,2],["Saudi-Arabien","🇸🇦",1,2,0,1,1,1,5]]],
 ["I",[["Frankreich","🇫🇷",6,2,2,0,0,6,1],["Norwegen","🇳🇴",6,2,2,0,0,7,3],["Senegal","🇸🇳",0,2,0,0,2,3,6],["Irak","🇮🇶",0,2,0,0,2,1,7]]],
 ["J",[["Argentinien","🇦🇷",6,2,2,0,0,5,0],["Österreich","🇦🇹",3,2,1,0,1,3,3],["Jordanien","🇯🇴",0,1,0,0,1,1,3],["Algerien","🇩🇿",0,1,0,0,1,0,3]]],
 ["K",[["Kolumbien","🇨🇴",3,1,1,0,0,3,1],["Portugal","🇵🇹",1,1,0,1,0,1,1],["DR Kongo","🇨🇩",1,1,0,1,0,1,1],["Usbekistan","🇺🇿",0,1,0,0,1,1,3]]],
 ["L",[["England","🏴󠁧󠁢󠁥󠁮󠁧󠁿",3,1,1,0,0,4,2],["Ghana","🇬🇭",3,1,1,0,0,1,0],["Panama","🇵🇦",0,1,0,0,1,0,1],["Kroatien","🇭🇷",0,1,0,0,1,2,4]]]
];
const WM_R32=[
 {d:"So 28.06.",t:"21:00",city:"Los Angeles",st:"SoFi Stadium",a:null,aph:"Zweiter A",b:null,bph:"Zweiter B",fav:null},
 {d:"Mo 29.06.",t:"19:00",city:"Houston",st:"NRG Stadium",a:null,aph:"Erster C",b:null,bph:"Zweiter F",fav:null},
 {d:"Mo 29.06.",t:"22:30",city:"Boston",st:"Gillette Stadium",a:["Deutschland","🇩🇪"],b:null,bph:"Dritter A/B/C/D/F",fav:0},
 {d:"Di 30.06.",t:"02:00",city:"Monterrey",st:"Estadio BBVA",a:null,aph:"Erster F",b:null,bph:"Zweiter C",fav:null},
 {d:"Di 30.06.",t:"19:00",city:"Dallas",st:"AT&T Stadium",a:null,aph:"Zweiter E",b:null,bph:"Zweiter I",fav:null},
 {d:"Di 30.06.",t:"23:00",city:"New Jersey",st:"MetLife Stadium",a:null,aph:"Erster I",b:null,bph:"Dritter C/D/F/G/H",fav:0},
 {d:"Mi 01.07.",t:"02:00",city:"Mexiko-Stadt",st:"Aztekenstadion",a:["Mexiko","🇲🇽"],b:null,bph:"Dritter C/E/F/H/I",fav:0},
 {d:"Mi 01.07.",t:"18:00",city:"Atlanta",st:"Mercedes-Benz Stadium",a:null,aph:"Erster L",b:null,bph:"Dritter E/H/I/J/K",fav:0},
 {d:"Mi 01.07.",t:"22:00",city:"Seattle",st:"Lumen Field",a:null,aph:"Erster G",b:null,bph:"Dritter A/E/H/I/J",fav:0},
 {d:"Do 02.07.",t:"02:00",city:"San Francisco",st:"Levi's Stadium",a:["USA","🇺🇸"],b:null,bph:"Dritter B/E/F/I/J",fav:0},
 {d:"Do 02.07.",t:"21:00",city:"Los Angeles",st:"SoFi Stadium",a:null,aph:"Erster H",b:null,bph:"Zweiter J",fav:0},
 {d:"Fr 03.07.",t:"01:00",city:"Toronto",st:"BMO Field",a:null,aph:"Zweiter K",b:null,bph:"Zweiter L",fav:null},
 {d:"Fr 03.07.",t:"05:00",city:"Vancouver",st:"BC Place",a:null,aph:"Erster B",b:null,bph:"Dritter E/F/G/I/J",fav:0},
 {d:"Fr 03.07.",t:"20:00",city:"Dallas",st:"AT&T Stadium",a:null,aph:"Zweiter D",b:null,bph:"Zweiter G",fav:null},
 {d:"Sa 04.07.",t:"00:00",city:"Miami",st:"Hard Rock Stadium",a:["Argentinien","🇦🇷"],b:null,bph:"Zweiter H",fav:0},
 {d:"Sa 04.07.",t:"03:30",city:"Kansas City",st:"Arrowhead Stadium",a:null,aph:"Erster K",b:null,bph:"Dritter D/E/I/J/L",fav:0}
];
const WM_ANTHEMS=[
 ["Deutschland","🇩🇪","Deutschlandlied (3. Strophe)","Melodie von Joseph Haydn (1797), Text von Hoffmann von Fallersleben.","e6eXyYJ4h5o"],
 ["Frankreich","🇫🇷","La Marseillaise","Revolutionslied von 1792 — eine der kämpferischsten Hymnen der Welt.","6U35RpP7XEc"],
 ["Brasilien","🇧🇷","Hino Nacional Brasileiro","Melodisch verspielt und textlich dicht — Fans summen oft a cappella weiter."],
 ["Argentinien","🇦🇷","Himno Nacional Argentino","Fast opernhaft und ungewöhnlich lang, mit langer Instrumental-Einleitung."],
 ["Spanien","🇪🇸","Marcha Real","Eine der wenigen Hymnen ganz ohne offiziellen Text.","nxyL1Y-WIQU"],
 ["England","🏴󠁧󠁢󠁥󠁮󠁧󠁿","God Save the King","Königshymne — kurz, getragen, monarchisch.","2WPxqTraBYY"],
 ["Niederlande","🇳🇱","Het Wilhelmus","Gilt als eine der ältesten Nationalhymnen der Welt.","gwBrR_G70RE"],
 ["Portugal","🇵🇹","A Portuguesa","Marschartige Hymne mit maritimem Stolz."],
 ["Belgien","🇧🇪","La Brabançonne","Wird je nach Landesteil auf Französisch, Niederländisch oder Deutsch gesungen."],
 ["Kroatien","🇭🇷","Lijepa naša domovino","Lyrische Liebeserklärung an die Heimat („Unser schönes Vaterland“)."],
 ["Uruguay","🇺🇾","Himno Nacional del Uruguay","Gilt als längste Nationalhymne der Welt."],
 ["Japan","🇯🇵","Kimigayo","Einer der kürzesten Hymnentexte der Welt — getragen und sehr ruhig."],
 ["Südkorea","🇰🇷","Aegukga","„Patriotisches Lied“ — feierlich und gefühlvoll."],
 ["Mexiko","🇲🇽","Himno Nacional Mexicano","Pompös und kriegerisch, mit kraftvollem Refrain."],
 ["USA","🇺🇸","The Star-Spangled Banner","Berühmt-schwierig zu singen wegen des großen Tonumfangs.","N8PYuM6wrvE"],
 ["Kanada","🇨🇦","O Canada","Zweisprachig (Englisch/Französisch), ruhig und hymnisch.","rEOzJ6yEDIg"],
 ["Schweiz","🇨🇭","Schweizerpsalm","Eher ein Gebet als ein Marsch — feierlich und besinnlich.","KIyHNnASv64"],
 ["Österreich","🇦🇹","Land der Berge, Land am Strome","Melodie aus dem Umfeld Mozarts, geschlechtergerecht überarbeiteter Text.","coXCFX61SBQ"],
 ["Marokko","🇲🇦","Hymne Chérifien","Königliche Hymne mit feierlichem Charakter."],
 ["Senegal","🇸🇳","Pincez tous vos koras","Benannt nach der Kora, der westafrikanischen Stegharfe."],
 ["Elfenbeinküste","🇨🇮","L'Abidjanaise","Patriotisches Lied an die größte Stadt Abidjan."],
 ["Ägypten","🇪🇬","Bilady, Bilady, Bilady","„Mein Land“ — eingängig und stolz."],
 ["Tunesien","🇹🇳","Humat al-Hima","„Verteidiger des Vaterlands“ — kämpferisch."],
 ["Algerien","🇩🇿","Kassaman","„Wir schwören“ — entstanden im Unabhängigkeitskampf."],
 ["Ghana","🇬🇭","God Bless Our Homeland Ghana","Würdevolle Bitte um Segen für die Heimat."],
 ["Kap Verde","🇨🇻","Cântico da Liberdade","„Gesang der Freiheit“ des Inselstaats."],
 ["Südafrika","🇿🇦","Nkosi Sikelel' iAfrika / Die Stem","Vereint fünf Sprachen in einer einzigen Hymne."],
 ["DR Kongo","🇨🇩","Debout Congolais","„Steht auf, Kongolesen“ — Aufbruchshymne."],
 ["Kolumbien","🇨🇴","Himno Nacional de Colombia","Opernhaft, mit klarer Strophen-Refrain-Struktur."],
 ["Paraguay","🇵🇾","Paraguayos, República o Muerte","Dramatischer Titel: „Republik oder Tod“."],
 ["Schottland","🏴󠁧󠁢󠁳󠁣󠁴󠁿","Flower of Scotland","Inoffizielle, aber von Fans gelebte Sport-Hymne."],
 ["Norwegen","🇳🇴","Ja, vi elsker dette landet","„Ja, wir lieben dieses Land“ — feierlich."],
 ["Schweden","🇸🇪","Du gamla, du fria","„Du alter, du freier (Norden)“ — ruhig und stolz."],
 ["Türkei","🇹🇷","İstiklâl Marşı","„Unabhängigkeitsmarsch“ — kraftvoll und pathetisch."],
 ["Iran","🇮🇷","Soroud-e Melli","Kurze, getragene Hymne der Islamischen Republik."],
 ["Saudi-Arabien","🇸🇦","Aash Al-Maleek","Kurze königliche Hymne („Lang lebe der König“)."],
 ["Katar","🇶🇦","As Salam al Amiri","Feierliche Hymne des Emirats."],
 ["Irak","🇮🇶","Mawtini","„Meine Heimat“ — emotional, in der ganzen Region beliebt."],
 ["Jordanien","🇯🇴","As-salam al-malaki al-urduni","Königliche Hymne — kurz und feierlich."],
 ["Usbekistan","🇺🇿","Davlat Madhiyasi","Hymne der Republik, breit und feierlich."],
 ["Australien","🇦🇺","Advance Australia Fair","Optimistisch und melodisch."],
 ["Neuseeland","🇳🇿","God Defend New Zealand","Wird auf Māori und Englisch gesungen."],
 ["Haiti","🇭🇹","La Dessalinienne","Benannt nach dem Unabhängigkeitshelden Dessalines."],
 ["Panama","🇵🇦","Himno Istmeño","„Hymne der Landenge“ — heiter und marschartig."],
 ["Ecuador","🇪🇨","Salve, Oh Patria","Sehr lang und opernhaft, meist nur im Refrain gesungen."],
 ["Curaçao","🇨🇼","Himno di Kòrsou","In Papiamentu gesungen — Stolz des kleinen Inselstaats."],
 ["Bosnien-Herzegowina","🇧🇦","Državna himna BiH","Hat offiziell keinen Text — nur die Melodie zählt."]
];
const WM_MEMES=[
 ["🏝️","Curaçao holt einen Punkt gegen Ecuador. Der halbe Inselstaat steht jetzt im Tor.","Underdog"],
 ["😴","Achtelfinale, Anstoß 5:00 Uhr. Mein Wecker und ich sind keine Freunde mehr.","Anstoßzeiten"],
 ["🇮🇹","48 Teams bei der WM. Italien: „Wir gucken trotzdem von zu Hause.“","Dauerbrenner"],
 ["🇩🇪","9 Tore in 2 Spielen. Nagelsmann tut so, als wäre das normal.","DFB"],
 ["🔤","„Erster L gegen Dritter E/H/I/J/K.“ Mein Spielplan sieht aus wie eine Matheklausur.","Modus"],
 ["🥅","Tunesien nach 2 Spielen: 9 Gegentore. Der Torwart braucht Urlaub.","Kurioses"]
];
const WM_YT='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.8-.5-5.6a2.9 2.9 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.4a2.9 2.9 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.6a2.9 2.9 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.4a2.9 2.9 0 0 0 2-2C23 15.8 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z"/></svg>';

let WM_ANSWERED={}, WM_CORRECT=0;
const WM_QUIZ=[
 ["Wie viele Teams spielen bei dieser WM mit?",["32","40","48","64"],2],
 ["In wie vielen Ländern wird die WM 2026 ausgetragen?",["1","2","3","4"],2],
 ["Welche K.-o.-Runde gibt es 2026 zum ersten Mal?",["Sechzehntelfinale","Achtelfinale","Viertelfinale","Halbfinale"],0],
 ["Wie viele Gruppen gibt es (A bis …)?",["8","10","12","16"],2],
 ["Welcher kleine Inselstaat holte überraschend ein 0:0 gegen Ecuador?",["Haiti","Curaçao","Kap Verde","Panama"],1],
 ["Welche große Fußballnation ist 2026 (mal wieder) nicht dabei?",["Italien","Niederlande","Kroatien","Belgien"],0],
 ["Wie viele Tore schoss Deutschland in den ersten zwei Spielen? [Stand 23.06.]",["4","6","9","12"],2],
 ["Wer eröffnete das Turnier im Aztekenstadion?",["USA","Kanada","Mexiko","Brasilien"],2],
 ["Wie lange dauert die Verlängerung in der K.-o.-Phase?",["1× 15 Min","2× 15 Min","2× 10 Min","Golden Goal"],1],
 ["Welches WM-Team hat eine Hymne ganz ohne offiziellen Text?",["Frankreich","Spanien","Japan","Ghana"],1],
 ["Welche gilt als längste Nationalhymne der Welt?",["Brasilien","Argentinien","Uruguay","Deutschland"],2],
 ["Wie viele der 48 Teams erreichen die K.-o.-Phase?",["16","24","32","48"],2],
 ["Wie viele beste Gruppendritte kommen weiter?",["4","6","8","12"],2],
 ["Welcher Bundestrainer führt Deutschland bei der WM 2026?",["Hansi Flick","Julian Nagelsmann","Rudi Völler","Jürgen Klopp"],1],
 ["Wo steigt das Finale am 19. Juli?",["Los Angeles","Miami","New York / New Jersey","Mexiko-Stadt"],2]
];
const WM_LIKES={};
/* ---------- Impressum / Datenschutz / Über uns ---------- */
let LEGAL_CUR=null;
const LEGAL={
 de:{
  imprint:{t:"Impressum",h:
   '<h4>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</h4>'+
   '<p class="addr">Patrick Uhl<br>Im Frondel 19<br>55424 Münster-Sarmsheim<br>Deutschland</p>'+
   '<h4>Kontakt</h4>'+
   '<p>E-Mail: <a href="mailto:patrick.uhl1988@googlemail.com">patrick.uhl1988@googlemail.com</a></p>'+
   '<h4>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h4>'+
   '<p>Patrick Uhl (Anschrift wie oben)</p>'+
   '<h4>Art des Angebots</h4>'+
   '<p>TVFussball.de ist ein privat betriebenes, nicht-kommerzielles Informationsangebot. Es werden keine Umsätze erzielt; eine Umsatzsteuer-Identifikationsnummer besteht nicht.</p>'+
   '<h4>Haftung für Inhalte</h4>'+
   '<p>Die Inhalte wurden mit größter Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität – insbesondere bei Sendeangaben und Ergebnissen – kann keine Gewähr übernommen werden.</p>'+
   '<h4>Haftung für Links</h4>'+
   '<p>Dieses Angebot enthält Links zu externen Websites Dritter (z. B. ARD, ZDF, YouTube, MagentaTV). Auf deren Inhalte haben wir keinen Einfluss; dafür ist stets der jeweilige Anbieter verantwortlich.</p>'+
   '<h4>Urheberrecht</h4>'+
   '<p>TVFussball.de überträgt selbst keine Spiele und hostet keine Videoinhalte, sondern verweist ausschließlich auf die offiziellen, legalen Angebote der Rechteinhaber. Marken-, Vereins- und Wettbewerbsnamen sind Eigentum der jeweiligen Inhaber.</p>'},
  privacy:{t:"Datenschutzerklärung",h:
   '<h4>Verantwortlicher</h4>'+
   '<p class="addr">Patrick Uhl<br>Im Frondel 19<br>55424 Münster-Sarmsheim<br>E-Mail: <a href="mailto:patrick.uhl1988@googlemail.com">patrick.uhl1988@googlemail.com</a></p>'+
   '<h4>Überblick</h4>'+
   '<p>TVFussball.de ist eine statische Website ohne Nutzerkonten. Ohne Ihre Einwilligung setzen wir keine Analyse-Cookies. Zur Reichweitenmessung nutzen wir das cookiefreie Cloudflare Web Analytics sowie – nur nach Ihrer Einwilligung – Google Analytics (siehe „Web-Analyse"). Damit die Seite in Ihrer Sprache und mit den Sendern Ihres Landes erscheint, ermitteln wir beim Aufruf einmalig Ihr Land anhand der IP-Adresse (siehe „Standort-/Ländererkennung"). Darüber hinaus speichern wir selbst keine personenbezogenen Daten.</p>'+
   '<h4>Hosting &amp; Server-Logfiles</h4>'+
   '<p>Die Seite wird über GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA) bereitgestellt. Beim Aufruf verarbeitet der Hoster technisch notwendige Verbindungsdaten wie IP-Adresse, Datum und Uhrzeit, abgerufene Datei und Browsertyp. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (sicherer, störungsfreier Betrieb).</p>'+
   '<h4>Schriftarten (Google Fonts)</h4>'+
   '<p>Zur einheitlichen Darstellung werden Schriftarten von Google Fonts nachgeladen. Dabei wird Ihre IP-Adresse an Google übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Eine lokale Einbindung der Schriften ist für eine spätere Version vorgesehen.</p>'+
   '<h4>Standort-/Ländererkennung (Geo-IP)</h4>'+
   '<p>Damit die Seite automatisch in der passenden Sprache (Deutsch für Deutschland, Österreich, die Schweiz und Liechtenstein, sonst Englisch) und mit den TV-Sendern Ihres Landes erscheint, ermitteln wir beim ersten Seitenaufruf Ihr Land anhand Ihrer IP-Adresse. Dazu wird Ihre IP-Adresse an einen Geo-IP-Dienst übermittelt: vorrangig country.is (API-Dienst, bereitgestellt über Cloudflare, Inc., USA), ersatzweise GeoJS (geojs.io). Ausgewertet wird ausschließlich das Länderkürzel; es werden keine Cookies gesetzt, keine Nutzerprofile gebildet und Ihre IP-Adresse wird von uns nicht gespeichert. Das ermittelte Land wird für 24 Stunden lokal in Ihrem Browser zwischengespeichert, um wiederholte Abfragen zu vermeiden. Die automatisch gewählte Sprache können Sie jederzeit oben rechts manuell ändern; Ihre Wahl bleibt dann erhalten. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Interesse an einer sprachlich und regional passenden Darstellung).</p>'+
   '<h4>Web-Analyse (Cloudflare Web Analytics)</h4>'+
   '<p>Zur anonymen Reichweitenmessung nutzen wir Cloudflare Web Analytics (Cloudflare, Inc., USA). Das Tool kommt ohne Cookies aus und erstellt keine geräteübergreifenden Nutzerprofile; erfasst werden aggregierte Daten wie aufgerufene Seiten, Verweisquelle und ungefährer Browser-/Gerätetyp. Dabei wird Ihre IP-Adresse verarbeitet, von Cloudflare aber nicht dauerhaft gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Interesse an einer datensparsamen Reichweitenmessung).</p>'+
   '<h4>Web-Analyse (Google Analytics)</h4>'+
   '<p>Nach Ihrer Einwilligung über den Cookie-Hinweis nutzen wir Google Analytics 4 (Google Ireland Ltd.). Dabei werden Cookies gesetzt und Nutzungsdaten verarbeitet (u. a. gekürzte IP-Adresse, aufgerufene Seiten, Verweisquelle, ungefähre Region sowie Gerät und Browser), teils auf Servern von Google – auch in den USA. Vor der Einwilligung ist die Analyse per Consent Mode deaktiviert (analytics_storage: denied). Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO; Sie können sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>'+
   '<h4>Preisdeal-Wecker (E-Mail-Benachrichtigung)</h4>'+
   '<p>Wenn Sie den Preisdeal-Wecker nutzen, öffnet sich Ihr E-Mail-Programm mit einer vorbereiteten Nachricht an uns, die die von Ihnen gewählten Anbieter und Ihre E-Mail-Adresse enthält. Erst durch das Absenden dieser E-Mail übermitteln Sie uns die Daten; wir verwenden sie ausschließlich, um Sie über passende Angebote zu benachrichtigen. Ihre Auswahl wird zusätzlich nur lokal in Ihrem Browser gespeichert (kein Server). Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO; ein Widerruf ist jederzeit per Antwort-Mail möglich.</p>'+
   '<h4>Tippspiel</h4>'+
   '<p>Wenn Sie am Tippspiel teilnehmen, verarbeiten wir Ihren abgegebenen Tipp, einen optionalen Spitznamen sowie den von Ihnen angegebenen Facebook- oder Instagram-Profil-Link, um Sie im Gewinnfall kontaktieren zu können. Die Übermittlung erfolgt über einen Formular-Dienstleister (Formspree, Formspree Inc., USA); zusätzlich werden Ihre Eingaben lokal in Ihrem Browser gespeichert. Wir geben diese Daten nicht zu Werbezwecken an Dritte weiter und löschen sie nach Abschluss des jeweiligen Gewinnspiels. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie über das Kontrollkästchen erteilen und jederzeit für die Zukunft widerrufen können.</p>'+
   '<h4>Lokale Speicherung (localStorage)</h4>'+
   '<p>Für Komfortfunktionen speichern wir – ohne Cookies und ohne Übertragung an uns – einige Einstellungen lokal in Ihrem Browser: gewählte Sprache, Hell-/Dunkel-Modus, gefolgte Teams, gesetzte Filter, das per Geo-IP ermittelte Land (24 Stunden), Ihre Tippspiel-Eingaben sowie Ihre Entscheidung zum Analyse-Hinweis. Diese Angaben verbleiben auf Ihrem Gerät und können jederzeit über die Einstellungen Ihres Browsers gelöscht werden. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Bereitstellung der von Ihnen genutzten Funktionen).</p>'+
   '<h4>Externe Links und Inhalte</h4>'+
   '<p>Für Video-Highlights und die Team-Hymnen binden wir YouTube-Vorschauen ein. Beim Laden der Seite wird dazu zunächst nur ein Vorschaubild von YouTube/Google geladen. Das eigentliche Video wird erst nachgeladen, wenn Sie auf den Play-Button klicken; dabei verbindet sich Ihr Browser mit YouTube (Google Ireland Limited), wobei u. a. Ihre IP-Adresse an Google übermittelt werden kann. Für die Einbettung nutzen wir den erweiterten Datenschutzmodus (youtube-nocookie.com); es gilt dann zusätzlich die Datenschutzerklärung von Google. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO bzw. Ihre Einwilligung durch den Klick auf das Video. Relives und sonstige Quellen (z. B. ARD, ZDF, MagentaTV) werden nicht eingebettet, sondern nur verlinkt; erst beim Anklicken gelangen Sie zum jeweiligen Anbieter, auf dessen Seite dessen eigene Datenschutzerklärung gilt.</p>'+
   '<h4>Teilen-Funktion</h4>'+
   '<p>Die Teilen-Schaltfläche nutzt die Web-Share-Funktion Ihres Geräts bzw. – als Rückfalloption – die Zwischenablage. Dabei werden keine Daten an uns übertragen.</p>'+
   '<h4>Ihre Rechte</h4>'+
   '<p>Sie haben nach DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde. Wenden Sie sich dazu an die oben genannte Kontaktadresse.</p>'+
   '<p style="color:var(--faint);font-size:11.5px">Stand: 27. Juni 2026</p>'},
  about:{t:"Über uns",h:
   '<p>TVFussball.de beantwortet eine einfache Frage: <b>Wo läuft das Spiel?</b> Durch die zersplitterten Übertragungsrechte ist genau das oft unübersichtlich – mal Free-TV, mal Pay, mal nur im Stream oder Radio.</p>'+
   '<p>Wir bündeln diese Angaben pro Spiel und Land (Deutschland, Österreich, Schweiz, UK) an einem Ort: Anstoßzeiten, Sender, kostenlose Zusammenfassungen und Relives sowie kompakte News.</p>'+
   '<h4>Kein Streaming-Anbieter</h4>'+
   '<p>TVFussball.de überträgt keine Spiele. Wir verweisen ausschließlich auf die offiziellen, legalen Angebote der Rechteinhaber.</p>'+
   '<h4>Privates Projekt</h4>'+
   '<p>Das Projekt wird privat und nicht-kommerziell von Patrick Uhl betrieben. Feedback ist jederzeit willkommen: <a href="mailto:patrick.uhl1988@googlemail.com">patrick.uhl1988@googlemail.com</a></p>'}
 },
 en:{
  imprint:{t:"Imprint",h:
   '<h4>Information pursuant to § 5 DDG (German Digital Services Act)</h4>'+
   '<p class="addr">Patrick Uhl<br>Im Frondel 19<br>55424 Münster-Sarmsheim<br>Germany</p>'+
   '<h4>Contact</h4>'+
   '<p>Email: <a href="mailto:patrick.uhl1988@googlemail.com">patrick.uhl1988@googlemail.com</a></p>'+
   '<h4>Responsible for content (§ 18 (2) MStV)</h4>'+
   '<p>Patrick Uhl (address as above)</p>'+
   '<h4>Nature of the service</h4>'+
   '<p>TVFussball.de is a privately operated, non-commercial information service. It generates no revenue and holds no VAT identification number.</p>'+
   '<h4>Liability for content</h4>'+
   '<p>Content has been compiled with great care. No guarantee can be given for its accuracy, completeness or timeliness, in particular for broadcast details and results.</p>'+
   '<h4>Liability for links</h4>'+
   '<p>This service links to external third-party websites (e.g. ARD, ZDF, YouTube, MagentaTV). We have no influence over their content; the respective provider is always responsible for it.</p>'+
   '<h4>Copyright</h4>'+
   '<p>TVFussball.de does not broadcast any matches and hosts no video content; it only points to the official, legal offerings of the rights holders. Brand, club and competition names are the property of their respective owners.</p>'},
  privacy:{t:"Privacy Policy",h:
   '<h4>Controller</h4>'+
   '<p class="addr">Patrick Uhl<br>Im Frondel 19<br>55424 Münster-Sarmsheim, Germany<br>Email: <a href="mailto:patrick.uhl1988@googlemail.com">patrick.uhl1988@googlemail.com</a></p>'+
   '<h4>Overview</h4>'+
   '<p>TVFussball.de is a static website with no user accounts. Without your consent we set no analytics cookies. For audience measurement we use cookieless Cloudflare Web Analytics and — only after your consent — Google Analytics (see “Web analytics”). So the site can appear in your language and with the channels of your country, we determine your country once on load from your IP address (see “Location/country detection”). Beyond that we store no personal data ourselves.</p>'+
   '<h4>Hosting &amp; server log files</h4>'+
   '<p>The site is served via GitHub Pages (GitHub Inc., San Francisco, USA). On access the host processes technically necessary connection data such as IP address, date and time, the file requested and the browser type. Legal basis: Art. 6 (1) (f) GDPR (secure, fault-free operation).</p>'+
   '<h4>Fonts (Google Fonts)</h4>'+
   '<p>For a consistent look, fonts are loaded from Google Fonts, which transfers your IP address to Google. Legal basis: Art. 6 (1) (f) GDPR. Self-hosting of the fonts is planned for a future version.</p>'+
   '<h4>Location/country detection (geo-IP)</h4>'+
   '<p>So the site automatically appears in the right language (German for Germany, Austria, Switzerland and Liechtenstein; otherwise English) and with the TV channels of your country, we determine your country from your IP address on your first visit. For this, your IP address is sent to a geo-IP service: primarily country.is (an API service provided via Cloudflare, Inc., USA), with GeoJS (geojs.io) as a fallback. Only the country code is evaluated; no cookies are set, no user profiles are created, and we do not store your IP address. The detected country is cached locally in your browser for 24 hours to avoid repeated lookups. You can change the automatically selected language manually at any time (top right); your choice is then kept. Legal basis: Art. 6 (1) (f) GDPR (interest in a linguistically and regionally appropriate presentation).</p>'+
   '<h4>Web analytics (Cloudflare Web Analytics)</h4>'+
   '<p>For anonymous audience measurement we use Cloudflare Web Analytics (Cloudflare, Inc., USA). It works without cookies and builds no cross-device user profiles; it records aggregated data such as pages viewed, referrer and approximate browser/device type. Your IP address is processed but not stored permanently by Cloudflare. Legal basis: Art. 6 (1) (f) GDPR (interest in privacy-friendly audience measurement).</p>'+
   '<h4>Web analytics (Google Analytics)</h4>'+
   '<p>After your consent via the cookie notice, we use Google Analytics 4 (Google Ireland Ltd.). It sets cookies and processes usage data (e.g. truncated IP address, pages viewed, referrer, approximate region, device and browser), partly on Google servers, including in the USA. Before consent, analytics is disabled via Consent Mode (analytics_storage: denied). The legal basis is your consent under Art. 6 (1) (a) GDPR; you can withdraw it at any time with effect for the future.</p>'+
   '<h4>Price-deal alert (email notification)</h4>'+
   '<p>When you use the price-deal alert, your email app opens with a prepared message to us containing the providers you selected and your email address. Only by sending this email do you transmit the data to us; we use it solely to notify you about matching deals. Your selection is additionally stored only locally in your browser (no server). Legal basis is your consent under Art. 6 (1) (a) GDPR; you can withdraw at any time by replying.</p>'+
   '<h4>Prediction game</h4>'+
   '<p>If you take part in the prediction game, we process your submitted prediction, an optional nickname and the Facebook or Instagram profile link you provide, so we can contact you if you win. Submission is handled via a form provider (Formspree, Formspree Inc., USA); your entries are additionally stored locally in your browser. We do not share this data with third parties for advertising and delete it after the respective prize draw ends. The legal basis is your consent under Art. 6 (1) (a) GDPR, given via the checkbox and revocable at any time with effect for the future.</p>'+
   '<h4>Local storage (localStorage)</h4>'+
   '<p>For convenience features we store some settings locally in your browser — without cookies and without transmission to us: chosen language, light/dark mode, followed teams, active filters, the country detected via geo-IP (24 hours), your prediction-game entries and your choice regarding the analytics notice. This data stays on your device and can be deleted at any time via your browser settings. Legal basis: Art. 6 (1) (f) GDPR (provision of the features you use).</p>'+
   '<h4>External links and content</h4>'+
   '<p>For video highlights and the team anthems we embed YouTube previews. When the page loads, only a thumbnail is loaded from YouTube/Google. The video itself is loaded only when you click the play button; your browser then connects to YouTube (Google Ireland Limited), which may transmit your IP address to Google. We use the enhanced privacy mode (youtube-nocookie.com) for the embed; Google’s privacy policy then additionally applies. Legal basis: Art. 6(1)(f) GDPR or your consent by clicking the video. Replays and other sources (e.g. ARD, ZDF, MagentaTV) are not embedded, only linked; only when you click do you reach the respective provider, where its own privacy policy applies.</p>'+
   '<h4>Share function</h4>'+
   '<p>The share button uses your device Web Share feature or, as a fallback, the clipboard. No data is transmitted to us.</p>'+
   '<h4>Your rights</h4>'+
   '<p>Under the GDPR you have the right to access, rectification, erasure, restriction of processing, data portability and objection, plus the right to lodge a complaint with a supervisory authority. Please use the contact address above.</p>'+
   '<p style="color:var(--faint);font-size:11.5px">As of 27 June 2026</p>'},
  about:{t:"About us",h:
   '<p>TVFussball.de answers one simple question: <b>where is the match on?</b> Fragmented broadcasting rights make that surprisingly hard to track – sometimes free TV, sometimes pay, sometimes stream or radio only.</p>'+
   '<p>We bring those details together per match and country (Germany, Austria, Switzerland, UK) in one place: kick-off times, channels, free summaries and replays, plus concise news.</p>'+
   '<h4>Not a streaming service</h4>'+
   '<p>TVFussball.de does not broadcast matches. We only point to the official, legal offerings of the rights holders.</p>'+
   '<h4>A private project</h4>'+
   '<p>The project is run privately and non-commercially by Patrick Uhl. Feedback is always welcome: <a href="mailto:patrick.uhl1988@googlemail.com">patrick.uhl1988@googlemail.com</a></p>'}
 }
};
function openLegal(key){
  const set=LEGAL[LANG]||LEGAL.de, d=set[key]||LEGAL.de[key]; if(!d) return;
  LEGAL_CUR=key;
  document.getElementById("legalTitle").textContent=d.t;
  document.getElementById("legalBody").innerHTML=d.h;
  const ov=document.getElementById("legalOv"); ov.classList.add("show"); ov.setAttribute("aria-hidden","false"); ov.scrollTop=0;
}
function closeLegal(){ const ov=document.getElementById("legalOv"); ov.classList.remove("show"); ov.setAttribute("aria-hidden","true"); LEGAL_CUR=null; }
document.addEventListener("keydown",function(e){ if(e.key==="Escape") closeLegal(); });

/* ---------- Tippspiel ---------- */
const TIPP = {
  games:[{h:"Spanien",a:"Argentinien"}],
  match:"Spanien – Argentinien",
  kickoff:"2026-07-19T21:00:00+02:00",
  /* >>> EINSTELLUNGEN <<< endpoint: optionale Formspree-URL (formspree.io); fb/ig: eure Seiten. */
  prizes:["1× 20 € Amazon-Gutschein","1× 10 € Amazon-Gutschein"],
  endpoint:"",
  fb:"https://www.facebook.com/share/18y8ZKLNdG/",
  ig:"https://www.instagram.com/tvfussballl?igsh=MXFrbGU0N3dlZjJwcA=="
};
/* ---------- Geo-IP: Standardland & -sprache (funktional, kein Tracking) ---------- */
const GEO_MARKET={DE:"DE",AT:"AT",CH:"CH",LI:"DE",GB:"UK",UK:"UK",FR:"FR",IT:"IT",ES:"ES",NL:"NL",TH:"TH",CA:"CA",US:"US",IE:"IE",FI:"FI",SG:"SG",BD:"BD",TR:"TR",SE:"SE",MX:"MX"};
const GEO_DE=new Set(["DE","AT","CH","LI"]);
function geoCacheGet(){ try{ const r=lsGet(LS_KEY.geo); if(r){ const o=JSON.parse(r); if(o&&o.cc&&o.ts&&(Date.now()-o.ts<86400000)) return o.cc; } }catch(e){} return null; }
function geoCacheSet(cc){ lsSet(LS_KEY.geo, JSON.stringify({cc:cc,ts:Date.now()})); }
function applyGeo(cc){ if(MARKET_LOCKED) return; cc=(cc||"").toUpperCase(); if(!cc) return;
  const nc=GEO_MARKET[cc]||"DE";
  const nl=LANG_LOCKED?LANG:(GEO_DE.has(cc)?"de":"en");
  if(nc===COUNTRY && nl===LANG) return;
  COUNTRY=nc; LANG=nl;
  applyCountryDefaultFilter();
  document.querySelectorAll("[data-lang]").forEach(x=>x.setAttribute("aria-pressed", x.dataset.lang===LANG?"true":"false"));
  renderAll();
}
function geoInit(){
  const cached=geoCacheGet(); if(cached){ applyGeo(cached); return; }
  if(typeof fetch!=="function") return;
  const eps=[{u:"https://api.country.is/",f:d=>d&&d.country},{u:"https://get.geojs.io/v1/ip/country.json",f:d=>d&&d.country}];
  let i=0;
  (function next(){ if(i>=eps.length) return; const ep=eps[i++];
    let ctl=null,to=null; try{ ctl=("AbortController"in window)?new AbortController():null; }catch(e){}
    if(ctl) to=setTimeout(()=>{ try{ctl.abort();}catch(e){} },2500);
    fetch(ep.u, ctl?{signal:ctl.signal}:undefined).then(r=>r.ok?r.json():Promise.reject()).then(d=>{ if(to)clearTimeout(to);
      const cc=ep.f(d); if(cc){ geoCacheSet(cc); applyGeo(cc); } else next();
    }).catch(()=>{ if(to)clearTimeout(to); next(); });
  })();
}

/* ---------- Boot ---------- */
loadPersisted();
(function(){
  const p=new URLSearchParams(location.search);
  const lp=p.get("lang"); if(lp==="en"||lp==="de"){ LANG=lp; LANG_LOCKED=true; }
  document.querySelectorAll("[data-lang]").forEach(x=>x.setAttribute("aria-pressed", x.dataset.lang===LANG?"true":"false"));
  const tp=p.get("theme");
  let stp=null; try{ const r=lsGet(LS_KEY.theme); if(r!==null){ const v=JSON.parse(r); if(v==="dark"||v==="light") stp=v; } }catch(e){}
  setTheme((tp==="dark"||tp==="light") ? tp : (stp || document.documentElement.dataset.theme || "light"));
})();
activatePage(PAGE);
weckerLoad();
applyCountryDefaultFilter();
function seoStartDate(m){
  try{
    var day=(m.day||"");
    if(/\d\.\/\d/.test(day)) return null;
    var dm=day.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})/); if(!dm) return null;
    var tm=(m.time||"").match(/(\d{1,2}):(\d{2})/); var hh=tm?tm[1]:"20", mm=tm?tm[2]:"00";
    return dm[3]+"-"+("0"+dm[2]).slice(-2)+"-"+("0"+dm[1]).slice(-2)+"T"+("0"+hh).slice(-2)+":"+mm+":00+02:00";
  }catch(e){ return null; }
}
/* ---------- Strukturierte Daten: bewusst knapp halten ----------
   Nur die fuenf hoechstbewerteten Spiele der naechsten 7 Tage bzw.
   die fuenf besten Highlights der letzten 7 Tage. Alles Weitere lebt
   ausschliesslich im JavaScript und gehoert nicht in den Suchindex. */
const SEO_MAX = 5, SEO_DAYS = 7;
function seoPickMatches(){
  var now=Date.now(), bis=now+SEO_DAYS*86400000, out=[];
  for(var i=0;i<MATCHES.length;i++){
    var m=MATCHES[i];
    if(!m||!m.lohnt||!m.lohnt.einordnung) continue;
    var d=m.lohnt.einordnung.de||m.lohnt.einordnung.en;
    if(!d||d.length<40) continue;
    if(/folgen mit der Terminierung|folgt mit der/.test(d)) continue;
    var sd=seoStartDate(m); if(!sd) continue;
    var ko=_koMs(m.day,m.time); if(!ko||ko<now-7200000||ko>bis) continue;
    out.push({m:m, sd:sd, ko:ko, score:(+m.lohnt.score||0), desc:d});
  }
  out.sort(function(a,b){ return (b.score-a.score) || (a.ko-b.ko); });
  return out.slice(0,SEO_MAX);
}
function seoPickHighlights(){
  var now=Date.now(), ab=now-SEO_DAYS*86400000, out=[];
  for(var i=0;i<HL.length;i++){
    var m=HL[i];
    if(!m||!m.analyse||!m.analyse.fazit) continue;
    var f=m.analyse.fazit.de||m.analyse.fazit.en; if(!f) continue;
    var dm=(m.date||"").match(/(\d{1,2})\.(\d{1,2})\./); if(!dm) continue;
    var sd="2026-"+("0"+dm[2]).slice(-2)+"-"+("0"+dm[1]).slice(-2);
    var t=Date.parse(sd+"T20:00:00+02:00");
    if(!t||t<ab||t>now+86400000) continue;
    var note=(m.analyse.spielnote&&+m.analyse.spielnote.wert)||0;
    out.push({m:m, sd:sd, t:t, note:note, desc:f});
  }
  out.sort(function(a,b){ return (b.note-a.note) || (b.t-a.t); });
  return out.slice(0,SEO_MAX);
}
function injectSeoJsonLd(){
  try{
    var items=[];
    if(PAGE==="hl" && typeof HL!=="undefined"){
      seoPickHighlights().forEach(function(x){
        var m=x.m;
        items.push({"@type":"SportsEvent","name":((m.h||"")+" \u2013 "+(m.a||"")+(m.g?(" ("+m.g+")"):"")),"description":x.desc,"sport":"Soccer",
          "startDate":x.sd,
          "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
          "location":{"@type":"VirtualLocation","url":"https://tvfussball.de/highlights.html"},
          "performer":[{"@type":"SportsTeam","name":(m.h||"")},{"@type":"SportsTeam","name":(m.a||"")}]});
      });
    } else if(PAGE==="live" && typeof MATCHES!=="undefined"){
      seoPickMatches().forEach(function(x){
        var m=x.m;
        var ev={"@type":"SportsEvent","name":((m.h||"")+" \u2013 "+(m.a||"")),"description":x.desc,"sport":"Soccer",
          "startDate":x.sd,
          "eventStatus":"https://schema.org/EventScheduled",
          "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
          "location":{"@type":"VirtualLocation","url":"https://tvfussball.de/"},
          "performer":[{"@type":"SportsTeam","name":(m.h||"")},{"@type":"SportsTeam","name":(m.a||"")}],
          "organizer":{"@type":"Organization","name":"TVFussball.de","url":"https://tvfussball.de/"}};
        try{ var dt=new Date(x.sd); if(!isNaN(dt)) ev.endDate=new Date(dt.getTime()+2*3600*1000).toISOString(); }catch(e){}
        items.push(ev);
      });
    }
    var old=document.getElementById("tvfSeoData"); if(old) old.remove();
    if(!items.length) return;
    var sc=document.createElement("script"); sc.type="application/ld+json"; sc.id="tvfSeoData";
    sc.textContent=JSON.stringify({"@context":"https://schema.org","@graph":items});
    document.head.appendChild(sc);
  }catch(e){}
}
renderAll();
injectSeoJsonLd();
geoInit();


openDeepLinkHL(); setTimeout(openDeepLinkHL,800);
if(location.hash==="#feedback") fbAdminOpen();
window.addEventListener("hashchange",function(){ if(location.hash==="#feedback") fbAdminOpen(); });
function hideLoader(){ var l=document.getElementById("loader"); if(l) l.classList.add("hide"); }
if(PAGE==="live"){
  if(LIVE_ENABLED){ try{ liveFetch(); }catch(e){} }
  /* Startseite: bewusste, kurze Marken-Intro */
  window.addEventListener("load",()=>{
    setTimeout(()=>{ hideLoader();
      if(!consentGet()){ setTimeout(()=>document.getElementById("consent").classList.remove("hide"), 600); }
    }, 1100);
  });
} else {
  /* Übrige Seiten: kein künstliches Warten – Loader sofort weg, sobald der Inhalt steht.
     Nur bei wirklich langsamem Laden bleibt er bis hierhin sichtbar. */
  hideLoader();
}
