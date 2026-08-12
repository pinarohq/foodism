'use client';

import React from 'react';
import PageLoader from './components/PageLoader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsBar from './components/StatsBar';
import ServicesSection from './components/ServicesSection';
import CollabsSection from './components/CollabsSection';
import PressSection from './components/PressSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import FinalCTASection from './components/FinalCTASection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import GSAPInit from './components/GSAPInit';

export default function HomePage() {
  return (
    <>
      {/* Fixed background image — page scrolls over this */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/assets/images/absolute image.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Page Loader */}
      <PageLoader />

      {/* Navigation */}
      <Header />

      {/* GSAP Animations Initializer */}
      <GSAPInit />

      {/* Main Content */}
      <main id="main-content" role="main" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <StatsBar />
        <ServicesSection />
        <CollabsSection />
        <PressSection />
        <GallerySection />
        <ContactSection />
        <FinalCTASection />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      {/* Floating WhatsApp Button (mobile) */}
      <WhatsAppFloat />
    </>
  );
}