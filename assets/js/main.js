/* ============================================================
   techpercept.com — page script
   Reads window.TP_CONFIG (assets/js/config.js). Nothing to edit
   here for launch; this file is the road engine and the wiring.
   ============================================================ */
(function(){
  var C = window.TP_CONFIG || {};
  var ZOHO_WEBTOLEAD_URL = C.ZOHO_WEBTOLEAD_URL || "";
  var CALENDLY_URL = C.CALENDLY_URL || "";
  var WHATSAPP = C.WHATSAPP || "";
  var EMAIL = C.EMAIL || "";

  function q(id){ return document.getElementById(id); }

  /* ===== Wiring ===== */
  if (q('yr')) q('yr').textContent = new Date().getFullYear();
  if (CALENDLY_URL && q('calLink')) { var c = q('calLink'); c.href = CALENDLY_URL; c.target = '_blank'; c.rel = 'noopener'; }
  if (WHATSAPP && q('waNum')) q('waNum').textContent = WHATSAPP;
  if (EMAIL && q('emailAddr')) q('emailAddr').textContent = EMAIL;
  var form = q('leadForm');
  if (form) {
    if (ZOHO_WEBTOLEAD_URL) form.action = ZOHO_WEBTOLEAD_URL;
    form.addEventListener('submit', function(e){
      if (!ZOHO_WEBTOLEAD_URL) { e.preventDefault(); q('formNote').textContent = 'Form not connected yet — set ZOHO_WEBTOLEAD_URL in assets/js/config.js.'; }
    });
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mobile = window.matchMedia('(max-width: 1100px)').matches;

  /* ===== Hero: where the enquiry arrives from ===== */
  (function(){
    var el = q('src'), list = C.SOURCES || [], every = C.SOURCE_EVERY || 3000;
    if (!el || list.length < 2) return;
    var i = Math.max(0, list.indexOf(el.textContent.trim()));
    function next(){
      i = (i + 1) % list.length;
      if (reduce) { el.textContent = list[i]; return; }
      el.classList.add('out');
      setTimeout(function(){ el.textContent = list[i]; el.classList.remove('out'); }, 350);
    }
    var timer = setInterval(next, every);
    /* Don't burn cycles (or confuse the fade) while the tab is hidden */
    document.addEventListener('visibilitychange', function(){
      if (document.hidden) { clearInterval(timer); timer = null; }
      else if (!timer) { timer = setInterval(next, every); }
    });
  })();

  /* ===== The road ===== */
  function on(id){ var e = q(id); if (e) e.classList.add('on'); }
  function off(id){ var e = q(id); if (e) e.classList.remove('on'); }
  function st(id, bg, bd, fg){ var e = q(id); if (!e) return; e.style.background = bg; e.style.borderColor = bd; if (fg) e.style.color = fg; }
  function stReset(id){ var e = q(id); if (!e) return; e.style.background=''; e.style.borderColor=''; e.style.color=''; }
  function tok(id, top, op){ var e = q(id); if (!e) return; e.style.top = top + 'px'; if (op !== undefined) e.style.opacity = op; }
  function road(id, h){ var e = q(id); if (e) e.style.height = h + 'px'; }
  var P='var(--paper-raised)', I='var(--ink)', L='var(--leak)', S='var(--signal)', SI='var(--signal-on-ink)';

  /* ---- Scroll-driven road ----
     The viewer is the clock. Each act maps the token's position to how far the
     act has been scrolled; keyframes fire (and un-fire) as the token passes them.
     Scroll fast and it plays fast; stop and it holds; scroll up and it rewinds. */
  var ACTS = [
    { wrap:'problem', road:'road1', tok:'tok1', end:1040, fadeAt:1040,
      keys:[
        {y:84,  on:function(){ st('s1',P,L,L); on('c1'); on('l1'); }, offf:function(){ stReset('s1'); off('c1'); off('l1'); }},
        {y:344, on:function(){ st('s2',P,L,L); on('c2'); on('l2'); }, offf:function(){ stReset('s2'); off('c2'); off('l2'); }},
        {y:604, on:function(){ st('s3',P,L,L); on('c3'); on('l3'); }, offf:function(){ stReset('s3'); off('c3'); off('l3'); }},
        {y:864, on:function(){ st('s4',L,L,'var(--paper)'); on('c4'); on('l4'); }, offf:function(){ stReset('s4'); off('c4'); off('l4'); }},
        {y:860, on:function(){ on('sum1'); }, offf:function(){ off('sum1'); }}
      ]},
    { wrap:'bought', road:'road1b', tok:'tok1b', end:960, fadeAt:960,
      keys:[
        {y:84,  on:function(){ st('b1',P,S,'var(--signal-text)'); on('bc1'); on('bl1'); }, offf:function(){ stReset('b1'); off('bc1'); off('bl1'); }},
        {y:324, on:function(){ st('b2',P,L,L); on('bc2'); on('bl2'); }, offf:function(){ stReset('b2'); off('bc2'); off('bl2'); }},
        {y:564, on:function(){ st('b3',P,L,L); on('bc3'); on('bl3'); }, offf:function(){ stReset('b3'); off('bc3'); off('bl3'); }},
        {y:804, on:function(){ st('b4',L,L,'var(--paper)'); on('bc4'); on('bl4'); }, offf:function(){ stReset('b4'); off('bc4'); off('bl4'); }},
        {y:800, on:function(){ on('sum1b'); }, offf:function(){ off('sum1b'); }}
      ]},
    { wrap:'process', road:'road2', tok:'tok2', end:1140, fadeAt:1140,
      keys:[
        {y:0,   on:function(){ on('ly1'); on('ly1t'); }, offf:function(){ off('ly1'); off('ly1t'); }},
        {y:104, on:function(){ st('p1',S,S,I); on('d1'); }, offf:function(){ stReset('p1'); off('d1'); }},
        {y:294, on:function(){ st('p2',S,S,I); on('d2'); }, offf:function(){ stReset('p2'); off('d2'); }},
        {y:420, on:function(){ on('ly2'); on('ly2t'); }, offf:function(){ off('ly2'); off('ly2t'); }},
        {y:524, on:function(){ st('p3',SI,SI,I); on('d3'); }, offf:function(){ var e=q('p3'); if(e){e.style.background='var(--ink)';e.style.borderColor=SI;e.style.color='var(--paper)';} off('d3'); }},
        {y:724, on:function(){ st('p4',SI,SI,I); on('d4'); }, offf:function(){ var e=q('p4'); if(e){e.style.background='var(--ink)';e.style.borderColor=SI;e.style.color='var(--paper)';} off('d4'); }},
        {y:890, on:function(){ on('ly3'); on('ly3t'); }, offf:function(){ off('ly3'); off('ly3t'); }},
        {y:940, on:function(){ st('p5',S,S,I); on('d5'); on('d5b'); }, offf:function(){ stReset('p5'); off('d5'); off('d5b'); }},
        {y:1000,on:function(){ on('sum2'); }, offf:function(){ off('sum2'); }}
      ]},
    { wrap:'solution', road:'road3', tok:'tok3', end:640, fadeAt:640,
      keys:[
        {y:106, on:function(){ on('e1'); on('e1b'); }, offf:function(){ off('e1'); off('e1b'); }},
        {y:326, on:function(){ var m=q('m2'); if(m) m.style.borderColor=L; on('e2'); on('e2b'); }, offf:function(){ var m=q('m2'); if(m) m.style.borderColor=''; off('e2'); off('e2b'); }},
        {y:546, on:function(){ on('e3'); }, offf:function(){ off('e3'); }},
        {y:520, on:function(){ on('sum3'); }, offf:function(){ off('sum3'); }}
      ]}
  ];

  /* The token sits a fixed distance below the top of the viewport; the act's progress is
     how far that line has travelled into the act's road-wrap. 38% keeps it in the eye line. */
  var EYE = 0.38;
  function tick(){
    var vh = window.innerHeight, eye = window.scrollY + vh*EYE;
    ACTS.forEach(function(a){
      var wrap = q(a.wrap) && q(a.wrap).querySelector('.road-wrap'); if (!wrap) return;
      var top = wrap.getBoundingClientRect().top + window.scrollY;
      var y = Math.max(0, Math.min(a.end, eye - top));
      road(a.road, y);
      var t = q(a.tok); if (t) { t.style.top = Math.min(y, a.end - 10) + 'px'; t.style.opacity = (y > 0 && y < a.fadeAt) ? 1 : 0; }
      a.keys.forEach(function(k){
        var hit = y >= k.y;
        if (hit && !k.state) { k.state = true; k.on(); }
        else if (!hit && k.state) { k.state = false; k.offf(); }
      });
    });
  }
  var raf = null;
  function onScroll(){ if (raf) return; raf = requestAnimationFrame(function(){ raf = null; tick(); }); }

  if (mobile || reduce) {
    /* Narrow screens have no road; reduced-motion gets the end state. Show everything. */
    document.querySelectorAll('.cap,.lyr,.hl').forEach(function(e){ e.classList.add('on'); });
    if (reduce && !mobile) { ACTS.forEach(function(a){ road(a.road, a.end); a.keys.forEach(function(k){ k.on(); }); }); }
    road('road0', 480); tok('tok0', 480);
  } else {
    /* The road's own transitions are scroll-driven: make them snappy so the token
       follows the hand, not lags it. Station/caption transitions keep their ease. */
    ACTS.forEach(function(a){ var r=q(a.road), t=q(a.tok); if(r) r.style.transition='height .15s linear'; if(t) t.style.transition='top .15s linear, opacity .4s'; });
    setTimeout(function(){ road('road0', 480); tok('tok0', 480); }, 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    tick();
    /* Standalone trigger words (outside a caption): draw when a fifth of them is visible */
    document.querySelectorAll('.hl').forEach(function(el){
      if (el.closest('.cap')) return;
      if (!('IntersectionObserver' in window)) { el.classList.add('on'); return; }
      var o = new IntersectionObserver(function(es){ es.forEach(function(en){ if (en.isIntersecting) { el.classList.add('on'); o.disconnect(); } }); }, { threshold: 0.2 });
      o.observe(el);
    });
  }
})();
