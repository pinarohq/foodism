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
      <main id="main-content" role="main">
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

      <Footer />

      {/* Floating WhatsApp Button (mobile) */}
      <WhatsAppFloat />
    </>
  );
}