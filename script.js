
const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
