/* ═══════════════════════════════════════════════════════
   BLOCK SHOP — Lógica Principal do Site
   ► Carrinho, Wishlist, Filtros, Busca
   ► Modal de Produto, Checkout, Formulários
   ► Countdown, Ticker, Rotação do Hero
   ► Toast Notifications, Validações
   ► NÃO edite este arquivo a menos que saiba JavaScript
═══════════════════════════════════════════════════════ */

// ══════ STATE ══════
let cart={}, wishlist=new Set(), currentCat='all', currentProd=null, modalQty=1, selColor=0, selStor=1, payMethod='pix', shipCost=0, couponDisc=0;

// ══════ PAGES ══════
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg=document.getElementById('page-'+id);
  pg.classList.add('active');
  window.scrollTo({top:0,behavior:'instant'});
  closeMobileNav();
  if(id==='wishlist') renderWL();
  if(id==='checkout') renderCheckout();
}

// ══════ MOBILE NAV ══════
function toggleMobileNav(){
  const nav=document.getElementById('mobileNav');
  const ham=document.getElementById('hamburger');
  const isOpen=nav.classList.contains('open');
  if(isOpen){nav.classList.remove('open');ham.classList.remove('open');}
  else{nav.classList.add('open');ham.classList.add('open');}
}
function closeMobileNav(){
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// ══════ RENDER CATS ══════
function renderCats(){
  document.getElementById('catsGrid').innerHTML=CATS.map(c=>`
    <div class="cat-card ${c.id===currentCat?'active':''}" onclick="filterAndScroll('${c.id}')">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count} produto${c.count!==1?'s':''}</div>
    </div>`).join('');
}

// ══════ RENDER TABS ══════
function renderTabs(){
  document.getElementById('filterTabs').innerHTML=CATS.map(c=>`
    <button class="ftab ${c.id===currentCat?'active':''}" onclick="setFilter('${c.id}')">${c.icon} ${c.name}</button>`).join('');
}

// ══════ RENDER PRODUCTS ══════
function renderProducts(list){
  const g=document.getElementById('productsGrid');
  if(!list.length){
    g.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text3)"><div style="font-size:48px;margin-bottom:12px">🔍</div><div style="font-size:16px">Nenhum produto encontrado.</div></div>`;
    return;
  }
  g.innerHTML=list.map(p=>{
    const badgeTxt=p.badge==='hot'?'🔥 Mais Vendido':p.badge==='sale'?'💥 Oferta':p.badge==='new'?'✨ Novo':'⏳ Últimas';
    const badgeCls=`b-${p.badge}`;
    const imgHtml=p.img
      ?`<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">`
      :'';
    return `<div class="p-card" onclick="openProductModal(${p.id})">
      <span class="p-badge ${badgeCls}">${badgeTxt}</span>
      <button class="p-wish ${wishlist.has(p.id)?'on':''}" onclick="toggleWish(event,${p.id})">${wishlist.has(p.id)?'❤️':'🤍'}</button>
      <div class="p-img">
        ${imgHtml}
        <div class="p-img-fallback" style="${p.img?'display:none':''}">${p.emoji}</div>
        <div class="p-img-glow"></div>
      </div>
      <div class="p-body">
        <div class="p-brand">${p.brand}</div>
        <div class="p-name">${p.name}</div>
        <div class="p-stars"><span class="stars-g">★★★★★</span><span class="r-cnt">${p.rating} (${p.reviews.toLocaleString('pt-BR')})</span></div>
        <div class="p-price-row">
          <span class="p-old">R$ ${p.oldPrice.toLocaleString('pt-BR')}</span>
          <span class="p-curr">R$ ${p.price.toLocaleString('pt-BR')}</span>
          <span class="p-disc">−${p.discount}%</span>
        </div>
        <div class="p-install">ou <strong>${p.installments}</strong></div>
        <div class="p-stock">
          <div class="stock-lbl"><span class="sl-hot">Restam ${p.stock} un.</span><span class="sl-dim">Limitado</span></div>
          <div class="stock-track"><div class="stock-fill" style="width:${Math.min(100,p.stock*3)}%"></div></div>
        </div>
        <button class="btn-cart" onclick="event.stopPropagation();quickAdd(${p.id})">🛒 Adicionar</button>
      </div>
    </div>`;
  }).join('');
}

