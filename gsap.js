const tl = gsap.timeline({ defaults: { ease: 'power0', duration: 1 } });

// tl.from('.prevImg', { scale: 0, stagger: 0.2 });
// tl.from('.prevImg', { rotate: 1280, scale: 0, stagger: 0.2 });

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

// left to do
// nav btn for mobile
// gsap scroll trigger
// small ui interaction
