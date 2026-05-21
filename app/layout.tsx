import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://acces-clean.be'),
  title: 'Accès Clean — Entreprise de nettoyage à Bruxelles et Wallonie',
  description:
    'Accès Clean, entreprise de nettoyage professionnel à Bruxelles et en Wallonie. Bureaux, commerces, chantiers, résidentiel — équipes formées, produits Ecolabel, devis gratuit sous 24h. ☎ +32 491 91 64 64.',
  keywords: [
    'nettoyage Bruxelles',
    'entreprise de nettoyage Bruxelles',
    'nettoyage professionnel Belgique',
    'nettoyage bureaux',
    'nettoyage commerces',
    'nettoyage fin de chantier',
    'nettoyage Wallonie',
    'société de nettoyage',
    'devis nettoyage'
  ],
  authors: [{ name: 'Accès Clean' }],
  robots: { index: true, follow: true, 'max-image-preview': 'large' } as any,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    siteName: 'Accès Clean',
    title: 'Accès Clean — Entreprise de nettoyage à Bruxelles et Wallonie',
    description:
      'Services de nettoyage professionnel à Bruxelles : bureaux, commerces, chantiers, résidentiel. Équipes déclarées, produits Ecolabel, devis gratuit sous 24h.',
    url: 'https://acces-clean.be/',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop&q=85',
        width: 1200,
        height: 630,
        alt: 'Équipe Accès Clean — nettoyage professionnel à Bruxelles'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accès Clean — Entreprise de nettoyage à Bruxelles',
    description:
      'Nettoyage professionnel à Bruxelles et en Wallonie. Devis gratuit sous 24h. ☎ +32 491 91 64 64.',
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop&q=85'
    ]
  },
  icons: {
    icon: [
      { url: '/assets/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/favicon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/assets/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/assets/favicon-32.png'
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'OsvYI_QVKwYYFbnmvHUk23Y2s3-tVzD-VRUynkML7Q0'
  },
  other: {
    'geo.region': 'BE-BRU',
    'geo.placename': 'Bruxelles, Belgique',
    'geo.position': '50.8503;4.3517',
    ICBM: '50.8503, 4.3517'
  }
};

export const viewport: Viewport = {
  themeColor: '#2d8f7f',
  width: 'device-width',
  initialScale: 1
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CleaningService',
  '@id': 'https://acces-clean.be/#organization',
  name: 'Accès Clean',
  alternateName: 'Accès Clean SRL',
  description:
    'Entreprise de nettoyage professionnel à Bruxelles et en Wallonie. Bureaux, commerces, fin de chantier, résidentiel, vitres, désinfection.',
  url: 'https://acces-clean.be/',
  logo: 'https://acces-clean.be/assets/logo.png',
  image:
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop&q=85',
  telephone: '+32491916464',
  email: 'contact@acces-clean.be',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Frans van Kalken 09',
    addressLocality: 'Bruxelles',
    postalCode: '1070',
    addressCountry: 'BE'
  },
  geo: { '@type': 'GeoCoordinates', latitude: 50.8503, longitude: 4.3517 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' }
  ],
  areaServed: [
    { '@type': 'City', name: 'Bruxelles' },
    { '@type': 'AdministrativeArea', name: 'Wallonie' },
    { '@type': 'AdministrativeArea', name: 'Flandre' },
    { '@type': 'Country', name: 'Belgique' }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de nettoyage',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettoyage de bureaux et entreprises' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettoyage résidentiel' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettoyage de vitres et baies vitrées' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettoyage fin de chantier' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettoyage commerces et industriels' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Désinfection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettoyage de copropriétés' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Traitement des sols' } }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-BE">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <Script
          id="ld-json-cleaning"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
