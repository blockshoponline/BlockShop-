/* ═══════════════════════════════════════════════════════
   BLOCK SHOP — Dados dos Produtos, Avaliações e Categorias
   ► EDITE AQUI para adicionar/remover/editar produtos
   ► Altere img: para o caminho da sua foto
   ► Altere REVIEWS para suas avaliações reais
═══════════════════════════════════════════════════════ */

const PRODUCTS = [

  // ── PRODUTO 1 — Anel Smart DAIPAN (foto própria no GitHub) ──
  {id:1,brand:'DAIPAN',name:'Anel Smart Inteligente DAIPAN',
   img:'images/products/anel-smart-daipan.jpg',
   emoji:'💍',price:49.98,oldPrice:64.00,discount:22,rating:4.8,reviews:312,stock:40,badge:'hot',
   installments:'3x R$ 16,66 sem juros',cat:'wearable',
   colors:['#C0C0C0','#1A1A1A','#FFD700'],colorNames:['Prata','Preto','Dourado'],
   storage:['Tam. 7','Tam. 8','Tam. 9','Tam. 10','Tam. 11','Tam. 12'],
   desc:'O Anel Smart Inteligente DAIPAN combina tecnologia e estilo em um acessório unissex sofisticado. Monitora temperatura corporal em tempo real, registra atividade física e envia notificações diretamente no anel. Feito em aço inoxidável premium com display digital embutido.',
   specs:[['Marca','DAIPAN'],['Modelo','R007'],['Material','Aço inoxidável premium'],['Largura','8 mm'],['Funções','Temperatura, fitness, notificações'],['Display','Digital com leitura de temperatura'],['Gênero','Unissex'],['Compatível','Universal']]},

  // ── PRODUTO 2 — Fone Bluetooth LED ──
  {id:2,brand:'CHUBA',name:'Fone Bluetooth LED Display TWS + Case',
   img:'https://static.wixstatic.com/media/cc7a6c_a2c5680f0f7c49078e13d2d779c84be2~mv2.jpg',
   emoji:'🎧',price:44.75,oldPrice:60.41,discount:26,rating:4.7,reviews:0,stock:3,badge:'ltd',
   installments:'3x R$ 14,92 sem juros',cat:'audio',
   colors:['#1A1A1A'],colorNames:['Preto'],
   storage:['Padrão'],
   desc:'Fone TWS in-ear com case de carregamento com display LED. Cancelamento de ruído ativo, resistente à água, Bluetooth 5.3, bateria de 600mAh e compatível com assistente de voz. Perfeito para esportes e uso diário.',
   specs:[['Bluetooth','5.3'],['Bateria','600 mAh'],['Driver','8mm dinâmico'],['ANC','Sim'],['Impermeável','Sim'],['Carga','Case USB-C'],['Peso','60g']]},

  // ── PRODUTO 3 — Mini Caixinha Bluetooth ──
  {id:3,brand:'XIKCUP',name:'Mini Caixinha Bluetooth 5.0 Portátil Fabric',
   img:'https://static.wixstatic.com/media/88f6a2_4e2197062b464a25a4b9404edd4a78fa~mv2.jpg',
   emoji:'🔊',price:40.50,oldPrice:54.68,discount:26,rating:4.7,reviews:0,stock:25,badge:'hot',
   installments:'3x R$ 13,50 sem juros',cat:'audio',
   colors:['#1A1A1A','#808080','#DC143C'],colorNames:['Preto','Cinza','Vermelho'],
   storage:['Padrão'],
   desc:'Mini caixinha de som portátil com tecido premium e Bluetooth 5.0. Som full-range de 2.0 canais, resistente à água, bateria de 500mAh e design compacto para levar a qualquer lugar.',
   specs:[['Bluetooth','5.0'],['Bateria','500 mAh'],['Canais','2.0 Full-Range'],['Potência','< 25W'],['Impermeável','Sim'],['Material','Plástico + Tecido']]},

  // ── PRODUTO 4 — Selfie Stick Subaquático ──
  {id:4,brand:'FANGTUOSI',name:'Selfie Stick Subaquático Extensível GoPro DJI Insta360',
   img:'https://static.wixstatic.com/media/6173da_ee885cece9b14aae8800351acd196232~mv2.png',
   emoji:'📷',price:95.00,oldPrice:128.25,discount:26,rating:4.7,reviews:0,stock:14,badge:'sale',
   installments:'3x R$ 31,67 sem juros',cat:'acessorios',
   colors:['#888888'],colorNames:['Padrão'],
   storage:['Opção 1','Opção 2','Opção 3','Opção 4'],
   desc:'Bastão selfie subaquático extensível com tripé flutuante para câmeras de ação. Compatível com DJI, Insta360 e GoPro. Material alumínio resistente — ideal para mergulho, surf e esportes aquáticos.',
   specs:[['Marca','FANGTUOSI'],['Material','Alumínio'],['Compatível','DJI, Insta360, GoPro'],['Tipo','Extensível + Tripé'],['Uso','Subaquático e Outdoor']]},

  // ── PRODUTO 5 — Tripé com Shutter Bluetooth ──
  {id:5,brand:'FGCLSY',name:'Tripé Extensível Smartphone + Bluetooth Shutter',
   img:'https://static.wixstatic.com/media/2e01b6_58d63b9842f442d48eb403edca036b97~mv2.jpg',
   emoji:'📷',price:60.00,oldPrice:81.00,discount:26,rating:4.7,reviews:0,stock:99836,badge:'sale',
   installments:'3x R$ 20,00 sem juros',cat:'acessorios',
   colors:['#1A1A1A','#C0C0C0','#FFD700','#DC143C'],colorNames:['Preto','Prata','Dourado','Vermelho'],
   storage:['Padrão'],
   desc:'Tripé extensível para smartphone com controle Bluetooth remoto incluído. Perfeito para selfies, vlogs e transmissões ao vivo. Altura ajustável, compatível com todos os celulares.',
   specs:[['Marca','FGCLSY'],['Shutter','Bluetooth incluso'],['Compatível','Universal smartphones'],['Ajuste','Altura extensível'],['Uso','Selfie, Vlog, Live']]},

  // ── PRODUTO 6 — Headphone Over-Ear HiFi ──
  {id:6,brand:'BT',name:'Headphone Over-Ear Bluetooth HiFi Stereo',
   img:'https://static.wixstatic.com/media/2e01b6_e8f1234567890abcdef1234567890abc~mv2.jpg',
   emoji:'🎧',price:649.50,oldPrice:876.83,discount:26,rating:4.7,reviews:0,stock:59994,badge:'sale',
   installments:'6x R$ 108,25',cat:'audio',
   colors:['#228B22','#FF69B4','#1A1A1A','#808080','#0057A8','#F5F5F5'],
   colorNames:['Verde','Rosa','Preto','Cinza','Azul','Branco'],
   storage:['Com fio','Sem fio'],
   desc:'Headphone over-ear com som HiFi estéreo e Bluetooth. Design dobrável e confortável para longas sessões de uso. Isolamento acústico, microfone integrado e bateria de longa duração.',
   specs:[['Tipo','Over-Ear dobrável'],['Conexão','Bluetooth + P2'],['Som','HiFi Estéreo'],['Microfone','Integrado'],['Isolamento','Acústico passivo']]},

  // ── PRODUTO 7 — KZ EDX PRO X (imagem oficial KZ Audio) ──
  {id:7,brand:'KZ',name:'KZ EDX PRO X IEM Earphones HiFi Deep Bass',
   img:'https://kz-audio.com/image/cache/catalog/KZ/EDX-PRO-X/KZ-EDX-PRO-X-01-1000x1000.jpg',
   emoji:'🎧',price:70.75,oldPrice:95.51,discount:26,rating:4.7,reviews:0,stock:7,badge:'ltd',
   installments:'3x R$ 23,58 sem juros',cat:'audio',
   colors:['#1A1A1A','#808080','#F5F5F5','#00BFFF'],colorNames:['Preto','Cinza','Branco','Transparente'],
   storage:['Sem microfone','Com microfone'],
   desc:'KZ EDX PRO X — monitor in-ear com driver dinâmico super-linear de 10mm. Design transparente premium, cabo destacável 0.75mm 2-pin. Ideal para músicos, gamers e audiophiles exigentes.',
   specs:[['Driver','10mm Super-Linear Dynamic'],['Cabo','0.75mm 2-Pin destacável'],['Impedância','< 32Ω'],['Frequência','20-20.000 Hz'],['Design','Resina transparente'],['Microfone','Opcional']]},

  // ── PRODUTO 8 — Trimui Smart Pro (imagem oficial Trimui) ──
  {id:8,brand:'TRIMUI',name:'Trimui Smart Pro Console Portátil Retro 4.96" IPS',
   img:'https://trimui.net/cdn/shop/files/Trimui_Smart_Pro_01.jpg?v=1704855945&width=800',
   emoji:'🎮',price:952.00,oldPrice:1285.20,discount:26,rating:4.8,reviews:0,stock:8,badge:'ltd',
   installments:'6x R$ 158,67',cat:'games',
   colors:['#C0C0C0','#1A1A1A','#FFD700','#FF69B4'],colorNames:['Cinza','Preto','Amarelo','Rosa'],
   storage:['Sem cartão','Com 128GB','Com 256GB'],
   desc:'Console portátil retro com tela IPS de 4.96" full-laminated 720p. Processador Allwinner A133P 1.8GHz, bateria 5000mAh com até 5h de jogo, suporte a +20 emuladores, WiFi e joysticks RGB duais.',
   specs:[['Tela','4.96" IPS 720x1280'],['Processador','Allwinner A133P 1.8GHz'],['RAM','1GB LPDDR4x'],['Bateria','5000 mAh (5h)'],['WiFi','802.11 b/g/n'],['Emuladores','+20 formatos'],['Sistema','Linux Open Source']]},

  // ── PRODUTO 9 — Smart Watch 2026 ──
  {id:9,brand:'2026',name:'Smart Watch Android 1.44" Bluetooth Call Monitor',
   img:'https://static.wixstatic.com/media/cc7a6c_d729f11df0014f47aa2fae316c55a427~mv2.jpg',
   emoji:'⌚',price:83.25,oldPrice:112.39,discount:26,rating:4.7,reviews:0,stock:6989,badge:'sale',
   installments:'3x R$ 27,75 sem juros',cat:'wearable',
   colors:['#C0C0C0','#1A1A1A','#FF69B4','#FFD700'],colorNames:['Prata','Preto','Rosa','Dourado'],
   storage:['Padrão'],
   desc:'Smartwatch multifuncional com tela colorida de 1.44", chamadas Bluetooth, monitoramento de saúde (frequência cardíaca, pressão, SpO2) e rastreamento de atividades. Design elegante com pulseira intercambiável.',
   specs:[['Tela','1.44" Color Screen'],['Chamadas','Bluetooth integrado'],['Saúde','Freq. cardíaca, SpO2, Pressão'],['Atividades','Pedômetro, calorias, sono'],['Compatível','Android e iOS']]},

  // ── PRODUTO 10 — AYN THOR Handheld ──
  {id:10,brand:'AYN',name:'AYN THOR Dual Screen Flip Handheld + Case Bag',
   img:'https://static.wixstatic.com/media/778ac2_d2efe0e1f65e45d8bc5293d3c1ecfd8b~mv2.jpg',
   emoji:'🎮',price:178.00,oldPrice:240.30,discount:26,rating:4.7,reviews:0,stock:0,badge:'ltd',
   installments:'6x R$ 29,67',cat:'games',
   colors:['#1A1A1A','#F5F5F5','#808080'],colorNames:['Preto','Branco','Cinza'],
   storage:['Console','Console + Case','Console + Case + Cordão'],
   desc:'AYN THOR — handheld com tela dupla flip-up. Inclui case de proteção rígida e cordão. Design premium para gamers que buscam versatilidade e proteção máxima do console.',
   specs:[['Marca','AYN'],['Modelo','THOR'],['Telas','Dual Screen Flip'],['Acompanha','Case rígida + Cordão'],['Design','Flip dobrável']]},

];


