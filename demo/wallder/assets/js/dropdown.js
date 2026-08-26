/* Rich dropdown behavior: hover + click, Escape, outside click, focus-out. */
(function () {
  'use strict';
  document.querySelectorAll('.dd').forEach(function (dd) {
    var btn = dd.querySelector('.dd-btn');
    var hoverable = window.matchMedia('(hover: hover)').matches;
    var closeTimer = null;
    function setOpen(open) {
      dd.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!dd.classList.contains('open'));
    });
    if (hoverable) {
      dd.addEventListener('mouseenter', function () { clearTimeout(closeTimer); setOpen(true); });
      dd.addEventListener('mouseleave', function () { closeTimer = setTimeout(function () { setOpen(false); }, 180); });
    }
    dd.addEventListener('focusout', function () {
      setTimeout(function () { if (!dd.contains(document.activeElement)) setOpen(false); }, 10);
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.dd.open').forEach(function (dd) {
      if (!dd.contains(e.target)) {
        dd.classList.remove('open');
        dd.querySelector('.dd-btn').setAttribute('aria-expanded', 'false');
      }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.dd.open').forEach(function (dd) {
        dd.classList.remove('open');
        var b = dd.querySelector('.dd-btn');
        b.setAttribute('aria-expanded', 'false');
        b.focus();
      });
    }
  });
})();
