'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Press', href: '#press' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        ref={navRef}
        role="banner"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(13, 11, 8, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
          padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        }}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Foodism Hisar — Home">
            <AppLogo size={scrolled ? 32 : 38} />
            <span
              className="font-display font-bold tracking-tight transition-all duration-300"
              style={{
                fontSize: scrolled ? '1rem' : '1.2rem',
                color: 'var(--color-text)',
              }}
            >
              {scrolled ? 'FH' : 'Foodism Hisar'}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav role="navigation" aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="nav-link bg-transparent border-none cursor-pointer"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="availability-dot" aria-hidden="true" />
              <span
                className="font-body font-600"
                style={{ fontSize: 'var(--text-micro)', color: '#4CAF50', letterSpacing: '0.08em' }}
              >
                Available for Collabs
              </span>
            </div>
            <button
              className="btn-primary btn-shimmer magnetic"
              onClick={() => handleNavClick('#contact')}
              aria-label="Book a collaboration"
            >
              Book a Collab →
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer bg-transparent border-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: 'var(--color-text)',
                transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: 'var(--color-text)',
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'scaleX(0)' : 'none',
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: 'var(--color-text)',
                transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="mobile-menu-link bg-transparent border-none cursor-pointer"
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <span className="availability-dot" />
            <span className="font-body text-sm font-semibold" style={{ color: '#4CAF50' }}>
              Available for Collabs
            </span>
          </div>
          <button
            className="btn-primary btn-shimmer"
            onClick={() => handleNavClick('#contact')}
            tabIndex={menuOpen ? 0 : -1}
          >
            Book a Collab →
          </button>
        </div>

        {/* Close hint */}
        <p
          className="absolute bottom-8 font-body text-xs"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Tap anywhere to close
        </p>
      </div>
    </>
  );
}