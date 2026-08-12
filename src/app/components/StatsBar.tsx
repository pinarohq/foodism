'use client';

import React, { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 20300, suffix: '+', label: 'Followers', sublabel: 'on Instagram' },
  { target: 947, suffix: '+', label: 'Posts', sublabel: 'published' },
  { target: 3, suffix: '+', label: 'Years', sublabel: 'creating content' },
  { target: 100, suffix: '%', label: 'Authentic', sublabel: 'always honest' },
];

function useCountUp(target: number, suffix: string, active: boolean, duration = 2000) {
  const [display, setDisplay] = useState('0' + suffix);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setDisplay(target.toLocaleString('en-IN') + suffix);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start).toLocaleString('en-IN') + suffix);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, suffix, duration]);

  return display;
}

function StatItem({ stat, active }: { stat: typeof STATS[0]; active: boolean }) {
  const value = useCountUp(stat.target, stat.suffix, active);
  return (
    <div className="flex flex-col items-center text-center px-6 py-8 relative">
      <span
        className="font-display font-black leading-none mb-2"
        style={{ fontSize: 'var(--text-display)', color: 'var(--color-text)' }}
        aria-live="polite"
        aria-label={`${value} ${stat.label}`}
      >
        {value}
      </span>
      <span
        className="font-body font-bold uppercase tracking-widest mb-1"
        style={{ fontSize: 'var(--text-small)', color: 'var(--color-accent)' }}
      >
        {stat.label}
      </span>
      <span
        className="font-body"
        style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)' }}
      >
        {stat.sublabel}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      aria-labelledby="stats-heading"
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      {/* Accent top border */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg, transparent, #E8693A, #C9942A, #D4547A, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg, transparent, #E8693A, #C9942A, #D4547A, transparent)' }}
        aria-hidden="true"
      />

      {/* Animated gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(232,105,58,0.05) 0%, transparent 70%)',
          animation: 'gradient-shift 6s ease infinite',
          backgroundSize: '300%',
        }}
        aria-hidden="true"
      />

      <h2 id="stats-heading" className="sr-only">Key Statistics</h2>

      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 relative">
          {STATS.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <StatItem stat={stat} active={active} />
              {i < STATS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 bottom-8 stat-separator"
                  style={{ left: `${(i + 1) * 25}%` }}
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}