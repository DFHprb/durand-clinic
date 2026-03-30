/* ============================================
   DURAND HEALTH — Shared JavaScript
   Nav, Footer, Mobile Menu, Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
  initMobileMenu();
  initScrollEffects();
  initFaqAccordion();
  setActiveNav();
  initLanguageSelector();
});

/* --- Navigation Injection --- */
function injectNav() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (!navPlaceholder) return;

  navPlaceholder.innerHTML = `
    <nav class="nav" id="main-nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <div class="logo-icon">D</div>
          <span class="logo-text">The Durand <span class="highlight">Clinic</span><sup>®</sup></span>
        </a>
        <div class="nav-links" id="nav-links">
          <a href="index.html" data-page="home">Extensive</a>
          <div class="nav-dropdown-wrap">
            <a href="paramedical.html" data-page="paramedical" class="nav-dropdown-trigger">Paramedical <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 4 6 8 10 4"/></svg></a>
            <div class="nav-dropdown-menu">
              <div class="nav-dropdown-menu-inner">
                <a href="chiropractic.html" data-page="chiropractic">Chiropractic</a>
                <a href="naturopathic.html" data-page="naturopathic">Naturopathic Medicine</a>
                <a href="neurofeedback.html" data-page="neurofeedback">Neurofeedback</a>
                <a href="physiotherapy.html" data-page="physiotherapy">Physiotherapy</a>
                <a href="traditional-chinese-medicine.html" data-page="traditional-chinese-medicine">Traditional Chinese Medicine</a>
                <a href="nutritional-support.html" data-page="nutritional-support">Nutritional Support &amp; Supplements</a>
                <a href="acupuncture.html" data-page="acupuncture">Acupuncture</a>
                <a href="registered-massage-therapy.html" data-page="registered-massage-therapy">Registered Massage Therapy</a>
                <a href="counselling-psychotherapy.html" data-page="counselling-psychotherapy">Counselling &amp; Psychotherapy</a>
                <a href="reflexology-lymphatic-drainage.html" data-page="reflexology-lymphatic-drainage">Reflexology &amp; Lymphatic Drainage</a>
              </div>
            </div>
          </div>
          <a href="team.html" data-page="team">Our Team</a>
          <a href="residential.html" data-page="residential">Nature Supported Change</a>
          <a href="partners.html" data-page="partners">Global Partner Enquiries</a>
          <a href="contact.html" data-page="contact" class="nav-cta">Book Assessment</a>
        </div>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `;
}

/* --- Footer Injection --- */
function injectFooter() {
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (!footerPlaceholder) return;

  const year = new Date().getFullYear();
  const page = document.body.dataset.page;
  const isResidential = page === 'residential';
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
            <a href="index.html" class="nav-logo" style="margin-bottom:4px;">
              <div class="logo-icon">D</div>
              <span class="logo-text">The Durand <span class="highlight">Clinic</span><sup>®</sup></span>
            </a>
            <p>${brandLine}</p>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <a href="index.html">Extensive Assessment</a>
            <a href="paramedical.html">Paramedical Services</a>
            <a href="team.html">Our Team</a>
            <a href="residential.html">Nature Supported Change</a>
            <a href="pricing.html">Pricing</a>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <a href="about.html">About Us</a>
            <a href="faq.html">FAQ</a>
            <a href="partners.html">Global Partner Enquiries</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="contact.html">Book Assessment</a>
            <a href="mailto:info@durandhealth.com">info@durandhealth.com</a>
            <a href="tel:+1234567890">Contact Us</a>
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
  if (page !== 'residential') return;

  // Determine current language from html lang attribute
  const lang = document.documentElement.lang || 'en';
  const languages = [
    { code: 'en', label: 'English', file: 'residential.html' },
    { code: 'fr', label: 'Français', file: 'residential-fr.html' },
    { code: 'de', label: 'Deutsch', file: 'residential-de.html' },
    { code: 'it', label: 'Italiano', file: 'residential-it.html' },
    { code: 'nl', label: 'Nederlands', file: 'residential-nl.html' },
    { code: 'zh', label: '中文', file: 'residential-zh.html' },
    { code: 'hi', label: 'हिन्दी', file: 'residential-hi.html' },
    { code: 'ar', label: 'العربية', file: 'residential-ar.html' }
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
