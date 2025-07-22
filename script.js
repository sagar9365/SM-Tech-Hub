// === Dark Mode Toggle ===
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// === Hamburger Menu Toggle ===
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

// === Search Filter (real-time article filter) ===
const searchInput = document.getElementById('searchInput');

if (searchInput) {
  searchInput.addEventListener('keyup', () => {
    const filter = searchInput.value.toLowerCase();
    const articles = document.querySelectorAll('.article-card');

    articles.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(filter) ? '' : 'none';
    });
  });
}
