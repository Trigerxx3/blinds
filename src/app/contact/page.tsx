'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export default function ContactPage() {
  const { addInquiry } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const targetEmail = 'royalcapitalcurtains@gmail.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Save to Admin Dashboard StoreContext (localStorage)
    addInquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      productInterest: formData.subject,
      roomTypes: ['General Window Inquiry'],
      message: formData.message,
    });

    // 2. Prepare mailto link for direct inbox notification to royalcapitalcurtains@gmail.com
    const emailSubject = encodeURIComponent(`[Website Inquiry] ${formData.name} - ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `NEW INQUIRY SUBMITTED FROM ROYAL CAPITAL WEBSITE\n\n` +
      `----------------------------------------\n` +
      `Client Name: ${formData.name}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Email Address: ${formData.email}\n` +
      `Subject: ${formData.subject}\n` +
      `----------------------------------------\n\n` +
      `Message Details:\n${formData.message}\n\n` +
      `Sent via Royal Capital Contact Form`
    );

    const mailtoUrl = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Trigger default mail app or webmail with pre-filled lead details
      window.location.href = mailtoUrl;
    }, 600);
  };

  const whatsappNumber = '18005557890';
  const defaultMsg = encodeURIComponent("Hello Royal Capital! I would like to make an inquiry regarding your custom blinds and curtains.");

  return (
    <div className="py-16 md:py-24 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Get In Touch</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-accent">
            Contact & Showroom
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Have questions about fabric options, motorization compatibility, or window quotes? Reach out to our design consultants today.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-warmGrey shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-accent text-sm">Direct Phone</h3>
            <p className="text-xs text-gray-500">+1 (800) 555-7890</p>
            <a href="tel:+18005557890" className="text-xs font-semibold text-primary hover:underline block pt-1">
              Call Now →
            </a>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-warmGrey shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <h3 className="font-bold text-accent text-sm">WhatsApp Chat</h3>
            <p className="text-xs text-gray-500">Instant answers from our design desk.</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#25D366] hover:underline block pt-1"
            >
              Start WhatsApp Chat →
            </a>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-warmGrey shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-accent text-sm">Email Consultation</h3>
            <a href={`mailto:${targetEmail}`} className="text-xs text-gray-600 hover:text-primary hover:underline block font-semibold">
              {targetEmail}
            </a>
            <span className="text-xs font-semibold text-primary block pt-1">Responds in &lt; 2 hrs</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-warmGrey shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-accent text-sm">Business Hours</h3>
            <p className="text-xs text-gray-500">Mon - Sat: 9:00 AM - 7:00 PM</p>
            <p className="text-xs text-gray-400">Sunday: By Appointment</p>
          </div>
        </div>

        {/* Main Grid: Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-card border border-warmGrey">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-luxury">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-accent">Inquiry Received & Email Prepared!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-accent">{formData.name}</span>. Your inquiry has been saved to the Admin Dashboard and pre-filled for email dispatch to <strong className="text-primary">{targetEmail}</strong>.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="bg-primary hover:bg-primary-dark text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-luxury"
                  >
                    Send Another Inquiry
                  </button>
                  <a
                    href={`mailto:${targetEmail}?subject=${encodeURIComponent(`[Inquiry] ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`}
                    className="bg-secondary hover:bg-warmGrey text-accent border border-warmGrey font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full flex items-center justify-center gap-1.5"
                  >
                    <span>Re-open Email App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-primary font-bold">Online Inquiry Form</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-accent">
                    Send Us a Direct Message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-accent mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-accent mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 987-6543"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-accent mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@architect.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-accent mb-1.5">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Custom Quotation">Custom Quotation Request</option>
                      <option value="Commercial Project">Commercial / Hotel Project</option>
                      <option value="Motorization Support">Motorization Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-accent mb-1.5">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your window sizes, preferred fabrics, or design ideas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-luxury hover:shadow-glow transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Preparing Email & Saving Lead...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Styled Map Preview & Showroom Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-accent text-white p-8 rounded-3xl shadow-luxury space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-primary/20 text-primary-light px-3 py-1 rounded-full text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Flagship Showroom</span>
              </div>
              <h3 className="font-serif text-2xl font-bold">Visit Our Design Atelier</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Experience full-scale working motorized shades, timber slats, and touch over 500 European fabric bolts.
              </p>
              <div className="pt-2 text-xs text-gray-300 space-y-1 border-t border-white/10">
                <div className="font-semibold text-white">Address:</div>
                <div>458 Luxury Living Blvd, Suite 100, Design District, NY 10001</div>
              </div>
            </div>

            {/* Styled Map Container */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-warmGrey bg-gray-200">
              <iframe
                title="Royal Capital Showroom Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164102!2d-73.98657868459418!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629837262019!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05)' }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
