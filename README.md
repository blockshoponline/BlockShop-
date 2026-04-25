/* ═══════════════════════════════════════════════════════
   BLOCK SHOP — Estilos dos Componentes
   ► Navbar, Flash Bar, Hero, Produtos, Categorias
   ► Carrinho, Modal, Checkout, Success, Wishlist
═══════════════════════════════════════════════════════ */

/* ══════════════════════════════
   NAVBAR
══════════════════════════════ */
nav{
  position:fixed;top:0;left:0;right:0;z-index:600;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 32px;height:var(--nav-h);
  background:rgba(10,10,12,0.92);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
  border-bottom:1px solid var(--border);
  gap:12px;
}
.nav-logo{display:flex;align-items:center;gap:8px;cursor:pointer;flex-shrink:0}
.logo-text{font-family:var(--fd);font-weight:800;font-size:18px;letter-spacing:-.3px;display:flex;align-items:baseline}
.logo-text .lb{color:var(--text)}
.logo-text .ls{color:var(--accent)}
.logo-domain{font-size:9px;color:var(--text3);margin-left:3px;align-self:flex-end;margin-bottom:1px}
.nav-center{display:flex;gap:24px;align-items:center}
.nav-center a{font-size:13px;font-weight:500;color:var(--text2);transition:color .2s;white-space:nowrap}
.nav-center a:hover{color:var(--text)}
.nav-search{
  display:flex;align-items:center;gap:8px;
  background:var(--surface);border:1px solid var(--border);border-radius:8px;
  padding:7px 13px;width:190px;transition:border-color .2s;flex-shrink:0
}
.nav-search:focus-within{border-color:rgba(255,63,63,.4)}
.nav-search input{background:none;border:none;outline:none;color:var(--text);font-size:13px;width:100%;min-width:0}
.nav-search input::placeholder{color:var(--text3)}
.nav-right{display:flex;align-items:center;gap:8px;flex-shrink:0}
.icon-btn{
  width:36px;height:36px;background:var(--surface);border:1px solid var(--border);
  border-radius:8px;display:flex;align-items:center;justify-content:center;
  position:relative;transition:border-color .2s;flex-shrink:0
}
.icon-btn:hover{border-color:var(--border2)}
.icon-btn svg{pointer-events:none}
.n-badge{
  position:absolute;top:-4px;right:-4px;
  background:var(--accent);color:#fff;font-size:9px;font-weight:700;
  min-width:15px;height:15px;border-radius:8px;padding:0 3px;
  display:flex;align-items:center;justify-content:center;
  border:2px solid var(--bg);pointer-events:none
}
.cart-nav-btn{
  display:flex;align-items:center;gap:7px;
  background:var(--accent);color:#fff;border-radius:9px;
  padding:8px 16px;font-size:13px;font-weight:600;
  transition:opacity .2s,transform .15s;position:relative;flex-shrink:0
}
.cart-nav-btn:hover{opacity:.86}
.cart-nav-btn:active{transform:scale(.97)}

/* Mobile hamburger */
.hamburger{
  width:36px;height:36px;background:var(--surface);border:1px solid var(--border);
  border-radius:8px;display:none;flex-direction:column;align-items:center;justify-content:center;gap:5px;
}
.hamburger span{width:18px;height:2px;background:var(--text2);border-radius:2px;transition:all .25s}
.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.hamburger.open span:nth-child(2){opacity:0}
.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}

/* Mobile nav drawer */
.mobile-nav{
  position:fixed;top:calc(var(--nav-h) + var(--flash-h));left:0;right:0;z-index:595;
  background:var(--bg2);border-bottom:1px solid var(--border2);
  padding:16px 20px;display:none;flex-direction:column;gap:4px;
  transform:translateY(-10px);opacity:0;pointer-events:none;
  transition:all .25s ease
}
.mobile-nav.open{display:flex;transform:translateY(0);opacity:1;pointer-events:all}
.mobile-nav a,.mobile-nav button{
  padding:12px 14px;font-size:15px;font-weight:500;color:var(--text2);
  border-radius:9px;transition:all .2s;text-align:left;display:block;width:100%
}
.mobile-nav a:hover,.mobile-nav button:hover{background:var(--surface);color:var(--text)}
.mobile-search{
  display:flex;align-items:center;gap:8px;
  background:var(--surface);border:1px solid var(--border);border-radius:9px;
  padding:10px 14px;margin-bottom:8px
}
.mobile-search input{background:none;border:none;outline:none;color:var(--text);font-size:14px;flex:1}
.mobile-search input::placeholder{color:var(--text3)}

