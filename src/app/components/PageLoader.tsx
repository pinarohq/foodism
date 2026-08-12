'use client';

import React, { useEffect, useRef } from 'react';

const LETTERS_FOODISM = ['F', 'O', 'O', 'D', 'I', 'S', 'M'];

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const curtainLeftRef = useRef<HTMLDivElement>(null);
  const curtainRightRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const hisarRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    let gsap: typeof import('gsap').gsap | null = null;

    const runLoader = async () => {
      try {
        const gsapModule = await import('gsap');
        gsap = gsapModule.gsap;
      } catch {
        if (loader) loader.style.display = 'none';
        return;
      }

      const tl = gsap.timeline();

      // Stagger in FOODISM letters
      tl.from(lettersRef.current.filter(Boolean), {
        opacity: 0,
        y: 30,
        duration: 0.35,
        stagger: 0.05,
        ease: 'power3.out',
      }, 0.2);

      // HISAR appears
      tl.from(hisarRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: 'power2.out',
      }, 0.55);

      // Progress bar (via CSS animation already, but we can fade in)
      tl.from(progressRef.current, {
        opacity: 0,
        duration: 0.2,
      }, 0.5);

      // Curtain split
      tl.to(curtainLeftRef.current, {
        scaleX: 0,
        duration: 0.45,
        ease: 'power3.inOut',
      }, 1.0);
      tl.to(curtainRightRef.current, {
        scaleX: 0,
        duration: 0.45,
        ease: 'power3.inOut',
      }, 1.0);

      // Hide loader
      tl.set(loader, { display: 'none' }, 1.5);
    };

    runLoader();
  }, []);

  return (
    <div ref={loaderRef} className="loader-overlay" aria-hidden="true" role="presentation">
      {/* Curtains */}
      <div ref={curtainLeftRef} className="loader-curtain-left" />
      <div ref={curtainRightRef} className="loader-curtain-right" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* FOODISM */}
        <div className="flex items-center gap-1" aria-label="Foodism Hisar">
          {LETTERS_FOODISM.map((letter, i) => (
            <span
              key={i}
              ref={(el) => { lettersRef.current[i] = el; }}
              className="font-display text-5xl md:text-7xl font-black tracking-widest"
              style={{ color: 'var(--color-text)' }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* HISAR */}
        <div
          ref={hisarRef}
          className="font-body text-sm font-bold tracking-[0.5em] uppercase"
          style={{ color: 'var(--color-accent)' }}
        >
          HISAR
        </div>
      </div>

      {/* Progress bar */}
      <div ref={progressRef} className="loader-progress-bar">
        <div className="loader-progress-fill" />
      </div>
    </div>
  );
}