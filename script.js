// Shared GSAP interactions for all pages
window.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.navbar ul');
  const hero = document.querySelector('.hero');

  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Mobile navigation toggle
  navToggle?.addEventListener('click', () => {
    navList?.classList.toggle('open');
  });

  // Hero entrance
  if (hero) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.navbar', { y: -40, opacity: 0, duration: 0.6 })
      .from(hero.querySelectorAll('.eyebrow, h1, p, .hero-actions'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15
      }, '-=0.2');
  }

  // General panel reveal
  if (window.ScrollTrigger) {
    gsap.utils.toArray('.panel').forEach((panel) => {
      gsap.fromTo(panel, { autoAlpha: 0, y: 60 }, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: panel,
          start: 'top 80%',
          once: true
        }
      });
    });

    gsap.utils.toArray('.bird-card').forEach((card, i) => {
      gsap.fromTo(card, { autoAlpha: 0, y: 40 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: i * 0.05,
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          once: true
        }
      });
    });

    if (document.body.classList.contains('page-bird-detail')) {
      gsap.fromTo('.bird-detail', { autoAlpha: 0, y: 50 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out'
      });
    }
  } else {
    document.querySelectorAll('.panel, .bird-card, .bird-detail').forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
  }
});
