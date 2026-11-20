(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- Ikon & tautan ---------- */
  const SVG = (inner, fill) => `<svg width="19" height="19" viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="${fill ? 'none' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
  const ICON = {
    github: SVG('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'),
    instagram: SVG('<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>'),
    tiktok: SVG('<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.3V2h-3.64v13.67a2.9 2.9 0 0 1-2.9 2.75 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6.05.88.14V9.05a6.5 6.5 0 1 0 5.66 6.45V8.53a8.4 8.4 0 0 0 4.91 1.58V6.69h-1.14Z"/>', true),
    youtube: SVG('<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>'),
    linkedin: SVG('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>'),
    whatsapp: SVG('<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'),
    mail: SVG('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'),
  };
  const LINKS = {
    whatsapp: ['WhatsApp', 'https://wa.me/6282124587092?text=Halo%20Bintang,%20saya%20tertarik%20dengan%20portofolio%20Anda'],
    mail: ['Email', 'mailto:pamungkasbepe23@gmail.com'],
    linkedin: ['LinkedIn', 'https://www.linkedin.com/in/bintang-pamungkas-nusantara-78b368415/'],
    github: ['GitHub', 'https://github.com/semangatbintang9'],
    instagram: ['Instagram', 'https://www.instagram.com/bepe.enn'],
    youtube: ['YouTube', 'https://www.youtube.com/@nusantar45'],
    tiktok: ['TikTok', 'https://tiktok.com/@b1ntangz'],
  };
  const ext = (k) => (k === 'mail' ? '' : ' target="_blank" rel="noopener noreferrer"');
  $$('[data-socials]').forEach((el) => {
    el.innerHTML = ['github', 'instagram', 'tiktok', 'youtube', 'linkedin']
      .map((k) => `<a href="${LINKS[k][1]}"${ext(k)} aria-label="${LINKS[k][0]}" title="${LINKS[k][0]}">${ICON[k]}</a>`).join('');
  });
  const contactText = { whatsapp: '+62 821-2458-7092', mail: 'pamungkasbepe23@gmail.com', linkedin: 'LinkedIn', github: 'GitHub', instagram: '@bepe.enn', youtube: '@nusantar45', tiktok: '@b1ntangz' };
  $$('[data-contacts]').forEach((el) => {
    el.innerHTML = Object.keys(LINKS).map((k) => `<a href="${LINKS[k][1]}"${ext(k)}>${ICON[k]}<span>${contactText[k]}</span></a>`).join('');
  });
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Typewriter ---------- */
  const roles = ['Digital Creative Specialist', 'Web Developer', 'Informatics Student', 'Creative Content Maker'];
  const typed = $('#typed');
  let ri = 0, ci = 0, del = false;
  (function type() {
    const word = roles[ri];
    if (!del) { typed.textContent = word.slice(0, ++ci); if (ci === word.length) { del = true; return setTimeout(type, 1900); } }
    else { typed.textContent = word.slice(0, --ci); if (ci === 0) { del = false; ri = (ri + 1) % roles.length; } }
    setTimeout(type, del ? 38 : 85);
  })();

  /* ---------- SFX (WebAudio, default mati) ---------- */
  const sfx = {
    on: false, ctx: null,
    ensure() {
      if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return this.ctx;
    },
    tone(c, type, f0, f1, t, dur, vol) {
      const o = c.createOscillator(), g = c.createGain();
      o.type = type; o.frequency.setValueAtTime(f0, t);
      if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.12, dur / 3)); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + 0.05);
    },
    henshin() {
      if (!this.on) return;
      const c = this.ensure(), t = c.currentTime;
      this.tone(c, 'sawtooth', 160, 1600, t, 0.95, 0.1);
      this.tone(c, 'sine', 80, 400, t, 0.9, 0.18);
      [880, 1318, 1760].forEach((f, i) => this.tone(c, 'triangle', f, f, t + 0.68 + i * 0.045, 0.7, 0.09));
    },
    revert() {
      if (!this.on) return;
      const c = this.ensure(), t = c.currentTime;
      this.tone(c, 'triangle', 1400, 220, t, 0.55, 0.1);
    },
  };
  const sfxBtn = $('#sfx-toggle');
  sfxBtn.addEventListener('click', () => {
    sfx.on = !sfx.on;
    sfxBtn.setAttribute('aria-pressed', String(sfx.on));
    sfxBtn.title = sfx.on ? 'Matikan suara SFX' : 'Nyalakan suara SFX';
    sfxBtn.setAttribute('aria-label', sfxBtn.title);
    if (sfx.on) sfx.tone(sfx.ensure(), 'sine', 660, 990, sfx.ctx.currentTime, 0.18, 0.08);
  });

  /* ---------- Henshin (state bersama: kartu, foto, tombol) ---------- */
  const portrait = $('#portrait');
  const portraitInner = $('.portrait', portrait);
  const ring = $('#portrait-ring');
  const flash = $('#stage-flash');
  const henshinBtn = $('#henshin-btn');
  const henshinLabel = $('#henshin-label');
  const hint = $('#lanyard-hint');
  let lanyard = null;
  let ultra = false;

  function setUltra(on) {
    ultra = on;
    document.documentElement.classList.toggle('ultra', on);
    henshinBtn.setAttribute('aria-pressed', String(on));
    henshinLabel.textContent = on ? 'Kembali jadi manusia' : 'Henshin!';
    portrait.classList.toggle('locked', on);
    if (on) portrait.classList.remove('peek');
    portrait.setAttribute('aria-pressed', String(on));
    if (lanyard) lanyard.setUltra(on);
    flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go');
    ring.classList.remove('burst'); void ring.offsetWidth; ring.classList.add('burst');
    on ? sfx.henshin() : sfx.revert();
    hint.classList.add('gone');
  }
  henshinBtn.addEventListener('click', () => setUltra(!ultra));

  // foto di bagian Tentang: kursor = senter Ultraman, klik/ketuk = berubah penuh
  portrait.setAttribute('role', 'button'); portrait.setAttribute('tabindex', '0'); portrait.setAttribute('aria-pressed', 'false');
  portrait.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    const r = portraitInner.getBoundingClientRect();
    portrait.style.setProperty('--x', `${e.clientX - r.left}px`);
    portrait.style.setProperty('--y', `${e.clientY - r.top}px`);
    if (!ultra) portrait.classList.add('peek');
  });
  portrait.addEventListener('pointerleave', () => portrait.classList.remove('peek'));
  portrait.addEventListener('click', () => setUltra(!ultra));
  portrait.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setUltra(!ultra); } });

  /* ---------- Lanyard 3D ---------- */
  const stage = $('#lanyard-stage');
  const fallback = $('#lanyard-fallback');
  function showFallback() { fallback.hidden = false; hint.hidden = true; $('#flip-btn').hidden = true; }
  async function startLanyard() {
    try {
      const probe = document.createElement('canvas');
      if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) throw new Error('WebGL tidak tersedia');
      lanyard = await window.LanyardApp.initLanyard(stage);
      if (ultra) lanyard.setUltra(true);
    } catch (err) {
      console.warn('[lanyard] fallback:', err);
      showFallback();
    }
  }
  stage.addEventListener('lanyard:tap', () => setUltra(!ultra));
  $('#flip-btn').addEventListener('click', () => lanyard && lanyard.flip());
  setTimeout(() => hint.classList.add('gone'), 14000);

  /* ---------- Navbar ---------- */
  const burger = $('#nav-burger'), mobileNav = $('#nav-mobile');
  burger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  $$('a', mobileNav).forEach((a) => a.addEventListener('click', () => { mobileNav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));
  const navLinks = $$('.nav-links a');
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle('active', a.dataset.sec === en.target.id));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  $$('main section[id]').forEach((s) => secObs.observe(s));

  /* ---------- Reveal saat scroll ---------- */
  function startReveal() {
    $$('.reveal').forEach((el) => {
      const sibs = Array.from(el.parentElement.children).filter((c) => c.classList.contains('reveal'));
      el.style.transitionDelay = `${(sibs.indexOf(el) % 6) * 70}ms`;
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    $$('.reveal').forEach((el) => io.observe(el));
  }

  /* ---------- Loader ---------- */
  const loader = $('#loader'), bar = $('.loader-bar i');
  const preload = (src) => new Promise((res) => { const im = new Image(); im.onload = im.onerror = res; im.src = src; });
  const tasks = [
    preload('assets/me.webp'),
    preload('assets/ultra.webp'),
    (document.fonts && document.fonts.ready) || Promise.resolve(),
    startLanyard(),
  ];
  let done = 0;
  tasks.forEach((t) => Promise.resolve(t).then(() => { done++; bar.style.width = `${(done / tasks.length) * 100}%`; }));
  Promise.race([Promise.all(tasks), new Promise((r) => setTimeout(r, 5000))]).then(() => {
    bar.style.width = '100%';
    setTimeout(() => {
      loader.classList.add('hide');
      document.body.classList.add('ready');
      startReveal();
      if (lanyard) lanyard.kick(1);
    }, 250);
  });
})();
