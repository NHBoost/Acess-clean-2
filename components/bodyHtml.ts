/* eslint-disable */
export const bodyHtml = `
<header class="site-header" id="siteHeader">
  <div class="container inner">
    <a href="#top" class="logo" data-nav="top" aria-label="Accès Clean">
      <img src="/assets/logo.png" alt="Accès Clean — L'exigence du propre pour professionnels et particuliers">
    </a>
    <nav class="nav-pill" id="navDesktop">
      <a href="#top" data-nav="top">Accueil</a>
      <a href="#services" data-nav="services">Services</a>
      <a href="#about" data-nav="about">À propos</a>
      <a href="#social-proof" data-nav="social-proof">Avis</a>
      <a href="#gallery" data-nav="gallery">Réalisations</a>
      <a href="#faq" data-nav="faq">FAQ</a>
    </nav>
    <div class="header-right">
      <a href="tel:+32491916464" class="phone-link" aria-label="Appeler">
        <span class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
        <span class="txt">+32 491 91 64 64</span>
      </a>
      <button class="btn btn-primary cta-nav" data-nav="quote">
        <span class="txt">Être rappelé</span>
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
      <button class="mobile-toggle" id="mobileToggle" aria-label="Menu">
        <svg id="iconMenu" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></svg>
        <svg id="iconClose" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="display:none"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
      </button>
    </div>
  </div>
</header>
<div class="mobile-menu-backdrop" id="mobileBackdrop" aria-hidden="true"></div>
<div class="mobile-menu" id="mobileMenu" role="menu" aria-hidden="true">
  <a href="#top" data-nav="top" style="--i:0" role="menuitem">
    <span>Accueil</span>
    <svg class="arrow-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  </a>
  <a href="#services" data-nav="services" style="--i:1" role="menuitem">
    <span>Services</span>
    <svg class="arrow-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  </a>
  <a href="#about" data-nav="about" style="--i:2" role="menuitem">
    <span>À propos</span>
    <svg class="arrow-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  </a>
  <a href="#gallery" data-nav="gallery" style="--i:3" role="menuitem">
    <span>Réalisations</span>
    <svg class="arrow-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  </a>
  <a href="#faq" data-nav="faq" style="--i:4" role="menuitem">
    <span>FAQ</span>
    <svg class="arrow-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  </a>
  <div class="mobile-menu-foot">
    <a href="tel:+32491916464" class="btn btn-ghost">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      Appeler
    </a>
    <button type="button" class="btn btn-accent" data-nav="quote">
      Devis
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </button>
  </div>
</div>

<section class="hero" id="top">
  <div class="bubbles" id="heroBubbles"></div>
  <div class="leaf" style="top:18%;left:4%;animation-delay:.5s;">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3c.5.12 1.02.2 1.53.2C19 19.9 22 8 22 8c-1 2-8 2.25-13 3.25S2 16.2 5 22"/></svg>
  </div>
  <div class="leaf" style="bottom:12%;right:6%;animation-delay:1.5s;">
    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3c.5.12 1.02.2 1.53.2C19 19.9 22 8 22 8c-1 2-8 2.25-13 3.25S2 16.2 5 22"/></svg>
  </div>
  <div class="container inner">
    <div class="hero-grid">
      <div>
        <h1>Entreprise de nettoyage à Bruxelles<br><span class="serif accent">Intervention rapide sous 24 h.</span></h1>
        <p class="lead">Des <strong>locaux impeccables</strong> sans perte de temps ni gestion interne. Bureaux, commerces, chantiers, résidentiel — une <strong>équipe fiable</strong> à Bruxelles et partout en Belgique.</p>
        <div class="ctas">
          <button class="btn btn-primary" data-nav="quote">
            Être rappelé rapidement
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <button class="btn btn-ghost" data-nav="quote">Planifier une intervention</button>
        </div>
        <ul class="hero-trust">
          <li><span class="trust-num">+10 ans</span><span class="trust-lbl">d'expérience</span></li>
          <li><span class="trust-num">+100</span><span class="trust-lbl">clients satisfaits</span></li>
          <li><span class="trust-num">24 h</span><span class="trust-lbl">devis gratuit</span></li>
          <li><span class="trust-num">Belgique</span><span class="trust-lbl">intervention rapide</span></li>
        </ul>
      </div>
      <div class="hero-visual">
        <div class="frame">
          <div class="blur-ring"></div>
          <div class="dashed-ring"></div>
          <div class="photo">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80" alt="Équipe de nettoyage professionnelle" onerror="this.style.display='none'">
          </div>
          <div class="floating-card a">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <div>
              <div style="font-size:12px;color:var(--ink-mute);">Équipe en route</div>
              <div style="font-size:14px;font-weight:600;">Ixelles · 09:15</div>
            </div>
          </div>
          <div class="floating-card b">
            <div class="badge-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 L13.5 9.5 L20 11 L13.5 12.5 L12 19 L10.5 12.5 L4 11 L10.5 9.5 Z"/></svg>
            </div>
            <div>
              <div style="font-size:12px;color:var(--ink-mute);">Mission terminée</div>
              <div style="font-size:14px;font-weight:600;display:flex;gap:2px;color:var(--sun);">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14.5 8.5 L22 9.3 L16.5 14.2 L18 21.5 L12 17.8 L6 21.5 L7.5 14.2 L2 9.3 L9.5 8.5 Z"/></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14.5 8.5 L22 9.3 L16.5 14.2 L18 21.5 L12 17.8 L6 21.5 L7.5 14.2 L2 9.3 L9.5 8.5 Z"/></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14.5 8.5 L22 9.3 L16.5 14.2 L18 21.5 L12 17.8 L6 21.5 L7.5 14.2 L2 9.3 L9.5 8.5 Z"/></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14.5 8.5 L22 9.3 L16.5 14.2 L18 21.5 L12 17.8 L6 21.5 L7.5 14.2 L2 9.3 L9.5 8.5 Z"/></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14.5 8.5 L22 9.3 L16.5 14.2 L18 21.5 L12 17.8 L6 21.5 L7.5 14.2 L2 9.3 L9.5 8.5 Z"/></svg>
              </div>
            </div>
          </div>
          <button class="available-badge" data-nav="quote">
            <span class="dot"></span>
            Disponible cette semaine
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="services section-pad" id="services">
  <div class="container inner">
    <div class="section-head reveal">
      <div>
        <div class="eyebrow" style="margin-bottom:16px;">Nos services</div>
        <h2 class="h2-uniform">Services de nettoyage à Bruxelles,<br><span class="serif accent">une exigence de qualité.</span></h2>
      </div>
      <p>Quel que soit le lieu, le volume ou la fréquence, nous composons une <strong>prestation sur mesure</strong> avec des <strong>équipes formées</strong> et du <strong>matériel adapté</strong>.</p>
    </div>
    <div class="services-grid" id="servicesGrid"></div>
    <div class="center-cta reveal">
      <button class="btn btn-accent" data-nav="quote">
        Planifier une intervention
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
    </div>
  </div>
</section>

<section class="about section-pad" id="about">
  <div class="container inner">
    <div class="about-grid">
      <div class="about-image-wrap reveal">
        <img src="/assets/about-cleaner.png" alt="Équipe Accès Clean">
      </div>
      <div class="reveal">
        <div class="eyebrow" style="margin-bottom:16px;">À propos</div>
        <h2 class="h2-uniform">Entreprise de nettoyage à Bruxelles,<br><span class="serif accent">votre partenaire de confiance en Belgique.</span></h2>
        <p>Accès Clean est votre <strong>partenaire de confiance</strong> pour des services de <strong>nettoyage professionnels</strong> à <strong>Bruxelles, en Flandre et en Wallonie</strong>. Notre équipe dynamique et méticuleuse est <strong>disponible 24h/24</strong>, offrant des prestations de <strong>haute qualité</strong>, parfaitement adaptées à vos besoins, à des <strong>tarifs compétitifs</strong>.</p>
        <p>Que vous ayez besoin <strong>d'interventions régulières</strong> (contrats annuels) ou d'un <strong>nettoyage ponctuel</strong> (grand nettoyage), nous couvrons une large gamme de services :</p>

        <div class="about-services">
          <span class="service-tag">Locaux industriels</span>
          <span class="service-tag">Sols & bureaux</span>
          <span class="service-tag">Fin de chantier</span>
          <span class="service-tag">Stations-service & parkings</span>
          <span class="service-tag">Désinfection</span>
          <span class="service-tag">Hôtels</span>
          <span class="service-tag">Écoles</span>
          <span class="service-tag">Escaliers de copropriété</span>
          <span class="service-tag">Vitres</span>
          <span class="service-tag">Tapis</span>
          <span class="service-tag">Déménagements</span>
        </div>

        <div class="about-facts">
          <div class="about-fact">
            <span class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/></svg></span>
            <div>
              <strong>Matériel et produits fournis</strong>
              <div class="desc">Nous apportons tout le nécessaire pour chaque intervention.</div>
            </div>
          </div>
          <div class="about-fact">
            <span class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7 L9 18 L4 13"/></svg></span>
            <div>
              <strong>Consommables sanitaires sur demande</strong>
              <div class="desc">Papier hygiénique, essuie-mains, savon, sacs-poubelle.</div>
            </div>
          </div>
          <div class="about-fact">
            <span class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg></span>
            <div>
              <strong>Disponibilité 24h/24</strong>
              <div class="desc">Tarifs compétitifs, devis gratuit et sans engagement.</div>
            </div>
          </div>
        </div>

        <div class="cta-row">
          <button class="btn btn-primary" data-nav="quote">
            Être rappelé rapidement
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <a href="#process" class="more" data-nav="process">Découvrir notre méthode
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="process section-pad" id="process">
  <div class="container inner">
    <div class="head reveal">
      <div>
        <div class="eyebrow" style="margin-bottom:16px;">Notre méthode</div>
        <h2 class="h2-uniform">Notre méthode de nettoyage<br><span class="serif accent">à Bruxelles en quatre étapes.</span></h2>
      </div>
      <p>De la <strong>première prise de contact</strong> au <strong>suivi post-intervention</strong>, chaque étape est pensée pour vous faire <strong>gagner du temps</strong> et vous rassurer.</p>
    </div>
    <div class="process-flow reveal">
      <div class="process-rail" aria-hidden="true"><span class="rail-line"></span></div>
      <div class="process-grid" id="processGrid"></div>
    </div>
    <div class="process-recap reveal">
      <div class="recap-meta">
        <span class="recap-kicker">De A à Z</span>
        <strong>Moins de 5 jours</strong>
        <span class="recap-sub">du premier contact au nettoyage terminé.</span>
      </div>
      <div class="recap-badges">
        <span class="recap-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Devis gratuit</span>
        <span class="recap-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Réponse 24 h</span>
        <span class="recap-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Sans engagement</span>
      </div>
      <button class="btn btn-accent" data-nav="quote">
        Démarrer l'étape 01
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
    </div>
  </div>
</section>

<section class="why section-pad" id="why">
  <div class="bubbles" id="whyBubbles"></div>
  <div class="container inner">
    <div class="head reveal">
      <div class="eyebrow eyebrow-on-dark">Pourquoi nous contacter</div>
      <h2 class="h2-uniform">Six engagements concrets<br><span class="serif accent">pour votre tranquillité.</span></h2>
      <p class="why-lead">Des équipes humaines, un cadre pro, une exécution propre — voilà ce qui fait la différence chez nos clients bruxellois et belges.</p>
    </div>
    <div class="why-grid" id="whyGrid"></div>
    <div class="why-cta reveal">
      <div class="why-cta-text">
        <span class="why-cta-kicker">Prêt à passer à l'action ?</span>
        <strong>Votre devis en 24 h, zéro engagement.</strong>
      </div>
      <div class="why-cta-actions">
        <button class="btn btn-accent" data-nav="quote">
          Demander un devis
          <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
        <a href="tel:+32491916464" class="why-cta-tel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +32 491 91 64 64
        </a>
      </div>
    </div>
  </div>
</section>

<section class="social-proof section-pad" id="social-proof">
  <div class="container inner">
    <div class="head reveal">
      <div>
        <div class="eyebrow" style="margin-bottom:16px;">Témoignages</div>
        <h2 class="h2-uniform">Ce que nos clients<br><span class="serif accent">disent d'Accès Clean.</span></h2>
      </div>
      <p>Des retours terrain de <strong>bureaux, copropriétés, commerces et particuliers</strong> à Bruxelles et en Wallonie — sans mise en scène.</p>
    </div>

    <div class="stats-band reveal">
      <div class="stat">
        <span class="stat-num">+10</span>
        <span class="stat-lbl">années d'expérience</span>
      </div>
      <div class="stat">
        <span class="stat-num">+100</span>
        <span class="stat-lbl">clients satisfaits</span>
      </div>
      <div class="stat">
        <span class="stat-num">24 h</span>
        <span class="stat-lbl">délai de réponse</span>
      </div>
      <div class="stat">
        <span class="stat-num">4,9 ★</span>
        <span class="stat-lbl">note moyenne clients</span>
      </div>
    </div>

    <div class="testimonials-grid">
      <article class="testimonial reveal">
        <div class="stars" aria-label="5 sur 5">★★★★★</div>
        <p>« Équipe ponctuelle, discrète et efficace. Nos bureaux à Ixelles sont <strong>toujours nickel</strong> le matin. Un vrai gain de sérénité pour nous. »</p>
        <footer>
          <div class="avatar">SM</div>
          <div>
            <strong>Sophie M.</strong>
            <span>Office manager · Bureaux à Ixelles</span>
          </div>
        </footer>
      </article>
      <article class="testimonial reveal">
        <div class="stars" aria-label="5 sur 5">★★★★★</div>
        <p>« On a testé trois sociétés avant Accès Clean. C'est la seule qui tient ses délais et qui <strong>remplace immédiatement</strong> en cas d'absence. »</p>
        <footer>
          <div class="avatar">JD</div>
          <div>
            <strong>Julien D.</strong>
            <span>Syndic · Copropriété à Uccle</span>
          </div>
        </footer>
      </article>
      <article class="testimonial reveal">
        <div class="stars" aria-label="5 sur 5">★★★★★</div>
        <p>« Fin de chantier livrée en 48 h chrono, PV impeccable. Nos clients ont pu emménager le jour même. <strong>Bravo à toute l'équipe.</strong> »</p>
        <footer>
          <div class="avatar">AL</div>
          <div>
            <strong>Anne L.</strong>
            <span>Promoteur immobilier · Wavre</span>
          </div>
        </footer>
      </article>
    </div>

    <div class="positioning reveal">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"/></svg>
      <p><strong>Nous accompagnons principalement</strong> des entreprises, copropriétés et professionnels recherchant un <strong>service fiable et durable</strong>, avec un vrai engagement qualité.</p>
    </div>
  </div>
</section>

<section class="gallery-sec section-pad" id="gallery">
  <div class="container inner">
    <div class="head reveal">
      <div>
        <div class="eyebrow" style="margin-bottom:16px;">Galerie</div>
        <h2 class="h2-uniform">Avant / après :<br><span class="serif accent">nos chantiers à Bruxelles et en Wallonie.</span></h2>
      </div>
      <p>Quelques exemples de nos <strong>interventions récentes</strong>. Chaque mission se termine par un <strong>reportage photo</strong> transmis au client.</p>
    </div>
  </div>
  <div class="gallery-marquee reveal">
    <div class="gallery-track" id="galleryTrack"></div>
  </div>
</section>

<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Visionneuse d'images" aria-hidden="true">
  <button type="button" class="lb-close" id="lbClose" aria-label="Fermer">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  </button>
  <div class="lb-inner">
    <button type="button" class="lb-btn lb-prev" id="lbPrev" aria-label="Précédent">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <img id="lbImage" src="" alt="">
    <div class="lb-caption">
      <span class="lb-badge">Avant / après</span>
      <span id="lbLabel"></span>
      <span class="lb-count" id="lbCount"></span>
    </div>
    <button type="button" class="lb-btn lb-next" id="lbNext" aria-label="Suivant">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
    </button>
  </div>
</div>

<section class="faq section-pad" id="faq">
  <div class="container inner">
    <div class="faq-head reveal">
      <div class="eyebrow" style="margin-bottom:16px;">FAQ</div>
      <h2 class="h2-uniform title">Nettoyage à <span class="accent">Bruxelles</span> :<br>vos <span class="accent">questions,</span> nos <span class="accent">réponses.</span></h2>
    </div>
    <div class="faq-grid">
      <div class="faq-image reveal">
        <img src="/assets/faq-cleaner.png" alt="Service de nettoyage" onerror="this.style.display='none'">
      </div>
      <div class="faq-list reveal" id="faqList"></div>
    </div>
  </div>
</section>

<section class="quote-sec section-pad" id="quote">
  <div class="bubbles" id="quoteBubbles"></div>
  <div class="leaf" style="top:12%;right:6%;">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3c.5.12 1.02.2 1.53.2C19 19.9 22 8 22 8c-1 2-8 2.25-13 3.25S2 16.2 5 22"/></svg>
  </div>
  <div class="container inner">
    <div class="quote-grid">
      <div class="quote-intro reveal">
        <div class="eyebrow" style="margin-bottom:16px;">Obtenir un devis</div>
        <h2 class="h2-uniform">Devis nettoyage à Bruxelles<br><span class="serif accent">sous 24h, sans engagement.</span></h2>
        <p class="lead">Dites-nous ce dont vous avez besoin — nous revenons vers vous avec une <strong>proposition claire, détaillée et sans engagement</strong>.</p>
        <div class="bullets">
          <div class="bullet"><span class="check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span>Devis gratuit et sans engagement</span></div>
          <div class="bullet"><span class="check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span>Visite sur site possible avant proposition</span></div>
          <div class="bullet"><span class="check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span>Réponse sous 24 heures ouvrées</span></div>
        </div>
        <div class="urgent-card">
          <div class="kicker">Urgent ?</div>
          <a class="tel" href="tel:+32491916464">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +32 491 91 64 64
          </a>
          <div class="hours">Lun–Ven · 08:00–17:00 · Sam · 09:00–17:00</div>
        </div>
      </div>
      <div class="quote-card reveal" id="quoteCard">
        <div class="progress" id="progress">
          <div class="steps">
            <div class="step active" data-idx="0"><div class="num">1</div><div class="label">Type de service</div></div>
            <div class="step" data-idx="1"><div class="num">2</div><div class="label">Détails du lieu</div></div>
            <div class="step" data-idx="2"><div class="num">3</div><div class="label">Vos coordonnées</div></div>
          </div>
          <div class="bar"><div class="fill" id="progressFill"></div></div>
        </div>
        <form id="quoteForm" novalidate>
          <div class="step-panel active" data-step="0">
            <h3>De quel service avez-vous besoin ?</h3>
            <p class="desc">Choisissez la prestation qui correspond le mieux à votre demande.</p>
            <div class="service-picker" id="servicePicker"></div>
          </div>
          <div class="step-panel" data-step="1">
            <h3>Parlez-nous du lieu</h3>
            <p class="desc">Ces informations nous aident à construire un devis précis.</p>
            <div class="field">
              <label>Type de local</label>
              <div class="pills-group" data-group="local">
                <button type="button" data-val="Bureau">Bureau</button>
                <button type="button" data-val="Commerce">Commerce</button>
                <button type="button" data-val="Copropriété">Copropriété</button>
                <button type="button" data-val="Résidentiel">Résidentiel</button>
                <button type="button" data-val="Chantier">Chantier</button>
                <button type="button" data-val="Autre">Autre</button>
              </div>
            </div>
            <div class="field">
              <label>Surface approximative</label>
              <div class="pills-group" data-group="surface">
                <button type="button" data-val="< 50 m²">&lt; 50 m²</button>
                <button type="button" data-val="50–150 m²">50–150 m²</button>
                <button type="button" data-val="150–400 m²">150–400 m²</button>
                <button type="button" data-val="> 400 m²">&gt; 400 m²</button>
              </div>
            </div>
            <div class="field">
              <label>Fréquence souhaitée</label>
              <div class="pills-group" data-group="frequency">
                <button type="button" data-val="Ponctuel">Ponctuel</button>
                <button type="button" data-val="Hebdo.">Hebdo.</button>
                <button type="button" data-val="Mensuel">Mensuel</button>
                <button type="button" data-val="Quotidien">Quotidien</button>
              </div>
            </div>
            <div class="field">
              <label>Besoin urgent ?</label>
              <div class="pills-group" data-group="urgent">
                <button type="button" data-val="Oui — urgent">Oui — urgent</button>
                <button type="button" data-val="Sous 7 jours">Sous 7 jours</button>
                <button type="button" data-val="Flexible">Flexible</button>
              </div>
            </div>
            <div class="field">
              <label>Adresse / quartier</label>
              <input class="input" type="text" name="address" placeholder="Ex. Ixelles, avenue Louise…">
              <div class="hint">Commune ou adresse approximative, pour estimer les déplacements.</div>
            </div>
          </div>
          <div class="step-panel" data-step="2">
            <h3>Dernière étape — vos coordonnées</h3>
            <p class="desc">Nous revenons vers vous sous 24h ouvrées.</p>
            <div class="two-col">
              <div class="field"><label>Nom complet</label><input class="input" type="text" name="name" placeholder="Marie Dupont" required></div>
              <div class="field"><label>Téléphone</label><input class="input" type="tel" name="phone" placeholder="+32…" required></div>
            </div>
            <div class="field"><label>Email</label><input class="input" type="email" name="email" placeholder="marie@exemple.be" required></div>
            <div class="field"><label>Message (optionnel)</label><textarea class="input" name="message" rows="4" style="resize:vertical;min-height:100px;" placeholder="Précisions, contraintes d'accès, horaires…"></textarea></div>
          </div>
          <div class="quote-nav">
            <button type="button" class="btn btn-ghost disabled" id="btnBack">Retour</button>
            <button type="button" class="btn btn-accent disabled" id="btnNext">
              Continuer
              <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <button type="submit" class="btn btn-primary disabled" id="btnSubmit" style="display:none;">
              Envoyer ma demande
              <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </form>
        <div class="success" id="quoteSuccess" style="display:none;">
          <div class="check-big"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
          <h3 id="successName">Merci !</h3>
          <p>Votre demande a bien été envoyée. Nous revenons vers vous sous 24 heures ouvrées avec une proposition détaillée.</p>
          <button type="button" class="btn btn-ghost" id="btnReset">Faire une autre demande</button>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="site-footer">
  <div class="stripe"></div>
  <div class="container">

    <div class="footer-cta-card">
      <div>
        <span class="eyebrow eyebrow-on-dark">Passez à l'action</span>
        <h3>Obtenez votre devis en 24 h<br><span class="serif accent">— sans engagement.</span></h3>
        <p>Remplissez le formulaire ou appelez-nous. Un conseiller vous rappelle <strong>sous 24 h ouvrées</strong> avec une proposition claire, détaillée et personnalisée.</p>
      </div>
      <div class="cta-buttons">
        <button class="btn btn-accent" data-nav="quote">
          Être rappelé rapidement
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
        <a href="tel:+32491916464" class="btn btn-ghost">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +32 491 91 64 64
        </a>
      </div>
    </div>

    <div class="footer-cols">
      <div class="brand">
        <img src="/assets/logo.png" alt="Accès Clean">
        <p>Nettoyage professionnel à Bruxelles et partout en Belgique depuis 2014. Bureaux, commerces, résidentiel, fin de chantier — une équipe de confiance, formée et assurée.</p>
        <div class="brand-badges">
          <span class="badge-chip"><span class="check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Couverture nationale</span>
          <span class="badge-chip"><span class="check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Matériel professionnel inclus</span>
        </div>
        <div class="socials">
          <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
          <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.3-2 2-2h2V2h-3c-3 0-4.5 1.8-4.5 4.5V10H6v4h3.5v8z"/></svg></a>
          <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 9h2v12H3zM9 9h2v1.8c.7-1.1 2-2 3.8-2 3 0 4.2 2 4.2 5V21h-2.5v-6.3c0-1.7-.7-2.7-2.2-2.7-1.4 0-2.3 1-2.3 2.7V21H9z"/></svg></a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Services</h4>
        <ul id="footerServices"></ul>
      </div>

      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#about" data-nav="about">À propos</a></li>
          <li><a href="#process" data-nav="process">Notre méthode</a></li>
          <li><a href="#why" data-nav="why">Pourquoi nous</a></li>
          <li><a href="#gallery" data-nav="gallery">Réalisations</a></li>
          <li><a href="#faq" data-nav="faq">FAQ</a></li>
          <li><a href="#quote" data-nav="quote">Obtenir un devis</a></li>
        </ul>
      </div>

      <div class="footer-col footer-contact">
        <h4>Contact</h4>
        <div class="contact-item">
          <span class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
          <a href="tel:+32491916464">+32 491 91 64 64</a>
        </div>
        <div class="contact-item">
          <span class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg></span>
          <a href="mailto:contact@acces-clean.be">contact@acces-clean.be</a>
        </div>
        <div class="contact-item">
          <span class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
          <div class="addr">Av. Frans van Kalken 09<br>1070 Bruxelles, Belgique</div>
        </div>
        <div class="hours-indicator">
          <span class="live-dot"></span>
          <span>Lun–Ven · 08:00–17:00</span>
        </div>
      </div>
    </div>

    <div class="legal">
      <div>© <span id="year"></span> Accès Clean. Tous droits réservés.</div>
      <div class="links">
        <a href="#">Mentions légales</a>
        <a href="#">Confidentialité</a>
        <a href="#">CGV</a>
      </div>
    </div>
  </div>
</footer>

`;
