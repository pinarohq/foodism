'use client';

import React, { useState, useCallback } from 'react';

type FormState = {
  name: string;
  brand: string;
  collabType: string;
  budget: string;
  message: string;
  whatsapp: string;
  email: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const COLLAB_TYPES = [
  'Restaurant Review',
  'Brand Promotion',
  'Event Coverage',
  'Travel Feature',
  'Beauty & Lifestyle',
  'Custom Package',
];

const BUDGET_RANGES = [
  'Under ₹2,000',
  '₹2,000 – ₹4,000',
  '₹4,000 – ₹8,000',
  '₹8,000+',
  "Let\'s discuss",
];

const INITIAL_STATE: FormState = {
  name: '',
  brand: '',
  collabType: '',
  budget: '',
  message: '',
  whatsapp: '',
  email: '',
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Your name is required.';
  if (!form.brand.trim()) errors.brand = 'Brand or restaurant name is required.';
  if (!form.collabType) errors.collabType = 'Please select a collab type.';
  if (!form.message.trim() || form.message.trim().length < 20)
    errors.message = 'Please tell us a bit more (at least 20 characters).';
  if (!form.whatsapp.trim() && !form.email.trim())
    errors.whatsapp = 'Please provide at least your WhatsApp number or email.';
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Please enter a valid email address.';
  if (form.whatsapp && !/^[0-9]{10}$/.test(form.whatsapp.replace(/\s/g, '')))
    errors.whatsapp = 'Please enter a valid 10-digit WhatsApp number.';
  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Real-time validation clear
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Hi Foodism Hisar! I want to collab with you.\n\n` +
      `Name: ${form.name}\n` +
      `Brand/Restaurant: ${form.brand}\n` +
      `Collab Type: ${form.collabType}\n` +
      `Budget: ${form.budget || "Let's discuss"}\n\n` +
      `Message: ${form.message}\n\n` +
      `Email: ${form.email || 'Not provided'}`
    );

    const waNumber = '919999999999'; // Placeholder — replace with real number
    const waUrl = `https://wa.me/${waNumber}?text=${msg}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  const inputStyle = (fieldName: keyof FormState) => ({
    background: 'var(--color-surface)',
    border: `1px solid ${errors[fieldName] ? '#E85A5A' : 'var(--color-border)'}`,
    borderRadius: '0.75rem',
    padding: '0.875rem 1.25rem',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-small)',
    color: 'var(--color-text)',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 relative"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Subtle radial bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,105,58,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">LET&apos;S WORK TOGETHER</p>
          <h2
            id="contact-heading"
            className="font-display font-bold"
            style={{ fontSize: 'var(--text-display)', color: 'var(--color-text)' }}
          >
            Have a Collab{' '}
            <span className="font-accent-italic text-gradient-spice">in Mind?</span>
          </h2>
          <p
            className="mt-4 font-body"
            style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)' }}
          >
            Tell me about your brand or restaurant — I&apos;ll respond within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div
              className="text-center py-16 flex flex-col items-center gap-4"
              role="alert"
              aria-live="polite"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
                style={{ background: 'rgba(76,175,80,0.15)', border: '2px solid #4CAF50' }}
              >
                ✓
              </div>
              <h3
                className="font-display font-bold"
                style={{ fontSize: 'var(--text-heading)', color: 'var(--color-text)' }}
              >
                Sent!
              </h3>
              <p
                className="font-body"
                style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)' }}
              >
                ✓ I&apos;ll DM you within 24 hours. WhatsApp has opened — feel free to follow up there too.
              </p>
              <button
                className="btn-secondary mt-4"
                onClick={() => { setSubmitted(false); setForm(INITIAL_STATE); }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
              aria-label="Collaboration inquiry form"
            >
              {/* Screen reader feedback */}
              <div aria-live="polite" aria-atomic="true" className="sr-only" role="status">
                {Object.keys(errors).length > 0 ? 'Please fix the form errors below.' : ''}
              </div>

              {/* Name + Brand */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="font-body font-semibold"
                    style={{ fontSize: 'var(--text-small)', color: 'var(--color-text)' }}
                  >
                    Your Name <span aria-hidden="true" style={{ color: 'var(--color-accent)' }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rahul Sharma"
                    style={inputStyle('name')}
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(232,105,58,0.12)'; }}
                    onBlur={(e) => { e.target.style.borderColor = errors.name ? '#E85A5A' : 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                  />
                  {errors.name && (
                    <span id="name-error" role="alert" style={{ fontSize: 'var(--text-micro)', color: '#E85A5A', fontFamily: 'var(--font-body)' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="brand"
                    className="font-body font-semibold"
                    style={{ fontSize: 'var(--text-small)', color: 'var(--color-text)' }}
                  >
                    Brand / Restaurant Name <span aria-hidden="true" style={{ color: 'var(--color-accent)' }}>*</span>
                  </label>
                  <input
                    id="brand"
                    name="brand"
                    type="text"
                    value={form.brand}
                    onChange={handleChange}
                    placeholder="Spice Garden, Hisar"
                    style={inputStyle('brand')}
                    aria-required="true"
                    aria-describedby={errors.brand ? 'brand-error' : undefined}
                    aria-invalid={!!errors.brand}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(232,105,58,0.12)'; }}
                    onBlur={(e) => { e.target.style.borderColor = errors.brand ? '#E85A5A' : 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                  />
                  {errors.brand && (
                    <span id="brand-error" role="alert" style={{ fontSize: 'var(--text-micro)', color: '#E85A5A', fontFamily: 'var(--font-body)' }}>
                      {errors.brand}
                    </span>
                  )}
                </div>
              </div>

              {/* Collab Type */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="collabType"
                  className="font-body font-semibold"
                  style={{ fontSize: 'var(--text-small)', color: 'var(--color-text)' }}
                >
                  Type of Collab <span aria-hidden="true" style={{ color: 'var(--color-accent)' }}>*</span>
                </label>
                <select
                  id="collabType"
                  name="collabType"
                  value={form.collabType}
                  onChange={handleChange}
                  style={{ ...inputStyle('collabType'), cursor: 'pointer' }}
                  aria-required="true"
                  aria-describedby={errors.collabType ? 'collabType-error' : undefined}
                  aria-invalid={!!errors.collabType}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(232,105,58,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.collabType ? '#E85A5A' : 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                >
                  <option value="" disabled style={{ background: 'var(--color-surface)', color: 'var(--color-text-muted)' }}>
                    Select collab type...
                  </option>
                  {COLLAB_TYPES.map((type) => (
                    <option key={type} value={type} style={{ background: 'var(--color-surface)', color: 'var(--color-text)' }}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.collabType && (
                  <span id="collabType-error" role="alert" style={{ fontSize: 'var(--text-micro)', color: '#E85A5A', fontFamily: 'var(--font-body)' }}>
                      {errors.collabType}
                    </span>
                  )}
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="budget"
                  className="font-body font-semibold"
                  style={{ fontSize: 'var(--text-small)', color: 'var(--color-text)' }}
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  style={{ ...inputStyle('budget'), cursor: 'pointer' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(232,105,58,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                >
                  <option value="" style={{ background: 'var(--color-surface)', color: 'var(--color-text-muted)' }}>
                    Select budget range...
                  </option>
                  {BUDGET_RANGES.map((range) => (
                    <option key={range} value={range} style={{ background: 'var(--color-surface)', color: 'var(--color-text)' }}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-body font-semibold"
                  style={{ fontSize: 'var(--text-small)', color: 'var(--color-text)' }}
                >
                  Your Message <span aria-hidden="true" style={{ color: 'var(--color-accent)' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your brand, what you're looking for, and any specific dates or requirements..."
                  style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 120 }}
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(232,105,58,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.message ? '#E85A5A' : 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                />
                {errors.message && (
                  <span id="message-error" role="alert" style={{ fontSize: 'var(--text-micro)', color: '#E85A5A', fontFamily: 'var(--font-body)' }}>
                    {errors.message}
                  </span>
                )}
              </div>

              {/* WhatsApp + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="whatsapp"
                    className="font-body font-semibold"
                    style={{ fontSize: 'var(--text-small)', color: 'var(--color-text)' }}
                  >
                    WhatsApp Number
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="9876543210"
                    style={inputStyle('whatsapp')}
                    aria-describedby={errors.whatsapp ? 'whatsapp-error' : 'whatsapp-hint'}
                    aria-invalid={!!errors.whatsapp}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(232,105,58,0.12)'; }}
                    onBlur={(e) => { e.target.style.borderColor = errors.whatsapp ? '#E85A5A' : 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                  />
                  <span
                    id="whatsapp-hint"
                    style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    10-digit number, no country code
                  </span>
                  {errors.whatsapp && (
                    <span id="whatsapp-error" role="alert" style={{ fontSize: 'var(--text-micro)', color: '#E85A5A', fontFamily: 'var(--font-body)' }}>
                      {errors.whatsapp}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-body font-semibold"
                    style={{ fontSize: 'var(--text-small)', color: 'var(--color-text)' }}
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="rahul@spicegarden.in"
                    style={inputStyle('email')}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(232,105,58,0.12)'; }}
                    onBlur={(e) => { e.target.style.borderColor = errors.email ? '#E85A5A' : 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                  />
                  {errors.email && (
                    <span id="email-error" role="alert" style={{ fontSize: 'var(--text-micro)', color: '#E85A5A', fontFamily: 'var(--font-body)' }}>
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary btn-shimmer w-full justify-center mt-2"
                style={{
                  fontSize: '1rem',
                  padding: '1.125rem 2rem',
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'wait' : 'pointer',
                }}
                aria-label="Send collaboration request via WhatsApp"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                      style={{ borderColor: 'var(--color-bg)', borderTopColor: 'transparent' }}
                      aria-hidden="true"
                    />
                    Sending...
                  </span>
                ) : (
                  'Send My Collab Request →'
                )}
              </button>

              <p
                className="text-center font-body"
                style={{ fontSize: 'var(--text-micro)', color: 'var(--color-text-muted)' }}
              >
                This will open WhatsApp with your message pre-filled. I respond within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}