/* ══════════════════════════════
   FLASH BAR
══════════════════════════════ */
.flash-bar{
  position:fixed;top:var(--nav-h);left:0;right:0;z-index:599;
  background:linear-gradient(90deg,#FF3F3F,#FF6B00,#FF3F3F);
  background-size:200%;animation:gradmove 5s linear infinite;
  height:var(--flash-h);
  padding:0 20px;display:flex;align-items:center;justify-content:space-between;
  gap:12px;overflow:hidden;
}
@keyframes gradmove{0%{background-position:0%}100%{background-position:200%}}
.flash-left{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.flash-pill{background:rgba(0,0,0,.25);color:#fff;font-size:10px;font-weight:700;letter-spacing:1.5px;padding:3px 9px;border-radius:6px;white-space:nowrap}
.flash-text{color:#fff;font-family:var(--fd);font-size:15px;font-weight:700;white-space:nowrap}
.countdown{display:flex;gap:5px}
.cd-unit{background:rgba(0,0,0,.25);color:#fff;border-radius:7px;padding:5px 9px;text-align:center;min-width:44px}
.cd-num{font-family:var(--fd);font-size:17px;font-weight:800;line-height:1}
.cd-lbl{font-size:8px;letter-spacing:.8px;opacity:.8;margin-top:1px}
.flash-cta{background:#fff;color:var(--accent);border-radius:7px;padding:7px 16px;font-size:12px;font-weight:700;white-space:nowrap;transition:transform .2s;flex-shrink:0}
.flash-cta:hover{transform:scale(1.03)}

/* ══════════════════════════════
   TICKER
══════════════════════════════ */
.ticker-wrap{
  position:fixed;top:calc(var(--nav-h) + var(--flash-h));left:0;right:0;z-index:598;
  background:var(--bg2);border-bottom:1px solid var(--border);
  height:var(--ticker-h);display:flex;align-items:center;overflow:hidden;
}
.ticker-track{display:flex;gap:48px;white-space:nowrap;width:max-content;animation:ticker 35s linear infinite}
@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.ticker-item{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--text3)}
.t-dot{width:5px;height:5px;border-radius:50%;background:var(--success);flex-shrink:0}

/* ══════════════════════════════
   HERO
══════════════════════════════ */
.hero{
  min-height:100vh;
  padding:calc(var(--top-total) + 40px) 48px 60px;
  display:flex;align-items:center;position:relative;overflow:hidden;
}
.hero-glow{position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse 55% 65% at 72% 50%,rgba(255,63,63,.07) 0%,transparent 65%),
             radial-gradient(ellipse 35% 45% at 88% 25%,rgba(0,229,255,.05) 0%,transparent 65%)}
.hero-grid{
  position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(var(--border) 1px,transparent 1px),
                   linear-gradient(90deg,var(--border) 1px,transparent 1px);
  background-size:60px 60px;
  -webkit-mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 80%);
  mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 80%)
}
.hero-content{max-width:580px;position:relative;z-index:1;flex:1}
.hero-badge{
  display:inline-flex;align-items:center;gap:8px;
  background:rgba(255,63,63,.08);border:1px solid rgba(255,63,63,.25);
  color:var(--accent);border-radius:100px;padding:6px 16px;
  font-size:12px;font-weight:500;letter-spacing:.4px;margin-bottom:28px
}
.hero-badge::before{content:'';width:6px;height:6px;background:var(--accent);border-radius:50%;animation:blink 1.8s ease-in-out infinite;flex-shrink:0}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
.hero h1{
  font-family:var(--fd);font-size:clamp(38px,6vw,72px);font-weight:800;
  line-height:1.04;letter-spacing:-2px;margin-bottom:22px
}
.hero h1 em{font-style:normal;color:var(--accent)}
.hero-sub{font-size:clamp(15px,2vw,17px);color:var(--text2);line-height:1.75;max-width:480px;margin-bottom:36px}
.hero-ctas{display:flex;gap:12px;flex-wrap:wrap}
.btn-primary{
  display:inline-flex;align-items:center;gap:8px;
  background:var(--accent);color:#fff;border-radius:11px;
  padding:14px 28px;font-size:15px;font-weight:600;
  transition:transform .2s,box-shadow .2s;white-space:nowrap
}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 36px var(--accent-glow)}
.btn-primary:active{transform:scale(.98)}
.btn-secondary{
  display:inline-flex;align-items:center;gap:8px;
  background:var(--surface);color:var(--text);
  border:1px solid var(--border2);border-radius:11px;
  padding:14px 28px;font-size:15px;font-weight:500;
  transition:background .2s;white-space:nowrap
}
.btn-secondary:hover{background:var(--surface2)}
.hero-stats{display:flex;gap:clamp(20px,4vw,44px);margin-top:52px;padding-top:36px;border-top:1px solid var(--border);flex-wrap:wrap}
.stat-n{font-family:var(--fd);font-size:clamp(22px,3vw,30px);font-weight:800;letter-spacing:-1px}
.stat-n span{color:var(--accent)}
.stat-l{font-size:12px;color:var(--text3);margin-top:1px}

/* Hero visual */
.hero-visual{
  position:absolute;right:48px;top:50%;transform:translateY(-50%);
  width:44%;max-width:580px;pointer-events:none;
  display:flex;align-items:center;justify-content:center;
  overflow:visible;
}
.phone-wrap{
  width:260px;height:520px;
  background:var(--surface);border:1px solid var(--border2);
  border-radius:44px;position:relative;overflow:hidden;
  box-shadow:0 48px 100px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.05);
  transform:perspective(900px) rotateY(-14deg) rotateX(4deg)
}
.phone-notch{position:absolute;top:0;left:50%;transform:translateX(-50%);width:90px;height:24px;background:var(--bg);border-radius:0 0 16px 16px;z-index:2}
.phone-screen{position:absolute;inset:0;background:var(--bg2);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:20px}
.phone-img-wrap{width:160px;height:160px;border-radius:20px;overflow:hidden;background:var(--surface);display:flex;align-items:center;justify-content:center}
.phone-img-wrap img{width:100%;height:100%;object-fit:contain;animation:floatimg 3s ease-in-out infinite;padding:10px}
@keyframes floatimg{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.phone-prod-name{font-family:var(--fd);font-size:12px;font-weight:700;color:var(--text2);text-align:center}
.phone-price{background:var(--accent);color:#fff;font-size:11px;font-weight:700;padding:3px 12px;border-radius:100px}
.float-card{position:absolute;background:var(--surface2);border:1px solid var(--border2);border-radius:11px;padding:10px 14px;font-size:12px;z-index:10}
.fc1{top:22%;right:-20px}.fc2{bottom:28%;left:-40px}
.fc-lbl{color:var(--text3);font-size:10px;margin-bottom:2px}
.fc-val{font-family:var(--fd);font-weight:800;font-size:16px}
.fc-val.g{color:var(--success)}.fc-val.c{color:var(--cyan)}

/* TRUST BAR */
.trust-bar{
  background:var(--bg2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);
  padding:16px 32px;display:flex;gap:32px;align-items:center;overflow-x:auto;white-space:nowrap;
  -webkit-overflow-scrolling:touch;scrollbar-width:none
}
.trust-bar::-webkit-scrollbar{display:none}
.trust-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text3);font-weight:500;flex-shrink:0}
.trust-icon{font-size:16px}

