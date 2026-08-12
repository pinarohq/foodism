'use client';

import React from 'react';

const SERVICES = [
  {
    icon: '🍽️',
    name: 'Restaurant Reviews',
    description: 'I visit, taste, film, and post a full Reel + Stories with honest review and Google Review update.',
    price: '₹2,000',
    tag: 'Most Booked',
    highlight: true,
  },
  {
    icon: '📣',
    name: 'Brand Promotion',
    description: 'Product feature in a dedicated Reel or integrated into lifestyle content naturally.',
    price: '₹3,000',
    tag: null,
    highlight: false,
  },
  {
    icon: '✈️',
    name: 'Travel Features',
    description: 'Location or experience features for tourism boards, hotels, and travel brands.',
    price: '₹4,000',
    tag: null,
    highlight: false,
  },
  {
    icon: '💄',
    name: 'Beauty & Lifestyle',
    description: 'Product unboxing, reviews, and lifestyle integration for beauty and fashion brands.',
    price: '₹2,500',
    tag: null,
    highlight: false,
  },
  {
    icon: '🎪',
    name: 'Event Coverage',
    description: 'Live coverage, Reels, and Stories from your event with same-day posting.',
    price: '₹3,500',
    tag: 'Quick Turnaround',
    highlight: false,
  },
  {
    icon: '🤝',
    name: 'Custom Package',
    description: 'Multiple deliverables, long-term partnerships, barter + paid combos — let\'s talk.',
    price: 'Custom',
    tag: 'Best Value',
    highlight: false,
  },
];

export default function ServicesSection() {
  const handleBookService = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">COLLAB OPTIONS</p>
          <h2
            id="services-heading"
            className="font-display font-bold leading-tight"
            style={{ fontSize: 'var(--text-display)', color: 'var(--color-text)' }}
          >
            What We Can{' '}
            <span className="font-accent-italic text-gradient-spice">Create Together</span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
          >
            Every collaboration is crafted to deliver real results — not just views, but genuine engagement from Hisar&apos;s food community.
          </p>
        </div>

        {/* Services Grid */}
        {/* BENTO AUDIT: 6 cards, 3-col grid */}
        {/* Row 1: [col-1: Restaurant Reviews] [col-2: Brand Promotion] [col-3: Travel Features] */}
        {/* Row 2: [col-1: Beauty & Lifestyle] [col-2: Event Coverage] [col-3: Custom Package] */}
        {/* Placed 6/6 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.name}
              className="card-base relative flex flex-col gap-5 p-7 group"
              style={{ backgroundColor: 'var(--color-surface)' }}
              aria-label={`${service.name} — Starting from ${service.price}`}
            >
              {/* Tag badge */}
              {service.tag && (
                <div
                  className="absolute top-4 right-4"
                >
                  <span
                    className="font-body font-bold"
                    style={{
                      fontSize: 'var(--text-micro)',
                      background: service.highlight ? 'var(--color-accent)' : 'rgba(201,148,42,0.15)',
                      color: service.highlight ? 'var(--color-bg)' : '#C9942A',
                      border: `1px solid ${service.highlight ? 'var(--color-accent)' : 'rgba(201,148,42,0.3)'}`,
                      borderRadius: '100px',
                      padding: '0.2rem 0.6rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {service.tag}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'var(--color-surface-2)' }}
                aria-hidden="true"
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <h3
                  className="font-display font-bold"
                  style={{ fontSize: '1.25rem', color: 'var(--color-text)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-body leading-relaxed flex-1"
                  style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-muted)' }}
                >
                  {service.description}
                </p>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <div>
                  <span
                    className="font-body"
                    style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)', display: 'block' }}
                  >
                    Starting from
                  </span>
                  <span
                    className="font-display font-bold"
                    style={{ fontSize: '1.35rem', color: 'var(--color-accent)' }}
                  >
                    {service.price}
                  </span>
                </div>
                <button
                  onClick={handleBookService}
                  className="font-body font-bold transition-colors"
                  style={{
                    fontSize: 'var(--text-small)',
                    color: 'var(--color-text-muted)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)'; }}
                  aria-label={`Book ${service.name}`}
                >
                  Book this →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p
            className="font-body mb-4"
            style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)' }}
          >
            Not sure which package fits? Let&apos;s figure it out together.
          </p>
          <button
            className="btn-primary btn-shimmer magnetic"
            onClick={handleBookService}
            aria-label="Discuss a custom collaboration package"
          >
            Discuss Custom Package →
          </button>
        </div>
      </div>
    </section>
  );
}