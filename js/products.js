// products.js — add-to-cart popup + price calculator for products.html
function showAddPopup(name, price) {
  const nameEl = document.getElementById('cart-popup-name');
  const descEl = document.getElementById('cart-popup-desc');
  if (nameEl) nameEl.textContent = name;
  if (descEl) descEl.textContent = 'Price: ' + price + ' — has been added to your cart.';
  openPopup('cart-popup');
}

// Calculator: legacy IDs q1..q6
const PRICES = [149, 89, 124, 72, 210, 195];

function calcTotal() {
  let total = 0;
  for (let i = 1; i <= 6; i++) {
    const val = parseInt(document.getElementById('q' + i)?.value) || 0;
    total += val * PRICES[i - 1];
  }
  const el = document.getElementById('calc-result');
  if (el) el.textContent = '$' + total.toLocaleString();
}

window.showAddPopup = showAddPopup;
window.calcTotal = calcTotal;