/* SECTIONS */
.section{padding:clamp(48px,8vw,80px) clamp(16px,4vw,48px)}
.s-tag{font-size:11px;font-weight:700;letter-spacing:2.5px;color:var(--accent);text-transform:uppercase;margin-bottom:8px}
.s-title{font-family:var(--fd);font-size:clamp(24px,4vw,44px);font-weight:800;letter-spacing:-1.5px;line-height:1.08}
.s-title em{font-style:normal;color:var(--cyan)}
.s-sub{font-size:15px;color:var(--text2);margin-top:10px;max-width:520px}
.s-header{margin-bottom:36px}
.s-header-row{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap;margin-bottom:36px}

/* FILTER TABS */
.filter-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.filter-tabs::-webkit-scrollbar{display:none}
.ftab{
  background:var(--surface);border:1px solid var(--border);border-radius:8px;
  padding:7px 14px;font-size:13px;font-weight:500;color:var(--text2);
  transition:all .2s;cursor:pointer;white-space:nowrap;flex-shrink:0
}
.ftab:hover{border-color:var(--border2);color:var(--text)}
.ftab.active{background:var(--accent);border-color:var(--accent);color:#fff}

/* PRODUCTS GRID */
.products-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px}

/* PRODUCT CARD */
.p-card{
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--rl);overflow:hidden;
  transition:border-color .25s,transform .25s,box-shadow .25s;
  position:relative;cursor:pointer;display:flex;flex-direction:column
}
.p-card:hover{border-color:rgba(255,63,63,.3);transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,.4)}
.p-card:active{transform:scale(.99)}
.p-badge{
  position:absolute;top:12px;left:12px;z-index:2;
  font-size:10px;font-weight:700;letter-spacing:.4px;
  padding:4px 10px;border-radius:6px
}
.b-hot{background:var(--accent);color:#fff}
.b-sale{background:#FF6B00;color:#fff}
.b-new{background:var(--cyan);color:#000}
.b-ltd{background:var(--surface3);color:var(--text2);border:1px solid var(--border2)}
.p-wish{
  position:absolute;top:12px;right:12px;z-index:2;
  width:30px;height:30px;background:rgba(10,10,12,.7);backdrop-filter:blur(4px);
  border:1px solid var(--border2);border-radius:50%;
  display:flex;align-items:center;justify-content:center;font-size:14px;
  transition:all .2s
}
.p-wish:hover{background:rgba(255,63,63,.2);border-color:rgba(255,63,63,.4)}
.p-wish.on{background:rgba(255,63,63,.2);border-color:rgba(255,63,63,.4)}

/* Product image */
.p-img{
  height:200px;display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;
  background:radial-gradient(ellipse 70% 70% at 50% 60%,var(--surface3) 0%,var(--bg2) 100%);
  border-bottom:1px solid var(--border)
}
.p-img img{
  width:100%;height:100%;object-fit:contain;padding:20px;
  transition:transform .4s ease;
  filter:drop-shadow(0 8px 24px rgba(0,0,0,.5))
}
.p-card:hover .p-img img{transform:scale(1.07) translateY(-4px)}
.p-img-fallback{font-size:72px;line-height:1;filter:drop-shadow(0 8px 24px rgba(255,63,63,.2));transition:transform .4s ease}
.p-card:hover .p-img-fallback{transform:scale(1.07) translateY(-4px)}
.p-img-glow{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:80px;height:10px;background:rgba(255,63,63,.15);border-radius:50%;filter:blur(6px)}

.p-body{padding:16px;display:flex;flex-direction:column;flex:1}
.p-brand{font-size:10px;color:var(--text3);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:3px}
.p-name{font-family:var(--fd);font-weight:700;font-size:14px;line-height:1.3;margin-bottom:8px;flex:1}
.p-stars{display:flex;align-items:center;gap:5px;margin-bottom:10px}
.stars-g{color:#FFB800;font-size:12px}
.r-cnt{font-size:11px;color:var(--text3)}
.p-price-row{display:flex;align-items:flex-end;gap:7px;margin-bottom:4px;flex-wrap:wrap}
.p-old{font-size:12px;color:var(--text3);text-decoration:line-through}
.p-curr{font-family:var(--fd);font-size:20px;font-weight:800;letter-spacing:-.5px}
.p-disc{background:rgba(34,197,94,.13);color:var(--success);font-size:11px;font-weight:700;padding:2px 7px;border-radius:5px}
.p-install{font-size:12px;color:var(--text3);margin-bottom:12px}
.p-install strong{color:var(--text2)}
.p-stock{margin-bottom:12px}
.stock-lbl{display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px}
.sl-hot{color:var(--accent);font-weight:600}
.sl-dim{color:var(--text3)}
.stock-track{background:var(--surface2);height:3px;border-radius:2px;overflow:hidden}
.stock-fill{height:100%;background:linear-gradient(90deg,var(--accent),#FF6B00);border-radius:2px}
.btn-cart{
  width:100%;background:var(--accent);color:#fff;border-radius:9px;
  padding:11px;font-size:13px;font-weight:600;letter-spacing:.2px;
  transition:opacity .2s,transform .15s
}
.btn-cart:hover{opacity:.85}
.btn-cart:active{transform:scale(.98)}

/* CATEGORIES */
.cats-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:12px}
.cat-card{
  background:var(--surface);border:1px solid var(--border);border-radius:var(--r);
  padding:20px 14px;text-align:center;cursor:pointer;transition:all .2s
}
.cat-card:hover{border-color:rgba(255,63,63,.35);background:rgba(255,63,63,.03)}
.cat-card.active{border-color:var(--accent);background:rgba(255,63,63,.06)}
.cat-card:active{transform:scale(.97)}
.cat-icon{font-size:28px;margin-bottom:8px}
.cat-name{font-family:var(--fd);font-weight:700;font-size:13px;margin-bottom:2px}
.cat-count{font-size:11px;color:var(--text3)}

/* PROMO BANNERS */
.promo-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:0 clamp(16px,4vw,48px) clamp(48px,8vw,80px)}
.promo-card{
  border-radius:var(--rl);padding:clamp(24px,4vw,40px) clamp(20px,3vw,36px);
  min-height:200px;position:relative;overflow:hidden;cursor:pointer;
  display:flex;flex-direction:column;justify-content:flex-end;
  transition:transform .2s
}
.promo-card:hover{transform:scale(1.01)}
.promo-card:active{transform:scale(.99)}
.pc1{background:linear-gradient(135deg,#1a0606,#2d0d0d);border:1px solid rgba(255,63,63,.18)}
.pc2{background:linear-gradient(135deg,#03080f,#071422);border:1px solid rgba(0,229,255,.13)}
.promo-emoji{position:absolute;right:clamp(14px,3vw,28px);top:50%;transform:translateY(-50%);font-size:clamp(50px,6vw,76px);opacity:.85}
.promo-tag{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px}
.pc1 .promo-tag{color:var(--accent)}.pc2 .promo-tag{color:var(--cyan)}
.promo-card h3{font-family:var(--fd);font-size:clamp(18px,2.5vw,24px);font-weight:800;letter-spacing:-.5px;margin-bottom:5px;line-height:1.2}
.promo-card p{font-size:clamp(12px,1.5vw,14px);color:var(--text2);margin-bottom:14px}
.promo-btn{display:inline-flex;align-items:center;gap:6px;border-radius:8px;padding:9px 18px;font-size:13px;font-weight:700}
.pc1 .promo-btn{background:var(--accent);color:#fff}.pc2 .promo-btn{background:var(--cyan);color:#000}

/* FEATURES */
.feats-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1px;border:1px solid var(--border);border-radius:var(--rl);overflow:hidden;margin:0 clamp(16px,4vw,48px) clamp(48px,8vw,80px)}
.feat-item{background:var(--bg2);padding:clamp(20px,3vw,30px) clamp(16px,2.5vw,24px);border-right:1px solid var(--border)}
.feat-item:last-child{border-right:none}
.feat-icon{font-size:22px;margin-bottom:11px}
.feat-title{font-family:var(--fd);font-size:15px;font-weight:700;margin-bottom:5px}
.feat-desc{font-size:13px;color:var(--text3);line-height:1.55}

/* REVIEWS */
.revs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px}
.rev-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--rl);padding:20px}
.rev-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px}
.rev-user{display:flex;align-items:center;gap:10px}
.rev-avatar{width:34px;height:34px;border-radius:50%;background:var(--surface2);display:flex;align-items:center;justify-content:center;font-size:15px;border:1px solid var(--border2);flex-shrink:0}
.rev-name{font-family:var(--fd);font-size:13px;font-weight:700}
.rev-date{font-size:11px;color:var(--text3)}
.ver-badge{background:rgba(34,197,94,.12);color:var(--success);font-size:10px;font-weight:600;padding:3px 8px;border-radius:5px;white-space:nowrap}
.rev-stars{color:#FFB800;font-size:12px;margin-bottom:8px}
.rev-text{font-size:13px;color:var(--text2);line-height:1.6;margin-bottom:10px}
.rev-product{font-size:11px;color:var(--text3);border-top:1px solid var(--border);padding-top:8px}

/* NEWSLETTER */
.nl-wrap{
  margin:0 clamp(16px,4vw,48px) clamp(48px,8vw,80px);
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--rxl);padding:clamp(32px,5vw,56px) clamp(20px,4vw,56px);
  text-align:center;position:relative;overflow:hidden
}
.nl-wrap::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 50% 70% at 50% 50%,rgba(255,63,63,.06) 0%,transparent 70%)}
.nl-wrap h2{font-family:var(--fd);font-size:clamp(24px,4vw,38px);font-weight:800;letter-spacing:-1px;margin-bottom:10px;position:relative}
.nl-wrap p{font-size:clamp(14px,2vw,16px);color:var(--text2);margin-bottom:26px;position:relative}
.nl-form{display:flex;gap:10px;max-width:420px;margin:0 auto;position:relative}
.nl-form input{
  flex:1;background:var(--bg2);border:1px solid var(--border2);border-radius:10px;
  padding:13px 16px;color:var(--text);font-size:14px;outline:none;
  transition:border-color .2s;min-width:0
}
.nl-form input:focus{border-color:rgba(255,63,63,.5)}
.nl-form input::placeholder{color:var(--text3)}
.nl-form button{
  background:var(--accent);color:#fff;border-radius:10px;
  padding:13px 20px;font-size:14px;font-weight:600;white-space:nowrap;
  transition:opacity .2s;flex-shrink:0
}
.nl-form button:hover{opacity:.85}
.nl-note{font-size:12px;color:var(--text3);margin-top:12px;position:relative}

/* FOOTER */
footer{background:var(--bg2);border-top:1px solid var(--border);padding:clamp(40px,6vw,60px) clamp(16px,4vw,48px) 24px}
.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:44px}
.foot-desc{font-size:13px;color:var(--text3);line-height:1.7;max-width:230px;margin-top:12px}
.foot-domain{font-size:11px;color:var(--text3);margin-top:8px}
.foot-col h4{font-family:var(--fd);font-size:12px;font-weight:700;letter-spacing:.5px;margin-bottom:14px;color:var(--text2)}
.foot-col ul{list-style:none;display:flex;flex-direction:column;gap:8px}
.foot-col ul li a{font-size:13px;color:var(--text3);transition:color .2s}
.foot-col ul li a:hover{color:var(--text)}
.foot-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:24px;border-top:1px solid var(--border);font-size:12px;color:var(--text3);flex-wrap:wrap;gap:12px}
.pay-row{display:flex;gap:6px;align-items:center;flex-wrap:wrap}
.pay-chip{background:var(--surface);border:1px solid var(--border2);border-radius:5px;padding:3px 9px;font-size:10px;font-weight:700;color:var(--text2)}

