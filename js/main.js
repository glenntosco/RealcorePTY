/**
 * RealCore PTY - Main JavaScript
 * Language toggle, mobile menu, and interactions
 */

(function() {
  'use strict';

  // ===================================
  // DOM Elements
  // ===================================
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const langBtns = document.querySelectorAll('.lang-btn');
  const langElements = document.querySelectorAll('[data-lang]:not(.lang-btn)');

  // ===================================
  // Language Toggle
  // ===================================
  const LANG_KEY = 'realcore-language';

  function getStoredLanguage() {
    return localStorage.getItem(LANG_KEY) || 'es';
  }

  function setStoredLanguage(lang) {
    localStorage.setItem(LANG_KEY, lang);
  }

  function switchLanguage(lang) {
    // Update active button
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Show/hide content based on language
    langElements.forEach(el => {
      if (el.dataset.lang === lang) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });

    // Store preference
    setStoredLanguage(lang);

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  function initLanguage() {
    const savedLang = getStoredLanguage();
    switchLanguage(savedLang);

    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
      });
    });
  }

  // ===================================
  // Mobile Menu
  // ===================================
  function initMobileMenu() {
    if (!menuToggle || !nav) return;

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  }

  // ===================================
  // Smooth Scroll
  // ===================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ===================================
  // Sticky Header Effect
  // ===================================
  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ===================================
  // Back to Top Button
  // ===================================
  function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===================================
  // Page Transitions
  // ===================================
  function initPageTransitions() {
    // Add transition class to main content
    const main = document.querySelector('main') || document.body;
    main.classList.add('page-transition');
  }

  // ===================================
  // Counter Animation for Statistics
  // ===================================
  function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const animateCounter = (el) => {
      const target = parseInt(el.dataset.target) || 0;
      const suffix = el.dataset.suffix || '';
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          el.textContent = Math.floor(current) + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target + suffix;
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
  }

  // ===================================
  // Active Navigation Link
  // ===================================
  function initActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');

      // Check if current page matches link
      if (currentPath.endsWith(linkPath) ||
          (currentPath === '/' && linkPath === 'index.html') ||
          (currentPath.endsWith('/') && linkPath === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // ===================================
  // Intersection Observer for Animations
  // ===================================
  function initAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.product-card, .industry-card, .value-card, .benefit-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  // Add animate-in styles
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // ===================================
  // FAQ Accordion
  // ===================================
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });

        // Toggle current item
        item.classList.toggle('active');
      });
    });
  }

  // ===================================
  // Cookie Consent
  // ===================================
  const COOKIE_KEY = 'realcore-cookie-consent';

  function initCookieConsent() {
    const banner = document.querySelector('.cookie-banner');
    if (!banner) return;

    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_KEY);
    if (consent) return;

    // Show banner after a short delay
    setTimeout(() => {
      banner.classList.add('show');
    }, 1500);

    // Accept button
    const acceptBtn = banner.querySelector('.cookie-btn.accept');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem(COOKIE_KEY, 'accepted');
        banner.classList.remove('show');
        // Initialize analytics if accepted
        if (typeof gtag === 'function') {
          gtag('consent', 'update', {
            'analytics_storage': 'granted'
          });
        }
      });
    }

    // Decline button
    const declineBtn = banner.querySelector('.cookie-btn.decline');
    if (declineBtn) {
      declineBtn.addEventListener('click', () => {
        localStorage.setItem(COOKIE_KEY, 'declined');
        banner.classList.remove('show');
      });
    }
  }

  // ===================================
  // Initialize
  // ===================================
  function init() {
    initLanguage();
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initBackToTop();
    initPageTransitions();
    initCounterAnimation();
    initActiveNav();
    initAnimations();
    initFAQ();
    initCookieConsent();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
