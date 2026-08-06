// Grand Fitness — Cookie/Privacy Notice
// Ehrlicher Hinweis-Banner: keine Tracking-Cookies auf dieser Seite,
// nur technisch Notwendiges + externe Dienste (z. B. Google Fonts).
// Merkt sich die Bestätigung in localStorage ("gf-consent").
(function () {
  try {
    if (localStorage.getItem('gf-consent')) return;
  } catch (e) { return; }

  var css = document.createElement('style');
  css.textContent =
    '#gf-cookie{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;' +
    'background:#141414;border:1px solid rgba(240,192,32,0.5);color:#e8e8e2;' +
    'font-family:"DM Sans",system-ui,sans-serif;font-size:0.88rem;line-height:1.55;' +
    'padding:18px 20px;display:flex;flex-wrap:wrap;gap:14px;align-items:center;' +
    'justify-content:space-between;box-shadow:0 12px 40px rgba(0,0,0,0.6);' +
    'max-width:900px;margin:0 auto;}' +
    '#gf-cookie p{margin:0;flex:1 1 420px;}' +
    '#gf-cookie a{color:#f0c020;text-decoration:underline;}' +
    '#gf-cookie button{background:#f0c020;color:#0a0a0a;border:1px solid #f0c020;' +
    'font-family:"Bebas Neue","DM Sans",sans-serif;font-size:1.05rem;letter-spacing:0.08em;' +
    'padding:10px 26px;cursor:pointer;transition:background 0.2s,color 0.2s;}' +
    '#gf-cookie button:hover{background:transparent;color:#f0c020;}' +
    '@media(max-width:600px){#gf-cookie{flex-direction:column;align-items:stretch;text-align:left;}' +
    '#gf-cookie button{width:100%;}}';
  document.head.appendChild(css);

  var box = document.createElement('div');
  box.id = 'gf-cookie';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', 'Privacy notice');
  box.innerHTML =
    '<p><strong>Your privacy, plainly:</strong> this website sets no tracking cookies. ' +
    'We only use technically necessary storage and load external services such as Google Fonts. ' +
    'Details in our <a href="/privacy/">Privacy Policy</a>.</p>' +
    '<button type="button" id="gf-cookie-ok">Got it</button>';
  document.body.appendChild(box);

  document.getElementById('gf-cookie-ok').addEventListener('click', function () {
    try { localStorage.setItem('gf-consent', new Date().toISOString()); } catch (e) {}
    box.remove();
  });
})();
