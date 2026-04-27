/* ════════════════════════════════════════════════════
   BLOCK SHOP — Dados dos Produtos, Avaliações e Categorias
   ► EDITE AQUI para adicionar/remover/editar produtos
   ► Altere img: para o caminho da sua foto
   ► Altere REVIEWS para suas avaliações reais
═══════════════════════════════════════════════════════ */

const PRODUCTS = [

  // ── PRODUTO 2 ──
  {id:2,brand:'New',name:'New Bluetooth Earphones Handfree LED Dispay Headphones Bluetooth ...',
   img:'https://static.wixstatic.com/media/cc7a6c_a2c5680f0f7c49078e13d2d779c84be2~mv2.jpg',
   emoji:'🎧',price:44.75,oldPrice:60.41,discount:26,rating:4.7,reviews:0,stock:3,badge:'ltd',
   installments:'3x R$ 14,92 sem juros',cat:'audio',
   colors:['#888888'],colorNames:['Padrão'],
   storage:['Padrão'],
   desc:'Brand Name: CHUBANStyle: Tws in-ear headphonesVocalism Principle: DynamicOrigin: Mainland ChinaMaterial: ABSMaterial: PlasticHigh-concerned chemical: NoneCommunication: WireLessVolume Control: YesCategory: Earphones & HeadphonesCertification: CECertification: FCCCertification: Ro',
   specs:[['Produto','New Bluetooth Earphones Handfr']]},
  // ── PRODUTO 3 ──
  {id:3,brand:'Mini',name:'Mini Fabric Speaker Portable Wireless Soundbar Bluetooth 5.0 Outd...',
   img:'https://static.wixstatic.com/media/88f6a2_4e2197062b464a25a4b9404edd4a78fa~mv2.jpg',
   emoji:'🔊',price:40.5,oldPrice:54.68,discount:26,rating:4.7,reviews:0,stock:25,badge:'hot',
   installments:'3x R$ 13,50 sem juros',cat:'audio',
   colors:['#1A1A1A','#808080','#DC143C'],colorNames:['Black','GRAY','Red'],
   storage:['Padrão'],
   desc:'Brand Name: XIKCUPower Source: USBInbox adaptor: NoCabinet Material: PlasticAudio Crossover: Full-RangeWaterproof: YesVoltage range: USB (5-20V DC)Communication: BluetoothSpeaker Type: PortableChannels: 2 (2.0)Support APP: NoBattery: YesCategory: SpeakersUse: othersOrigin: Mainla',
   specs:[['Produto','Mini Fabric Speaker Portable W']]},
  // ── PRODUTO 4 ──
  {id:4,brand:'FANGTUOSI',name:'FANGTUOSI Underwater Buoyancy Bar Diving Extendable Selfie Stick ...',
   img:'https://static.wixstatic.com/media/6173da_ee885cece9b14aae8800351acd196232~mv2.png',
   emoji:'📷',price:95.0,oldPrice:128.25,discount:26,rating:4.7,reviews:0,stock:9833,badge:'sale',
   installments:'3x R$ 31,67 sem juros',cat:'acessorios',
   colors:['#888888','#888888','#888888','#888888'],colorNames:['Option 1','Option 4','Option 3','Option 2'],
   storage:['Padrão'],
   desc:'Brand Name: FANGTUOSIModel Number: Underwater Buoyancy bar Diving Extendable Selfie Stick TripodMaterial: aluminumHigh-concerned chemical: NoneCompatible Action Camera Brand: DJICompatible Action Camera Brand: Insta360Compatible Action Camera Brand: GoProOrigin: Mainland ChinaTyp',
   specs:[['Produto','FANGTUOSI Underwater Buoyancy ']]},
  // ── PRODUTO 5 ──
  {id:5,brand:'FGCLSY',name:'FGCLSY New Tripod for Smartphone Camera,Stand With Bluetooth Shut...',
   img:'https://static.wixstatic.com/media/0040d2_97148ab83ac242ba96ed58d9e2acb021~mv2.jpg',
   emoji:'📷',price:60.0,oldPrice:81.0,discount:26,rating:4.7,reviews:0,stock:99936,badge:'sale',
   installments:'3x R$ 20,00 sem juros',cat:'acessorios',
   colors:['#888888','#888888','#888888','#888888'],colorNames:['Option 4','Option 1','Option 2','Option 3'],
   storage:['Padrão'],
   desc:'Brand Name: FGCLSYType: Mini Tripod / LightweightMaterial: stainless steelUse: SmartphonesOrigin: Mainland ChinaHigh-concerned chemical: NoneModel Number: S03SMax Extened Length (mm): 700Folded Length (mm): 180Package: NoWeight (g): 123Choice: yessemi_Choice: yes',
   specs:[['Produto','FGCLSY New Tripod for Smartpho']]},
  // ── PRODUTO 6 ──
  {id:6,brand:'BT',name:'BT Mobile Head Phones Over Ear Phone Stereo Music Headset Over-Ea...',
   img:'https://static.wixstatic.com/media/0e162b_2db745ee47454bc497e2cb3af9cc3af9~mv2.jpg',
   emoji:'🎧',price:649.5,oldPrice:876.83,discount:26,rating:4.7,reviews:0,stock:59994,badge:'sale',
   installments:'6x R$ 108,25',cat:'audio',
   colors:['#888888'],colorNames:['Padrão'],
   storage:['Padrão'],
   desc:'',
   specs:[['Produto','BT Mobile Head Phones Over Ear']]},
  // ── PRODUTO 7 ──
  {id:7,brand:'KZ',name:'KZ EDX PRO X IEM Earphones Dynamic Drive HiFi Deep Bass Sound Ear...',
   img:'https://static.wixstatic.com/media/ad1967_7b7482bcd3554e4dbbb17a54d5757c28~mv2.jpg',
   emoji:'🎧',price:70.75,oldPrice:95.51,discount:26,rating:4.7,reviews:0,stock:7,badge:'ltd',
   installments:'3x R$ 23,58 sem juros',cat:'audio',
   colors:['#888888','#888888','#888888','#808080','#808080','#888888'],colorNames:['Clear MIC','Cyan NO MIC','Cyan MIC','Gray NO MIC','Gray MIC','Clear NO MIC'],
   storage:['Padrão'],
   desc:'Brand Name: SZKOSTONStyle: Wired in-ear headphonesVocalism Principle: DynamicOrigin: Mainland ChinaMaterial: MetalMaterial: PlasticHigh-concerned chemical: NoneCommunication: WiredVolume Control: NoCategory: Earphones & HeadphonesCertification: CEPlug Type: L BendingActive Noise-',
   specs:[['Produto','KZ EDX PRO X IEM Earphones Dyn']]},
  // ── PRODUTO 8 ──
  {id:8,brand:'Trimui',name:'Trimui Smart Pro Handheld Game Console 4.96IPS Screen Linux Syste...',
   img:'https://static.wixstatic.com/media/ad1967_51ba0f1dc92244f59760ed4d3636a149~mv2.png',
   emoji:'🎮',price:952.0,oldPrice:1285.2,discount:26,rating:4.7,reviews:0,stock:156,badge:'sale',
   installments:'6x R$ 158,67',cat:'games',
   colors:['#808080','#1A1A1A','#F5F5F5'],colorNames:['Retro Grey','Black','White'],
   storage:['Padrão'],
   desc:'Brand Name: TRIMUISupporting Language: JapaneseSupporting Language: SpanishSupporting Language: PortugueseSupporting Language: EnglishSupporting Language: Simplified ChineseCategory: Handheld Game PlayersGames included: 10000 +High-concerned chemical: NoneDisplay Size: 4.95‘’Orig',
   specs:[['Produto','Trimui Smart Pro Handheld Game']]},
  // ── PRODUTO 9 ──
  {id:9,brand:'2026',name:'2026 New Smart Watch Android Phone 1.44Inch Color Screen Bluetoot...',
   img:'https://static.wixstatic.com/media/815669_26403f9f33b2433eae00f4a1b57c0b34~mv2.jpg',
   emoji:'⌚',price:83.25,oldPrice:112.39,discount:26,rating:4.7,reviews:0,stock:6989,badge:'sale',
   installments:'3x R$ 27,75 sem juros',cat:'wearable',
   colors:['#888888','#888888','#888888','#C0C0C0','#888888','#888888','#1A1A1A','#C0C0C0','#1A1A1A','#FFD700','#FF69B4','#888888','#C0C0C0','#1A1A1A'],colorNames:['Go20Milan','Pk20Milan','Bk20Szstrap','Silver20Milan','Go20Szstrap','Pk20Szstrap','Black','Silver20Szstrap','Black1','Gold','Pink','Bk20Milan','Silver','Black2'],
   storage:['Padrão'],
   desc:'Brand Name: Ola EsporteOla Esporte Model: series 8Category: Smart WatchesSystem: Android WearSystem: Proprietary OSSystem: Android OSSystem: iOSFunction: Shock ResistantFunction: PassometerFunction: fitness trackerFunction: sleep trackerFunction: Message ReminderFunction: Call Re',
   specs:[['Produto','2026 New Smart Watch Android P']]},
  // ── PRODUTO 10 ──
  {id:10,brand:'AYN',name:'AYN THOR Dual Screen Flip Up Handheld Device Protective Case Stor...',
   img:'https://static.wixstatic.com/media/67c0c7_4addddb522f748f28b20fd7abfb575cd~mv2.png',
   emoji:'📦',price:178.0,oldPrice:240.3,discount:26,rating:4.7,reviews:0,stock:15560,badge:'sale',
   installments:'6x R$ 29,67',cat:'games',
   colors:['#1A1A1A','#F5F5F5','#808080','#1A1A1A','#888888','#888888','#808080','#F5F5F5','#888888','#888888','#888888','#888888','#888888'],colorNames:['Black Grip','White Suit','Grey Suit','Black Suit','Carrying Case B','Carrying Case A','Grey Grip','White Grip','THOR Soft Pouch','THOR Lanyard','Screen Protector B','Screen Protector A','TPU Shell'],
   storage:['Padrão'],
   desc:'Brand Name: AEVYVKVWith USB: NoHigh-concerned chemical: NoneOrigin: Mainland ChinaCompatible Brand/Model: NoneAccessories Type: Accessory KitsModel Number: AYN ThorElectric: No',
   specs:[['Produto','AYN THOR Dual Screen Flip Up H']]},
  // ── PRODUTO 11 ──
  {id:11,brand:'Titanium',name:'Titanium Steel Temperature Couple Ring Mood Emotion Feeling Intel...',
   img:'https://static.wixstatic.com/media/ec15ec_8694851a2e824818990193c948f045a6~mv2.jpg',
   emoji:'💍',price:23.75,oldPrice:32.06,discount:26,rating:4.7,reviews:0,stock:373,badge:'hot',
   installments:'3x R$ 7,92 sem juros',cat:'wearable',
   colors:['#FFD700','#C0C0C0','#0057A8','#1A1A1A','#FFD700'],colorNames:['Rose Gold','Silver','Blue','Black','Gold'],
   storage:['13','12','6','11','8','7','10','9'],
   desc:'Brand Name: DAIPANInlay material: NoneHigh-concerned chemical: NoneOrigin: Mainland ChinaCN: ZhejiangMetals Type: Stainless steel Cladding Material: NoneGender: UnisexFestival: Valentines DayCompatibility: All CompatibleItem Type: RingsFunction: fitness trackerFunction: Message R',
   specs:[['Produto','Titanium Steel Temperature Cou']]},
  // ── ADICIONE NOVOS PRODUTOS AQUI ──
  // Copie qualquer bloco acima, cole antes do ];
  // Troque id: pelo próximo número sequencial

];

