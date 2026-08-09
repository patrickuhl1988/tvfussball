(()=>{
  const cardSelectors='.card,.match-card,.game-card';
  const favSelectors='.favorite.active,.fav.active,.star.active,[data-fav].active,[data-favorite].active,.favorite.on,.fav.on,.star.on';
  const isLive=card=>card.classList.contains('tvf-is-live')||!!card.querySelector('.live,.live-badge,.live-status,[data-live="true"]');
  const isFav=card=>!!card.querySelector(favSelectors);

  function makeDivider(type,label,count){
    const el=document.createElement('div');
    el.className=`tvf-home-divider tvf-home-divider-${type}`;
    el.innerHTML=`<div><span class="tvf-home-kicker">${type==='live'?'● LIVE':'HEUTE'}</span><h2>${label}</h2></div><span class="tvf-home-count">${count}</span>`;
    return el;
  }

  function markPersonal(cards){
    cards.forEach(card=>card.classList.toggle('tvf-favorite-match',isFav(card)));
    const count=document.querySelectorAll(favSelectors).length;
    document.querySelectorAll('[data-tvf-action="mine"]').forEach(btn=>{
      btn.dataset.tvfCount=String(count);
      btn.classList.toggle('has-count',count>0);
      btn.setAttribute('aria-label',count?`Meine Favoriten, ${count} markiert`:'Meine Favoriten');
    });
  }

  function regroupGrid(grid){
    if(!grid?.classList?.contains('tvf-match-grid')) return;
    grid.querySelectorAll(':scope > .tvf-home-divider').forEach(el=>el.remove());
    const cards=[...grid.children].filter(el=>el.matches?.(cardSelectors));
    if(!cards.length) return;
    markPersonal(cards);
    const live=cards.filter(isLive);
    const today=cards.filter(card=>!isLive(card));
    [...live,...today].forEach(card=>grid.appendChild(card));
    const oldHead=grid.querySelector(':scope > .tvf-match-section-head');
    if(oldHead) oldHead.classList.add('tvf-home-masterhead');
    if(live.length) grid.insertBefore(makeDivider('live','Jetzt live',live.length),live[0]);
    if(today.length) grid.insertBefore(makeDivider('today',live.length?'Später heute':'Heute',today.length),today[0]);
  }

  function demoteSecondary(){
    document.querySelectorAll('section,.section,.faq,.info,.provider-box,.highlight-card,.news-card').forEach(el=>{
      const heading=el.querySelector?.('h1,h2,h3')?.textContent||el.textContent?.slice(0,100)||'';
      if(/highlight|analyse|anbieter|faq|häufig|info|news/i.test(heading)) el.classList.add('tvf-secondary-content');
    });
  }

  function apply(){
    document.querySelectorAll('.tvf-match-grid').forEach(regroupGrid);
    markPersonal([...document.querySelectorAll(cardSelectors)]);
    demoteSecondary();
  }

  let timer;
  const schedule=()=>{clearTimeout(timer);timer=setTimeout(apply,100)};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true}); else apply();
  document.addEventListener('click',e=>{if(e.target.closest('.favorite,.fav,.star,[data-fav],[data-favorite]'))setTimeout(apply,60)});
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
})();
