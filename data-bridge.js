(()=>{
'use strict';
const STORE=window.__TVF_NET__=window.__TVF_NET__||[];
const seen=new Set();
const normKey=k=>(k||'').toLowerCase().replace(/[^a-z0-9]/g,'');
const txt=v=>typeof v==='string'||typeof v==='number'?String(v).trim():'';
const pick=(o,names)=>{if(!o||typeof o!=='object')return'';const entries=Object.entries(o);for(const name of names){const nk=normKey(name);for(const[k,v]of entries){if(normKey(k)===nk){if(typeof v==='object'&&v){const nested=pick(v,['name','title','shortName','displayName','teamName']);if(nested)return nested}const s=txt(v);if(s)return s}}}return''};
const teamName=v=>{if(!v)return'';if(typeof v==='string')return v.trim();if(typeof v==='object')return pick(v,['name','teamName','shortName','displayName','title']);return''};
const urlOf=o=>pick(o,['highlightUrl','videoUrl','video','url','href','link','watchUrl','highlights']);
const videoLike=s=>/youtube\.com|youtu\.be|dailymotion\.com|ardmediathek\.de|sportschau\.de|zdf\.de|sport1\.de|sky\.de|dazn\.com|rtl\.de|joyn\.de/i.test(s||'');
const highlightLike=s=>/highlight|zusammenfassung|video|tore|spielbericht|re.?live/i.test(s||'');
function host(){return document.querySelector('.tvf-engine')||document.body}
function ensureBridge(){let b=document.getElementById('tvf-data-bridge');if(!b){b=document.createElement('div');b.id='tvf-data-bridge';b.style.cssText='position:absolute;left:-99999px;top:0;width:1px;height:1px;overflow:hidden;';host()?.appendChild(b)}else if(b.parentElement!==host())host()?.appendChild(b);return b}
function addMatch(o,path=''){
 let home=teamName(o.homeTeam||o.home||o.team1||o.home_team||o.homeSide||o.localTeam||o.host||o.teams?.home);
 let away=teamName(o.awayTeam||o.away||o.team2||o.away_team||o.awaySide||o.visitorTeam||o.guest||o.teams?.away);
 if(!home||!away){const teams=Array.isArray(o.teams)?o.teams:[];if(teams.length>=2){home=home||teamName(teams[0]);away=away||teamName(teams[1])}}
 if(!home||!away||home===away||home.length>80||away.length>80)return false;
 const comp=pick(o,['competition','competitionName','league','leagueName','tournament','tournamentName','category','stage'])||'Fußball';
 const time=pick(o,['time','kickoff','kickOff','startTime','start','dateTime','scheduled','utcDate','matchTime']);
 const score=pick(o,['score','result','finalScore','displayScore']);
 const status=pick(o,['status','state','matchStatus','period']);
 const provider=pick(o,['channel','channels','broadcaster','provider','station','tv','stream','broadcast']);
 const minute=pick(o,['minute','clock','elapsed']);
 const key=[home,away,time,score,comp].join('|').toLowerCase();if(seen.has('m:'+key))return true;seen.add('m:'+key);
 const el=document.createElement('article');el.className='match tvf-bridge-match'+(/live|playing|inprogress|in_progress/i.test(status)?' live':'');el.dataset.match='bridge';
 const scoreText=(typeof o.score==='object'&&o.score)?[pick(o.score,['home','homeScore','team1']),pick(o.score,['away','awayScore','team2'])].filter(Boolean).join(' - '):score;
 const when=scoreText||((time.match?.(/\b(?:[01]?\d|2[0-3]):[0-5]\d\b/)||[])[0])||time;
 el.innerHTML='<span class="home-team"></span><span class="away-team"></span><span class="competition"></span><span class="match-time"></span><span class="status"></span><span class="minute"></span><span class="channels"></span>';
 el.querySelector('.home-team').textContent=home;el.querySelector('.away-team').textContent=away;el.querySelector('.competition').textContent=typeof comp==='object'?teamName(comp):String(comp);el.querySelector('.match-time').textContent=when||'';el.querySelector('.status').textContent=status||'';el.querySelector('.minute').textContent=minute?String(minute).replace(/[^0-9]/g,'')+"'":'';el.querySelector('.channels').textContent=typeof provider==='object'?JSON.stringify(provider):provider||'';
 ensureBridge()?.appendChild(el);return true
}
function addHighlight(o,path=''){
 const u=urlOf(o), title=pick(o,['title','name','headline','label','description'])||path.split('.').pop()||'Highlight';
 if(!videoLike(u)&&!highlightLike(title)&&!highlightLike(path))return false;
 const key=(u||'')+'|'+title;if(seen.has('h:'+key))return true;seen.add('h:'+key);
 const a=document.createElement('a');a.className='highlight-link tvf-bridge-highlight';a.textContent=highlightLike(title)?title:'Highlight ansehen';if(/^https?:/i.test(u))a.href=u;else a.dataset.url=u||'';ensureBridge()?.appendChild(a);return true
}
function walk(v,path='',depth=0){if(depth>9||v==null)return;if(Array.isArray(v)){for(let i=0;i<Math.min(v.length,1000);i++)walk(v[i],path+'['+i+']',depth+1);return}if(typeof v!=='object')return;try{addMatch(v,path);addHighlight(v,path)}catch{}for(const[k,x]of Object.entries(v)){if(typeof x==='object'&&x!==null)walk(x,path?path+'.'+k:k,depth+1);else if(typeof x==='string'&&(videoLike(x)||highlightLike(k)||highlightLike(x))){try{addHighlight({title:k,url:x},path+'.'+k)}catch{}}}}
function ingest(data,url=''){STORE.push({url,data,at:Date.now()});if(STORE.length>80)STORE.shift();try{walk(data,url)}catch{}try{window.dispatchEvent(new CustomEvent('tvf:data',{detail:{url}}))}catch{}}
const originalFetch=window.fetch;if(originalFetch){window.fetch=function(...args){return originalFetch.apply(this,args).then(res=>{try{const clone=res.clone();const ct=clone.headers.get('content-type')||'';if(/json/i.test(ct))clone.json().then(d=>ingest(d,String(args[0]||''))).catch(()=>{});else clone.text().then(t=>{if(t&&t.length<3000000){try{ingest(JSON.parse(t),String(args[0]||''))}catch{if(/highlight|fixture|match|spiel|game/i.test(t))STORE.push({url:String(args[0]||''),text:t.slice(0,200000),at:Date.now()})}}}).catch(()=>{})}catch{}return res})}}
const XO=window.XMLHttpRequest;if(XO){const open=XO.prototype.open,send=XO.prototype.send;XO.prototype.open=function(method,url,...rest){this.__tvfUrl=url;return open.call(this,method,url,...rest)};XO.prototype.send=function(...args){this.addEventListener('load',()=>{try{const ct=this.getResponseHeader('content-type')||'';if(this.responseType==='json'&&this.response)ingest(this.response,this.__tvfUrl||'');else if(!this.responseType||this.responseType==='text'){const t=this.responseText;if(t&&(/json/i.test(ct)||/^[\s]*[\[{]/.test(t))){try{ingest(JSON.parse(t),this.__tvfUrl||'')}catch{}}}}catch{}});return send.apply(this,args)}}
window.__TVF_INGEST__=ingest;
})();