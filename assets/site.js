const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

if (toggle && nav) {
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('menu-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu();
  });
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const draft = `mailto:contact@rpgamesltd.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    document.querySelector('#contact-form-status').hidden = false;
    window.location.href = draft;
  });
}
