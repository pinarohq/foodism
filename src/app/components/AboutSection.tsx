'use client';

import React, { useRef } from 'react';


const TAGS = [
  'Food Reviewer',
  'Reel Creator',
  'Travel Blogger',
  'Lifestyle Creator',
  'Brand Collaborator',
];

const CARDS = [
  {
    label: 'Food',
    gradient: 'linear-gradient(135deg, #3D1A0A 0%, #7A3010 50%, #E8693A 100%)',
    icon: '🍽️',
    text: 'Restaurant Reviews & Street Food Finds',
  },
  {
    label: 'Travel',
    gradient: 'linear-gradient(135deg, #0A1A2E 0%, #1A3A5C 50%, #2E6B8A 100%)',
    icon: '✈️',
    text: 'From Hisar to Banaras & Beyond',
  },
  {
    label: 'Lifestyle',
    gradient: 'linear-gradient(135deg, #2E0A1A 0%, #6B1A35 50%, #D4547A 100%)',
    icon: '✨',
    text: 'Authentic Moments, Real Stories',
  },
];

export default function AboutSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = async (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    try {
      const { gsap } = await import('gsap');
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(card, {
        rotateY: x * 12,
        rotateX: -y * 12,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    } catch { /* noop */ }
  };

  const handleMouseLeave = async (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    try {
      const { gsap } = await import('gsap');
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power2.out' });
    } catch { /* noop */ }
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 relative"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Photo cards */}
          <div className="tilt-card-wrapper relative h-80 lg:h-auto">
            <div className="relative flex justify-center lg:justify-start" style={{ height: 420 }}>
              {CARDS.map((card, i) => (
                <div
                  key={card.label}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="about-card absolute rounded-3xl overflow-hidden cursor-pointer"
                  style={{
                    width: 220,
                    height: 280,
                    background: card.gradient,
                    top: i * 28,
                    left: i * 36,
                    zIndex: i + 1,
                    border: '1px solid var(--color-border)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                    transition: 'box-shadow 0.3s',
                  }}
                  onMouseMove={(e) => handleMouseMove(e, i)}
                  onMouseLeave={() => handleMouseLeave(i)}
                  aria-label={`${card.label} content category`}
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <span
                        className="font-body font-bold uppercase tracking-widest"
                        style={{ fontSize: 'var(--text-micro)', color: 'rgba(242,237,230,0.6)' }}
                      >
                        {card.label}
                      </span>
                    </div>
                    <div>
                      <div className="text-4xl mb-3" aria-hidden="true">{card.icon}</div>
                      <p
                        className="font-display font-bold leading-tight"
                        style={{ fontSize: '1.1rem', color: 'var(--color-text)' }}
                      >
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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