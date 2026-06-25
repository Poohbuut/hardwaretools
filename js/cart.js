// ─────────────────────────────────────────────
//  cart.js — Add to cart, remove, qty, checkout
//  Cart persists across pages via localStorage.
// ─────────────────────────────────────────────

// Load cart from localStorage on startup
let cart = loadCart();

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('hw_cart') || '{}');
  } catch {
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem('hw_cart', JSON.stringify(cart));
  } catch {}
}

function getCartItems() {
  return Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => ({ product: PRODUCTS.find(p => p.id === +id), qty }))
    .filter(item => item.product); // guard against stale IDs
}

function cartTotalCount() {
  return Object.values(cart).reduce((s, q) => s + q, 0);
}

function cartTotalPrice() {
  return getCartItems().reduce((s, { product, qty }) => s + product.price * qty, 0);
}

function addToCart(id, qty = 1) {
  cart[id] = (cart[id] || 0) + qty;
  saveCart();
  renderCart();
  showToast('Added to cart');
  const btn = document.querySelector(`.add-btn[data-id="${id}"]`);
  if (btn) {
    btn.textContent = 'Added ✓';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = 'Add to Cart';
      btn.classList.remove('added');
    }, 1000);
  }
}

function updateQty(id, delta) {
  cart[id] = Math.max(0, (cart[id] || 0) + delta);
  if (cart[id] === 0) delete cart[id];
  saveCart();
  renderCart();
}

function setQty(id, val) {
  const n = parseInt(val);
  if (isNaN(n) || n < 0) return;
  if (n === 0) { delete cart[id]; } else { cart[id] = n; }
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
  renderCart();
}

function renderCart() {
  const items = getCartItems();
  const count = cartTotalCount();
  const total = cartTotalPrice();

  // nav badge
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
    badge.classList.toggle('show', count > 0);
  }

  const cartCountEl = document.getElementById('cartCount');
  if (cartCountEl) cartCountEl.textContent = count;

  const cartTotalEl = document.getElementById('cartTotal');
  if (cartTotalEl) cartTotalEl.textContent = '$' + total.toLocaleString();

  const container = document.getElementById('cartItems');
  const empty = document.getElementById('cartEmpty');
  if (!container) return;

  container.querySelectorAll('.cart-item').forEach(el => el.remove());

  if (items.length === 0) {
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  items.forEach(({ product, qty }) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-img" style="color:var(--text)">${product.svg}</div>
      <div>
        <div class="cart-item-name">${product.name}</div>
        <div class="cart-item-price">$${product.price} each</div>
        <div class="qty-control">
          <button class="qty-btn" onclick="updateQty(${product.id}, -1)">−</button>
          <input class="qty-val" type="number" value="${qty}" min="0"
            onchange="setQty(${product.id}, this.value)">
          <button class="qty-btn" onclick="updateQty(${product.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${product.id})">×</button>
    `;
    container.appendChild(div);
  });
}

function openCart() {
  document.getElementById('cartOverlay')?.classList.add('open');
  document.getElementById('cartSidebar')?.classList.add('open');
}

function closeCart() {
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.getElementById('cartSidebar')?.classList.remove('open');
}

function checkout() {
  if (cartTotalCount() === 0) { showToast('Your cart is empty'); return; }
  closeCart();
  cart = {};
  saveCart();
  renderCart();
  document.getElementById('orderModal')?.classList.add('show');
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('show');
}

// Toast notification
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2000);
}