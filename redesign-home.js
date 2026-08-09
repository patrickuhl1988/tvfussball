(()=>{
  const cardSelectors='.card,.match-card,.game-card';
  const isLive=card=>card.classList.contains('tvf-is-live')||!!card.querySelector('.live,.live-badge,.live-status,[data-live="true"]');

  function makeDivider(type,label,count){
    const el=document.createElement('div');
    el.className=`tvf-home-divider tvf-home-divider-${type}`;
    el.innerHTML=`<div><span class="tvf-home-kicker">${type==='live'?'● LIVE':'HEUTE'}</span><h2>${label}</h2></div><span class="tvf-home-count">${count}</span>`;
    return el;
  }

  function regroupGrid(grid){
    if(!grid?.classList?.contains('tvf-match-grid')) return;
    grid.querySelectorAll(':scope > .tvf-home-divider').forEach(el=>el.remove());
    const cards=[...grid.children].filter(el=>el.matches?.(cardSelectors));
    if(!cards.length) return;
    const live=cards.filter(isLive);
    const today=cards.filter(card=>!isLive(card));
    [...live,...today].forEach(card=>grid.appendChild(card));
    const oldHead=grid.querySelector(':scope > .tvf-match-section-head');
    if(oldHead) oldHead.classList.add('tvf-home-masterhead');
    if(live.length){
      const liveHead=makeDivider('live','Jetzt live',live.length);
      grid.insertBefore(liveHead,live[0]);
    }
    if(today.length){
      const todayHead=makeDivider('today',live.length?'Später heute':'Heute',today.length);
      grid.insertBefore(todayHead,today[0]);
    }
  }

  function demoteSecondary(){
    document.querySelectorAll('section,.section,.faq,.info,.provider-box,.highlight-card,.news-card').forEach(el=>{
      const heading=el.querySelector?.('h1,h2,h3')?.textContent||el.textContent?.slice(0,100)||'';
      if(/highlight|analyse|anbieter|faq|häufig|info|news/i.test(heading)) el.classList.add('tvf-secondary-content');
    });
  }

  function apply(){
    document.querySelectorAll('.tvf-match-grid').forEach(regroupGrid);
    demoteSecondary();
  }

  let timer;
  const schedule=()=>{clearTimeout(timer);timer=setTimeout(apply,120)};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true}); else apply();
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});
})();
