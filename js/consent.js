// Grand Fitness — Privacy Notice (kompakte Karte, Design-System-Look)
(function () {
  try {
    if (localStorage.getItem('gf-consent')) return;
  } catch (e) { return; }

  var css = document.createElement('style');
  css.textContent =
    '@keyframes gfCookieUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}' +
    '#gf-cookie{position:fixed;right:24px;bottom:24px;left:auto;width:380px;max-width:calc(100vw - 32px);' +
    'z-index:9999;background:rgba(16,16,16,0.97);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);' +
    'border:1px solid rgba(240,192,32,0.3);border-top:3px solid #f0c020;' +
    'padding:20px 22px 18px;box-shadow:0 16px 48px rgba(0,0,0,0.65);' +
    'font-family:"DM Sans",system-ui,sans-serif;animation:gfCookieUp 0.45s ease both;}' +
    '#gf-cookie h4{margin:0 0 8px;font-family:"Bebas Neue","DM Sans",sans-serif;font-weight:400;' +
    'font-size:1.25rem;letter-spacing:0.1em;color:#f0c020;}' +
    '#gf-cookie p{margin:0 0 16px;font-size:0.84rem;line-height:1.6;color:#b8b8b0;font-weight:300;}' +
    '#gf-cookie p a{color:#e8e8e2;text-decoration:underline;text-underline-offset:2px;}' +
    '#gf-cookie p a:hover{color:#f0c020;}' +
    '#gf-cookie .gf-cookie-row{display:flex;gap:10px;}' +
    '#gf-cookie button{flex:1;background:#f0c020;color:#0a0a0a;border:1px solid #f0c020;' +
    'font-family:"Bebas Neue","DM Sans",sans-serif;font-size:1.05rem;letter-spacing:0.1em;' +
    'padding:10px 16px;cursor:pointer;transition:background 0.2s,color 0.2s;}' +
    '#gf-cookie button:hover{background:transparent;color:#f0c020;}' +
    '#gf-cookie .gf-cookie-link{flex:1;display:inline-flex;align-items:center;justify-content:center;' +
    'border:1px solid rgba(232,232,226,0.25);color:#e8e8e2;text-decoration:none;' +
    'font-family:"Bebas Neue","DM Sans",sans-serif;font-size:1.05rem;letter-spacing:0.1em;' +
    'padding:10px 16px;transition:border-color 0.2s,color 0.2s;}' +
    '#gf-cookie .gf-cookie-link:hover{border-color:#f0c020;color:#f0c020;}' +
    '@media(max-width:600px){#gf-cookie{right:12px;left:12px;bottom:12px;width:auto;}}';
  document.head.appendChild(css);

  var box = document.createElement('div');
  box.id = 'gf-cookie';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', 'Privacy notice');
  box.innerHTML =
    '<h4>Your privacy, plainly.</h4>' +
    '<p>No tracking cookies on this site &mdash; only technically necessary storage and external services like Google Fonts.</p>' +
    '<div class="gf-cookie-row">' +
    '<button type="button" id="gf-cookie-ok">Got it</button>' +
    '<a class="gf-cookie-link" href="/privacy/">Details</a>' +
    '</div>';
  document.body.appendChild(box);

  document.getElementById('gf-cookie-ok').addEventListener('click', function () {
    try { localStorage.setItem('gf-consent', new Date().toISOString()); } catch (e) {}
    box.style.transition = 'opacity 0.25s, transform 0.25s';
    box.style.opacity = '0';
    box.style.transform = 'translateY(16px)';
    setTimeout(function () { box.remove(); }, 260);
  });
})();