// ══════ RENDER REVIEWS ══════
function renderRevs(){
  document.getElementById('revsGrid').innerHTML=REVIEWS.map(r=>`
    <div class="rev-card">
      <div class="rev-top">
        <div class="rev-user"><div class="rev-avatar">${r.av}</div><div><div class="rev-name">${r.name}</div><div class="rev-date">${r.date}</div></div></div>
        <span class="ver-badge">✓ Verificado</span>
      </div>
      <div class="rev-stars">${r.stars}</div>
      <div class="rev-text">${r.text}</div>
      <div class="rev-product">📦 ${r.prod}</div>
    </div>`).join('');
}

// ══════ RENDER TICKER ══════
function renderTicker(){
  const msgs=[...TICKERS,...TICKERS];
  document.getElementById('ticker').innerHTML=msgs.map(m=>`<span class="ticker-item"><span class="t-dot"></span>${m}</span>`).join('');
}

// ══════ FILTERING ══════
function setFilter(cat){
  currentCat=cat;
  const list=cat==='all'?PRODUCTS:PRODUCTS.filter(p=>p.cat===cat);
  renderProducts(list);renderTabs();renderCats();
}
function filterAndScroll(cat){
  showPage('home');
  setTimeout(()=>{setFilter(cat);document.getElementById('products-section').scrollIntoView({behavior:'smooth'});},80);
}
function scrollToCats(){showPage('home');setTimeout(()=>document.getElementById('cats-section').scrollIntoView({behavior:'smooth'}),80);}
function scrollToOffers(){showPage('home');setTimeout(()=>document.getElementById('offers-anchor').scrollIntoView({behavior:'smooth'}),80);}
function handleSearch(val){
  const v=val.toLowerCase().trim();
  if(!v){setFilter(currentCat);return;}
  const list=PRODUCTS.filter(p=>p.name.toLowerCase().includes(v)||p.brand.toLowerCase().includes(v));
  renderProducts(list);
}

// ══════ CART ══════
function quickAdd(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  if(cart[id])cart[id].qty++;else cart[id]={product:p,qty:1};
  updBadge();toast(p.name+' adicionado!',p.emoji,'Carrinho atualizado ✓');
}
function addToCart(id,qty,color,stor){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  const key=`${id}_${color}_${stor}`;
  if(cart[key])cart[key].qty+=qty;else cart[key]={product:{...p,_color:color,_stor:stor,_key:key},qty};
  updBadge();toast(p.name+' adicionado!',p.emoji,'Carrinho atualizado ✓');
}
function updBadge(){
  const t=Object.values(cart).reduce((a,i)=>a+i.qty,0);
  const b=document.getElementById('cartBadge');
  b.textContent=t;
  b.classList.remove('pop');
  void b.offsetWidth; // reflow
  b.classList.add('pop');
  setTimeout(()=>b.classList.remove('pop'),300);
}
function openCart(){renderCartDrawer();document.getElementById('overlay').classList.add('open');document.getElementById('cartDrawer').classList.add('open');}
function closeCart(){document.getElementById('overlay').classList.remove('open');document.getElementById('cartDrawer').classList.remove('open');}
function renderCartDrawer(){
  const keys=Object.keys(cart);
  const empty=document.getElementById('cartEmpty');
  const items=document.getElementById('cartItems');
  const foot=document.getElementById('drFoot');
  if(!keys.length){empty.style.display='flex';items.style.display='none';foot.style.display='none';return;}
  empty.style.display='none';items.style.display='block';foot.style.display='block';
  items.innerHTML=keys.map(k=>{
    const {product:p,qty}=cart[k];
    const imgHtml=p.img?`<img src="${p.img}" alt="${p.name}">`:``;
    return `<div class="c-item">
      <div class="ci-img">${imgHtml||p.emoji}</div>
      <div class="ci-info">
        <div class="ci-brand">${p.brand}</div>
        <div class="ci-name">${p.name}</div>
        <div class="ci-qty-row">
          <button class="qty-btn" onclick="chgQty('${k}',-1)">−</button>
          <span class="qty-val">${qty}</span>
          <button class="qty-btn" onclick="chgQty('${k}',1)">+</button>
        </div>
        <span class="ci-remove" onclick="rmCart('${k}')">Remover</span>
      </div>
      <div class="ci-price">R$ ${(p.price*qty).toLocaleString('pt-BR')}</div>
    </div>`;
  }).join('');
  renderCartTotals();
}
function chgQty(key,d){if(!cart[key])return;cart[key].qty+=d;if(cart[key].qty<=0)delete cart[key];updBadge();renderCartDrawer();}
function rmCart(key){delete cart[key];updBadge();renderCartDrawer();}
function renderCartTotals(){
  const sub=Object.values(cart).reduce((a,i)=>a+(i.product.price*i.qty),0);
  const ship=sub>=19900?0:shipCost;
  const tot=sub-couponDisc+ship;
  document.getElementById('cartTotals').innerHTML=`
    <div class="total-row"><span>Subtotal</span><span>R$ ${sub.toLocaleString('pt-BR')}</span></div>
    ${couponDisc?`<div class="total-row" style="color:var(--success)"><span>Cupom</span><span>−R$ ${couponDisc.toLocaleString('pt-BR')}</span></div>`:''}
    <div class="total-row"><span>Frete</span><span>${ship===0?'<span style="color:var(--success)">GRÁTIS</span>':'R$ '+ship.toLocaleString('pt-BR')}</span></div>
    <div class="total-row grand"><span>Total</span><span class="tv">R$ ${tot.toLocaleString('pt-BR')}</span></div>`;
}
function applyCoupon(){
  const c=document.getElementById('couponInput').value.trim().toUpperCase();
  if(c==='BLOCK10'){couponDisc=2000;toast('Cupom aplicado! 🎉','✅','R$20 de desconto');}
  else if(c==='FRETE0'){shipCost=0;toast('Frete grátis!','🚚','Frete zerado!');}
  else{toast('Cupom inválido','⚠️','Verifique o código');return;}
  renderCartTotals();
}
function goCheckout(){
  if(!Object.keys(cart).length){toast('Carrinho vazio','⚠️','Adicione produtos antes');return;}
  closeCart();showPage('checkout');
}