/* ══════════════════════════════
   TOAST
══════════════════════════════ */
.toast{
  position:fixed;bottom:24px;right:20px;z-index:1000;
  background:var(--surface2);border:1px solid var(--border2);border-radius:13px;
  padding:13px 17px;display:flex;align-items:center;gap:11px;
  transform:translateX(130%);transition:transform .35s cubic-bezier(.34,1.56,.64,1);
  max-width:min(320px, calc(100vw - 40px));
  box-shadow:0 8px 32px rgba(0,0,0,.5)
}
.toast.show{transform:translateX(0)}
.toast-icon{font-size:20px;flex-shrink:0}
.toast-title{font-size:13px;font-weight:600}
.toast-sub{font-size:12px;color:var(--text2);margin-top:2px}

/* ══════════════════════════════
   CART DRAWER
══════════════════════════════ */
.overlay{
  position:fixed;inset:0;background:rgba(0,0,0,.75);
  backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);
  z-index:700;opacity:0;pointer-events:none;transition:opacity .3s
}
.overlay.open{opacity:1;pointer-events:all}
.cart-drawer{
  position:fixed;top:0;right:0;bottom:0;
  width:min(420px,100vw);z-index:701;
  background:var(--bg2);border-left:1px solid var(--border2);
  display:flex;flex-direction:column;
  transform:translateX(100%);transition:transform .35s cubic-bezier(.4,0,.2,1)
}
.cart-drawer.open{transform:translateX(0)}
.dr-head{
  display:flex;justify-content:space-between;align-items:center;
  padding:18px 20px;border-bottom:1px solid var(--border);flex-shrink:0
}
.dr-title{font-family:var(--fd);font-size:17px;font-weight:800}
.dr-close{
  width:32px;height:32px;background:var(--surface);border:1px solid var(--border);
  border-radius:8px;display:flex;align-items:center;justify-content:center;
  cursor:pointer;font-size:15px;color:var(--text2);transition:all .2s
}
.dr-close:hover{background:var(--surface2);color:var(--text)}
.dr-items{flex:1;overflow-y:auto;padding:14px 20px;-webkit-overflow-scrolling:touch}
.cart-empty{
  height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;
  color:var(--text3);padding:40px 20px;text-align:center
}
.empty-icon{font-size:48px;opacity:.3;margin-bottom:4px}
.empty-title{font-family:var(--fd);font-size:18px;font-weight:700;color:var(--text2)}
.c-item{display:flex;gap:12px;padding:13px 0;border-bottom:1px solid var(--border);align-items:flex-start}
.ci-img{
  width:64px;height:64px;background:var(--surface);border:1px solid var(--border);
  border-radius:9px;display:flex;align-items:center;justify-content:center;
  font-size:28px;flex-shrink:0;overflow:hidden
}
.ci-img img{width:100%;height:100%;object-fit:contain;padding:6px}
.ci-info{flex:1;min-width:0}
.ci-brand{font-size:10px;color:var(--text3);font-weight:600;letter-spacing:.8px;text-transform:uppercase;margin-bottom:2px}
.ci-name{font-family:var(--fd);font-size:13px;font-weight:700;margin-bottom:6px;line-height:1.3}
.ci-qty-row{display:flex;align-items:center;gap:8px}
.qty-btn{
  width:26px;height:26px;background:var(--surface2);border:1px solid var(--border);
  border-radius:6px;display:flex;align-items:center;justify-content:center;
  cursor:pointer;font-size:14px;color:var(--text2);transition:all .15s
}
.qty-btn:hover{background:var(--surface3);color:var(--text)}
.qty-val{font-family:var(--fd);font-size:14px;font-weight:700;min-width:20px;text-align:center}
.ci-price{font-family:var(--fd);font-size:15px;font-weight:800;margin-left:auto;white-space:nowrap;padding-left:8px}
.ci-remove{color:var(--text3);font-size:11px;cursor:pointer;transition:color .2s;display:inline-block;margin-top:4px}
.ci-remove:hover{color:var(--accent)}
.dr-foot{padding:18px 20px;border-top:1px solid var(--border);background:var(--bg3);flex-shrink:0}
.coupon-row{display:flex;gap:8px;margin-bottom:13px}
.coupon-row input{
  flex:1;background:var(--surface);border:1px solid var(--border);border-radius:8px;
  padding:9px 12px;color:var(--text);font-size:13px;outline:none;
  transition:border-color .2s;min-width:0
}
.coupon-row input:focus{border-color:rgba(255,63,63,.4)}
.coupon-row input::placeholder{color:var(--text3)}
.coupon-row button{
  background:var(--surface2);color:var(--text2);border:1px solid var(--border);
  border-radius:8px;padding:9px 14px;font-size:13px;font-weight:600;transition:all .2s
}
.coupon-row button:hover{border-color:var(--accent);color:var(--accent)}
.cart-totals{margin-bottom:13px}
.total-row{display:flex;justify-content:space-between;font-size:13px;color:var(--text2);margin-bottom:6px}
.total-row.grand{font-family:var(--fd);font-size:17px;font-weight:800;color:var(--text);padding-top:9px;border-top:1px solid var(--border);margin-top:6px}
.total-row.grand .tv{color:var(--accent)}
.btn-checkout{
  width:100%;background:var(--accent);color:#fff;border-radius:11px;
  padding:14px;font-size:15px;font-weight:700;transition:opacity .2s
}
.btn-checkout:hover{opacity:.88}
.secure-note{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:9px;font-size:11px;color:var(--text3)}

