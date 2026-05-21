(function() {
  const $  = (sel, el=document) => el.querySelector(sel);
  const $$ = (sel, el=document) => [...el.querySelectorAll(sel)];

  const ICON = {
    Building:  '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><line x1="8" y1="7" x2="10" y2="7"/><line x1="14" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="10" y2="11"/><line x1="14" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="10" y2="15"/><line x1="14" y1="15" x2="16" y2="15"/><line x1="10" y1="21" x2="14" y2="21"/></svg>',
    Home:      '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 L12 3 L21 10.5 V20 a1 1 0 0 1-1 1 h-5 v-7 h-4 v7 H4 a1 1 0 0 1-1-1 Z"/></svg>',
    Window:    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="21"/><path d="M7 8 L9 10" opacity="0.4"/></svg>',
    HardHat:   '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18 h18"/><path d="M5 18 v-2 a7 7 0 0 1 14 0 v2"/><path d="M10 10 V6 h4 v4"/></svg>',
    Factory:   '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20 V10 l5 3 V10 l5 3 V6 l7 4 V20 Z"/><line x1="8" y1="16" x2="8" y2="18"/><line x1="13" y1="16" x2="13" y2="18"/><line x1="18" y1="16" x2="18" y2="18"/></svg>',
    Shield:    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 L4 6 V12 c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10 V6 Z"/><polyline points="9 12 11 14 15 10"/></svg>',
    Stairs:    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20 h5 v-4 h5 v-4 h5 v-4 h3"/></svg>',
    Spray:     '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="8" height="11" rx="1"/><path d="M10 10 V6 h4 v4"/><path d="M18 5 h2 M18 8 h3 M19 11 h2" opacity="0.6"/></svg>',
    Clock:     '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',
    Eco:       '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5-2 8-6 8-12 0-2-.5-4-1-5-4 0-7 1-10 4s-4 6-4 10c0 1 0 2 .5 3"/><path d="M5 22c0-6 3-11 10-14"/></svg>',
    ShieldSm:  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 L4 6 V12 c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10 V6 Z"/><polyline points="9 12 11 14 15 10"/></svg>',
    ArrowSm:   '<svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    MessageCircle: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    Clipboard: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/></svg>',
    Sparkles: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 L13.5 9.5 L20 11 L13.5 12.5 L12 19 L10.5 12.5 L4 11 L10.5 9.5 Z"/><path d="M19 3 v3 M19 3 h-2 M19 3 h2 M19 6 v-3" opacity="0.6"/><path d="M5 18 v2 M5 20 h-1.5 M5 20 h1.5" opacity="0.6"/></svg>',
    CheckCheck: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 13 l4 4 L14 8"/><path d="M10 13 l4 4 L22 8"/></svg>',
  };

  const SERVICES = [
    { id: 'bureaux',     icon: 'Building', title: 'Des bureaux propres pour une meilleure image pro', desc: "Accueillez clients et collaborateurs dans un espace impeccable. Intervention en soirée ou week-end, aucune perturbation de votre activité.", tag: 'Le plus demandé' },
    { id: 'residentiel', icon: 'Home',     title: 'Un intérieur impeccable, sans y penser',            desc: "Rentrez chez vous et profitez d'un logement nickel. Nettoyage régulier ou ponctuel, personnel de confiance et discret." },
    { id: 'vitres',      icon: 'Window',   title: 'Des vitres impeccables pour valoriser votre espace', desc: "Laissez entrer la lumière. Intérieur, extérieur, accès en hauteur — résultat sans traces, matériel professionnel." },
    { id: 'chantier',    icon: 'HardHat',  title: 'Un chantier livré prêt à l\'usage',                  desc: "Dépoussiérage profond, retrait des résidus, remise en état. Votre bien est livré propre et conforme au PV de réception." },
    { id: 'commerces',   icon: 'Factory',  title: 'Des commerces accueillants à toute heure',           desc: "Surfaces commerciales, ateliers, entrepôts. Horaires flexibles, protocoles HACCP — vos clients voient la différence." },
    { id: 'desinfection',icon: 'Shield',   title: 'Des espaces sains pour votre équipe',                 desc: "Traitement en profondeur aux produits homologués virucide / bactéricide. Attestation fournie, idéal en prévention ou post-maladie." },
    { id: 'copropriete', icon: 'Stairs',   title: 'Des communs nets pour des copropriétaires ravis',     desc: "Cages d'escalier, ascenseurs, parkings. Passages programmés, cahier de suivi, syndic-friendly." },
    { id: 'sols',        icon: 'Spray',    title: 'Des sols rénovés, comme au premier jour',             desc: "Décapage, cristallisation, cirage, shampoing moquette. Marbre, parquet, vinyle, textile — nous redonnons vie à chaque surface." },
  ];

  const STEPS = [
    { n: '01', icon: 'MessageCircle', title: 'Contact',        duration: '≈ 10 min', desc: "Vous nous exposez votre besoin en quelques lignes — par formulaire, mail ou téléphone.", deliver: "Un rappel sous 2 h ouvrées" },
    { n: '02', icon: 'Clipboard',     title: 'Visite & devis', duration: 'Sous 24 h', desc: "Nous venons sur place, mesurons, écoutons, puis vous remettons un devis détaillé.",      deliver: "Devis chiffré, sans engagement" },
    { n: '03', icon: 'Sparkles',      title: 'Intervention',   duration: '1 à 3 j',   desc: "Une équipe dédiée, du matériel adapté, des produits écologiques — tout est prêt le jour J.", deliver: "Équipe formée et déclarée" },
    { n: '04', icon: 'CheckCheck',    title: 'Suivi',          duration: 'En continu', desc: "Photos de fin de mission, checklist validée, et un interlocuteur unique pour la suite.",     deliver: "Reportage photo + SAV" },
  ];

  const REASONS = [
    { icon: 'Clock',      title: 'Intervention urgente possible',    stat: '< 24h',     desc: "Un besoin soudain ? Nous mobilisons une équipe sous 24 h pour les cas urgents, partout en Belgique." },
    { icon: 'ShieldSm',   title: 'Remplacement rapide en cas d\'absence', stat: '100%',      desc: "Votre agent habituel est absent ? Nous envoyons un remplaçant formé dans la journée. Zéro interruption." },
    { icon: 'CheckCheck', title: 'Suivi qualité régulier',           stat: 'Mensuel',   desc: "Contrôle qualité planifié, checklist photo à chaque intervention, retours clients intégrés au dossier." },
    { icon: 'MessageCircle', title: 'Responsable dédié',              stat: '1 contact', desc: "Un seul interlocuteur connaît votre lieu, vos besoins, vos contraintes. Pas de rebond inutile." },
    { icon: 'Eco',        title: 'Produits écologiques',             stat: 'Ecolabel',  desc: "Produits certifiés Ecolabel, biodégradables, sans solvants toxiques — sains pour vous et pour nos équipes." },
    { icon: 'Sparkles',   title: 'Satisfaction garantie',            stat: 'SAV 48h',   desc: "Pas satisfait ? Nous repassons gratuitement sous 48 h, sans discussion. Notre priorité : votre tranquillité." },
  ];

  const GALLERY = [
    { src: '/assets/gallery/01.png?v=3', label: 'Cage d\'escalier' },
    { src: '/assets/gallery/02.png?v=3', label: 'Open space' },
    { src: '/assets/gallery/03.png?v=3', label: 'Bureau individuel' },
    { src: '/assets/gallery/04.png?v=3', label: 'Moquette' },
    { src: '/assets/gallery/05.png?v=3', label: 'Sanitaires' },
    { src: '/assets/gallery/06.png?v=3', label: 'Salle de pause' },
  ];

  const FAQ_ITEMS = [
    { q: "Sous combien de temps pouvez-vous intervenir ?",
      a: "Nous revenons vers vous <strong>sous 24 h</strong> avec un devis. Pour les demandes urgentes, une équipe peut être mobilisée <strong>dès le lendemain</strong> à Bruxelles et partout en Belgique." },
    { q: "Suis-je engagé à long terme si je signe un contrat ?",
      a: "Non. Nos contrats sont <strong>sans engagement</strong>, ajustables ou résiliables à tout moment avec un simple préavis. Vous gardez le contrôle total sur la fréquence et la durée." },
    { q: "Que se passe-t-il si mon agent habituel est absent ?",
      a: "Nous mettons un <strong>remplaçant formé</strong> à disposition dans la journée, à la même qualité de service. Vous n'avez aucune rupture à gérer — c'est notre engagement." },
    { q: "Comment garantissez-vous la qualité dans le temps ?",
      a: "Un <strong>responsable dédié</strong> suit votre dossier. Contrôle qualité mensuel, checklist photo à chaque passage, retours clients pris en compte — la qualité est pilotée, pas laissée au hasard." },
    { q: "Puis-je changer la fréquence ou les horaires facilement ?",
      a: "Oui, à tout moment. <strong>Hebdo, bi-mensuel, mensuel</strong> ou ponctuel — les plannings s'adaptent à votre rythme. Un simple appel ou email suffit à ajuster." },
    { q: "Que se passe-t-il si je ne suis pas satisfait·e ?",
      a: "Nous <strong>repassons gratuitement sous 48 h</strong>, sans discussion. Notre priorité est votre tranquillité : chaque intervention se termine par une checklist et une photo validée." },
  ];

  // Bubbles
  function makeBubbles(target, count) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.className = 'bubble';
      const size = 12 + Math.random() * 80;
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.left = (Math.random() * 100) + '%';
      el.style.top = (Math.random() * 100) + '%';
      el.style.animationDelay = (Math.random() * 6) + 's';
      el.style.animationDuration = (6 + Math.random() * 8) + 's';
      frag.appendChild(el);
    }
    target.appendChild(frag);
  }
  makeBubbles($('#heroBubbles'), 18);
  makeBubbles($('#quoteBubbles'), 8);
  const whyBubbles = $('#whyBubbles');
  for (let i = 0; i < 10; i++) {
    const el = document.createElement('span');
    el.className = 'bubble';
    const size = 12 + Math.random() * 80;
    el.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*6}s;animation-duration:${6+Math.random()*8}s;background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), rgba(255,255,255,0.02));`;
    whyBubbles.appendChild(el);
  }

  // Services
  const servicesGrid = $('#servicesGrid');
  const ACCENT_ROTATION = ['green', 'sky', 'deep', 'green', 'deep', 'sky', 'green', 'sky'];
  SERVICES.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.className = 'service-card';
    btn.dataset.nav = 'quote';
    btn.dataset.accent = ACCENT_ROTATION[i] || 'green';
    if (s.tag) btn.classList.add('is-featured');
    btn.innerHTML = `
      ${s.tag ? `<span class="tag"><span class="tag-dot"></span>${s.tag}</span>` : ''}
      <div class="service-head">
        <div class="icon-wrap">${ICON[s.icon]}</div>
      </div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="cta">Demander un devis ${ICON.ArrowSm}</div>
    `;
    servicesGrid.appendChild(btn);
  });

  // Process steps
  const processGrid = $('#processGrid');
  STEPS.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'process-step';
    el.style.transitionDelay = (0.15 + i * 0.12) + 's';
    el.innerHTML = `
      <span class="serif-num">${s.n}</span>
      <div class="node" aria-hidden="true"><span class="node-dot"></span></div>
      <div class="step-head">
        <div class="icon-badge">${ICON[s.icon]}</div>
      </div>
      <div class="kicker">Étape ${s.n}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="deliver">
        <span class="deliver-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
        <span>${s.deliver}</span>
      </div>
    `;
    processGrid.appendChild(el);
  });

  // Why reasons
  const whyGrid = $('#whyGrid');
  REASONS.forEach((r, i) => {
    const el = document.createElement('div');
    el.className = 'reason reveal';
    el.style.transitionDelay = (i * 60) + 'ms';
    el.innerHTML = `
      <div class="reason-head">
        <div class="icon-wrap">${ICON[r.icon]}</div>
        ${r.stat ? `<span class="reason-stat">${r.stat}</span>` : ''}
      </div>
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
      <div class="idx">0${i + 1}</div>
    `;
    whyGrid.appendChild(el);
  });

  // Gallery marquee (duplicate list for seamless loop)
  const galleryTrack = $('#galleryTrack');
  [...GALLERY, ...GALLERY].forEach((img, i) => {
    const c = document.createElement('button');
    c.type = 'button';
    c.className = 'gallery-card';
    c.dataset.index = i % GALLERY.length;
    c.setAttribute('aria-label', `Agrandir — ${img.label}`);
    c.innerHTML = `
      <img src="${img.src}" alt="Avant / après — ${img.label}" loading="lazy">
      <span class="badge">Avant / après</span>
      <span class="label">${img.label}</span>
      <span class="zoom-ico" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="20" y1="20" x2="16" y2="16"/></svg></span>
    `;
    galleryTrack.appendChild(c);
  });

  // Lightbox
  const lightbox = $('#lightbox');
  const lbImage = $('#lbImage');
  const lbLabel = $('#lbLabel');
  const lbCount = $('#lbCount');
  const lbClose = $('#lbClose');
  const lbPrev  = $('#lbPrev');
  const lbNext  = $('#lbNext');
  let lbIdx = 0;

  function renderLb() {
    const item = GALLERY[lbIdx];
    lbImage.src = item.src;
    lbImage.alt = `Avant / après — ${item.label}`;
    lbLabel.textContent = item.label;
    lbCount.textContent = `${lbIdx + 1} / ${GALLERY.length}`;
  }
  function openLb(idx) {
    lbIdx = ((idx % GALLERY.length) + GALLERY.length) % GALLERY.length;
    renderLb();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lb-open');
  }
  function closeLb() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lb-open');
  }
  function stepLb(d) { lbIdx = ((lbIdx + d) % GALLERY.length + GALLERY.length) % GALLERY.length; renderLb(); }

  galleryTrack.addEventListener('click', e => {
    const card = e.target.closest('.gallery-card');
    if (!card) return;
    openLb(parseInt(card.dataset.index, 10));
  });
  lbClose.addEventListener('click', closeLb);
  lbPrev.addEventListener('click', () => stepLb(-1));
  lbNext.addEventListener('click', () => stepLb(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLb(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    else if (e.key === 'ArrowLeft') stepLb(-1);
    else if (e.key === 'ArrowRight') stepLb(1);
  });

  // FAQ
  const faqList = $('#faqList');
  FAQ_ITEMS.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'faq-item' + (i === 0 ? ' open' : '');
    const num = String(i + 1).padStart(2, '0');
    el.innerHTML = `
      <button class="q" type="button" aria-expanded="${i === 0}">
        <span class="q-num">Q${num}</span>
        <span class="q-text">${item.q}</span>
        <span class="chev" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>
      <div class="a-wrap"><div class="a">${item.a}</div></div>
    `;
    faqList.appendChild(el);
  });
  faqList.addEventListener('click', (e) => {
    const btn = e.target.closest('button.q');
    if (!btn) return;
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    $$('.faq-item', faqList).forEach(el => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
    $$('button.q', faqList).forEach(b => b.setAttribute('aria-expanded', b.parentElement.classList.contains('open')));
  });

  // Footer services list
  const footerServices = $('#footerServices');
  SERVICES.slice(0, 6).forEach(s => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#quote" data-nav="quote">${s.title}</a>`;
    footerServices.appendChild(li);
  });

  // Year
  $('#year').textContent = new Date().getFullYear();

  // Sticky header + scrollspy
  const header = $('#siteHeader');
  const sections = ['top','services','about','gallery','faq','quote'];
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);
    let found = 'top';
    for (const id of ['top','services','process','about','why','gallery','faq','quote']) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= 140) found = id;
    }
    $$('#navDesktop a, #mobileMenu a').forEach(a => a.classList.toggle('active', a.dataset.nav === found));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll via data-nav
  function navigate(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - (id === 'top' ? 0 : 80);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-nav]');
    if (!target) return;
    e.preventDefault();
    const id = target.dataset.nav;
    navigate(id);
    closeMobileMenu();
  });

  // Mobile menu
  const mobileMenu = $('#mobileMenu');
  const mobileBackdrop = $('#mobileBackdrop');
  const iconMenu = $('#iconMenu');
  const iconClose = $('#iconClose');
  function setMobileMenu(open) {
    mobileMenu.classList.toggle('open', open);
    mobileBackdrop.classList.toggle('open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
    iconMenu.style.display = open ? 'none' : '';
    iconClose.style.display = open ? '' : 'none';
  }
  function closeMobileMenu() { setMobileMenu(false); }
  $('#mobileToggle').addEventListener('click', () => {
    setMobileMenu(!mobileMenu.classList.contains('open'));
  });
  mobileBackdrop.addEventListener('click', closeMobileMenu);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMobileMenu();
  });

  // Title line-reveal animation — split by <br> into staggered lines
  function splitTitle(el) {
    if (el.dataset.split === '1') return;
    el.dataset.split = '1';
    const parts = el.innerHTML.split(/<br\s*\/?>/i);
    el.innerHTML = parts
      .map((p, i) => `<span class="tline" style="--i:${i}"><span class="tline-in">${p}</span></span>`)
      .join('');
    el.classList.add('title-anim');
  }
  $$('.hero h1, h2.h2-uniform, .faq h2.title').forEach(splitTitle);

  // Scroll reveal (reveals + process steps + process line)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => io.observe(el));

  // Title reveal observer
  const titleIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); titleIO.unobserve(e.target); }
    });
  }, { threshold: 0.25 });
  $$('.title-anim').forEach(el => titleIO.observe(el));

  const stepIO = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); stepIO.unobserve(e.target); } });
  }, { threshold: 0.35 });
  $$('.process-step').forEach(el => stepIO.observe(el));

  // Quote wizard
  const quote = {
    step: 0,
    data: { service:'', local:'', surface:'', frequency:'', urgent:'', address:'', name:'', email:'', phone:'', message:'' },
  };
  const picker = $('#servicePicker');
  SERVICES.forEach(s => {
    const b = document.createElement('button');
    b.type = 'button';
    b.dataset.id = s.id;
    b.innerHTML = `<div class="ico">${ICON[s.icon]}</div><div class="name">${s.title}</div>`;
    b.addEventListener('click', () => {
      quote.data.service = s.id;
      $$('#servicePicker button').forEach(x => x.classList.toggle('sel', x.dataset.id === s.id));
      refreshQuote();
    });
    picker.appendChild(b);
  });
  $$('.pills-group').forEach(group => {
    const key = group.dataset.group;
    group.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      quote.data[key] = b.dataset.val;
      $$('button', group).forEach(x => x.classList.toggle('sel', x === b));
      refreshQuote();
    });
  });
  $$('#quoteForm input, #quoteForm textarea').forEach(i => {
    if (!i.name) return;
    i.addEventListener('input', () => { quote.data[i.name] = i.value; refreshQuote(); });
  });

  function canNext() {
    if (quote.step === 0) return !!quote.data.service;
    if (quote.step === 1) return !!quote.data.surface && !!quote.data.frequency;
    if (quote.step === 2) return !!quote.data.name && !!quote.data.email && !!quote.data.phone;
    return false;
  }

  function refreshQuote() {
    $$('.step-panel').forEach(p => p.classList.toggle('active', Number(p.dataset.step) === quote.step));
    const steps = $$('.progress .step');
    steps.forEach((s, i) => {
      s.classList.toggle('active', i === quote.step);
      s.classList.toggle('done', i < quote.step);
      const num = $('.num', s);
      if (i < quote.step) num.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
      else num.textContent = i + 1;
    });
    $('#progressFill').style.width = (((quote.step + 1) / 3) * 100) + '%';

    const last = quote.step === 2;
    $('#btnBack').classList.toggle('disabled', quote.step === 0);
    $('#btnNext').style.display = last ? 'none' : '';
    $('#btnSubmit').style.display = last ? '' : 'none';
    $('#btnNext').classList.toggle('disabled', !canNext());
    $('#btnSubmit').classList.toggle('disabled', !canNext());
  }

  $('#btnBack').addEventListener('click', () => {
    if (quote.step === 0) return;
    quote.step--; refreshQuote();
  });
  $('#btnNext').addEventListener('click', () => {
    if (!canNext()) return;
    quote.step = Math.min(2, quote.step + 1); refreshQuote();
  });
  // ── Endpoint Formspree — envoi des devis vers hansyapo0@gmail.com
  // Setup : crée un compte sur https://formspree.io avec hansyapo0@gmail.com,
  // crée un "New Form", copie l'ID (ex: abcdwxyz) et remplace VOTRE_ID_FORMSPREE.
  const FORM_ENDPOINT = 'https://formspree.io/f/VOTRE_ID_FORMSPREE';

  $('#quoteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!canNext()) return;
    const submitBtn = $('#btnSubmit');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Envoi en cours…';

    try {
      const payload = {
        service:     quote.data.service,
        typeLocal:   quote.data.local,
        surface:     quote.data.surface,
        frequency:   quote.data.frequency,
        urgent:      quote.data.urgent,
        address:     quote.data.address,
        name:        quote.data.name,
        email:       quote.data.email,
        phone:       quote.data.phone,
        message:     quote.data.message,
        _subject:    `Nouveau devis — ${quote.data.service || 'Accès Clean'}${quote.data.urgent === 'Oui — urgent' ? ' · URGENT' : ''} — ${quote.data.name || ''}`,
        _replyto:    quote.data.email
      };
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Network error');

      $('#quoteForm').style.display = 'none';
      $('#progress').style.display = 'none';
      const s = $('#quoteSuccess');
      s.style.display = '';
      const first = (quote.data.name || '').trim().split(/\s+/)[0];
      $('#successName').textContent = first ? `Merci, ${first} !` : 'Merci !';
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      alert("Oups, une erreur est survenue. Merci d'appeler le +32 491 91 64 64 ou de réessayer.");
    }
  });
  $('#btnReset').addEventListener('click', () => {
    quote.step = 0;
    quote.data = { service:'', local:'', surface:'', frequency:'', urgent:'', address:'', name:'', email:'', phone:'', message:'' };
    $$('#servicePicker button').forEach(b => b.classList.remove('sel'));
    $$('.pills-group button').forEach(b => b.classList.remove('sel'));
    $$('#quoteForm input, #quoteForm textarea').forEach(i => { if (i.name) i.value = ''; });
    $('#quoteSuccess').style.display = 'none';
    $('#progress').style.display = '';
    $('#quoteForm').style.display = '';
    refreshQuote();
  });
  refreshQuote();
})();
