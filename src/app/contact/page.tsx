'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, Sparkles, ExternalLink, Globe, Truck } from 'lucide-react';
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

  return (
    <div className="py-16 md:py-24 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Get In Touch</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-accent">
            Contact & Support
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Have a question about custom measurements, fabrics, or motorization? Royal Capital is an online store based in Canberra. Contact our expert design team directly.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-warmGrey shadow-card space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-accent text-base">Email Consultation</h3>
            <a href={`mailto:${targetEmail}`} className="text-sm text-primary font-semibold hover:underline block">
              {targetEmail}
            </a>
            <span className="text-xs text-gray-400 block pt-1">Our design consultants respond within 2 hours</span>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-warmGrey shadow-card space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-accent text-base">Customer Support Hours</h3>
            <p className="text-sm text-gray-600 font-semibold">Mon - Sat: 9:00 AM - 7:00 PM</p>
            <p className="text-xs text-gray-400">Sunday: Online Inquiries Welcome</p>
          </div>
        </div>

        {/* Main Grid: Form & Info */}
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

          {/* Right Column: Online Store Info & Regional Service */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-accent text-white p-8 rounded-3xl shadow-luxury space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-primary/20 text-primary-light px-3 py-1 rounded-full text-xs font-semibold">
                <Globe className="w-3.5 h-3.5" />
                <span>Online Store Based in Canberra</span>
              </div>
              <h3 className="font-serif text-2xl font-bold">Canberra-Based Online Specialist</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Royal Capital is a premier online store operating out of Canberra, ACT. We offer virtual design consultations, fabric sample deliveries to your door, and custom measure-to-fit window solutions.
              </p>
              <div className="pt-2 text-xs text-gray-300 space-y-1 border-t border-white/10">
                <div className="font-semibold text-white">Location:</div>
                <div>Online Store based in Canberra, ACT, Australia</div>
              </div>
            </div>

            {/* Online Service Highlights Card */}
            <div className="bg-white p-8 rounded-3xl shadow-card border border-warmGrey space-y-4">
              <h4 className="font-serif text-xl font-bold text-accent">How Our Online Service Works</h4>
              <ul className="space-y-4 text-xs text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <strong className="text-accent block text-sm mb-0.5">Online & Remote Consultation</strong>
                    Speak with our Canberra-based window specialists to select fabrics and verify window dimensions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <strong className="text-accent block text-sm mb-0.5">Custom Tailored to Order</strong>
                    Every blind and drape is crafted to your exact specifications in our precision workshop.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <strong className="text-accent block text-sm mb-0.5">Direct Delivery & Installation Support</strong>
                    Fast delivery across Canberra, ACT, and surrounding regional areas with complete installation guidance.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
