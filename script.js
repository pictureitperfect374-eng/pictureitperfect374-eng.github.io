const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.getElementById('year').textContent = new Date().getFullYear();

// Build the business email in JavaScript so it is not written directly into mailto/form action markup.
const businessEmail = ['pictureitperfect374', 'gmail.com'].join('@');
document.querySelectorAll('[data-business-email]').forEach(link => {
  link.href = `mailto:${businessEmail}`;
  link.textContent = businessEmail;
});

const estimateForm = document.getElementById('estimate-form');
if (estimateForm) {
  estimateForm.action = `https://formsubmit.co/${businessEmail}`;
}