// ══════════════════════════════════════════════════════════
//  CATEGORIAS — Atualize count: quando mudar produtos
// ══════════════════════════════════════════════════════════
const CATS = [
  {id:'all',        icon:'✨', name:'Todos',      count:PRODUCTS.length},
  {id:'wearable',  icon:'⌚', name:'Wearables',  count:2},
  {id:'audio',     icon:'🎧', name:'Áudio',      count:4},
  {id:'games',     icon:'🎮', name:'Games',      count:2},
  {id:'acessorios',icon:'📷', name:'Acessórios', count:2},
];


// ══════════════════════════════════════════════════════════
//  AVALIAÇÕES DOS CLIENTES
// ══════════════════════════════════════════════════════════
const REVIEWS = [
  {name:'Lucas M.',av:'👨',text:'O anel chegou em 3 dias, embalagem ótima. O sensor de temperatura funciona muito bem. Comprei no preto e ficou incrível!',stars:'★★★★★',date:'há 1 dia',prod:'Anel Smart Inteligente DAIPAN'},
  {name:'Fernanda A.',av:'👩',text:'Presente perfeito para o Dia dos Namorados! Meu namorado adorou o dourado. Chegou antes do prazo e a qualidade superou as expectativas!',stars:'★★★★★',date:'há 3 dias',prod:'Anel Smart Inteligente DAIPAN'},
  {name:'Carlos R.',av:'👨‍💻',text:'O KZ EDX PRO X é incrível pelo preço. Grave potente, médio detalhado. Chegou em 2 dias, embalagem perfeita!',stars:'★★★★★',date:'há 4 dias',prod:'KZ EDX PRO X IEM Earphones'},
  {name:'Beatriz S.',av:'👩',text:'O console Trimui é incrível! Tela linda, joysticks precisos. Chegou bem embalado com NF. Já fiz minha segunda compra!',stars:'★★★★★',date:'há 1 semana',prod:'Trimui Smart Pro Console'},
  {name:'Rafael M.',av:'🧑',text:'Smartwatch chegou no prazo, qualidade ótima. A tela é nítida e as funções funcionam muito bem. Recomendo a Block Shop!',stars:'★★★★★',date:'há 1 semana',prod:'Smart Watch Android 1.44"'},
  {name:'Juliana C.',av:'👩',text:'Caixinha de som incrível para o tamanho! Som potente e o design é lindo. Entrega super rápida e produto de qualidade!',stars:'★★★★★',date:'há 2 semanas',prod:'Mini Caixinha Bluetooth Fabric'},
];


// ══════════════════════════════════════════════════════════
//  TICKER — Feed de compras em tempo real
// ══════════════════════════════════════════════════════════
const TICKERS = [
  '🟢 Lucas de São Paulo comprou Anel Smart DAIPAN Preto há 2 min',
  '🟢 Fernanda do Rio comprou Anel Smart DAIPAN Dourado há 5 min',
  '🟢 Carlos de BH comprou KZ EDX PRO X Transparente há 8 min',
  '🟢 Beatriz de Curitiba comprou Trimui Smart Pro há 11 min',
  '🟢 Rafael de Fortaleza comprou Smart Watch 2026 há 14 min',
  '🟢 Juliana de Porto Alegre comprou Mini Speaker Fabric há 18 min',
  '🔴 Apenas 40 unidades do Anel Smart DAIPAN disponíveis!',
  '🔴 Últimas 7 unidades do KZ EDX PRO X — corre!',
  '⚡ Flash Sale ativo — até 26% OFF em todos os produtos!',
  '🔵 Cada compra verificada na blockchain Block Shop em tempo real',
];
