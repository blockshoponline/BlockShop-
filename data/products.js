/* ═══════════════════════════════════════════════════════
   BLOCK SHOP — Dados dos Produtos, Avaliações e Categorias
   ► EDITE AQUI para adicionar/remover/editar produtos
   ► Altere img: para o caminho da sua foto (ex: images/products/foto.jpg)
   ► Altere REVIEWS para suas avaliações reais
   ► Altere TICKERS para mensagens do feed de compras
═══════════════════════════════════════════════════════ */

// ══════════════════════════════════════
//  PRODUTOS — imagens reais via CDN público
// ══════════════════════════════════════
const PRODUCTS = [
  {id:1,brand:'Apple',name:'iPhone 16 Pro Max 256GB',
   img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724710173468',
   emoji:'📱',price:7299,oldPrice:9499,discount:23,rating:4.9,reviews:2847,stock:18,badge:'hot',
   installments:'12x R$ 607,92',cat:'smartphone',
   colors:['#1C1C1E','#F5F5F0','#C4A882','#4A6FA5'],colorNames:['Titânio Preto','Titânio Branco','Titânio Deserto','Titânio Azul'],
   storage:['128GB','256GB','512GB','1TB'],
   desc:'O iPhone 16 Pro Max redefine o que um smartphone pode ser. Chip A18 Pro, câmera de 48MP com zoom óptico 5x, tela Super Retina XDR de 6.9" e bateria de até 33h.',
   specs:[['Chip','Apple A18 Pro'],['Tela','6.9" Super Retina XDR'],['Câmera','48MP + 12MP Ultra Wide'],['Zoom','Óptico 5x'],['Bateria','Até 33h'],['5G','Sim'],['Face ID','Sim']]},

  {id:2,brand:'Samsung',name:'Galaxy S25 Ultra 512GB',
   img:'https://images.samsung.com/is/image/samsung/p6pim/br/2501/gallery/br-galaxy-s25-ultra-s938-sm-s938bzwpzto-thumb-544352064?$400_400_PNG$',
   emoji:'📱',price:6199,oldPrice:8200,discount:24,rating:4.8,reviews:1923,stock:31,badge:'sale',
   installments:'12x R$ 516,58',cat:'smartphone',
   colors:['#1A1A2E','#F0F0F0','#2C4A2E','#7B3A2D'],colorNames:['Titanium Black','Titanium Silver','Titanium Green','Titanium Orange'],
   storage:['256GB','512GB','1TB'],
   desc:'Galaxy S25 Ultra com S Pen integrada, câmera de 200MP e Snapdragon 8 Elite. A experiência Android mais poderosa já criada.',
   specs:[['Chip','Snapdragon 8 Elite'],['Tela','6.9" Dynamic AMOLED 2X'],['Câmera','200MP principal'],['S Pen','Integrada'],['Bateria','5000 mAh'],['5G','Sim'],['RAM','12 GB']]},

  {id:3,brand:'Sony',name:'WH-1000XM6 Headphone',
   img:'https://www.bhphotovideo.com/images/images500x500/sony_wh_1000xm5_s_wh_1000xm5_wireless_noise_canceling_overhead_1657026452_1739625.jpg',
   emoji:'🎧',price:1499,oldPrice:2199,discount:32,rating:4.9,reviews:4102,stock:9,badge:'hot',
   installments:'10x R$ 149,90',cat:'audio',
   colors:['#1A1A1A','#F5F5F5','#8B4513'],colorNames:['Preto Midnight','Platina','Castanho'],
   storage:['Padrão'],
   desc:'O melhor cancelamento de ruído do mundo. Dual Noise Sensor Technology, 30h de bateria e áudio Hi-Res certificado.',
   specs:[['Driver','40mm'],['Bateria','30 horas'],['Bluetooth','5.3'],['NFC','Sim'],['Peso','250g'],['Carga rápida','10 min = 5h']]},

  {id:4,brand:'Apple',name:'MacBook Air M3 15"',
   img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1653007958192',
   emoji:'💻',price:12499,oldPrice:15999,discount:22,rating:4.9,reviews:876,stock:5,badge:'ltd',
   installments:'12x R$ 1.041,58',cat:'notebook',
   colors:['#1C1C1E','#F5F5F0','#C0A882','#7BA7BC'],colorNames:['Meia-Noite','Estelar','Areia','Azul-Céu'],
   storage:['8GB/256GB','8GB/512GB','16GB/512GB','16GB/1TB'],
   desc:'Ultrafino e silencioso. MacBook Air M3 com chip M3, até 18h de bateria e tela Liquid Retina 15.3".',
   specs:[['Chip','Apple M3'],['Tela','15.3" Liquid Retina'],['RAM','8GB ou 16GB'],['Bateria','Até 18h'],['Webcam','1080p FaceTime'],['Peso','1.51 kg']]},

  {id:5,brand:'Razer',name:'BlackShark V2 Pro',
   img:'https://assets3.razerzone.com/OPqhPVS5vCtnT9gBWJxLz5qnFxU=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf7%2Fhac%2F9223372036963803566%2Fblackshark-v2-pro-500x500.jpg',
   emoji:'🎮',price:799,oldPrice:1099,discount:27,rating:4.7,reviews:3241,stock:44,badge:'sale',
   installments:'6x R$ 133,17',cat:'games',
   colors:['#1A1A1A','#FFFFFF'],colorNames:['Preto','Branco'],
   storage:['Padrão'],
   desc:'Headset sem fio para pro gamers. TriForce Titanium 50mm, cancelamento de ruído HyperClear e 70h de bateria.',
   specs:[['Driver','50mm TriForce'],['Conexão','Wireless 2.4GHz'],['Bateria','70 horas'],['Peso','320g'],['Compatível','PC, PS5, Xbox']]},

  {id:6,brand:'Apple',name:'Watch Series 10 GPS 46mm',
   img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=400&hei=400&fmt=png&qlt=90&.v=1724769574145',
   emoji:'⌚',price:3499,oldPrice:4499,discount:22,rating:4.8,reviews:1562,stock:22,badge:'new',
   installments:'12x R$ 291,58',cat:'wearable',
   colors:['#1C1C1E','#F5F5F0','#E8D5B7','#B8D4E8'],colorNames:['Alumínio Preto','Alumínio Prata','Alumínio Ouro','Alumínio Azul'],
   storage:['GPS 42mm','GPS 46mm','GPS+Cell 42mm','GPS+Cell 46mm'],
   desc:'O mais delgado Apple Watch. Tela OLED sempre ligada 30% maior, sensor de profundidade e detecção de apneia do sono.',
   specs:[['Chip','Apple S10'],['Tela','OLED Always-On'],['GPS','Sim'],['Resistência','WR50'],['Bateria','18 horas'],['Saúde','ECG, SpO2, Temperatura']]},

  {id:7,brand:'Samsung',name:'Galaxy Tab S10 Ultra',
   img:'https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-tab-s10-ultra-x910-sm-x910nzaazto-thumb-539906218?$400_400_PNG$',
   emoji:'🖥️',price:5299,oldPrice:6999,discount:24,rating:4.7,reviews:921,stock:13,badge:'sale',
   installments:'12x R$ 441,58',cat:'tablet',
   colors:['#1A1A2E','#F0F0F0'],colorNames:['Graphite','Silver'],
   storage:['12GB/256GB','12GB/512GB','16GB/1TB'],
   desc:'Tablet de 14.6" com Super AMOLED, S Pen incluída e Snapdragon 8 Gen 3.',
   specs:[['Tela','14.6" Dynamic AMOLED 2X'],['Chip','Snapdragon 8 Gen 3'],['S Pen','Incluída'],['Bateria','11200 mAh'],['Câmera frontal','13MP + 8MP Dupla']]},

  {id:8,brand:'JBL',name:'Flip 7 Caixa Bluetooth',
   img:'https://br.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw2e04b1c8/JBL_FLIP7_HERO_BLK_001.png?sw=400&sfrm=png',
   emoji:'🔊',price:699,oldPrice:999,discount:30,rating:4.8,reviews:5892,stock:67,badge:'hot',
   installments:'6x R$ 116,50',cat:'audio',
   colors:['#1A1A1A','#DC143C','#0057A8','#228B22','#FF6B00'],colorNames:['Preto','Vermelho','Azul','Verde','Laranja'],
   storage:['Padrão'],
   desc:'JBL Flip 7 com som 360°, resistência IP67, bateria de 12 horas e PartyBoost.',
   specs:[['Potência','30W'],['Bluetooth','5.3'],['IP','IP67'],['Bateria','12 horas'],['Carga','USB-C'],['Peso','525g']]},
];