// ══════ WISHLIST ══════
function toggleWish(e,id){
  e.stopPropagation();
  if(wishlist.has(id))wishlist.delete(id);
  else{wishlist.add(id);toast('Adicionado aos favoritos','❤️','Salvo na sua lista');}
  const b=document.getElementById('wishBadge');
  b.textContent=wishlist.size;b.style.display=wishlist.size?'flex':'none';
  renderProducts(currentCat==='all'?PRODUCTS:PRODUCTS.filter(p=>p.cat===currentCat));
}
function renderWL(){
  const c=document.getElementById('wlContent');
  if(!wishlist.size){
    c.innerHTML=`<div class="wl-empty"><div class="wl-icon">❤️</div><p>Você não favoritou nenhum produto ainda.</p><button class="btn-primary" onclick="showPage('home')">Explorar Produtos</button></div>`;
    return;
  }
  const prods=PRODUCTS.filter(p=>wishlist.has(p.id));
  const div=document.createElement('div');div.className='products-grid';
  div.innerHTML=prods.map(p=>{
    const imgHtml=p.img?`<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">`:'';
    return `<div class="p-card" onclick="openProductModal(${p.id});showPage('home')">
      <button class="p-wish on" onclick="toggleWish(event,${p.id})">❤️</button>
      <div class="p-img">${imgHtml}<div class="p-img-fallback" style="${p.img?'display:none':''}">${p.emoji}</div><div class="p-img-glow"></div></div>
      <div class="p-body">
        <div class="p-brand">${p.brand}</div>
        <div class="p-name">${p.name}</div>
        <div class="p-price-row"><span class="p-old">R$ ${p.oldPrice.toLocaleString('pt-BR')}</span><span class="p-curr">R$ ${p.price.toLocaleString('pt-BR')}</span><span class="p-disc">−${p.discount}%</span></div>
        <button class="btn-cart" onclick="event.stopPropagation();quickAdd(${p.id})">🛒 Adicionar</button>
      </div>
    </div>`;
  }).join('');
  c.innerHTML='';c.appendChild(div);
}

