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
          <a href="paramedical.html" data-page="paramedical">Paramedical</a>
          <a href="specialty.html" data-page="specialty">Specialty Programs</a>
          <a href="residential.html" data-page="residential">Residential Programs</a>
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

  footerPlaceholder.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="nav-logo" style="margin-bottom:4px;">
              <div class="logo-icon">D</div>
              <span class="logo-text">The Durand <span class="highlight">Clinic</span><sup>®</sup></span>
            </a>
            <p>The most advanced executive health assessment combined with longevity testing and year-round health intelligence. Redefining what it means to know your health.</p>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <a href="index.html">Extensive Assessment</a>
            <a href="paramedical.html">Paramedical Services</a>
            <a href="specialty.html">Specialty Programs</a>
            <a href="residential.html">Residential Programs</a>
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
          <span>Executive Health &middot; Longevity &middot; Concierge</span>
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
