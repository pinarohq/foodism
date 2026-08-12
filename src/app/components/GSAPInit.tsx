'use client';

import { useEffect } from 'react';

export default function GSAPInit() {
  useEffect(() => {
    const init = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');

        gsap.registerPlugin(ScrollTrigger);

        // Section reveal animations
        const revealEls = document.querySelectorAll<HTMLElement>(
          '.about-card, .about-para, .newspaper-card, .service-card-reveal'
        );

        revealEls.forEach((el) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            duration: 0.7,
            ease: 'power3.out',
          });
        });

        // About cards stagger
        gsap.from('.about-card', {
          scrollTrigger: {
            trigger: '#about',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 60,
          rotateX: 15,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
        });

        // Section titles
        const sectionTitles = document.querySelectorAll<HTMLElement>('h2');
        sectionTitles.forEach((title) => {
          if (title.closest('#hero')) return;
          gsap.from(title, {
            scrollTrigger: {
              trigger: title,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out',
          });
        });

        // Services cards stagger
        const serviceCards = document.querySelectorAll<HTMLElement>('#services article');
        if (serviceCards.length > 0) {
          gsap.from(serviceCards, {
            scrollTrigger: {
              trigger: '#services',
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 60,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
          });
        }

        // Testimonial cards stagger
        const testimonialCards = document.querySelectorAll<HTMLElement>('#collabs article');
        if (testimonialCards.length > 0) {
          gsap.from(testimonialCards, {
            scrollTrigger: {
              trigger: '#collabs',
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
          });
        }

        // Gallery items stagger
        const galleryItems = document.querySelectorAll<HTMLElement>('.masonry-item');
        if (galleryItems.length > 0) {
          gsap.from(galleryItems, {
            scrollTrigger: {
              trigger: '#gallery',
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 40,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out',
          });
        }

        // Newspaper card rotation entry
        const newspaperCard = document.querySelector<HTMLElement>('.newspaper-card');
        if (newspaperCard) {
          gsap.from(newspaperCard, {
            scrollTrigger: {
              trigger: '#press',
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
            opacity: 0,
            rotate: -5,
            y: 60,
            duration: 0.9,
            ease: 'power3.out',
          });
        }

        // Timeline items stagger
        const timelineItems = document.querySelectorAll<HTMLElement>('#press li');
        if (timelineItems.length > 0) {
          gsap.from(timelineItems, {
            scrollTrigger: {
              trigger: '#press',
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
            opacity: 0,
            x: 30,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
          });
        }

        // Magnetic button effect
        document.querySelectorAll<HTMLElement>('.magnetic').forEach((btn) => {
          btn.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
          });
          btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
          });
        });

        // Hero scroll parallax
        gsap.to('.particles-container', {
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
          y: -80,
          ease: 'none',
        });

      } catch {
        // GSAP unavailable — CSS fallbacks handle visibility
      }
    };

    init();
  }, []);

  return null;
}