// ══════ PRODUCT MODAL ══════
function openProductModal(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  currentProd=p;modalQty=1;selColor=0;selStor=p.storage.length>1?1:0;
  // image or emoji
  const bigImg=document.getElementById('mBigImg');
  const bigEmoji=document.getElementById('mEmoji');
  const mImgEl=document.getElementById('mImg');
  if(p.img){
    mImgEl.src=p.img;mImgEl.alt=p.name;
    bigImg.style.display='flex';bigEmoji.style.display='none';
  } else {
    bigEmoji.textContent=p.emoji;
    bigImg.style.display='none';bigEmoji.style.display='block';
  }
  // info
  document.getElementById('mBrand').textContent=p.brand;
  document.getElementById('mName').textContent=p.name;
  document.getElementById('mRating').textContent=`${p.rating} (${p.reviews.toLocaleString('pt-BR')} avaliações)`;
  document.getElementById('mOld').textContent=`De R$ ${p.oldPrice.toLocaleString('pt-BR')}`;
  document.getElementById('mCurr').textContent=`R$ ${p.price.toLocaleString('pt-BR')}`;
  document.getElementById('mDisc').textContent=`−${p.discount}%`;
  document.getElementById('mInstall').textContent=`ou ${p.installments}`;
  document.getElementById('mQtyVal').textContent='1';
  // colors
  document.getElementById('mColors').innerHTML=p.colors.map((c,i)=>`
    <div class="color-opt ${i===0?'active':''}" style="background:${c}" title="${p.colorNames[i]}" onclick="selColorOpt(${i},this)"></div>`).join('');
  // storage
  document.getElementById('mStorage').innerHTML=p.storage.map((s,i)=>`
    <div class="stor-opt ${i===selStor?'active':''}" onclick="selStorOpt(${i},this)">${s}</div>`).join('');
  // thumbs
  document.getElementById('mThumbs').innerHTML=p.colors.slice(0,4).map((c,i)=>{
    if(p.img) return `<div class="m-thumb ${i===0?'active':''}" onclick="selThumb(${i},this)"><img src="${p.img}" alt="" onerror="this.parentNode.innerHTML='<span class=m-thumb-emoji>${p.emoji}</span>'"></div>`;
    return `<div class="m-thumb ${i===0?'active':''}" onclick="selThumb(${i},this)"><span class="m-thumb-emoji">${p.emoji}</span></div>`;
  }).join('');
  // tabs
  document.getElementById('tab-desc').innerHTML=`<p>${p.desc}</p>`;
  document.getElementById('tab-specs').innerHTML=`<table class="spec-tbl">${p.specs.map(s=>`<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join('')}</table>`;
  document.getElementById('tab-revs').innerHTML=REVIEWS.slice(0,2).map(r=>`
    <div style="padding:11px 0;border-bottom:1px solid var(--border)">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px"><strong style="font-size:13px">${r.name}</strong><span style="font-size:11px;color:var(--text3)">${r.date}</span></div>
      <div style="color:#FFB800;font-size:12px;margin-bottom:4px">${r.stars}</div>
      <div style="font-size:13px;color:var(--text2)">${r.text}</div>
    </div>`).join('');
  // reset tabs
  document.querySelectorAll('.m-tab-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.m-tab-pane').forEach(c=>c.classList.remove('active'));
  document.querySelector('.m-tab-btn').classList.add('active');
  document.getElementById('tab-desc').classList.add('active');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){document.getElementById('modalOverlay').classList.remove('open');document.body.style.overflow='';}
function closeModalBg(e){if(e.target===document.getElementById('modalOverlay'))closeModal();}
function selColorOpt(i,el){selColor=i;document.querySelectorAll('.color-opt').forEach(c=>c.classList.remove('active'));el.classList.add('active');}
function selStorOpt(i,el){selStor=i;document.querySelectorAll('.stor-opt').forEach(c=>c.classList.remove('active'));el.classList.add('active');}
function selThumb(i,el){document.querySelectorAll('.m-thumb').forEach(t=>t.classList.remove('active'));el.classList.add('active');}
function mQty(d){modalQty=Math.max(1,Math.min(10,modalQty+d));document.getElementById('mQtyVal').textContent=modalQty;}
function switchTab(id,btn){
  document.querySelectorAll('.m-tab-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.m-tab-pane').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');document.getElementById('tab-'+id).classList.add('active');
}
function addFromModal(){if(!currentProd)return;addToCart(currentProd.id,modalQty,selColor,selStor);closeModal();}
function buyNow(){if(!currentProd)return;addToCart(currentProd.id,modalQty,selColor,selStor);closeModal();showPage('checkout');}

// ══════ CHECKOUT ══════
function renderCheckout(){
  const keys=Object.keys(cart);
  document.getElementById('orderItems').innerHTML=keys.map(k=>{
    const {product:p,qty}=cart[k];
    const imgEl=p.img?`<img src="${p.img}" alt="">`:``;
    return `<div class="oi-row">
      <div class="oi-img">${imgEl||p.emoji}</div>
      <div style="flex:1;min-width:0"><div class="oi-name">${p.name}</div><div class="oi-qty">Qtd: ${qty}</div></div>
      <div class="oi-price">R$ ${(p.price*qty).toLocaleString('pt-BR')}</div>
    </div>`;
  }).join('');
  renderOrderTotals();buildInstallments();
}
function renderOrderTotals(){
  const sub=Object.values(cart).reduce((a,i)=>a+(i.product.price*i.qty),0);
  const pixD=payMethod==='pix'?Math.round(sub*.05):0;
  const tot=sub-couponDisc-pixD+shipCost;
  document.getElementById('orderTotals').innerHTML=`
    <div class="ot-row"><span class="ot-lbl">Subtotal</span><span>R$ ${sub.toLocaleString('pt-BR')}</span></div>
    ${pixD?`<div class="ot-row" style="color:var(--success)"><span>Desconto PIX (5%)</span><span>−R$ ${pixD.toLocaleString('pt-BR')}</span></div>`:''}
    ${couponDisc?`<div class="ot-row" style="color:var(--success)"><span>Cupom</span><span>−R$ ${couponDisc.toLocaleString('pt-BR')}</span></div>`:''}
    <div class="ot-row"><span class="ot-lbl">Frete</span><span>${shipCost===0?'<span style="color:var(--success)">GRÁTIS</span>':'R$ '+shipCost.toLocaleString('pt-BR')}</span></div>
    <div class="ot-row grand"><span>Total</span><span class="otv">R$ ${tot.toLocaleString('pt-BR')}</span></div>`;
}
function buildInstallments(){
  const sub=Object.values(cart).reduce((a,i)=>a+(i.product.price*i.qty),0);
  const sel=document.getElementById('f-inst');if(!sel)return;
  sel.innerHTML=[1,2,3,4,5,6,10,12].map(n=>{
    const v=sub/n;
    return `<option>${n}x de R$ ${v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}${n>6?' (com juros)':' sem juros'}</option>`;
  }).join('');
}
function selectShip(id,cost){
  shipCost=cost;
  document.querySelectorAll('.ship-opt').forEach(el=>el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  renderOrderTotals();
}
function selectPay(method){
  payMethod=method;
  document.querySelectorAll('[id^="pm-"]').forEach(el=>el.classList.remove('active'));
  document.getElementById('pm-'+method).classList.add('active');
  document.querySelectorAll('.pay-area').forEach(el=>el.classList.remove('show'));
  document.getElementById('pa-'+method).classList.add('show');
  renderOrderTotals();
}
function maskCPF(el){let v=el.value.replace(/\D/g,'').slice(0,11);v=v.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');el.value=v;}
function maskPhone(el){let v=el.value.replace(/\D/g,'').slice(0,11);v=v.replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d)/,'$1-$2');el.value=v;}
function maskCEP(el){let v=el.value.replace(/\D/g,'').slice(0,8);v=v.replace(/(\d{5})(\d)/,'$1-$2');el.value=v;}
function maskCard(el){let v=el.value.replace(/\D/g,'').slice(0,16);v=v.replace(/(\d{4})/g,'$1 ').trim();el.value=v;}
function maskExp(el){let v=el.value.replace(/\D/g,'').slice(0,4);v=v.replace(/(\d{2})(\d)/,'$1/$2');el.value=v;}
function lookupCEP(val){
  const cep=val.replace(/\D/g,'');if(cep.length!==8)return;
  fetch(`https://viacep.com.br/ws/${cep}/json/`).then(r=>r.json()).then(d=>{
    if(d.erro)return;
    document.getElementById('f-street').value=d.logradouro||'';
    document.getElementById('f-bairro').value=d.bairro||'';
    document.getElementById('f-city').value=d.localidade||'';
    document.getElementById('f-state').value=d.uf||'';
    toast('CEP encontrado!','📍','Endereço preenchido automaticamente');
  }).catch(()=>{});
}
function copyPix(){
  navigator.clipboard?.writeText('12.345.678/0001-99').then(()=>toast('Chave copiada!','📋','Cole no seu app de pagamento')).catch(()=>toast('Chave: 12.345.678/0001-99','📋','Copie manualmente'));
}
function placeOrder(){
  const name=document.getElementById('f-name').value.trim();
  const email=document.getElementById('f-email').value.trim();
  if(!name||!email){toast('Dados incompletos','⚠️','Preencha nome e e-mail');return;}
  const num='#BS-'+Math.floor(Math.random()*900000+100000);
  const hash='0x'+[...Array(40)].map(()=>Math.floor(Math.random()*16).toString(16)).join('');
  document.getElementById('orderNum').textContent=num;
  document.getElementById('bcHash').textContent=hash.slice(0,22)+'...';
  cart={};updBadge();showPage('success');
}

