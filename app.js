const colorFallback = [
  {name:'brand/cedar-900',value:'#073630',usage:'Hover / strong brand'},
  {name:'brand/cedar-700',value:'#0B4A43',usage:'Primary action / brand'},
  {name:'brand/cedar-100',value:'#DCEBE7',usage:'Selected / soft brand'},
  {name:'text/primary',value:'#12212C',usage:'Primary text'},
  {name:'text/secondary',value:'#586974',usage:'Secondary text'},
  {name:'surface/subtle',value:'#F5F8F7',usage:'Subtle background'},
  {name:'status/danger',value:'#9B1C1C',usage:'Errors / destructive'},
  {name:'focus/ring',value:'#FFD166',usage:'Keyboard focus'}
];

const spacingFallback = [
  {name:'space-1',value:4},{name:'space-2',value:8},{name:'space-3',value:12},
  {name:'space-4',value:16},{name:'space-6',value:24},{name:'space-8',value:32},{name:'space-12',value:48}
];

function renderColorTokens(tokens){
  const container=document.querySelector('#colorTokens');
  container.replaceChildren(...tokens.map(token=>{
    const card=document.createElement('article');
    card.className='token-card';
    card.innerHTML='<div class="token-swatch" style="background:'+token.value+'"></div>'+
      '<div class="token-meta"><strong>'+token.name+'</strong><span>'+token.value+' · '+token.usage+'</span></div>';
    return card;
  }));
}

function renderSpacingTokens(tokens){
  const container=document.querySelector('#spacingTokens');
  container.replaceChildren(...tokens.map(token=>{
    const item=document.createElement('div');
    item.className='spacing-token';
    const height=Math.max(8,token.value*2);
    item.innerHTML='<div class="spacing-block" style="height:'+height+'px"></div><span>'+token.name+' · '+token.value+'px</span>';
    return item;
  }));
}

fetch('tokens/design-tokens.json')
  .then(response=>{
    if(!response.ok) throw new Error('tokens unavailable');
    return response.json();
  })
  .then(tokens=>{
    renderColorTokens(tokens.color);
    renderSpacingTokens(tokens.spacing);
  })
  .catch(()=>{
    renderColorTokens(colorFallback);
    renderSpacingTokens(spacingFallback);
  });

const dialog=document.querySelector('#confirmationDialog');
const openDialog=document.querySelector('#openDialog');
openDialog.addEventListener('click',()=>{
  if(typeof dialog.showModal==='function') dialog.showModal();
});

document.querySelectorAll('.side-nav a').forEach(link=>{
  link.addEventListener('click',()=>{
    document.querySelectorAll('.side-nav a').forEach(item=>item.removeAttribute('aria-current'));
    link.setAttribute('aria-current','location');
  });
});

const observer=new IntersectionObserver(entries=>{
  const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!visible) return;
  document.querySelectorAll('.side-nav a').forEach(link=>{
    const active=link.getAttribute('href')==='#'+visible.target.id;
    if(active) link.setAttribute('aria-current','location');
    else link.removeAttribute('aria-current');
  });
},{rootMargin:'-25% 0px -60% 0px',threshold:[0,.25,.5]});

document.querySelectorAll('.system-section[id]').forEach(section=>observer.observe(section));
