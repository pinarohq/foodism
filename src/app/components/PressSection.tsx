'use client';

import React from 'react';

const TIMELINE = [
  { year: '2021', event: 'Started @foodism_hisar' },
  { year: '2022', event: 'Reached 5,000 followers' },
  { year: '2023', event: 'First major brand collab — Flipkart' },
  { year: '2024', event: 'Featured in print media, Haryana' },
  { year: '2026', event: '20,300+ followers & counting' },
];

export default function PressSection() {
  return (
    <section
      id="press"
      aria-labelledby="press-heading"
      className="py-24 newspaper-texture relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">AS SEEN IN</p>
          <h2
            id="press-heading"
            className="font-display font-bold"
            style={{ fontSize: 'var(--text-display)', color: 'var(--color-text)' }}
          >
            The Press{' '}
            <span className="font-accent-italic text-gradient-spice">Noticed Too</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Newspaper clipping */}
          <article
            className="newspaper-card relative"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              transform: 'rotate(-1.5deg)',
              transition: 'transform 0.5s var(--ease-expressive)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'rotate(0deg)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'rotate(-1.5deg)'; }}
            aria-label="Press feature in Haryana media"
          >
            {/* Newspaper header */}
            <div
              className="flex items-center justify-between pb-3 mb-4"
              style={{ borderBottom: '2px solid var(--color-border)' }}
            >
              <span
                className="font-display font-black uppercase tracking-widest"
                style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.3em' }}
              >
                दैनिक भास्कर · Hisar Edition
              </span>
              <span
                className="font-body"
                style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)' }}
              >
                2024
              </span>
            </div>

            {/* Hindi headline placeholder */}
            <div className="mb-4">
              <h3
                className="font-display font-bold leading-tight mb-2"
                style={{ fontSize: '1.4rem', color: 'var(--color-text)' }}
              >
                हिसार की{' '}
                <span style={{ color: 'var(--color-accent)', textDecoration: 'underline', textDecorationStyle: 'wavy' }}>
                  Foodism Hisar
                </span>
                {' '}बनी डिजिटल क्रिएटर की पहचान
              </h3>
              <p
                className="font-body"
                style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}
              >
                Local digital creator making waves across Haryana with authentic food content and 20,000+ loyal followers on Instagram.
              </p>
            </div>

            {/* Columns layout */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div
                className="rounded-xl overflow-hidden"
                style={{ height: 120 }}
              >
                <img
                  src="/assets/images/new-photo.webp"
                  alt="Foodism Hisar press feature"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}
                >
                  From humble beginnings in Hisar&apos;s food lanes to a recognized digital voice in Haryana — her journey is a testament to authentic storytelling.
                </p>
              </div>
            </div>

            {/* Caption */}
            <p
              className="font-body italic text-center"
              style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}
            >
              Featured in local Haryana media — one of Hisar&apos;s prominent digital creators
            </p>
          </article>

          {/* RIGHT — Pull quote + Timeline */}
          <div className="flex flex-col gap-10">
            {/* Pull quote */}
            <blockquote
              className="font-accent-italic leading-relaxed relative pl-8"
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                color: 'var(--color-text)',
                borderLeft: '3px solid var(--color-accent)',
              }}
            >
              &ldquo;She doesn&apos;t just review food — she builds communities around it. Hisar&apos;s most trusted digital voice.&rdquo;
              <footer
                className="mt-4 font-body not-italic font-semibold"
                style={{ fontSize: 'var(--text-small)', color: 'var(--color-accent)' }}
              >
                — Local Media Feature, 2024
              </footer>
            </blockquote>

            {/* Milestone Timeline */}
            <div aria-label="Career milestones">
              <h3
                className="font-body font-bold uppercase tracking-widest mb-6"
                style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)' }}
              >
                The Journey
              </h3>
              <ol className="relative pl-6 flex flex-col gap-5" style={{ listStyle: 'none' }}>
                <div className="timeline-line" aria-hidden="true" />
                {TIMELINE.map((item) => (
                  <li key={item.year} className="flex items-center gap-4">
                    <div
                      className="absolute left-0 w-2 h-2 rounded-full -translate-x-0.5"
                      style={{ background: 'var(--color-accent)', boxShadow: '0 0 8px rgba(232,105,58,0.5)' }}
                      aria-hidden="true"
                    />
                    <span
                      className="font-display font-black flex-shrink-0"
                      style={{ fontSize: '0.9rem', color: 'var(--color-accent)', minWidth: '3rem' }}
                    >
                      {item.year}
                    </span>
                    <span
                      className="font-body"
                      style={{ fontSize: 'var(--text-small)', color: 'var(--color-text)' }}
                    >
                      {item.event}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}