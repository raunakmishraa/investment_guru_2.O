$(function () {
  const $header = $('#header');
  const $menu = $('.menu-toggle');
  const $nav = $('.main-nav');

  setTimeout(() => $('#preloader').fadeOut(450), 650);
  $(window).on('scroll', function () { $header.toggleClass('scrolled', window.scrollY > 30); });
  $menu.on('click', function (e) { e.stopPropagation(); const open = $nav.hasClass('open'); $nav.toggleClass('open', !open); $(this).attr('aria-expanded', !open).toggleClass('active', !open); });
  $('.main-nav a').on('click', function () { $nav.removeClass('open'); $menu.attr('aria-expanded', 'false').removeClass('active'); });
  $(document).on('click', function (e) { if (!$(e.target).closest('.nav-wrap').length && $nav.hasClass('open')) { $nav.removeClass('open'); $menu.attr('aria-expanded', 'false').removeClass('active'); } });
  $(document).on('keydown', function (e) { if (e.key === 'Escape' && $nav.hasClass('open')) { $nav.removeClass('open'); $menu.attr('aria-expanded', 'false').removeClass('active'); } });
  $(window).on('resize', function () { if (window.innerWidth > 980 && $nav.hasClass('open')) { $nav.removeClass('open'); $menu.attr('aria-expanded', 'false').removeClass('active'); } });

  $('a[href^="#"]').on('click', function (e) {
    const target = $(this).attr('href');
    if (target && target !== '#' && $(target).length) {
      e.preventDefault();
      $('html,body').animate({ scrollTop: $(target).offset().top - $header.outerHeight() - 10 }, 700);
    }
  });

  if (window.Lenis) {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }
  if (window.AOS) AOS.init({ duration: 800, once: true, offset: 70, easing: 'ease-out-cubic' });

  function runCounters() {
    $('[data-count]').each(function () {
      const $el = $(this), end = Number($el.data('count'));
      if ($el.data('done')) return;
      if (window.scrollY + window.innerHeight > $el.offset().top + 30) {
        $el.data('done', true);
        $({ n: 0 }).animate({ n: end }, { duration: 1300, step: function (now) { $el.text(Math.floor(now).toLocaleString()); }, complete: function () { $el.text(end.toLocaleString()); } });
      }
    });
  }
  $(window).on('scroll load', runCounters);

  /* =========================================================
     HOMEPAGE YOUTUBE / PODCAST SECTION
     ========================================================= */
  if ($('#home').length && !$('#youtube-media').length) {
    const section = `
      <section class="youtube-media-section" id="youtube-media">
        <div class="container">
          <div class="youtube-section-head" data-aos="fade-up">
            <div>
              <div class="eyebrow dark">WATCH • LEARN • DISCOVER</div>
              <h2>Ideas that help you<br><em>invest smarter.</em></h2>
            </div>
            <p>Watch Investment Guru's market analysis and educational videos, or switch to The Amit Show for long-form conversations and podcasts.</p>
          </div>
          <div class="youtube-tabs" role="tablist" aria-label="YouTube channels">
            <button class="youtube-tab active" type="button" role="tab" aria-selected="true" data-youtube-tab="investment"><span class="youtube-tab-icon">▶</span><span><b>Investment Guru</b><small>Market Analysis &amp; Education</small></span></button>
            <button class="youtube-tab" type="button" role="tab" aria-selected="false" data-youtube-tab="podcast"><span class="youtube-tab-icon">◉</span><span><b>The Amit Show</b><small>Conversations &amp; Podcasts</small></span></button>
          </div>

          <div class="youtube-panel active" data-youtube-panel="investment" role="tabpanel">
            <div class="youtube-panel-top"><div><span class="youtube-channel-label">Investment Guru • YouTube</span><h3>Watch our latest market content.</h3></div><a class="youtube-channel-link" href="https://www.youtube.com/@InvestmentGuru_np" target="_blank" rel="noopener">Visit Channel ↗</a></div>
            <div class="youtube-video-grid">
              <div class="youtube-video-card youtube-embed-card"><div class="youtube-embed"><iframe src="https://www.youtube-nocookie.com/embed/vZuukseyYnM?rel=0" title="Investment Guru YouTube video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="youtube-video-meta"><span>INVESTMENT GURU</span><h4>Latest Market Analysis</h4><p>Watch this Investment Guru video directly without leaving the website.</p></div></div>
              <div class="youtube-video-card youtube-embed-card"><div class="youtube-embed"><iframe src="https://www.youtube-nocookie.com/embed/KnbRdQ-_plE?rel=0" title="Nepse Alpha Full Tutorial by Investment Guru" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="youtube-video-meta"><span>NEPSE SCHOOL</span><h4>Nepse Alpha Full Tutorial</h4><p>Step-by-step educational content for understanding Nepal's stock market tools.</p></div></div>
              <div class="youtube-video-card youtube-embed-card"><div class="youtube-embed"><iframe src="https://www.youtube-nocookie.com/embed/pHiJKzsShPM?rel=0" title="How to start trading in Nepal Share Market" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="youtube-video-meta"><span>TRADING GUIDE</span><h4>How to Start Trading in Nepal</h4><p>A practical beginner-friendly guide to getting started with share-market trading.</p></div></div>
            </div>
          </div>

          <div class="youtube-panel" data-youtube-panel="podcast" role="tabpanel" hidden>
            <div class="youtube-panel-top"><div><span class="youtube-channel-label">The Amit Show • YouTube</span><h3>Conversations beyond the charts.</h3></div><a class="youtube-channel-link" href="https://www.youtube.com/@InvestmentGuru_np" target="_blank" rel="noopener">Watch The Amit Show ↗</a></div>
            <div class="youtube-video-grid">
              <div class="youtube-video-card youtube-embed-card"><div class="youtube-embed"><iframe src="https://www.youtube-nocookie.com/embed/95Qlxoh6dkE?rel=0" title="The Amit Show - Stock Market Secrets" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="youtube-video-meta"><span>THE AMIT SHOW</span><h4>Stock Market Secrets</h4><p>A long-form conversation from The Amit Show, powered by Investment Guru.</p></div></div>
              <div class="youtube-video-card youtube-embed-card"><div class="youtube-embed"><iframe src="https://www.youtube-nocookie.com/embed/95Qlxoh6dkE?rel=0" title="The Amit Show" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="youtube-video-meta"><span>THE AMIT SHOW</span><h4>Conversations &amp; Perspectives</h4><p>Explore investing, entrepreneurship, careers and personal growth through long-form conversations.</p></div></div>
              <div class="youtube-video-card youtube-embed-card"><div class="youtube-embed youtube-embed-cta"><div class="channel-mark">AS</div><a href="https://www.youtube.com/@InvestmentGuru_np" target="_blank" rel="noopener" class="play-button">▶</a></div><div class="youtube-video-meta"><span>PODCAST</span><h4>Explore The Amit Show</h4><p>Visit the official Investment Guru channel for more episodes and conversations.</p></div></div>
            </div>
          </div>
        </div>
      </section>`;
    const $contact = $('#contact');
    if ($contact.length) $contact.before(section); else $('main').append(section);
    $('[data-youtube-tab]').on('click', function () { const key = $(this).data('youtube-tab'); $('[data-youtube-tab]').removeClass('active').attr('aria-selected','false'); $(this).addClass('active').attr('aria-selected','true'); $('[data-youtube-panel]').removeClass('active').attr('hidden',true); $('[data-youtube-panel="'+key+'"]').addClass('active').removeAttr('hidden'); });
    if (window.AOS) AOS.refresh();
  }

  if (!document.getElementById('youtube-media-styles')) {
    const style = document.createElement('style');
    style.id = 'youtube-media-styles';
    style.textContent = `
      .youtube-media-section{padding:120px 0;background:#eef3ef;overflow:hidden}.youtube-section-head{display:grid;grid-template-columns:1fr .72fr;gap:70px;align-items:end;margin-bottom:48px}.youtube-section-head h2{font:800 clamp(42px,5vw,68px)/1.02 var(--font-head);letter-spacing:-.055em;margin:0;color:var(--ink)}.youtube-section-head h2 em{font-style:normal;color:var(--green-2)}.youtube-section-head p{color:var(--muted);font-size:16px;max-width:560px;margin:0}.youtube-tabs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));max-width:760px;margin-bottom:36px;border-bottom:1px solid #d6dfda;gap:8px}.youtube-tab{appearance:none;border:0;background:transparent;text-align:left;padding:17px 20px;display:flex;align-items:center;gap:14px;color:#6b7771;cursor:pointer;border-bottom:3px solid transparent;transition:.3s}.youtube-tab:hover{color:var(--ink);background:rgba(255,255,255,.55)}.youtube-tab.active{color:var(--green);border-bottom-color:var(--green);background:#fff}.youtube-tab-icon{width:42px;height:42px;border-radius:13px;background:#0c1713;color:#fff;display:grid;place-items:center;flex:0 0 auto;font-size:14px}.youtube-tab.active .youtube-tab-icon{background:var(--green-2)}.youtube-tab b,.youtube-tab small{display:block}.youtube-tab b{font:800 15px var(--font-head)}.youtube-tab small{font-size:11px;margin-top:2px;color:#87938e}.youtube-panel{display:none}.youtube-panel.active{display:block;animation:youtubePanelIn .45s ease both}@keyframes youtubePanelIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.youtube-panel-top{display:flex;align-items:end;justify-content:space-between;gap:30px;margin-bottom:26px}.youtube-channel-label{font-size:10px;letter-spacing:.15em;font-weight:800;color:var(--green);text-transform:uppercase}.youtube-panel-top h3{font:800 27px/1.15 var(--font-head);margin:7px 0 0;color:var(--ink)}.youtube-channel-link{padding:12px 17px;border-radius:999px;background:#0c1713;color:#fff;font-size:12px;font-weight:800;white-space:nowrap;transition:.3s}.youtube-channel-link:hover{background:var(--green);transform:translateY(-2px)}.youtube-video-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.youtube-video-card{display:block;background:#fff;border:1px solid #dde5e0;border-radius:22px;overflow:hidden;box-shadow:0 12px 35px rgba(8,33,23,.06);transition:transform .35s ease,box-shadow .35s ease,border-color .35s ease}.youtube-video-card:hover{transform:translateY(-7px);box-shadow:0 22px 55px rgba(8,33,23,.13);border-color:#c4d3ca}.youtube-embed{position:relative;width:100%;aspect-ratio:16/9;background:#07120e;overflow:hidden}.youtube-embed iframe{display:block;width:100%;height:100%;border:0}.youtube-embed-cta{display:grid;place-items:center;background:radial-gradient(circle at 50% 40%,#153e2d 0,#0b2017 55%,#07120e 100%)}.youtube-embed-cta .channel-mark{font:800 58px var(--font-head);letter-spacing:-.08em;color:#2ac584}.play-button{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:54px;height:54px;border-radius:50%;display:grid;place-items:center;background:#fff;color:#0c1713;font-size:17px;box-shadow:0 12px 30px rgba(0,0,0,.3)}.youtube-video-meta{padding:21px 22px 23px}.youtube-video-meta>span{font-size:9px;letter-spacing:.15em;font-weight:800;color:var(--green);text-transform:uppercase}.youtube-video-meta h4{font:800 20px/1.2 var(--font-head);margin:8px 0;color:var(--ink)}.youtube-video-meta p{font-size:13px;line-height:1.6;color:var(--muted);margin:0}@media(max-width:900px){.youtube-section-head{grid-template-columns:1fr;gap:20px}.youtube-video-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:620px){.youtube-media-section{padding:85px 0}.youtube-tabs{grid-template-columns:1fr;max-width:none}.youtube-panel-top{align-items:flex-start;flex-direction:column}.youtube-video-grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  if (!document.getElementById('youtube-dark-theme')) {
    const darkTheme = document.createElement('link');
    darkTheme.id = 'youtube-dark-theme';
    darkTheme.rel = 'stylesheet';
    darkTheme.href = 'css/youtube-dark.css';
    document.head.appendChild(darkTheme);
  }

  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero-grid', { opacity: 0, duration: 1.4, ease: 'power2.out' });
    gsap.to('.hero-glow', { y: -25, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.5 });
    gsap.utils.toArray('.course-card, .training-card, .service-card').forEach(card => {
      gsap.fromTo(card, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 88%', once: true } });
    });
  }

  $('#contactForm').on('submit', function (e) { e.preventDefault(); const data = Object.fromEntries(new FormData(this).entries()); const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0APhone: ${data.phone || ''}%0D%0A%0D%0A${data.message}`; window.location.href = `mailto:investmentguruofficial@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${body}`; $('#formStatus').text('Your email client has been opened. Please send the prepared message.'); });
});
