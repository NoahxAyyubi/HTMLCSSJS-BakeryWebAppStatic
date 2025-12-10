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

const modal = document.getElementById('orderModal');
if (modal) {
    const closeModalBtn = document.getElementById('closeModalBtn');
    const orderForm = document.getElementById('orderForm');

    productButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Optional: prevent form submission for demonstration purposes
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order submitted!');
        modal.style.display = 'none';
        orderForm.reset();
    });
}