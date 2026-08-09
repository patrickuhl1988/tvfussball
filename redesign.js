(()=>{
  const cardSelectors='.card,.match-card,.game-card';
  const pick=(root,selectors)=>root.querySelector(selectors);

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
    if(fav){
      fav.classList.add('tvf-card-fav');
      if(!fav.getAttribute('aria-label')) fav.setAttribute('aria-label','Spiel merken');
      if(!fav.getAttribute('title')) fav.setAttribute('title','Spiel merken');
    }

    const ticker=pick(card,'.ticker,.live-ticker,.ticker-box,[data-ticker]');
    if(ticker) ticker.classList.add('tvf-card-ticker');

    if(card.querySelector('.live,.live-badge,.live-status,[data-live="true"]')) card.classList.add('tvf-is-live');
    else card.classList.remove('tvf-is-live');

    card.dataset.tvfEnhanced='1';
  }

  function enhanceTicker(ticker){
    if(!ticker || ticker.nodeType!==1) return;
    ticker.classList.add('tvf-ticker');
    ticker.querySelectorAll('li,.ticker-row,.ticker-event,.event').forEach((row,index)=>{
      row.classList.add('tvf-ticker-row');
      const text=(row.textContent||'').toLowerCase();
      if(/tor|goal|⚽/.test(text)) row.classList.add('tvf-ticker-goal');
      if(/gelb|yellow|karte/.test(text)) row.classList.add('tvf-ticker-card');
      if(/rot|red card/.test(text)) row.classList.add('tvf-ticker-red');
      row.style.setProperty('--tvf-event-index',index);
    });
  }

  function enhance(root=document){
    if(root.matches?.(cardSelectors)) enhanceCard(root);
    root.querySelectorAll?.(cardSelectors).forEach(enhanceCard);
    if(root.matches?.('.ticker,.live-ticker,.ticker-box,#ticker')) enhanceTicker(root);
    root.querySelectorAll?.('.ticker,.live-ticker,.ticker-box,#ticker').forEach(enhanceTicker);
  }

  function boot(){
    enhance(document);
    const observer=new MutationObserver(mutations=>{
      for(const mutation of mutations){
        for(const node of mutation.addedNodes){
          if(node.nodeType===1) enhance(node);
        }
      }
    });
    observer.observe(document.body,{childList:true,subtree:true});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();
