import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google';
import '../styles/tailwind.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Foodism Hisar — Food & Lifestyle Creator | Book Collabs',
  description: "Foodism Hisar is Hisar's favourite food, travel and lifestyle creator with 20,300+ followers. Book restaurant reviews, brand promotions, and event coverage in Haryana.",
  keywords: 'foodism hisar, hisar food blogger, hisar influencer, food vlogger hisar, brand collab hisar, instagram creator haryana',
  authors: [{ name: 'Foodism Hisar' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Foodism Hisar — Food Creator & Brand Collab',
    description: "Book Hisar's top food & lifestyle creator. Reviews, promotions, events. 20K+ audience.",
    url: 'https://foodismhisar.com',
    locale: 'en_IN',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foodism Hisar — Food Creator & Brand Collab',
    description: "Book Hisar's top food & lifestyle creator.",
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Foodism Hisar',
              url: 'https://foodismhisar.com',
              description: 'Food, Travel and Lifestyle content creator based in Hisar, Haryana',
              sameAs: ['https://www.instagram.com/foodism_hisar/'],
              jobTitle: 'Content Creator & Brand Collaborator',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hisar',
                addressRegion: 'Haryana',
                addressCountry: 'IN',
              },
            }),
          }}
        />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Ffoodismhis9103back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}