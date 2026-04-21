const heroBar = document.getElementById('heroBar');
let lastY = window.scrollY;

function handleScroll() {
  const y = window.scrollY;
  heroBar.classList.remove('scrolled-up', 'scrolled-down');
  if (y > 24) {
    if (y > lastY) heroBar.classList.add('scrolled-down');
    else heroBar.classList.add('scrolled-up');
  }
  lastY = y;
}

window.addEventListener('scroll', handleScroll, { passive: true });