const CATS=[
  {id:'all',icon:'✨',name:'Todos',count:PRODUCTS.length},
  {id:'wearable',icon:'⌚',name:'Wearables',count:3},
  {id:'audio',icon:'🎧',name:'Áudio',count:4},
  {id:'games',icon:'🎮',name:'Games',count:2},
  {id:'acessorios',icon:'📷',name:'Acessórios',count:2},
];

const REVIEWS=[
  {name:'Lucas M.',av:'👨',text:'O anel chegou em 3 dias, embalagem ótima. O sensor de temperatura funciona muito bem. Comprei no preto e ficou incrível!',stars:'★★★★★',date:'há 1 dia',prod:'Anel Smart Inteligente DAIPAN'},
  {name:'Fernanda A.',av:'👩',text:'Presente perfeito para o Dia dos Namorados. Meu namorado adorou o dourado. Chegou antes do prazo e a qualidade superou as expectativas!',stars:'★★★★★',date:'há 3 dias',prod:'Anel Smart Inteligente DAIPAN'},
  {name:'Carlos R.',av:'👨‍💻',text:'Fone com cancelamento de ruído incrível, chegou em 2 dias. Embalagem perfeita e produto original. Super recomendo a Block Shop!',stars:'★★★★★',date:'há 4 dias',prod:'KZ EDX PRO X IEM Earphones'},
  {name:'Beatriz S.',av:'👩',text:'O console portátil é incrível! Chegou bem embalado, tela linda. Valeu cada centavo. Já fiz minha segunda compra aqui!',stars:'★★★★★',date:'há 1 semana',prod:'Trimui Smart Pro Handheld'},
  {name:'Rafael M.',av:'🧑',text:'Smartwatch chegou no prazo, qualidade ótima. A tela é nítida e as funções funcionam muito bem. Recomendo!',stars:'★★★★★',date:'há 1 semana',prod:'2026 New Smart Watch'},
  {name:'Juliana C.',av:'👩',text:'Caixinha de som incrível para o tamanho. Som potente e resistente. Entrega super rápida e produto de qualidade!',stars:'★★★★★',date:'há 2 semanas',prod:'Mini Fabric Speaker'},
];

const TICKERS=[
  '🟢 Lucas de São Paulo comprou Anel Smart DAIPAN Preto há 2 min',
  '🟢 Fernanda do Rio comprou Anel Smart DAIPAN Dourado há 5 min',
  '🟢 Carlos de BH comprou KZ EDX PRO X fone há 8 min',
  '🟢 Beatriz de Curitiba comprou Trimui Smart Pro há 11 min',
  '🟢 Rafael de Fortaleza comprou Smart Watch 2026 há 14 min',
  '🟢 Juliana de Porto Alegre comprou Mini Speaker há 18 min',
  '🔴 Apenas 40 unidades do Anel Smart DAIPAN disponíveis!',
  '⚡ Flash Sale ativo — até 26% OFF em todos os produtos!',
  '🔵 Cada compra verificada na blockchain Block Shop em tempo real',
];
