// ─────────────────────────────────────────────
//  gallery.js — slideshow, thumbnails, auto-play
// ─────────────────────────────────────────────

let currentSlide = 0;
let autoTimer    = null;

// buildGallery: works in two modes
//   1. index.html — dynamically creates slides from PRODUCTS data
//   2. gallery.html — HTML has static slides; just wire up counter + thumbs
function buildGallery() {
  const ss = document.getElementById('slideshow');
  const tb = document.getElementById('thumbs');
  if (!ss) return;

  const hasStaticSlides = ss.querySelectorAll('.slide').length > 0;

  if (!hasStaticSlides && typeof PRODUCTS !== 'undefined') {
    // Dynamic mode (index.html)
    PRODUCTS.forEach((p, i) => {
      const slide = document.createElement('div');
      slide.className = 'slide' + (i === 0 ? ' active' : '');
      slide.style.color = 'var(--text)';
      slide.innerHTML = `${p.svg}<div class="slide-caption">${p.name} — $${p.price}</div>`;
      ss.appendChild(slide);

      if (tb) {
        const thumb = document.createElement('div');
        thumb.className = 'thumb' + (i === 0 ? ' active' : '');
        thumb.style.color = 'var(--text)';
        thumb.innerHTML = p.svg;
        thumb.onclick = () => goToSlide(i);
        tb.appendChild(thumb);
      }
    });
  }

  // Both modes: ensure first slide is active, wire counter
  const slides = ss.querySelectorAll('.slide');
  if (slides.length > 0) {
    currentSlide = 0;
    slides[0].classList.add('active');
  }
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

// Hero animation — cycles product SVGs (index.html)
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
window.buildHero   = buildHero;
window.buildGallery = buildGallery;
