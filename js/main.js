// ─────────────────────────────────────────────
//  main.js — Product data, nav, theme, init
// ─────────────────────────────────────────────

// ── PRODUCT DATA ──────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: "Dovetail Saw",
    desc: "Japanese pull-cut, 20 TPI. Razor spine for precise joinery. Replaceable blade.",
    price: 149,
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="44" width="65" height="10" rx="2" fill="currentColor" opacity=".15" stroke="currentColor" stroke-width="1.5"/>
      <rect x="8" y="46" width="12" height="6" rx="1" fill="currentColor" opacity=".4"/>
      <path d="M75 44 L92 30 L95 33 L78 54Z" fill="currentColor" opacity=".25" stroke="currentColor" stroke-width="1"/>
      <line x1="20" y1="54" x2="20" y2="68" stroke="currentColor" stroke-width="1" opacity=".3"/>
      <line x1="28" y1="54" x2="28" y2="68" stroke="currentColor" stroke-width="1" opacity=".3"/>
      <line x1="36" y1="54" x2="36" y2="68" stroke="currentColor" stroke-width="1" opacity=".3"/>
      <line x1="44" y1="54" x2="44" y2="68" stroke="currentColor" stroke-width="1" opacity=".3"/>
      <line x1="52" y1="54" x2="52" y2="68" stroke="currentColor" stroke-width="1" opacity=".3"/>
      <line x1="60" y1="54" x2="60" y2="68" stroke="currentColor" stroke-width="1" opacity=".3"/>
    </svg>`
  },
  {
    id: 2,
    name: "Layout Square",
    desc: "Precision machined stainless steel, 300mm. Laser-etched markings. Zero drift.",
    price: 89,
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 80 L15 20 L75 20" stroke="currentColor" stroke-width="3" stroke-linecap="square"/>
      <path d="M15 20 L75 80" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
      <line x1="15" y1="30" x2="22" y2="30" stroke="currentColor" stroke-width="1" opacity=".5"/>
      <line x1="15" y1="40" x2="22" y2="40" stroke="currentColor" stroke-width="1" opacity=".5"/>
      <line x1="15" y1="50" x2="22" y2="50" stroke="currentColor" stroke-width="1" opacity=".5"/>
      <line x1="15" y1="60" x2="22" y2="60" stroke="currentColor" stroke-width="1" opacity=".5"/>
      <line x1="15" y1="70" x2="22" y2="70" stroke="currentColor" stroke-width="1" opacity=".5"/>
      <line x1="25" y1="20" x2="25" y2="27" stroke="currentColor" stroke-width="1" opacity=".5"/>
      <line x1="35" y1="20" x2="35" y2="27" stroke="currentColor" stroke-width="1" opacity=".5"/>
      <line x1="45" y1="20" x2="45" y2="27" stroke="currentColor" stroke-width="1" opacity=".5"/>
      <line x1="55" y1="20" x2="55" y2="27" stroke="currentColor" stroke-width="1" opacity=".5"/>
      <line x1="65" y1="20" x2="65" y2="27" stroke="currentColor" stroke-width="1" opacity=".5"/>
    </svg>`
  },
  {
    id: 3,
    name: "Joiner's Mallet",
    desc: "Solid European beech, brass-ringed handle. Weighted for perfect balance.",
    price: 124,
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="20" width="40" height="30" rx="2" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.5"/>
      <rect x="32" y="22" width="36" height="26" rx="1" stroke="currentColor" stroke-width=".5" opacity=".3"/>
      <rect x="46" y="50" width="8" height="32" rx="1" fill="currentColor" opacity=".15" stroke="currentColor" stroke-width="1.5"/>
      <rect x="44" y="72" width="12" height="3" rx="1" fill="currentColor" opacity=".5"/>
      <rect x="44" y="78" width="12" height="3" rx="1" fill="currentColor" opacity=".5"/>
    </svg>`
  },
  {
    id: 4,
    name: "Marking Gauge",
    desc: "Wheel-type cutter, rosewood fence. Micro-adjust thumbscrew.",
    price: 72,
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="44" width="60" height="10" rx="2" fill="currentColor" opacity=".15" stroke="currentColor" stroke-width="1.5"/>
      <rect x="18" y="35" width="18" height="28" rx="2" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="27" cy="49" r="6" stroke="currentColor" stroke-width="2" fill="none" opacity=".6"/>
      <circle cx="27" cy="49" r="2" fill="currentColor" opacity=".4"/>
      <line x1="72" y1="54" x2="72" y2="62" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    </svg>`
  },
  {
    id: 5,
    name: "Driver Set",
    desc: "8-piece set. Hardened S2 steel tips. Ergonomic tri-lobe handles. Lifetime warranty.",
    price: 210,
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="42" y="18" width="16" height="32" rx="6" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.5"/>
      <rect x="47" y="50" width="6" height="30" rx="1" fill="currentColor" opacity=".15" stroke="currentColor" stroke-width="1.5"/>
      <line x1="47" y1="78" x2="53" y2="78" stroke="currentColor" stroke-width="2" opacity=".6"/>
      <circle cx="50" cy="28" r="4" stroke="currentColor" stroke-width="1" fill="none" opacity=".3"/>
      <circle cx="50" cy="38" r="4" stroke="currentColor" stroke-width="1" fill="none" opacity=".3"/>
    </svg>`
  },
  {
    id: 6,
    name: "Chisel Set",
    desc: "Set of 4 (6–25mm). High-carbon A2 steel, oiled ash handles. Honed to 25°.",
    price: 195,
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-10,0)">
        <rect x="40" y="15" width="8" height="28" rx="3" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/>
        <path d="M40 43 L48 43 L46 58 L42 58Z" fill="currentColor" opacity=".3" stroke="currentColor" stroke-width="1"/>
        <line x1="42" y1="58" x2="46" y2="62" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
      </g>
      <g transform="translate(2,0)">
        <rect x="46" y="15" width="8" height="28" rx="3" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/>
        <path d="M46 43 L54 43 L52 60 L48 60Z" fill="currentColor" opacity=".3" stroke="currentColor" stroke-width="1"/>
        <line x1="48" y1="60" x2="52" y2="65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
      </g>
      <g transform="translate(14,0)">
        <rect x="46" y="15" width="10" height="28" rx="3" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/>
        <path d="M46 43 L56 43 L53 62 L49 62Z" fill="currentColor" opacity=".3" stroke="currentColor" stroke-width="1"/>
        <line x1="49" y1="62" x2="53" y2="68" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
      </g>
    </svg>`
  }
];