// ══════ NEWSLETTER ══════
function subscribeNL(){
  const v=document.getElementById('nlEmail').value;
  if(!v||!v.includes('@')){toast('E-mail inválido','⚠️','Digite um e-mail válido');return;}
  toast('Cadastrado! 🎉','📧','Cupom de 10% OFF enviado');
  document.getElementById('nlEmail').value='';
}

// ══════ TOAST ══════
let _tt;
function toast(title,icon,sub=''){
  const t=document.getElementById('toast');
  document.getElementById('tIcon').textContent=icon;
  document.getElementById('tTitle').textContent=title;
  document.getElementById('tSub').textContent=sub;
  t.classList.add('show');clearTimeout(_tt);
  _tt=setTimeout(()=>t.classList.remove('show'),3200);
}

// ══════ COUNTDOWN ══════
let secs=5*3600+47*60;
setInterval(()=>{
  if(secs<=0)secs=23*3600;secs--;
  const h=Math.floor(secs/3600),m=Math.floor((secs%3600)/60),s=secs%60;
  document.getElementById('cd-h').textContent=String(h).padStart(2,'0');
  document.getElementById('cd-m').textContent=String(m).padStart(2,'0');
  document.getElementById('cd-s').textContent=String(s).padStart(2,'0');
},1000);

