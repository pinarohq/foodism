'use client';

import React from 'react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20Foodism%20Hisar!%20I%20want%20to%20collab%20with%20you."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float md:hidden"
      aria-label="Chat with Foodism Hisar on WhatsApp"
    >
      <span aria-hidden="true" style={{ fontSize: '1.2rem' }}>💬</span>
      <span>WhatsApp Me</span>
    </a>
  );
}