'use client';

import React, { useEffect, useRef } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const FOOD_PARTICLES = ['🍜', '🌮', '✈️', '📸', '⭐', '🍛', '☕', '🎬', '🍽️', '🌶️'];

export default function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Create food particles
    const container = particlesRef.current;
    if (!container) return;

    const particles: HTMLSpanElement[] = [];

    const createParticles = async () => {
      try {
        const { gsap } = await import('gsap');

        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('span');
          const emoji = FOOD_PARTICLES[Math.floor(Math.random() * FOOD_PARTICLES.length)];
          particle.textContent = emoji;
          particle.className = 'food-particle';
          particle.style.cssText = `
            font-size: ${Math.random() * 18 + 10}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: 0.07;
          `;
          container.appendChild(particle);
          particles.push(particle);

          gsap.to(particle, {
            y: '-=70',
            x: `+=${(Math.random() - 0.5) * 35}`,
            opacity: 0,
            duration: Math.random() * 5 + 5,
            repeat: -1,
            yoyo: false,
            ease: 'none',
            delay: Math.random() * 5,
            onRepeat: () => {
              gsap.set(particle, {
                y: 0,
                x: 0,
                opacity: 0.07,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              });
            },
          });
        }
      } catch {
        // GSAP not available, particles still show statically
      }
    };

    createParticles();

    // Mouse parallax for particles
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;

      particles.forEach((p, i) => {
        const depth = (i % 3 + 1) * 0.4;
        p.style.transform = `translate(${moveX * depth * 8}px, ${moveY * depth * 8}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      particles.forEach((p) => p.remove());
    };
  }, []);

  // Hero entrance animation
  useEffect(() => {
    const selectors = '.hero-eyebrow, .hero-word-1, .hero-word-2, .hero-subtext, .hero-cta-1, .hero-cta-2, .hero-stat-item, .hero-image-area, .hero-badge';

    const runHeroAnim = async () => {
      try {
        const { gsap } = await import('gsap');

        // Set initial hidden state via GSAP (overrides CSS opacity-0)
        gsap.set(selectors, { opacity: 0 });

        const tl = gsap.timeline({ delay: 1.3 });

        tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' })
          .fromTo('.hero-word-1', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
          .fromTo('.hero-word-2', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
          .fromTo('.hero-subtext', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.2')
          .fromTo('.hero-cta-1', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.2')
          .fromTo('.hero-cta-2', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.1')
          .fromTo('.hero-stat-item', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, ease: 'power2.out' }, '-=0.2')
          .fromTo('.hero-image-area', { opacity: 0, scale: 0.88 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.5)' }, '-=0.5')
          .fromTo('.hero-badge', { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.12, ease: 'back.out(2)' }, '-=0.3');
      } catch {
        // Fallback: make everything visible
        document.querySelectorAll(selectors).forEach((el) => {
          (el as HTMLElement).style.opacity = '1';
        });
      }
    };

    runHeroAnim();
  }, []);

  const handleBookCollab = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSeeWork = () => {
    const el = document.getElementById('gallery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Foodism Hisar — Hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'rgba(13, 11, 8, 0.7)', paddingTop: '7rem', paddingBottom: '4rem' }}
    >
      {/* Particles */}
      <div ref={particlesRef} className="particles-container" aria-hidden="true" />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(232,105,58,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN — 60% */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Eyebrow */}
            <div className="hero-eyebrow flex items-center gap-3">
              <span className="pill-tag">
                <span aria-hidden="true">📍</span>
                Hisar&apos;s Favourite Creator · 20,300+ Followers
              </span>
            </div>

            {/* Hero Headline */}
            <h1
              className="font-display font-black leading-none tracking-tighter"
              style={{ color: 'var(--color-text)' }}
              aria-label="Tasting the World, One Reel at a Time"
            >
              <span
                className="hero-word-1 block"
                style={{ fontSize: 'var(--text-hero)' }}
              >
                TASTING
              </span>
              <span
                className="hero-word-2 block text-gradient-spice"
                style={{ fontSize: 'var(--text-hero)' }}
              >
                THE WORLD
              </span>

            </h1>

            {/* Subtext */}
            <p
              className="hero-subtext max-w-lg"
              style={{
                fontSize: 'var(--text-subhead)',
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-body)',
                lineHeight: '1.4',
              }}
            >
              Food reviews. Travel stories. Lifestyle moments. Shared with 20,000+ people who trust every word.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="hero-cta-1 btn-primary btn-shimmer magnetic"
                onClick={handleBookCollab}
                aria-label="Book a collaboration with Foodism Hisar"
                style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}
              >
                Book a Collab →
              </button>
              <button
                className="hero-cta-2 btn-secondary"
                onClick={handleSeeWork}
                aria-label="See Foodism Hisar's content gallery"
              >
                See My Work ↓
              </button>
            </div>

            {/* Stat strip */}
            <div
              className="flex items-center gap-0 flex-wrap"
              aria-label="Key statistics"
            >
              {[
                { value: '947', label: 'Posts' },
                { value: '20.3K', label: 'Followers' },
                { value: 'Hisar', label: 'Haryana' },
              ].map((stat, i) => (
                <React.Fragment key={stat.label}>
                  <div className="hero-stat-item flex flex-col items-center px-4 first:pl-0">
                    <span
                      className="font-display font-bold"
                      style={{ fontSize: '1.25rem', color: 'var(--color-text)' }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="font-body"
                      style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                    >
                      {stat.label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div
                      className="h-8 stat-separator mx-1"
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — 40% */}
          <div className="lg:col-span-2 flex justify-center relative">
            <div className="hero-image-area relative w-full max-w-sm">

              {/* Gradient Ring + Profile Circle */}
              <div className="relative flex justify-center">
                <div className="gradient-ring relative" style={{ width: 280, height: 280 }}>
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                    style={{ background: 'var(--color-surface)' }}
                  >
                    {/* Profile placeholder with gradient */}
                    <div
                      className="w-full h-full rounded-full flex flex-col items-center justify-center gap-3"
                      style={{
                        background: 'linear-gradient(135deg, #241C15 0%, #3D2010 50%, #1A1410 100%)',
                      }}
                      aria-label="Foodism Hisar profile"
                    >
                      <AppLogo size={64} />
                      <span
                        className="font-display font-bold text-center px-4"
                        style={{ fontSize: '1.1rem', color: 'var(--color-text)' }}
                      >
                        @foodism_hisar
                      </span>
                      <span
                        className="font-body text-xs text-center"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        Food · Travel · Lifestyle
                      </span>
                    </div>
                  </div>
                </div>

                {/* Verified Badge */}
                <div
                  className="hero-badge absolute -bottom-3 left-1/2 floating-badge"
                  style={{ transform: 'translateX(-50%)' }}
                  aria-label="Verified Reel Creator badge"
                >
                  <span style={{ color: 'var(--color-accent)' }}>✓</span>
                  <span className="font-body font-semibold" style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text)' }}>
                    Verified Reel Creator
                  </span>
                </div>
              </div>

              {/* Floating stat badges */}
              <div
                className="hero-badge absolute -left-8 top-8 floating-badge animate-badge-float-1"
                aria-label="20.3K Instagram Followers"
              >
                <span aria-hidden="true">📊</span>
                <div>
                  <div className="font-display font-bold" style={{ fontSize: '1rem', color: 'var(--color-accent)' }}>20.3K</div>
                  <div style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)' }}>Followers</div>
                </div>
              </div>

              <div
                className="hero-badge absolute -right-4 top-24 floating-badge animate-badge-float-2"
                aria-label="8.2% average engagement rate"
              >
                <span aria-hidden="true">🔥</span>
                <div>
                  <div className="font-display font-bold" style={{ fontSize: '1rem', color: '#C9942A' }}>8.2%</div>
                  <div style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)' }}>Engagement</div>
                </div>
              </div>

              <div
                className="hero-badge absolute -right-6 bottom-20 floating-badge animate-badge-float-3"
                aria-label="200+ brand collaborations"
              >
                <span aria-hidden="true">🤝</span>
                <div>
                  <div className="font-display font-bold" style={{ fontSize: '1rem', color: '#D4547A' }}>200+</div>
                  <div style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)' }}>Collabs</div>
                </div>
              </div>

              {/* Reel mockup card */}
              <div
                className="hero-badge absolute -left-4 bottom-10 floating-badge"
                style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem', padding: '0.75rem 1rem', borderRadius: '1rem' }}
                aria-label="Latest Reel: 90K views"
              >
                <div className="flex items-center gap-2">
                  <span aria-hidden="true">🎬</span>
                  <span className="font-body font-bold" style={{ fontSize: 'var(--text-micro)', color: 'var(--color-accent)' }}>LATEST REEL</span>
                </div>
                <span className="font-display font-bold" style={{ fontSize: '0.9rem', color: 'var(--color-text)' }}>90K Views</span>
                <span style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)' }}>Hidden Cafe in Hisar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
        style={{ transform: 'translateX(-50%)' }}
        aria-hidden="true"
      >
        <span
          className="font-body font-medium"
          style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          Scroll
        </span>
        <div
          className="w-0.5 h-8 rounded-full"
          style={{ background: 'linear-gradient(to bottom, var(--color-accent), transparent)', animation: 'float-gentle 2s ease-in-out infinite' }}
        />
      </div>
    </section>
  );
}
