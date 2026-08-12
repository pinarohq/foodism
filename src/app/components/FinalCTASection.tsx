'use client';

import React from 'react';

export default function FinalCTASection() {
  const handleBookCollab = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(232,105,58,0.08) 0%, rgba(201,148,42,0.04) 40%, transparent 70%)',
          animation: 'gradient-shift 8s ease infinite',
          backgroundSize: '300%',
        }}
        aria-hidden="true"
      />

      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #E8693A, #C9942A, #D4547A, transparent)' }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 text-center flex flex-col items-center gap-10">
        {/* Big headline */}
        <h2
          id="final-cta-heading"
          className="font-display font-black leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            color: 'var(--color-text)',
            maxWidth: '900px',
          }}
        >
          LET&apos;S MAKE{' '}
          <span className="text-gradient-spice">HISAR&apos;S</span>
          <br />
          FOOD SCENE{' '}
          <span className="font-accent-italic">FAMOUS.</span>
        </h2>

        <p
          className="font-body max-w-lg"
          style={{ fontSize: 'var(--text-subhead)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}
        >
          Join 200+ brands who&apos;ve trusted Foodism Hisar to tell their story — authentically, creatively, and with real reach.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            className="btn-primary btn-shimmer magnetic"
            onClick={handleBookCollab}
            style={{ fontSize: '1.1rem', padding: '1.125rem 2.5rem' }}
            aria-label="Book a collaboration with Foodism Hisar"
          >
            Book a Collab →
          </button>
          <a
            href="https://www.instagram.com/foodism_hisar/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="View Foodism Hisar on Instagram"
          >
            <span aria-hidden="true">📸</span>
            View Instagram
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-6 mt-4" aria-label="Social media links">
          <a
            href="https://www.instagram.com/foodism_hisar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
            aria-label="Follow on Instagram"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)';
                (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--color-surface-2)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
              }}
            >
              📸
            </div>
            <span
              className="font-body font-medium"
              style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)' }}
            >
              Instagram
            </span>
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
            aria-label="Chat on WhatsApp"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#25D366';
                (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--color-surface-2)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
              }}
            >
              💬
            </div>
            <span
              className="font-body font-medium"
              style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)' }}
            >
              WhatsApp
            </span>
          </a>

          <a
            href="https://maps.google.com/?q=Hisar,Haryana,India"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
            aria-label="Find on Google Maps — Hisar, Haryana"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(232,105,58,0.2)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--color-surface-2)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
              }}
            >
              📍
            </div>
            <span
              className="font-body font-medium"
              style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)' }}
            >
              Hisar, HR
            </span>
          </a>
        </div>

        {/* Tagline */}
        <p
          className="font-accent-italic"
          style={{ fontSize: 'var(--text-subhead)', color: 'var(--color-text-muted)' }}
        >
          &ldquo;Tasting the world, one bite at a time. 🍜&rdquo;
        </p>
      </div>
    </section>
  );
}