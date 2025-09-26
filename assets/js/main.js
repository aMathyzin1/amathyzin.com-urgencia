const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav]');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a') && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const animatedElements = document.querySelectorAll('[data-animate]');

if (animatedElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach((element) => observer.observe(element));
}

const currentYearElement = document.querySelector('[data-current-year]');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}
