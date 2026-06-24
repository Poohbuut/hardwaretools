// ─────────────────────────────────────────────
//  cart.js — Add to cart, remove, qty, checkout
// ─────────────────────────────────────────────

let cart = {}; // { productId: quantity }

function getCartItems() {
  return Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => ({ product: PRODUCTS.find(p => p.id === +id), qty }));
}

function cartTotalCount() {
  return Object.values(cart).reduce((s, q) => s + q, 0);
}

function cartTotalPrice() {
  return getCartItems().reduce((s, { product, qty }) => s + product.price * qty, 0);
}

function addToCart(id, qty = 1) {
  cart[id] = (cart[id] || 0) + qty;
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
  renderCart();
}

function setQty(id, val) {
  const n = parseInt(val);
  if (isNaN(n) || n < 0) return;
  if (n === 0) { delete cart[id]; } else { cart[id] = n; }
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  renderCart();
}

function renderCart() {
  const items = getCartItems();
  const count = cartTotalCount();
  const total = cartTotalPrice();

  // nav badge
  const badge = document.getElementById('cartBadge');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';

  // sidebar count + total
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = '$' + total.toLocaleString();

  const container = document.getElementById('cartItems');
  const empty = document.getElementById('cartEmpty');
  container.querySelectorAll('.cart-item').forEach(el => el.remove());

  if (items.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

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
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartSidebar').classList.add('open');
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartSidebar').classList.remove('open');
}

function checkout() {
  if (cartTotalCount() === 0) { showToast('Your cart is empty'); return; }
  closeCart();
  cart = {};
  renderCart();
  document.getElementById('orderModal').classList.add('show');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

// Toast notification
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2000);
}
