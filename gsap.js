const tl = gsap.timeline({ defaults: { ease: 'power0', duration: 1 } });

function headerAnimation() {
  tl.from('.navbar', { opacity: 0, skewY: '90px', duration: 0.5 })
    .from(
      '.preview ',
      {
        rotate: 420,
        scale: 0,
        x: '100%',
        stagger: 0.2,
      },
      '<'
    )
    .from('.prevImg', { rotate: 280, scale: 0, stagger: 0.2 })
    .from('.main-text', { opacity: 0, y: '-100%' })
    .from('.grand-container', { opacity: 0, x: '100%', scale: 0 }, '< 0.5');
}

function mobileHeaderAnimation() {
  tl.from('.navbar', { opacity: 0, skewY: '90px', duration: 0.5 })
    .from('.main-text', { opacity: 0, y: '-100%' })
    .from('.grand-container', { opacity: 0, x: '100%', scale: 0 }, '< 0.5');
}

window.innerHeight > 650 ? headerAnimation() : mobileHeaderAnimation();

let navbar = document.querySelector('.navbar');
let navlink = document.querySelectorAll('.navbar a');
let hamburger = document.querySelector('.hamburger');
let header = document.querySelector('.header');
let logo = document.querySelector('.logo');

hamburger.addEventListener('click', () => {
  toggleNav();
  hamburger.classList.toggle('show');

  if (header.classList.contains('navigation')) {
    gsap.to('.header', { height: '100vh', ease: 'back' });
    gsap.from('.navbar', { duration: 2, opacity: 0, stagger: 0.2 });
  } else {
    gsap.to('.header', { height: '10vh' });
    gsap.to('.navbar', { duration: 0.2, opacity: 1 });
  }
});

let headerMid = prev.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
  scrollY > headerMid
    ? header.classList.add('fixed')
    : header.classList.remove('fixed');
});

navlink.forEach((nav) => {
  nav.addEventListener('click', () => {
    header.classList.remove('fixed');
    hamburger.classList.remove('show');
    gsap.to('.header', { height: '10vh' });
    gsap.to('.navbar', { duration: 0.2, opacity: 1 });

    if (window.innerWidth <= 768) {
      toggleNav();
    }
  });
});

function toggleNav() {
  header.classList.toggle('navigation');
  navbar.classList.toggle('navigation');
  logo.classList.toggle('navigation');
}

gsap.from('.associates div', {
  duration: 1,
  scale: 0.1,
  rotate: 40,
  y: 40,
  ease: 'power0',
  stagger: {
    from: 'end',
    ease: 'bounce',
    amount: 0.8,
  },
  scrollTrigger: {
    trigger: '.associates',
    start: 'top 75%',
    end: 'bottom 25%',
    toggleActions: 'play',
  },
});

gsap.to('.company-desc div', {
  opacity: 1,
  duration: 1,
  y: 0,
  ease: 'power0',
  scrollTrigger: {
    trigger: '.company-desc',
    start: 'top 55%',
    toggleActions: 'restart none  reverse',
  },
});
