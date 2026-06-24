// Compatibility shim for older products.html buttons
function addToCart(name, price) {
  const n = document.getElementById('cart-popup-name');
  const d = document.getElementById('cart-popup-desc');
  if (n) n.textContent = name;
  if (d) d.textContent = `Price: ${price}`;
  openPopup('cart-popup');
}

// Calculator used on products.html (legacy IDs q1..q6)
function calcTotal() {
  const prices = [149,89,124,72,210,195];
  let total = 0;
  for (let i=1;i<=6;i++) {
    const val = parseInt(document.getElementById('q'+i)?.value) || 0;
    total += val * prices[i-1];
  }
  const el = document.getElementById('calc-result');
  if (el) el.textContent = '$' + total.toLocaleString();
}

// expose for consoles
window.addToCart = addToCart;
window.calcTotal = calcTotal;