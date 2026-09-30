// Parallax orbs on mouse move
document.addEventListener('mousemove', (e) => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  const orb1 = document.querySelector('.orb1');
  const orb2 = document.querySelector('.orb2');
  const orb3 = document.querySelector('.orb3');

  if (orb1) orb1.style.transform = `translate(${dx * 20}px, ${dy * 20}px)`;
  if (orb2) orb2.style.transform = `translate(${dx * -15}px, ${dy * -15}px)`;
  if (orb3) orb3.style.transform = `translate(${dx * 10}px, ${dy * -10}px)`;
});

// Cookie banner
const banner = document.getElementById('cookieBanner');
const acceptBtn = document.getElementById('cookieAccept');

if (!localStorage.getItem('cookies_accepted')) {
  setTimeout(() => banner.classList.add('visible'), 800);
}

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookies_accepted', '1');
  banner.classList.remove('visible');
  setTimeout(() => banner.remove(), 400);
});