// ══════ HERO ROTATION ══════
let hi=0;
const heroList=[
  {img:PRODUCTS[0].img,emoji:'📱',name:'iPhone 16 Pro Max',price:'R$ 7.299'},
  {img:PRODUCTS[3].img,emoji:'💻',name:'MacBook Air M3',price:'R$ 12.499'},
  {img:PRODUCTS[2].img,emoji:'🎧',name:'Sony WH-1000XM6',price:'R$ 1.499'},
  {img:PRODUCTS[5].img,emoji:'⌚',name:'Apple Watch S10',price:'R$ 3.499'},
];
function rotateHero(){
  hi=(hi+1)%heroList.length;
  const h=heroList[hi];
  const imgEl=document.getElementById('heroImg');
  const emoEl=document.getElementById('heroEmoji');
  imgEl.style.opacity='0';imgEl.style.transform='translateY(10px)';
  setTimeout(()=>{
    if(h.img){imgEl.src=h.img;imgEl.style.display='block';emoEl.style.display='none';}
    else{emoEl.textContent=h.emoji;emoEl.style.display='block';imgEl.style.display='none';}
    document.getElementById('heroName').textContent=h.name;
    document.getElementById('heroPrice').textContent=h.price;
    imgEl.style.opacity='1';imgEl.style.transform='translateY(0)';
  },350);
}
document.getElementById('heroImg').style.transition='opacity .35s,transform .35s';
if(heroList[0].img)document.getElementById('heroImg').src=heroList[0].img;
else{document.getElementById('heroImg').style.display='none';document.getElementById('heroEmoji').style.display='block';}
setInterval(rotateHero,4000);

// ══════ INIT ══════
renderCats();renderTabs();renderProducts(PRODUCTS);renderRevs();renderTicker();