# 🟥 BLOCK SHOP — Guia Completo do Repositório
**BlockShopOnline.com** | GitHub Pages

---

## 📁 Estrutura de Arquivos

```
BlockShop-/                         ← Raiz do repositório no GitHub
│
├── index.html                      ← ARQUIVO PRINCIPAL
│                                      Abre este no navegador para visualizar
│                                      É o único arquivo que o GitHub Pages carrega
│
├── 📁 css/                         ← Todos os estilos visuais do site
│   ├── variables.css               ► EDITE AQUI: cores, fontes, tamanhos
│   ├── components.css              ► Estilos de cada componente (não editar)
│   └── responsive.css              ► Mobile, tablet e animações (não editar)
│
├── 📁 js/                          ← Toda a lógica do site
│   └── app.js                      ► Carrinho, filtros, modal, checkout, etc.
│                                      NÃO editar sem saber JavaScript
│
├── 📁 data/                        ← Dados da loja
│   └── products.js                 ► EDITE AQUI: produtos, preços, fotos,
│                                      avaliações e mensagens do ticker
│
├── 📁 images/                      ← Suas fotos (coloque aqui)
│   ├── products/                   ► Fotos dos produtos
│   │   ├── iphone-16-pro.jpg       ► Nome sugerido (sem espaços, sem acentos)
│   │   ├── galaxy-s25-ultra.jpg
│   │   └── ...
│   ├── banners/                    ► Imagens dos banners promocionais
│   │   ├── banner-iphone.jpg
│   │   └── banner-games.jpg
│   └── logo/                       ► Logo e favicon
│       └── favicon.ico
│
└── README.md                       ← Este arquivo de instruções

```

---

## ✏️ Como editar os produtos — `data/products.js`

Este é o arquivo que você mais vai usar. Abra no **Notepad++** e edite livremente.

### Estrutura de um produto:

```javascript
{
  id: 1,                    // Número único — nunca repita
  brand: 'Apple',           // Marca
  name: 'iPhone 16 Pro Max 256GB', // Nome completo
  img: 'images/products/iphone-16.jpg', // Caminho da foto
  emoji: '📱',              // Aparece se a foto não carregar
  price: 7299,              // Preço em REAIS sem vírgula (7299 = R$7.299)
  oldPrice: 9499,           // Preço antigo (aparece riscado)
  discount: 23,             // % de desconto mostrado no badge
  rating: 4.9,              // Nota média (0 a 5)
  reviews: 2847,            // Número de avaliações
  stock: 18,                // Estoque (aparece na barra de urgência)
  badge: 'hot',             // Tipo do badge (ver tabela abaixo)
  installments: '12x R$ 607,92', // Texto de parcelamento
  cat: 'smartphone',        // Categoria (ver tabela abaixo)
  colors: ['#1C1C1E', '#F5F5F0'], // Cores em hexadecimal
  colorNames: ['Preto', 'Branco'], // Nome de cada cor
  storage: ['128GB', '256GB'],    // Opções de armazenamento
  desc: 'Descrição detalhada do produto...', // Aba "Descrição"
  specs: [                  // Aba "Especificações" (tabela)
    ['Chip', 'Apple A18 Pro'],
    ['Tela', '6.9"'],
  ]
}
```

### Tipos de badge:
| `badge` | Aparência |
|---------|-----------|
| `'hot'` | 🔥 Mais Vendido (vermelho) |
| `'sale'` | 💥 Oferta (laranja) |
| `'new'` | ✨ Novo (ciano) |
| `'ltd'` | ⏳ Últimas (cinza) |

### Categorias disponíveis:
| `cat` | Ícone | Nome no site |
|-------|-------|-------------|
| `'smartphone'` | 📱 | Smartphones |
| `'notebook'` | 💻 | Notebooks |
| `'audio'` | 🎧 | Áudio |
| `'games'` | 🎮 | Games |
| `'wearable'` | ⌚ | Wearables |
| `'tablet'` | 🖥️ | Tablets |

---

## 🖼️ Como adicionar suas fotos