// ── PRODUCT GRID ──────────────────────────────
function buildProductGrid() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  PRODUCTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img" style="color:var(--text)">${p.svg}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="product-price">$${p.price}</div>
      <button class="add-btn" data-id="${p.id}" onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

// ── HERO CYCLE ────────────────────────────────
function buildHero() {
  const display = document.getElementById('heroDisplay');
  if (!display || typeof PRODUCTS === 'undefined') return;
  display.style.cssText = 'width:65%; height:65%; color:var(--text); transition:opacity .6s;';
  let heroIdx = 0;
  display.innerHTML = PRODUCTS[0].svg;
  setInterval(() => {
    display.style.opacity = '0';
    setTimeout(() => {
      heroIdx = (heroIdx + 1) % PRODUCTS.length;
      display.innerHTML = PRODUCTS[heroIdx].svg;
      display.style.opacity = '1';
    }, 600);
  }, 2500);
}

// ── CALCULATOR ────────────────────────────────
function buildCalc() {
  const container = document.getElementById('calcRows');
  if (!container) return;
  PRODUCTS.forEach(p => {
    const row = document.createElement('div');
    row.className = 'calc-row';
    row.innerHTML = `
      <label>${p.name} — $${p.price}</label>
      <input type="number" id="cq${p.id}" value="0" min="0" max="99" oninput="calcTotal()">
    `;
    container.appendChild(row);
  });
}

function calcTotal() {
  let total = 0;
  PRODUCTS.forEach(p => {
    const val = parseInt(document.getElementById('cq' + p.id)?.value) || 0;
    total += val * p.price;
  });
  const el = document.getElementById('calcResult');
  if (el) el.textContent = '$' + total.toLocaleString();
}

function addAllFromCalc() {
  let added = 0;
  PRODUCTS.forEach(p => {
    const val = parseInt(document.getElementById('cq' + p.id)?.value) || 0;
    if (val > 0) {
      cart[p.id] = (cart[p.id] || 0) + val;
      added += val;
    }
  });
  if (added === 0) { showToast('Enter quantities first'); return; }
  saveCart();
  renderCart();
  showToast(added + ' item(s) added to cart');
  openCart();
}

// ── NAV SCROLL ────────────────────────────────
function scrollToSection(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
}

// ── THEME ─────────────────────────────────────
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  const label = isDark ? 'Light' : 'Dark';
  ['themeBtn', 'theme-toggle'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = label;
  });
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Restore theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    ['themeBtn', 'theme-toggle'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = 'Light';
    });
  }
  buildProductGrid();
  buildGallery();
  buildHero();
  buildCalc();
  // renderCart() is called by cart.js after it loads — no duplicate call needed here
});