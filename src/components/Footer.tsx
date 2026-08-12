import React from 'react';

import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="py-16 relative"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Back to top */}
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Left — Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <AppLogo size={36} />
              <span
                className="font-display font-bold tracking-tight"
                style={{ fontSize: '1.25rem', color: 'var(--color-text)' }}
              >
                Foodism Hisar
              </span>
            </div>
            <p
              className="font-accent-italic"
              style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', maxWidth: 260 }}
            >
              Tasting the world, one bite at a time.
            </p>
            <p
              className="font-body"
              style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-muted)' }}
            >
              Hisar, Haryana, India
            </p>
          </div>

          {/* Right — Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Contact', href: '#contact' },
              { label: 'Instagram', href: 'https://www.instagram.com/foodism_hisar/', external: true },
            ].map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  style={{ fontSize: 'var(--text-small)', fontWeight: 500 }}
                  aria-label={`${link.label} (opens in new tab)`}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  style={{ fontSize: 'var(--text-small)', fontWeight: 500 }}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p
            className="font-body"
            style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-muted)' }}
          >
            © 2026 Foodism Hisar · Built with love for local creators.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="nav-link"
              style={{ fontSize: 'var(--text-small)' }}
              aria-label="Privacy Policy"
            >
              Privacy
            </a>
            <a
              href="#"
              className="nav-link"
              style={{ fontSize: 'var(--text-small)' }}
              aria-label="Terms of Service"
            >
              Terms
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 font-body font-semibold transition-colors"
              style={{
                fontSize: 'var(--text-small)',
                color: 'var(--color-text-muted)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)'; }}
              aria-label="Back to top of page"
            >
              ↑ Back to top
            </button>
          </div>
        </div>

        {/* Large wordmark */}
        <div
          className="mt-16 overflow-hidden"
          aria-hidden="true"
        >
          <p
            className="font-display font-black text-center leading-none pointer-events-none select-none"
            style={{
              fontSize: 'clamp(3rem, 12vw, 10rem)',
              background: 'linear-gradient(135deg, rgba(232,105,58,0.08), rgba(201,148,42,0.06))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.04em',
            }}
          >
            FOODISM HISAR
          </p>
        </div>
      </div>
    </footer>
  );
}