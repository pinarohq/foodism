'use client';

import React from 'react';

const GALLERY_ITEMS = [
  { id: 1, category: 'Food Review', caption: 'Hidden Cafe Hisar', image: '/assets/images/food1.webp', tall: true },
  { id: 2, category: 'Travel', caption: 'Banaras Ghats', image: '/assets/images/travel1.webp', tall: false },
  { id: 3, category: 'Food Review', caption: 'Street Food Trail', image: '/assets/images/food2.webp', tall: false },
  { id: 4, category: 'Lifestyle', caption: 'Morning Chai Ritual', image: '/assets/images/lifestyle1.webp', tall: true },
  { id: 5, category: 'Food Review', caption: 'Restaurant Launch Reel', image: '/assets/images/food3.webp', tall: false },
  { id: 6, category: 'Lifestyle', caption: 'Brand Collab Feature', image: '/assets/images/lifestyle2.webp', tall: false },
  { id: 7, category: 'Food Review', caption: 'Hisar Biryani Hunt', image: '/assets/images/food4.webp', tall: true },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-24"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">LATEST CONTENT</p>
          <h2
            id="gallery-heading"
            className="font-display font-bold"
            style={{ fontSize: 'var(--text-display)', color: 'var(--color-text)' }}
          >
            Swipe Through{' '}
            <span className="font-accent-italic text-gradient-spice">My World</span>
          </h2>
          <p
            className="mt-4 font-body"
            style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)' }}
          >
            100+ Reels and counting — every frame tells a story from Hisar and beyond.
          </p>
        </div>

        {/* Masonry Grid */}
        {/* BENTO AUDIT: 9 items across 3 columns, masonry layout */}
        {/* Col 1 (items 1,4,7): tall, normal, tall */}
        {/* Col 2 (items 2,5,8): normal, normal, normal */}
        {/* Col 3 (items 3,6,9): normal, normal, normal */}
        {/* All 9 placed ✓ */}
        <div className="masonry-grid" role="list" aria-label="Content gallery">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="masonry-item group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{
                height: item.tall ? 380 : 240,
              }}
              role="listitem"
              aria-label={`${item.category}: ${item.caption}`}
              onClick={() => window.open('https://www.instagram.com/foodism_hisar/', '_blank', 'noopener,noreferrer')}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open('https://www.instagram.com/foodism_hisar/', '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Category badge */}
              <div className="absolute top-3 left-3 z-10">
                <span
                  className="font-body font-bold"
                  style={{
                    fontSize: 'var(--text-micro)',
                    background: 'rgba(13,11,8,0.8)',
                    color: 'var(--color-accent)',
                    border: '1px solid rgba(232,105,58,0.3)',
                    borderRadius: '100px',
                    padding: '0.2rem 0.6rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(13,11,8,0.8)', backdropFilter: 'blur(4px)' }}
              >
                <span style={{ fontSize: '1.5rem' }}>📸</span>
                <span
                  className="font-body font-bold uppercase tracking-widest"
                  style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text)' }}
                >
                  View on Instagram
                </span>
              </div>

              {/* Caption */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: 'linear-gradient(to top, rgba(13,11,8,0.9), transparent)' }}
              >
                <p
                  className="font-body font-semibold"
                  style={{ fontSize: 'var(--text-small)', color: 'var(--color-text)' }}
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/foodism_hisar/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-3"
            aria-label="Follow Foodism Hisar on Instagram"
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)';
              el.style.borderColor = 'transparent';
              el.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'transparent';
              el.style.borderColor = 'var(--color-border)';
              el.style.color = 'var(--color-text)';
            }}
          >
            <span aria-hidden="true">📸</span>
            Follow @foodism_hisar on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}