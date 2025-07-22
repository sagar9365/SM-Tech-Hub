
// Toggle dark mode
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('dark', localStorage.getItem('theme') === 'dark');

  document.querySelector('#menu-btn')?.addEventListener('click', () => {
    document.querySelector('#mobile-menu')?.classList.toggle('hidden');
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
