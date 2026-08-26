/* Southern Stone & Tile Care — demo shared runtime
   Password gate (client-side review friction), concept selection,
   before/after sliders, scroll reveals, review bar. */
(function () {
  'use strict';

  var PASS = 'BriansDemo1';
  var AUTH_KEY = 'sst-auth';
  var CHOICE_KEY = 'sst-choice';
  var VIEW_KEY = 'sst-viewing';

  var page = document.body.getAttribute('data-page') || '';
  var concept = document.body.getAttribute('data-concept') || '';

  /* ---------- password gate ---------- */
  function authed() {
    try { return sessionStorage.getItem(AUTH_KEY) === '1'; } catch (e) { return true; }
  }
  window.sstUnlock = function (value) {
    if (value === PASS) {
      try { sessionStorage.setItem(AUTH_KEY, '1'); } catch (e) {}
      return true;
    }
    return false;
  };
  if (!authed() && page !== 'gate') {
    var here = location.pathname.split('/').pop() || 'index.html';
    location.replace('index.html?to=' + encodeURIComponent(here + location.search));
    return;
  }

  /* ---------- concept memory ---------- */
  var CONCEPTS = ['a', 'b', 'c'];
  function valid(c) { return CONCEPTS.indexOf(c) !== -1 ? c : null; }
  function getChoice() { try { return valid(localStorage.getItem(CHOICE_KEY)); } catch (e) { return null; } }
  function setChoice(c) { if (!valid(c)) return; try { localStorage.setItem(CHOICE_KEY, c); } catch (e) {} }
  function getViewing() { try { return valid(sessionStorage.getItem(VIEW_KEY)); } catch (e) { return null; } }
  function setViewing(c) { if (!valid(c)) return; try { sessionStorage.setItem(VIEW_KEY, c); } catch (e) {} }
  window.sstChoice = { get: getChoice, set: setChoice };

  if (concept) setViewing(concept);

  /* Subpages inherit the concept being viewed (or the chosen one). */
  if (document.body.hasAttribute('data-themed')) {
    var t = getViewing() || getChoice() || 'a';
    document.body.setAttribute('data-theme', t);
  }

  /* ---------- review bar ---------- */
  var NAMES = { a: 'The Trade Sign', b: 'The Polish', c: 'The Specimen Board' };
  function reviewBar() {
    if (page === 'gate') return;
    var active = concept || getViewing() || getChoice();
    if (!active) return;
    var chosen = getChoice();
    var bar = document.createElement('div');
    bar.className = 'sst-reviewbar';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Design review controls');
    var status = chosen === active
      ? '<strong>' + NAMES[active] + '</strong> · selected for the homepage'
      : 'Reviewing <strong>' + NAMES[active] + '</strong>';
    bar.innerHTML =
      '<span class="sst-reviewbar-label">' + status + '</span>' +
      '<span class="sst-reviewbar-actions">' +
      (concept && chosen !== active ? '<button type="button" class="sst-reviewbar-choose">Use this design</button>' : '') +
      '<a class="sst-reviewbar-all" href="index.html">All concepts</a>' +
      '</span>';
    document.body.appendChild(bar);
    var chooseBtn = bar.querySelector('.sst-reviewbar-choose');
    if (chooseBtn) {
      chooseBtn.addEventListener('click', function () {
        setChoice(active);
        bar.querySelector('.sst-reviewbar-label').innerHTML =
          '<strong>' + NAMES[active] + '</strong> · selected for the homepage';
        chooseBtn.remove();
        bar.classList.add('is-confirmed');
      });
    }
  }

  /* ---------- before / after sliders ---------- */
  function sliders() {
    document.querySelectorAll('.ba').forEach(function (el) {
      var range = el.querySelector('.ba-range');
      var afterPane = el.querySelector('.ba-after');
      var handle = el.querySelector('.ba-handle');
      if (!range || !afterPane) return;
      function set(v) {
        el.style.setProperty('--ba', v + '%');
      }
      range.addEventListener('input', function () { set(range.value); });
      set(range.value || 55);
      /* pointer drag anywhere on the figure */
      var dragging = false;
      function fromEvent(e) {
        var rect = el.getBoundingClientRect();
        var x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
        var v = Math.max(0, Math.min(100, (x / rect.width) * 100));
        range.value = v;
        set(v);
      }
      el.addEventListener('pointerdown', function (e) {
        if (e.target === range) return;
        dragging = true; fromEvent(e); el.setPointerCapture(e.pointerId);
      });
      el.addEventListener('pointermove', function (e) { if (dragging) fromEvent(e); });
      el.addEventListener('pointerup', function () { dragging = false; });
      el.addEventListener('pointercancel', function () { dragging = false; });
    });
  }

  /* ---------- scroll reveals ---------- */
  function reveals() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var els = document.querySelectorAll('[data-reveal]');
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    els.forEach(function (el) { io.observe(el); });
    /* Safety: nothing may stay hidden if the observer misses (fast scroll, print, odd engines). */
    setTimeout(function () {
      els.forEach(function (el) { el.classList.add('is-in'); });
    }, 3500);
  }

  /* ---------- mobile nav ---------- */
  function nav() {
    var btn = document.querySelector('.nav-toggle');
    var menu = document.querySelector('[data-nav]');
    if (!btn || !menu) return;
    function closeNav() {
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    }
    btn.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeNav();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        closeNav();
        btn.focus();
      }
    });
  }

  /* ---------- demo form ---------- */
  function forms() {
    document.querySelectorAll('form[data-demo-form]').forEach(function (f) {
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        var note = f.querySelector('.form-note');
        if (note) {
          note.hidden = false;
          note.textContent = 'This is a design preview, so the form is not wired up yet. On the live site this will send straight to Brian.';
          note.focus && note.focus();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    reviewBar(); sliders(); reveals(); nav(); forms();
  });
})();
