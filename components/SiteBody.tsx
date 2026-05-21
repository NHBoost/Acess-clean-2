'use client';

import { useEffect, useRef } from 'react';
import { bodyHtml } from './bodyHtml';

/**
 * Restitue le corps complet du site (préservé tel quel depuis Site.html)
 * et exécute le script d'interactivité après hydration.
 */
export default function SiteBody() {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const script = document.createElement('script');
    script.src = '/scripts/main.js';
    script.async = false;
    document.body.appendChild(script);

    return () => {
      // En dev avec StrictMode, useEffect tourne 2x — on évite le double chargement
    };
  }, []);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
