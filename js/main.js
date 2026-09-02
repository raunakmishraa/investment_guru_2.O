$(function () {
  const $header = $('#header');
  const $menu = $('.menu-toggle');
  const $nav = $('.main-nav');

  setTimeout(() => $('#preloader').fadeOut(450), 650);

  $(window).on('scroll', function () {
    $header.toggleClass('scrolled', window.scrollY > 30);
  });

  $menu.on('click', function (e) {
    e.stopPropagation();
    const open = $nav.hasClass('open');
    $nav.toggleClass('open', !open);
    $(this).attr('aria-expanded', !open);
    $(this).toggleClass('active', !open);
  });

  $('.main-nav a').on('click', function () {
    $nav.removeClass('open');
    $menu.attr('aria-expanded', 'false').removeClass('active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.nav-wrap').length && $nav.hasClass('open')) {
      $nav.removeClass('open');
      $menu.attr('aria-expanded', 'false').removeClass('active');
    }
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && $nav.hasClass('open')) {
      $nav.removeClass('open');
      $menu.attr('aria-expanded', 'false').removeClass('active');
    }
  });

  $(window).on('resize', function () {
    if (window.innerWidth > 980 && $nav.hasClass('open')) {
      $nav.removeClass('open');
      $menu.attr('aria-expanded', 'false').removeClass('active');
    }
  });

  $('a[href^="#"]').on('click', function (e) {
    const target = $(this).attr('href');
    if (target && target !== '#' && $(target).length) {
      e.preventDefault();
      const offset = $header.outerHeight() + 10;
      $('html,body').animate({ scrollTop: $(target).offset().top - offset }, 700);
    }
  });

  // Smooth scrolling with Lenis when available.
  if (window.Lenis) {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }

  if (window.AOS) {
    AOS.init({ duration: 800, once: true, offset: 70, easing: 'ease-out-cubic' });
  }

  // Animated counters
  function runCounters() {
    $('[data-count]').each(function () {
      const $el = $(this), end = Number($el.data('count'));
      if ($el.data('done')) return;
      const top = $el.offset().top, bottom = window.scrollY + window.innerHeight;
      if (bottom > top + 30) {
        $el.data('done', true);
        $({ n: 0 }).animate({ n: end }, {
          duration: 1300,
          step: function (now) { $el.text(Math.floor(now).toLocaleString()) },
          complete: function () { $el.text(end.toLocaleString()) }
        });
      }
    });
  }
  $(window).on('scroll load', runCounters);

  // Small GSAP interactions
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero-grid', { opacity: 0, duration: 1.4, ease: 'power2.out' });
    gsap.to('.hero-glow', {
      y: -25,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5
    });
    gsap.to('.float-card-a', { y: -10, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.float-card-b', { y: 10, duration: 2.7, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.utils.toArray('.course-card, .training-card, .service-card').forEach(card => {
      gsap.fromTo(
        card,
        {
          y: 28,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true
          }
        }
      );
    });
  }

  // Demo form: opens email client so it works on static hosting without a backend.
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this).entries());
    const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0APhone: ${data.phone || ''}%0D%0A%0D%0A${data.message}`;
    window.location.href = `mailto:investmentguruofficial@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${body}`;
    $('#formStatus').text('Your email client has been opened. Please send the prepared message.');
  });
});
