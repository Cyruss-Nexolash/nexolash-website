/* Nexolash — shared site behaviour */
(function () {
  'use strict';

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll reveal
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 4, 3) * 70) + 'ms';
      io.observe(el);
    });
  }

  // Contact form -> opens the visitor's mail client with a pre-filled enquiry.
  // Swap this for a Formspree / Netlify Forms endpoint when you're ready.
  var form = document.querySelector('form[data-mailto]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var to = form.getAttribute('data-mailto');
      var get = function (n) {
        var f = form.elements[n];
        return f ? String(f.value).trim() : '';
      };
      var subject = '[' + (get('service') || 'Enquiry') + '] ' + (get('name') || 'Website enquiry');
      var body = [
        'Name: ' + get('name'),
        'Email: ' + get('email'),
        'Phone: ' + get('phone'),
        'Service: ' + get('service'),
        'Location: ' + get('location'),
        '',
        get('message')
      ].join('\n');
      window.location.href = 'mailto:' + to +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        var original = btn.textContent;
        btn.textContent = 'Opening your email app…';
        setTimeout(function () { btn.textContent = original; }, 3500);
      }
    });
  }

  // Current year in footers
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
