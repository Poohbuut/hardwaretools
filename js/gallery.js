// gallery.js — slideshow, thumbnails, auto-play
let currentSlide = 0;
let autoTimer    = null;

function buildGallery() {
  const ss = document.getElementById('slideshow');
  const tb = document.getElementById('thumbs');
  if (!ss || !tb) return;

  // gallery.html uses static HTML slides/thumbs — just wire up the counter
  updateCounter();
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const thumbs = document.querySelectorAll('.thumb');
  if (!slides.length) return;

  slides[currentSlide].classList.remove('active');
  if (thumbs[currentSlide]) thumbs[currentSlide].classList.remove('active');

  currentSlide = ((n % slides.length) + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  if (thumbs[currentSlide]) thumbs[currentSlide].classList.add('active');
  updateCounter();
}

function changeSlide(dir) {
  goToSlide(currentSlide + dir);
}

function updateCounter() {
  const total = document.querySelectorAll('.slide').length;
  const el    = document.getElementById('slideCounter');
  if (el) el.textContent = (currentSlide + 1) + ' / ' + total;
}

function toggleAuto() {
  const btn = document.getElementById('auto-btn');
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
    if (btn) btn.textContent = 'Auto-play: Off';
  } else {
    autoTimer = setInterval(() => changeSlide(1), 3000);
    if (btn) btn.textContent = 'Auto-play: On';
  }
}

// Hero animation (used by pages that have #heroDisplay)
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

window.goToSlide   = goToSlide;
window.changeSlide = changeSlide;
window.toggleAuto  = toggleAuto;
