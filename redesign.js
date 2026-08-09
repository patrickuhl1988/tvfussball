(()=>{
  const cardSelectors='.card,.match-card,.game-card';
  const pick=(root,selectors)=>root.querySelector(selectors);
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function enhanceCard(card){
    if(!card || card.nodeType!==1) return;
    card.classList.add('tvf-card');
    const head=pick(card,'.comp,.competition,.league,.league-title,.meta');
    if(head) head.classList.add('tvf-card-head');
    const teams=pick(card,'.teams,.clubs,.matchup,.pairing');
    if(teams) teams.classList.add('tvf-card-teams');
    const score=pick(card,'.score,.result,.match-score,.kickoff,.kick,.ko,.time');
    if(score) score.classList.add('tvf-card-score');
    const broadcast=pick(card,'.channels,.broadcast,.foot,.providers,.stations');
    if(broadcast) broadcast.classList.add('tvf-card-broadcast');
    const fav=pick(card,'.favorite,.fav,.star,[data-fav],[data-favorite]');
    if(fav){fav.classList.add('tvf-card-fav');if(!fav.getAttribute('aria-label'))fav.setAttribute('aria-label','Favorit markieren');}
    const ticker=pick(card,'.ticker,.live-ticker,.ticker-box,[data-ticker]');
    if(ticker) ticker.classList.add('tvf-card-ticker');
    if(card.querySelector('.live,.live-badge,.live-status,[data-live="true"]')) card.classList.add('tvf-is-live'); else card.classList.remove('tvf-is-live');
    card.dataset.tvfEnhanced='1';
  }

  function enhanceTicker(ticker){
    if(!ticker || ticker.nodeType!==1) return;
    ticker.classList.add('tvf-ticker');
    ticker.querySelectorAll('li,.ticker-row,.ticker-event,.event').forEach((row,index)=>{
      row.classList.add('tvf-ticker-row');
      const text=norm(row.textContent);
      if(/tor|goal|⚽/.test(text)) row.classList.add('tvf-ticker-goal');
      if(/gelb|yellow|karte/.test(text)) row.classList.add('tvf-ticker-card');
      if(/rot|red card/.test(text)) row.classList.add('tvf-ticker-red');
      row.style.setProperty('--tvf-event-index',index);
    });
  }

  function legacyClick(matchers){
    const nodes=[...document.querySelectorAll('button,a,[role="button"],.tab,.btn,.m-btn')].filter(el=>!el.closest('.tvf-redesign-hero'));
    const target=nodes.find(el=>matchers.some(rx=>rx.test(norm(el.textContent))));
    if(target){target.click();return true}
    return false;
  }

  function buildHero(){
    if(document.querySelector('.tvf-redesign-hero')) return;
    const header=document.querySelector('header,.hdr');
    const hero=document.createElement('section');
    hero.className='tvf-redesign-hero';
    hero.innerHTML='<div class="tvf-redesign-eyebrow">Fußball im TV & Stream</div><h1>Kein Spiel mehr verpassen.</h1><p>Alle wichtigen Fußballspiele, Sender und Live-Updates auf einen Blick.</p><div class="tvf-redesign-stats"><div class="tvf-redesign-stat"><strong data-tvf-stat="matches">–</strong><span>Spiele</span></div><div class="tvf-redesign-stat"><strong data-tvf-stat="live">–</strong><span>live</span></div><div class="tvf-redesign-stat"><strong data-tvf-stat="favorites">–</strong><span>Favoriten</span></div></div><div class="tvf-focusbar"><button class="tvf-focusbtn is-active" data-tvf-action="today">Heute</button><button class="tvf-focusbtn" data-tvf-action="live">Live</button><button class="tvf-focusbtn" data-tvf-action="mine">Meine</button><button class="tvf-focusbtn" data-tvf-action="highlights">Highlights</button><label class="tvf-focussearch"><input type="search" placeholder="Team, Wettbewerb oder Sender suchen" aria-label="Spiele durchsuchen"></label></div>';
    if(header?.parentNode) header.insertAdjacentElement('afterend',hero); else document.body.prepend(hero);

    hero.querySelectorAll('.tvf-focusbtn').forEach(btn=>btn.addEventListener('click',()=>{
      const action=btn.dataset.tvfAction;
      const map={today:[/^heute$/],live:[/^live$/,/(^| )live( |$)/],mine:[/^meine$/, /favorit/],highlights:[/highlight/]};
      legacyClick(map[action]||[]);
      hero.querySelectorAll('.tvf-focusbtn').forEach(b=>b.classList.toggle('is-active',b===btn));
      setTimeout(()=>{updateStats();updateSectionHeads()},100);
    }));

    const fresh=hero.querySelector('.tvf-focussearch input');
    fresh.addEventListener('input',()=>{
      const old=[...document.querySelectorAll('input[type="search"],#search')].find(el=>el!==fresh && !el.closest('.tvf-redesign-hero'));
      if(old){old.value=fresh.value;old.dispatchEvent(new Event('input',{bubbles:true}));old.dispatchEvent(new Event('change',{bubbles:true}));}
      setTimeout(()=>{updateStats();updateSectionHeads()},70);
    });
  }

  function simplifyChrome(root=document){
    root.querySelectorAll?.('.datebar,.date-nav,.dates,.m-datebar').forEach(el=>el.classList.add('tvf-date-nav'));
    root.querySelectorAll?.('.tabs,.tabbar,.subbar,.m-quicknav').forEach(el=>{el.classList.add('tvf-primary-nav','tvf-simplified-hidden')});
    root.querySelectorAll?.('.toolbar,.m-filters,.filters,.filter-wrap,.filter-panel').forEach(el=>{el.classList.add('tvf-filter-area','tvf-simplified-hidden')});
    root.querySelectorAll?.('.bottomnav,.m-fixed').forEach(el=>el.classList.add('tvf-mobile-dock'));
  }

  function organizeMatchGrids(){
    const cards=[...document.querySelectorAll(cardSelectors)];
    const parents=[...new Set(cards.map(c=>c.parentElement).filter(Boolean))];
    parents.forEach(parent=>{
      const direct=[...parent.children].filter(el=>el.matches?.(cardSelectors));
      if(direct.length<2) return;
      parent.classList.add('tvf-match-grid');
      if(!parent.querySelector(':scope > .tvf-match-section-head')){
        const head=document.createElement('div');
        head.className='tvf-match-section-head';
        head.style.gridColumn='1 / -1';
        head.innerHTML='<h2>Spiele</h2><span data-tvf-section-count></span>';
        parent.prepend(head);
      }
    });
    updateSectionHeads();
  }

  function updateSectionHeads(){
    document.querySelectorAll('.tvf-match-grid').forEach(grid=>{
      const cards=[...grid.children].filter(el=>el.matches?.(cardSelectors));
      const visible=cards.filter(c=>getComputedStyle(c).display!=='none');
      const counter=grid.querySelector(':scope > .tvf-match-section-head [data-tvf-section-count]');
      if(counter) counter.textContent=`${visible.length} ${visible.length===1?'Partie':'Partien'}`;
    });
  }

  function updateStats(){
    const cards=[...document.querySelectorAll(cardSelectors)];
    const visible=cards.filter(c=>getComputedStyle(c).display!=='none');
    const live=visible.filter(c=>c.classList.contains('tvf-is-live')||c.querySelector('.live,.live-badge,.live-status,[data-live="true"]'));
    const favs=document.querySelectorAll('.favorite.active,.fav.active,.star.active,[data-fav].active,[data-favorite].active').length;
    const set=(k,v)=>{const el=document.querySelector(`[data-tvf-stat="${k}"]`);if(el)el.textContent=v};
    set('matches',visible.length||cards.length);set('live',live.length);set('favorites',favs);
  }

  function enhance(root=document){
    simplifyChrome(root);
    if(root.matches?.(cardSelectors)) enhanceCard(root);
    root.querySelectorAll?.(cardSelectors).forEach(enhanceCard);
    if(root.matches?.('.ticker,.live-ticker,.ticker-box,#ticker')) enhanceTicker(root);
    root.querySelectorAll?.('.ticker,.live-ticker,.ticker-box,#ticker').forEach(enhanceTicker);
  }

  function boot(){
    buildHero();enhance(document);organizeMatchGrids();updateStats();
    const observer=new MutationObserver(mutations=>{for(const mutation of mutations){for(const node of mutation.addedNodes){if(node.nodeType===1)enhance(node)}}clearTimeout(window.__tvfLayoutTimer);window.__tvfLayoutTimer=setTimeout(()=>{organizeMatchGrids();updateStats()},80)});
    observer.observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true}); else boot();
})();
