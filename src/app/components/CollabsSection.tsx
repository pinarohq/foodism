'use client';

import React from 'react';

const BRANDS = [
  { name: 'FLIPKART', color: 'var(--color-text)', accent: false },
  { name: 'Dainik Bhaskar', color: 'var(--color-text)', accent: false },
  { name: 'Local Restaurants', color: 'var(--color-text)', accent: false },
  { name: 'Beauty Brands', color: 'var(--color-text)', accent: false },
  { name: 'Event Organizers', color: 'var(--color-text)', accent: false },
  { name: 'Travel Boards', color: 'var(--color-text)', accent: false },
  { name: 'YOUR BRAND HERE →', color: 'var(--color-accent)', accent: true },
  // Duplicate set for seamless marquee
  { name: 'FLIPKART', color: 'var(--color-text)', accent: false },
  { name: 'Dainik Bhaskar', color: 'var(--color-text)', accent: false },
  { name: 'Local Restaurants', color: 'var(--color-text)', accent: false },
  { name: 'Beauty Brands', color: 'var(--color-text)', accent: false },
  { name: 'Event Organizers', color: 'var(--color-text)', accent: false },
  { name: 'Travel Boards', color: 'var(--color-text)', accent: false },
  { name: 'YOUR BRAND HERE →', color: 'var(--color-accent)', accent: true },
];

const TESTIMONIALS = [
  {
    quote: "Foodism Hisar's Reel for our restaurant launch got us 200+ new visitors in the first week. Her audience actually shows up.",
    name: 'Rajesh Sharma',
    role: 'Owner, Spice Garden Restaurant, Hisar',
    stars: 5,
  },
  {
    quote: "We partnered with her for our Flipkart event coverage and the reach was incredible. Professional, punctual, and genuinely creative.",
    name: 'Priya Mehta',
    role: 'Brand Manager, Flipkart Events',
    stars: 5,
  },
  {
    quote: "Our beauty product launch saw a 40% spike in local inquiries after her review reel. She knows how to make content that converts.",
    name: 'Ankita Verma',
    role: 'Marketing Head, Glow Beauty Co.',
    stars: 5,
  },
];

export default function CollabsSection() {
  const handleYourBrand = () => {
    const el = document.getElementById('contact');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="collabs"
      aria-labelledby="collabs-heading"
      className="py-24 overflow-hidden"
      style={{ backgroundColor: 'rgba(13, 11, 8, 0.75)' }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">TRUSTED BY</p>
          <h2
            id="collabs-heading"
            className="font-display font-bold"
            style={{ fontSize: 'var(--text-display)', color: 'var(--color-text)' }}
          >
            Brands I&apos;ve{' '}
            <span className="font-accent-italic text-gradient-gold">Worked With</span>
          </h2>
        </div>

        {/* Testimonials */}
        {/* BENTO AUDIT: 3 testimonial cards, 3-col grid */}
        {/* Row 1: [col-1: Rajesh Sharma] [col-2: Priya Mehta] [col-3: Ankita Verma] */}
        {/* Placed 3/3 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS?.map((t) => (
            <article
              key={t?.name}
              className="card-base flex flex-col gap-4 p-6"
              style={{ backgroundColor: 'var(--color-bg)' }}
              aria-label={`Testimonial from ${t?.name}`}
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t?.stars} out of 5 stars`}>
                {Array.from({ length: t?.stars })?.map((_, i) => (
                  <span key={i} style={{ color: '#C9942A', fontSize: '1rem' }} aria-hidden="true">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="font-accent-italic leading-relaxed flex-1"
                style={{ fontSize: 'var(--text-body)', color: 'var(--color-text)' }}
              >
                &ldquo;{t?.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <footer>
                <cite
                  className="not-italic font-body font-bold block"
                  style={{ fontSize: 'var(--text-small)', color: 'var(--color-text)' }}
                >
                  {t?.name}
                </cite>
                <span
                  className="font-body"
                  style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)' }}
                >
                  {t?.role}
                </span>
              </footer>
            </article>
          ))}
        </div>

        {/* Marquee */}
        <div
          className="relative overflow-hidden py-6"
          style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
          aria-label="Brands collaborated with"
        >
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to right, var(--color-surface), transparent)' }}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to left, var(--color-surface), transparent)' }}
            aria-hidden="true"
          />

          <div className="marquee-track" role="list">
            {BRANDS?.map((brand, i) => (
              <div
                key={`${brand?.name}-${i}`}
                role="listitem"
                className="flex-shrink-0 flex items-center gap-4"
              >
                {brand?.accent ? (
                  <button
                    onClick={handleYourBrand}
                    className="font-display font-black cursor-pointer bg-transparent border-none transition-opacity hover:opacity-70"
                    style={{
                      fontSize: '1.3rem',
                      color: brand?.color,
                      letterSpacing: '-0.02em',
                      whiteSpace: 'nowrap',
                    }}
                    aria-label="Your brand could be here — Book a collaboration"
                  >
                    {brand?.name}
                  </button>
                ) : (
                  <span
                    className="font-display font-black"
                    style={{
                      fontSize: '1.1rem',
                      color: brand?.color,
                      letterSpacing: '-0.02em',
                      opacity: 0.5,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {brand?.name}
                  </span>
                )}
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--color-border)' }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}