### Passo a passo:
1. **Prepare a foto:** 800×800px, fundo branco ou transparente, `.jpg` ou `.webp`
2. **Renomeie sem espaços ou acentos:** `iphone-16-pro.jpg` ✅ | `iPhone 16 (foto).jpg` ❌
3. **Coloque na pasta:** `images/products/`
4. **Faça upload no GitHub:** vá no repositório → `images/products` → "Add file" → "Upload files"
5. **Atualize o campo `img` no produto:**
   ```javascript
   img: 'images/products/iphone-16-pro.jpg',
   ```

### Tamanhos recomendados:
| Tipo | Tamanho | Pasta |
|------|---------|-------|
| Foto de produto | 800×800px | `images/products/` |
| Banner promocional | 1200×400px | `images/banners/` |
| Favicon | 32×32px .ico | `images/logo/` |

---

## ⭐ Como adicionar avaliações reais — `data/products.js`

Encontre o array `REVIEWS` e adicione ou edite:

```javascript
const REVIEWS = [
  {
    name: 'João S.',           // Nome do cliente
    av: '👨',                  // Emoji de avatar
    text: 'Produto incrível, chegou em 2 dias!', // Depoimento
    stars: '★★★★★',           // Estrelas (use de 1 a 5 ★)
    date: 'há 2 dias',         // Data aproximada
    prod: 'iPhone 16 Pro Max'  // Produto comprado
  },
  // adicione mais abaixo...
];
```

---

## 💬 Como editar o ticker — `data/products.js`

O ticker é a faixa rolante que mostra notificações de compras. Edite o array `TICKERS`:

```javascript
const TICKERS = [
  '🟢 Ana de São Paulo comprou iPhone 16 Pro Max há 3 min',
  '🔴 Apenas 5 unidades do MacBook Air M3 restam!',
  '⚡ Flash Sale termina em breve — economize até 38%',
  // adicione suas mensagens aqui
];
```

---

## 🎨 Como mudar as cores — `css/variables.css`

Abra `css/variables.css` no Notepad++ e edite as variáveis:

```css
:root {
  --accent: #FF3F3F;   /* ← Cor principal vermelha (botões, badges, destaques) */
  --cyan:   #00E5FF;   /* ← Cor secundária ciano (blockchain, links especiais) */
  --bg:     #0A0A0C;   /* ← Fundo principal (quase preto) */
  --bg2:    #111116;   /* ← Fundo secundário (seções alternadas) */
  --text:   #F4F4F8;   /* ← Cor do texto principal */
}
```

---

## 🔑 Cupons de desconto — `js/app.js`

Os cupons estão na função `applyCoupon()` em `js/app.js`. Cupons atuais:

| Código | Desconto |
|--------|----------|
| `BLOCK10` | R$ 20,00 de desconto |
| `FRETE0` | Frete grátis |

Para adicionar um novo cupom, encontre a função `applyCoupon()` e adicione:
```javascript
else if(c==='SEUCUPOM'){ couponDisc=5000; toast('Cupom aplicado!','🎉','R$50 de desconto'); }
```

---

## 🚀 Como atualizar o site no GitHub

Após editar qualquer arquivo:

1. Acesse `github.com/blockshoponline/BlockShop-`
2. Clique no arquivo que editou
3. Clique no **lápis ✏️** (Edit this file)
4. Cole o conteúdo atualizado
5. Clique **"Commit changes"** → **"Commit changes"**
6. Aguarde **2 minutos** e o site atualiza automaticamente

### Para fazer upload de fotos:
1. Vá na pasta `images/products/`
2. Clique **"Add file"** → **"Upload files"**
3. Arraste as fotos
4. Clique **"Commit changes"**

---

## 📱 Responsividade

| Dispositivo | Breakpoint | Layout |
|-------------|------------|--------|
| Desktop | > 1024px | 4 colunas, hero com celular animado |
| Tablet | ≤ 1024px | 3 colunas, sem visual lateral |
| Mobile | ≤ 768px | 2 colunas, menu hambúrguer |
| Small | ≤ 420px | 2 colunas compacto |

---

## 📋 Checklist ao adicionar produto novo

- [ ] `id` único (não repetir nenhum número)
- [ ] `img` com caminho correto da foto na pasta `images/products/`
- [ ] `cat` com uma das categorias válidas
- [ ] `badge` com um dos 4 tipos válidos
- [ ] `price` e `oldPrice` em reais sem vírgula
- [ ] Foto feita upload no GitHub na pasta correta
- [ ] Site atualizado com commit

---

*Block Shop © 2025 — BlockShopOnline.com*