const CATS=[
  {id:'all',icon:'✨',name:'Todos',count:PRODUCTS.length},
  {id:'smartphone',icon:'📱',name:'Smartphones',count:2},
  {id:'notebook',icon:'💻',name:'Notebooks',count:1},
  {id:'audio',icon:'🎧',name:'Áudio',count:2},
  {id:'games',icon:'🎮',name:'Games',count:1},
  {id:'wearable',icon:'⌚',name:'Wearables',count:1},
  {id:'tablet',icon:'🖥️',name:'Tablets',count:1},
];

const REVIEWS=[
  {name:'Mateus R.',av:'👨‍💻',text:'Recebi em 1 dia útil, produto original com nota fiscal. Terceira compra — sempre excelente!',stars:'★★★★★',date:'há 2 dias',prod:'iPhone 16 Pro Max'},
  {name:'Camila S.',av:'👩‍🎤',text:'Fone chegou bem embalado, qualidade incrível. A verificação blockchain me deu muita segurança!',stars:'★★★★★',date:'há 5 dias',prod:'Sony WH-1000XM6'},
  {name:'Bruno T.',av:'👨‍🚀',text:'Produto idêntico à loja oficial da Apple. Preço muito melhor. Recomendo!',stars:'★★★★★',date:'há 1 semana',prod:'MacBook Air M3'},
  {name:'Aline P.',av:'👩‍💼',text:'Devolvi um produto sem problema nenhum. Processo super simples!',stars:'★★★★☆',date:'há 1 semana',prod:'Galaxy S25 Ultra'},
  {name:'Rafael M.',av:'🧑',text:'Preço imbatível. Chegou no prazo, nota fiscal em dia. Muito satisfeito!',stars:'★★★★★',date:'há 2 semanas',prod:'Apple Watch S10'},
  {name:'Juliana C.',av:'👩‍🔬',text:'Comprei o tablet para trabalho, foi transformador. Entrega super rápida!',stars:'★★★★★',date:'há 3 semanas',prod:'Galaxy Tab S10 Ultra'},
];

const TICKERS=[
  '🟢 Ana de São Paulo comprou iPhone 16 Pro Max há 3 min',
  '🟢 Carlos do Rio comprou Sony WH-1000XM6 há 7 min',
  '🟢 Mariana de BH comprou MacBook Air M3 há 12 min',
  '🟢 Pedro de Curitiba comprou Apple Watch S10 há 15 min',
  '🟢 Luiza de Fortaleza comprou Galaxy S25 Ultra há 18 min',
  '🔴 Apenas 5 unidades do MacBook Air M3 restam!',
  '⚡ Flash Sale termina em breve — economize até 38%',
  '🔵 Compra verificada na blockchain em tempo real',
];