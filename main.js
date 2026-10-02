/* main.js — Annotori Labs */

// ---- Mobile nav toggle ----
const hamburger = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = !mobileMenu.hidden;
    mobileMenu.hidden = isOpen;
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  });

  // Close mobile menu when a nav link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.hidden = true;
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
    });
  });
}

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings slightly
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
} else {
  // Fallback: show everything
  revealEls.forEach(el => el.classList.add('visible'));
}

// ---- Proof number count-up ----
const countEls = document.querySelectorAll('[data-count-target]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const renderCount = (element, value) => {
  element.textContent = `${value}${element.dataset.countSuffix || ''}`;
};

const animateCount = (element) => {
  const target = Number(element.dataset.countTarget);
  const duration = 1200;
  let startTime;

  const update = (time) => {
    if (startTime === undefined) startTime = time;
    const progress = Math.min((time - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    renderCount(element, Math.round(target * easedProgress));

    if (progress < 1) requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
};

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  countEls.forEach(element => renderCount(element, Number(element.dataset.countTarget)));
} else {
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  countEls.forEach(element => {
    renderCount(element, 0);
    countObserver.observe(element);
  });
}

// ---- Contact form (Formspree AJAX) ----
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');
const submitBtn = document.getElementById('form-submit-btn');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Basic client validation
    const name  = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const type  = form.querySelector('#annotation-type').value;

    if (!name || !email || !type) {
      // Mark empty required fields
      [{ id: 'name', val: name }, { id: 'email', val: email }, { id: 'annotation-type', val: type }].forEach(({ id, val }) => {
        const el = form.querySelector(`#${id}`);
        if (!val) el.style.borderColor = '#FF4C29';
        else el.style.borderColor = '';
      });
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        form.reset();
        form.hidden = true;
        successMsg.hidden = false;
      } else {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send to Annotori Labs';
        alert('There was a problem sending your message. Please try again or email us directly.');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send to Annotori Labs';
      alert('There was a problem sending your message. Please check your connection and try again.');
    }
  });

  // Clear red border on input
  form.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => { el.style.borderColor = ''; });
  });
}
