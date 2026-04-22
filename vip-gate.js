// VIP password gate. Client-side only, security-by-obscurity.
// Anyone with dev tools can bypass this. Fine for "keep prying eyes away from
// internal training" but not for anything sensitive.
(function(){
  var EXPECTED = 'Password'; // change here to update gate
  var KEY = 'vip_unlocked';

  if (sessionStorage.getItem(KEY) === 'yes') return; // already unlocked this session

  // Hide the page until unlocked
  var style = document.createElement('style');
  style.textContent = 'body{visibility:hidden}';
  document.head.appendChild(style);

  function ready(fn){
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function(){
    var overlay = document.createElement('div');
    overlay.id = 'vipGate';
    overlay.innerHTML = ''
      + '<div class="vip-gate-card">'
      + '  <div class="vip-gate-badge">VIP ACCESS</div>'
      + '  <h2>Private Training Area</h2>'
      + '  <p>Enter the password to unlock the cold-calling training modules.</p>'
      + '  <form id="vipGateForm" autocomplete="off">'
      + '    <input id="vipGateInput" type="password" placeholder="Password" autofocus>'
      + '    <button type="submit">UNLOCK</button>'
      + '    <div id="vipGateErr" class="vip-gate-err" hidden>Wrong password. Try again.</div>'
      + '  </form>'
      + '  <p class="vip-gate-foot"><a href="index.html">&larr; Back to Agent Lead Engine</a></p>'
      + '</div>';
    document.body.appendChild(overlay);

    document.getElementById('vipGateForm').addEventListener('submit', function(e){
      e.preventDefault();
      var v = document.getElementById('vipGateInput').value;
      if (v === EXPECTED) {
        sessionStorage.setItem(KEY, 'yes');
        overlay.remove();
        style.remove();
      } else {
        var err = document.getElementById('vipGateErr');
        err.hidden = false;
        document.getElementById('vipGateInput').select();
      }
    });

    // Reveal the gate (body is hidden, but the overlay is fixed-position so it shows)
    overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#4a00e0,#3b0a8a);visibility:visible;font-family:Inter,sans-serif';
  });
})();
