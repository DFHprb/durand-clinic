/* ============================================
   DURAND HEALTH — Shared JavaScript
   Nav, Footer, Mobile Menu, Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
  injectScrollBanner();
  initMobileMenu();
  initScrollEffects();
  initFaqAccordion();
  setActiveNav();
  initLanguageSelector();
  initHeroCarousel();
  alignHeroContentToImage();
});

/* --- Navigation Injection --- */
function injectNav() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (!navPlaceholder) return;

  navPlaceholder.innerHTML = `
    <nav class="nav" id="main-nav">
      <div class="nav-inner">
        <a href="/" class="nav-logo">
          <div class="logo-icon"><img src="images/durand-icon.png" alt="" style="width:32px;height:32px;object-fit:contain;display:block;transform:translateY(-1px) translateX(1px);"></div>
          <span class="logo-text">The Durand <span class="highlight">Clinic</span><sup>®</sup></span>
        </a>
        <div class="nav-links" id="nav-links">
          <a href="executive-health" data-page="executive-health">Extensive + Longevity</a>
          <div class="nav-dropdown-wrap">
            <span class="nav-dropdown-trigger">Treatment Services <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 4 6 8 10 4"/></svg></span>
            <div class="nav-dropdown-menu">
              <div class="nav-dropdown-menu-inner">
                <a href="registered-massage-therapy" data-page="registered-massage-therapy">Registered Massage Therapy</a>
                <a href="traditional-chinese-medicine" data-page="traditional-chinese-medicine">Traditional Chinese Medicine</a>
                <a href="acupuncture" data-page="acupuncture">Acupuncture</a>
                <a href="naturopathic" data-page="naturopathic">Naturopathic Medicine</a>
                <a href="chiropractic" data-page="chiropractic">Chiropractic</a>
                <a href="counselling-psychotherapy" data-page="counselling-psychotherapy">Counselling &amp; Psychotherapy</a>
                <a href="physiotherapy" data-page="physiotherapy">Physiotherapy</a>
                <a href="nutritional-support" data-page="nutritional-support">Nutritional Support &amp; Supplements</a>
                <a href="neurofeedback" data-page="neurofeedback">Neurofeedback + Vielight</a>
                <a href="reflexology-lymphatic-drainage" data-page="reflexology-lymphatic-drainage">Reflexology &amp; Lymphatic Drainage</a>
              </div>
            </div>
          </div>
          <a href="specialty" data-page="specialty">Specialty Programs</a>
          <a href="medical-aesthetics" data-page="medical-aesthetics">Medical Aesthetics</a>
          <a href="renewal" data-page="renewal">Nature Supported Change</a>
          <a href="partners" data-page="partners">Global Partner Enquiries</a>
        </div>
        <a href="contact" class="btn btn-primary" style="font-size:0.85rem;padding:8px 20px;margin-left:8px;white-space:nowrap;">Contact Us</a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `;
}

/* --- Scroll Banner (paramedical pages only) --- */
function injectScrollBanner() {
  const paramedicalPages = ['acupuncture','chiropractic','counselling-psychotherapy','medical-aesthetics','naturopathic','neurofeedback','nutritional-support','physiotherapy','reflexology-lymphatic-drainage','registered-massage-therapy','traditional-chinese-medicine'];
  const page = document.body.dataset.page;
  if (!paramedicalPages.includes(page)) return;

  const items = [
    'Free On-Site Parking',
    'South Downtown &mdash; Hamilton',
    ...(page !== 'medical-aesthetics' ? ['Direct Billing Available'] : []),
    'Physician-Referred &amp; Self-Referred Welcome',
    'Collaborative Care',
  ];

  const sep = '<span class="ticker-sep">◆</span>';
  const content = items.map(i => `<span>${i}</span>${sep}`).join('');

  const banner = document.createElement('div');
  banner.className = 'scroll-banner';
  banner.innerHTML = `<div class="scroll-banner-track">${content}${content}</div>`;

  const pageHero = document.querySelector('.page-hero');
  if (pageHero) {
    pageHero.insertAdjacentElement('afterend', banner);
  }
}

