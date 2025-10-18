const hamburgerBtn = document.getElementById('hamburgerBtn');
const menu = document.getElementById('menu');
const productButtons = document.querySelectorAll('.product-button');
const menuLinks = document.querySelectorAll('.menu-link');

let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  hamburgerBtn.classList.toggle('active', menuOpen);
  menu.classList.toggle('active', menuOpen);
}

function selectCategory(event) {
  const category = event.target.getAttribute('data-category');
  console.log(`Selected: ${category}`);
  event.target.style.transform = 'scale(0.95)';
  setTimeout(() => (event.target.style.transform = 'scale(1)'), 100);
}

function handleClickOutside(event) {
  if (menuOpen && !menu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
    toggleMenu();
  }
}

hamburgerBtn.addEventListener('click', toggleMenu);
document.addEventListener('click', handleClickOutside);
productButtons.forEach((button) => button.addEventListener('click', selectCategory));
menuLinks.forEach((link) => link.addEventListener('click', () => menuOpen && toggleMenu()));
window.addEventListener('load', () => (document.body.style.opacity = '1'));
