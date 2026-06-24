// ─────────────────────────────────────────────
//  calculator.js — Order price estimator
// ─────────────────────────────────────────────

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
  document.getElementById('calcResult').textContent = '$' + total.toLocaleString();
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
  if (added === 0) {
    showToast('Enter quantities first');
    return;
  }
  renderCart();
  showToast(added + ' item(s) added to cart');
  openCart();
}