/* --- Footer Injection --- */
function injectFooter() {
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (!footerPlaceholder) return;

  const year = new Date().getFullYear();
  const page = document.body.dataset.page;
  const isResidential = page === 'renewal';
  const brandLine = isResidential
    ? 'Nature-grounded behavioural health, longevity testing, and ongoing health intelligence. Redefining residential recovery.'
    : 'The most advanced executive health assessment combined with longevity testing and year-round health intelligence. Redefining what it means to know your health.';
  const tagline = isResidential
    ? 'Behavioural Health &middot; Longevity &middot; Nature'
    : 'Executive Health &middot; Longevity &middot; Concierge';

  footerPlaceholder.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" class="nav-logo" style="margin-bottom:4px;">
              <div class="logo-icon"><img src="images/durand-icon.png" alt="" style="width:32px;height:32px;object-fit:contain;display:block;transform:translateY(-1px) translateX(1px);"></div>
              <span class="logo-text">The Durand <span class="highlight">Clinic</span><sup>®</sup></span>
            </a>
            <p>${brandLine}</p>
            <p style="margin-top:12px;font-size:0.85rem;line-height:1.8;">
              <a href="tel:+19055271342">Phone: 905-527-1342</a><br>
              <span>Fax: 365-317-8043</span>
            </p>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <a href="executive-health">Extensive Assessment</a>
            <a href="treatment-services">Treatment Services</a>
            <a href="specialty">Specialty Programs</a>
            <a href="renewal">Nature Supported Change</a>
            <a href="pricing">Pricing</a>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <a href="about">About Us</a>
            <a href="insights">Insights</a>
            <a href="faq">FAQ</a>
            <a href="partners">Global Partner Enquiries</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="contact">Book Assessment</a>
            <a href="mailto:info@durandhealth.com">info@durandhealth.com</a>
            <a href="contact">Contact Us</a>
            <a href="team">Meet the Team</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${year} The Durand Clinic. All rights reserved.</span>
          <span>${tagline}</span>
        </div>
      </div>
    </footer>
  `;
}

/* --- Mobile Menu --- */
function initMobileMenu() {
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('#nav-toggle');
    if (toggle) {
      toggle.classList.toggle('active');
      document.getElementById('nav-links').classList.toggle('open');
      return;
    }

    // Toggle paramedical dropdown on mobile
    const dropdownTrigger = e.target.closest('.nav-dropdown-trigger');
    if (dropdownTrigger && window.innerWidth <= 768) {
      dropdownTrigger.closest('.nav-dropdown-wrap').classList.toggle('open');
      return;
    }

    // Close menu when clicking a nav link
    const navLink = e.target.closest('.nav-links a');
    if (navLink) {
      document.getElementById('nav-toggle')?.classList.remove('active');
      document.getElementById('nav-links')?.classList.remove('open');
    }
  });
}

/* --- Scroll Effects --- */
function initScrollEffects() {
  const nav = document.getElementById('main-nav');

  // Nav shadow on scroll
  window.addEventListener('scroll', () => {
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }
  }, { passive: true });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
  });
}

/* --- FAQ Accordion --- */
function initFaqAccordion() {
  document.addEventListener('click', (e) => {
    const question = e.target.closest('.faq-question');
    if (!question) return;

    const item = question.closest('.faq-item');
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item.active').forEach(el => {
      el.classList.remove('active');
    });

    // Open clicked (if it wasn't already open)
    if (!isActive) {
      item.classList.add('active');
    }
  });
}

/* --- Set Active Nav Link --- */
function setActiveNav() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;

  // Wait for nav to be injected
  setTimeout(() => {
    document.querySelectorAll('.nav-links a').forEach(link => {
      if (link.dataset.page === currentPage) {
        link.classList.add('active');
      }
    });
  }, 10);
}

/* --- Language Selector --- */
function initLanguageSelector() {
  const page = document.body.dataset.page;
  if (page !== 'renewal') return;

  // Determine current language from html lang attribute
  const lang = document.documentElement.lang || 'en';
  const languages = [
    { code: 'en', label: 'English', file: 'renewal' },
    { code: 'fr', label: 'Français', file: 'renewal-fr' },
    { code: 'de', label: 'Deutsch', file: 'renewal-de' },
    { code: 'it', label: 'Italiano', file: 'renewal-it' },
    { code: 'nl', label: 'Nederlands', file: 'renewal-nl' },
    { code: 'zh', label: '中文', file: 'renewal-zh' },
    { code: 'hi', label: 'हिन्दी', file: 'renewal-hi' },
    { code: 'ar', label: 'العربية', file: 'renewal-ar' }
  ];
  const current = languages.find(l => l.code === lang) || languages[0];

  // Wait for nav to be injected
  setTimeout(() => {
    const navInner = document.querySelector('.nav-inner');
    if (!navInner) return;

    const selector = document.createElement('div');
    selector.className = 'lang-selector';
    selector.innerHTML = `
      <button class="lang-btn" aria-label="Select language">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        <span>${current.label}</span>
      </button>
      <div class="lang-dropdown">
        ${languages.filter(l => l.code !== lang).map(l =>
          `<a href="${l.file}">${l.label}</a>`
        ).join('')}
      </div>
    `;

    // Insert before the toggle button (mobile) or at the end
    const toggle = navInner.querySelector('.nav-toggle');
    if (toggle) {
      navInner.insertBefore(selector, toggle);
    } else {
      navInner.appendChild(selector);
    }

    // Toggle dropdown on click
    selector.querySelector('.lang-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      selector.classList.toggle('open');
    });

    // Close on outside click
    document.addEventListener('click', () => {
      selector.classList.remove('open');
    });
  }, 20);
}

/* --- Hero Carousel --- */
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startTimer() {
    timer = setInterval(next, 8000);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  document.querySelector('.carousel-next')?.addEventListener('click', () => { next(); resetTimer(); });
  document.querySelector('.carousel-prev')?.addEventListener('click', () => { prev(); resetTimer(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetTimer(); });
  });

  const carousel = document.querySelector('.hero-carousel');
  carousel?.addEventListener('mouseenter', () => clearInterval(timer));
  carousel?.addEventListener('mouseleave', startTimer);

  startTimer();
}

/* --- Align hero text top with hero image top (executive-health hero) --- */
function alignHeroContentToImage() {
  const layout = document.querySelector('.hero-layout');
  const content = document.querySelector('.hero-content');
  const img = document.querySelector('.hero-image img');
  if (!layout || !content || !img) return;

  function apply() {
    content.style.marginTop = '';
    const isSideBySide = getComputedStyle(layout).gridTemplateColumns.trim().split(' ').length > 1;
    if (!isSideBySide) return;
    const gap = img.getBoundingClientRect().top - layout.getBoundingClientRect().top;
    if (gap > 0) content.style.marginTop = `${gap * 2}px`;
  }

  img.complete ? apply() : img.addEventListener('load', apply);
  document.fonts?.ready?.then(apply);
  window.addEventListener('resize', apply);
}

/* --- Smooth counter animation --- */
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);

  function update() {
    start += step;
    if (start >= target) {
      el.textContent = target.toLocaleString();
      return;
    }
    el.textContent = Math.floor(start).toLocaleString();
    requestAnimationFrame(update);
  }

  update();
}
