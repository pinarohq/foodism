'use client';

import React from 'react';


const TAGS = [
  'Food Reviewer',
  'Reel Creator',
  'Travel Blogger',
  'Lifestyle Creator',
  'Brand Collaborator',
];

export default function AboutSection() {

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 relative"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Creator Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative rounded-3xl overflow-hidden w-full max-w-[280px] h-[360px] lg:max-w-[380px] lg:h-[480px]">
              <img
                src="/assets/images/her-photo.webp"
                alt="Foodism Hisar — The Creator Behind the Lens"
                className="w-full h-full object-cover rounded-3xl"
                style={{
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                }}
              />
            </div>
          </div>

          {/* RIGHT — Story text */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="eyebrow mb-3">The Creator Behind the Lens</p>
              <h2
                id="about-heading"
                className="font-display font-bold leading-tight"
                style={{ fontSize: 'var(--text-heading)', color: 'var(--color-text)' }}
              >
                Born curious.{' '}
                <span className="font-accent-italic text-gradient-gold">Fed by passion.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <p
                className="about-para leading-relaxed"
                style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                I&apos;m the girl you&apos;ll find at every new restaurant in Hisar before it hits the city buzz — camera in one hand, fork in the other.
              </p>
              <p
                className="about-para leading-relaxed"
                style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                From budget street food to luxury dining, from Hisar&apos;s chai corners to Vrindavan&apos;s temples and Banaras&apos;s ghats — I capture real experiences for real people.
              </p>
              <p
                className="about-para leading-relaxed"
                style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                My audience trusts me because I eat before I film, I feel before I post, and I stay honest always.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2" aria-label="Content categories">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="font-body font-semibold"
                  style={{
                    fontSize: 'var(--text-small)',
                    color: 'var(--color-text-muted)',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '100px',
                    padding: '0.375rem 0.875rem',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote
              className="font-accent-italic leading-relaxed border-l-2 pl-6"
              style={{
                fontSize: 'var(--text-subhead)',
                color: 'var(--color-text)',
                borderColor: 'var(--color-accent)',
              }}
            >
              &ldquo;Tasting the world, one bite &amp; adventure at a time.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}