/* ══════════════════════════════
   PRODUCT MODAL
══════════════════════════════ */
.modal-overlay{
  position:fixed;inset:0;background:rgba(0,0,0,.85);
  backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
  z-index:800;opacity:0;pointer-events:none;transition:opacity .3s;
  display:flex;align-items:center;justify-content:center;padding:16px;
  overflow-y:auto
}
.modal-overlay.open{opacity:1;pointer-events:all}
.p-modal{
  background:var(--bg2);border:1px solid var(--border2);border-radius:var(--rxl);
  width:100%;max-width:880px;position:relative;
  transform:scale(.95) translateY(20px);transition:transform .35s cubic-bezier(.34,1.2,.64,1);
  overflow:hidden
}
.modal-overlay.open .p-modal{transform:scale(1) translateY(0)}
.modal-grid{display:grid;grid-template-columns:1fr 1fr}
.modal-img-side{
  background:radial-gradient(ellipse 70% 70% at 50% 60%,var(--surface3) 0%,var(--bg) 100%);
  border-right:1px solid var(--border);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:40px 28px;gap:16px;min-height:460px
}
.modal-big-img{
  width:200px;height:200px;display:flex;align-items:center;justify-content:center;
  border-radius:20px;overflow:hidden;background:transparent
}
.modal-big-img img{width:100%;height:100%;object-fit:contain;animation:floatimg 3s ease-in-out infinite;filter:drop-shadow(0 16px 32px rgba(0,0,0,.5))}
.modal-big-emoji{font-size:110px;line-height:1;filter:drop-shadow(0 16px 32px rgba(255,63,63,.3));animation:floatimg 3s ease-in-out infinite}
.modal-thumbs{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.m-thumb{
  width:48px;height:48px;background:var(--surface2);border:1px solid var(--border);
  border-radius:9px;display:flex;align-items:center;justify-content:center;
  cursor:pointer;transition:border-color .2s;overflow:hidden
}
.m-thumb.active{border-color:var(--accent)}
.m-thumb:hover{border-color:var(--border2)}
.m-thumb img{width:100%;height:100%;object-fit:contain;padding:4px}
.m-thumb-emoji{font-size:20px}
.modal-info{padding:clamp(20px,3vw,36px);position:relative;overflow-y:auto;max-height:90vh}
.modal-x{
  position:absolute;top:14px;right:14px;
  width:30px;height:30px;background:var(--surface);border:1px solid var(--border);
  border-radius:8px;display:flex;align-items:center;justify-content:center;
  cursor:pointer;color:var(--text2);font-size:16px;transition:all .2s;z-index:1
}
.modal-x:hover{background:var(--surface2);color:var(--text)}
.m-brand{font-size:10px;color:var(--text3);font-weight:700;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:4px}
.m-name{font-family:var(--fd);font-size:clamp(20px,3vw,24px);font-weight:800;letter-spacing:-.8px;margin-bottom:12px;line-height:1.15;padding-right:36px}
.m-stars-row{display:flex;align-items:center;gap:7px;margin-bottom:16px}
.m-stars-row span{font-size:13px;color:var(--text2)}
.m-price-box{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:14px;margin-bottom:16px}
.m-old{font-size:13px;color:var(--text3);text-decoration:line-through;margin-bottom:2px}
.m-curr{font-family:var(--fd);font-size:clamp(26px,3.5vw,32px);font-weight:800;letter-spacing:-1px;margin-bottom:4px}
.m-disc-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.m-disc{background:rgba(34,197,94,.13);color:var(--success);font-size:12px;font-weight:700;padding:3px 9px;border-radius:5px}
.m-install{font-size:13px;color:var(--text2)}
.m-opts-label{font-size:12px;color:var(--text3);margin-bottom:7px;font-weight:600}
.color-opts{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap}
.color-opt{
  width:28px;height:28px;border-radius:50%;cursor:pointer;
  border:2px solid transparent;transition:all .2s
}
.color-opt.active{border-color:var(--text);transform:scale(1.1)}
.storage-opts{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap}
.stor-opt{
  background:var(--surface2);border:1px solid var(--border);border-radius:7px;
  padding:6px 13px;font-size:13px;font-weight:600;cursor:pointer;transition:all .2s
}
.stor-opt:hover{border-color:var(--border2)}
.stor-opt.active{background:rgba(255,63,63,.12);border-color:var(--accent);color:var(--accent)}
.m-qty-row{display:flex;align-items:center;gap:10px;margin-bottom:16px}
.qty-ctrl{display:flex;align-items:center;gap:8px;background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:4px 8px}
.qty-ctrl .qty-btn{background:none;border:none;width:28px;height:28px}
.m-actions{display:flex;flex-direction:column;gap:9px;margin-bottom:16px}
.btn-add-m{width:100%;background:var(--accent);color:#fff;border-radius:11px;padding:13px;font-size:14px;font-weight:700;transition:opacity .2s}
.btn-add-m:hover{opacity:.88}
.btn-buy-m{width:100%;background:var(--surface);color:var(--text);border:1px solid var(--border2);border-radius:11px;padding:12px;font-size:14px;font-weight:600;transition:all .2s}
.btn-buy-m:hover{background:var(--surface2)}
.m-meta{display:flex;flex-direction:column;gap:6px}
.m-meta-row{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text2)}
.m-meta-row .mi{font-size:14px}
.m-tabs{border-top:1px solid var(--border)}
.m-tab-btns{display:flex;border-bottom:1px solid var(--border);overflow-x:auto;scrollbar-width:none}
.m-tab-btns::-webkit-scrollbar{display:none}
.m-tab-btn{
  padding:11px 18px;font-size:13px;font-weight:600;color:var(--text3);
  cursor:pointer;border-bottom:2px solid transparent;transition:all .2s;
  background:none;border-top:none;border-left:none;border-right:none;
  white-space:nowrap;flex-shrink:0
}
.m-tab-btn.active{color:var(--accent);border-bottom-color:var(--accent)}
.m-tab-pane{display:none;padding:18px 22px;font-size:13px;color:var(--text2);line-height:1.7}
.m-tab-pane.active{display:block}
.spec-tbl{width:100%;border-collapse:collapse}
.spec-tbl tr{border-bottom:1px solid var(--border)}
.spec-tbl td{padding:8px 4px;font-size:13px}
.spec-tbl td:first-child{color:var(--text3);width:42%}
.spec-tbl td:last-child{color:var(--text);font-weight:500}

/* ══════════════════════════════
   CHECKOUT
══════════════════════════════ */
.checkout-wrap{display:grid;grid-template-columns:1fr 400px;gap:24px;padding:calc(var(--top-total) + 20px) clamp(16px,4vw,48px) 60px;max-width:1200px;margin:0 auto}
.co-back{background:none;border:none;color:var(--text3);font-size:13px;margin-bottom:18px;display:flex;align-items:center;gap:6px;cursor:pointer;transition:color .2s}
.co-back:hover{color:var(--text)}
.co-title{font-family:var(--fd);font-size:22px;font-weight:800;margin-bottom:20px;letter-spacing:-.5px}
.form-block{background:var(--surface);border:1px solid var(--border);border-radius:var(--rl);padding:22px;margin-bottom:14px}
.fb-title{font-family:var(--fd);font-size:14px;font-weight:700;margin-bottom:16px;display:flex;align-items:center;gap:8px}
.step-n{width:22px;height:22px;background:var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:11px}
.fg{display:flex;flex-direction:column;gap:5px}
.fg.full{grid-column:1/-1}
.f-lbl{font-size:12px;font-weight:600;color:var(--text3);letter-spacing:.3px}
.f-inp{
  background:var(--bg2);border:1px solid var(--border2);border-radius:9px;
  padding:11px 13px;color:var(--text);font-size:14px;outline:none;
  transition:border-color .2s;width:100%
}
.f-inp:focus{border-color:rgba(255,63,63,.5)}
.f-inp::placeholder{color:var(--text3)}
.f-sel{
  background:var(--bg2);border:1px solid var(--border2);border-radius:9px;
  padding:11px 13px;color:var(--text);font-size:14px;outline:none;width:100%;
  transition:border-color .2s;appearance:none;cursor:pointer
}
.f-sel:focus{border-color:rgba(255,63,63,.5)}
.ship-opts{display:flex;flex-direction:column;gap:9px}
.ship-opt{
  display:flex;align-items:center;gap:12px;
  background:var(--bg2);border:2px solid var(--border);border-radius:10px;
  padding:13px 15px;cursor:pointer;transition:all .2s
}
.ship-opt:hover{border-color:var(--border2)}
.ship-opt.active{border-color:var(--accent);background:rgba(255,63,63,.05)}
.ship-opt input{accent-color:var(--accent);flex-shrink:0}
.ship-info{flex:1}
.ship-name{font-size:14px;font-weight:600}
.ship-days{font-size:12px;color:var(--text3)}
.ship-price{font-family:var(--fd);font-size:15px;font-weight:800;white-space:nowrap}
.pay-methods{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-bottom:14px}
.pay-m{
  background:var(--bg2);border:2px solid var(--border);border-radius:10px;
  padding:13px 10px;text-align:center;cursor:pointer;transition:all .2s
}
.pay-m:hover{border-color:var(--border2)}
.pay-m.active{border-color:var(--accent);background:rgba(255,63,63,.06)}
.pay-m .pm-icon{font-size:22px;margin-bottom:4px}
.pay-m .pm-name{font-size:12px;font-weight:600;color:var(--text2)}
.pay-area{display:none}
.pay-area.show{display:block}
.pix-box{background:var(--bg);border:1px solid var(--border2);border-radius:10px;padding:14px;text-align:center;margin:11px 0}
.pix-key{font-family:monospace;font-size:11px;color:var(--cyan);word-break:break-all;margin-bottom:8px}
.btn-copy{background:var(--cyan);color:#000;border-radius:7px;padding:7px 16px;font-size:13px;font-weight:700;transition:opacity .2s}
.btn-copy:hover{opacity:.85}
.inst-sel{margin-top:11px;display:flex;flex-direction:column;gap:5px}

/* Order summary */
.order-box-wrap{position:sticky;top:calc(var(--nav-h) + 16px)}
.order-box{background:var(--surface);border:1px solid var(--border);border-radius:var(--rl);padding:22px}
.ob-title{font-family:var(--fd);font-size:15px;font-weight:800;margin-bottom:16px;letter-spacing:-.3px}
.o-items{display:flex;flex-direction:column;gap:11px;margin-bottom:16px;max-height:280px;overflow-y:auto;-webkit-overflow-scrolling:touch}
.oi-row{display:flex;gap:11px;align-items:center}
.oi-img{width:50px;height:50px;background:var(--bg2);border:1px solid var(--border);border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;overflow:hidden}
.oi-img img{width:100%;height:100%;object-fit:contain;padding:5px}
.oi-name{font-size:13px;font-weight:600;line-height:1.3;margin-bottom:1px}
.oi-qty{font-size:11px;color:var(--text3)}
.oi-price{font-family:var(--fd);font-size:13px;font-weight:800;margin-left:auto;white-space:nowrap;padding-left:6px}
.o-div{border:none;border-top:1px solid var(--border);margin:13px 0}
.o-totals{display:flex;flex-direction:column;gap:7px;margin-bottom:16px}
.ot-row{display:flex;justify-content:space-between;font-size:13px}
.ot-row.grand{font-family:var(--fd);font-size:17px;font-weight:800;border-top:1px solid var(--border);padding-top:9px;margin-top:4px}
.ot-row.grand .otv{color:var(--accent)}
.ot-lbl{color:var(--text2)}
.btn-place{
  width:100%;background:var(--accent);color:#fff;border-radius:11px;
  padding:14px;font-size:15px;font-weight:700;transition:opacity .2s,transform .15s;margin-bottom:10px
}
.btn-place:hover{opacity:.88}
.btn-place:active{transform:scale(.99)}
.sec-badges{display:flex;justify-content:center;gap:16px;flex-wrap:wrap}
.sec-b{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text3)}

/* ══════════════════════════════
   SUCCESS PAGE
══════════════════════════════ */
.success-pg{
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:calc(var(--top-total) + 16px) 20px 60px
}
.success-card{
  background:var(--surface);border:1px solid var(--border2);border-radius:var(--rxl);
  padding:clamp(32px,5vw,52px) clamp(24px,5vw,48px);max-width:560px;width:100%;text-align:center
}
.s-icon{
  width:72px;height:72px;background:rgba(34,197,94,.12);border:1px solid rgba(34,197,94,.3);
  border-radius:50%;display:flex;align-items:center;justify-content:center;
  font-size:32px;margin:0 auto 22px
}
.success-card h1{font-family:var(--fd);font-size:clamp(26px,4vw,32px);font-weight:800;letter-spacing:-1px;margin-bottom:10px}
.success-card p{font-size:15px;color:var(--text2);margin-bottom:24px;line-height:1.7}
.order-n-box{
  background:var(--bg2);border:1px solid var(--border2);border-radius:10px;
  padding:12px 18px;margin-bottom:24px;display:inline-flex;align-items:center;gap:10px
}
.on-lbl{font-size:12px;color:var(--text3)}
.on-val{font-family:var(--fd);font-size:16px;font-weight:800;color:var(--cyan)}
.s-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-bottom:26px}
.ss-step{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:13px 8px;text-align:center}
.ss-icon{font-size:20px;margin-bottom:4px}
.ss-lbl{font-size:11px;color:var(--text3);line-height:1.4}
.bc-proof{
  margin-top:18px;padding:11px 14px;background:var(--bg);border:1px solid var(--border);
  border-radius:9px;display:flex;align-items:center;gap:9px;font-size:12px;color:var(--text3);text-align:left
}
.bc-hash{font-family:monospace;color:var(--cyan);font-size:10px;word-break:break-all;margin-top:2px}
.btn-back{background:var(--accent);color:#fff;border-radius:10px;padding:13px 28px;font-size:15px;font-weight:700;transition:opacity .2s;margin-top:20px}
.btn-back:hover{opacity:.88}

/* ══════════════════════════════
   WISHLIST PAGE
══════════════════════════════ */
.wl-page{padding:calc(var(--top-total) + 16px) clamp(16px,4vw,48px) 60px;min-height:100vh}
.wl-page h1{font-family:var(--fd);font-size:clamp(28px,4vw,36px);font-weight:800;letter-spacing:-1px;margin-bottom:28px}
.wl-empty{text-align:center;padding:60px 20px;color:var(--text3)}
.wl-empty .wl-icon{font-size:52px;margin-bottom:12px;opacity:.3}
.wl-empty p{font-size:16px;margin-bottom:18px;color:var(--text2)}

