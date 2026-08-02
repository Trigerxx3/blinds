'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';

export const CallToActionBanner: React.FC = () => {
  const whatsappNumber = '18005557890';
  const defaultMsg = encodeURIComponent("Hello Royal Capital! I would like to inquire about custom blinds and curtains for my space.");

  return (
    <section className="relative py-20 bg-accent text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A67C52_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-light border border-primary/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Transform Your Windows Today</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold max-w-3xl mx-auto leading-tight">
          Ready to Experience Custom Luxury for Your Home?
        </h2>

        <p className="text-gray-300 text-base max-w-xl mx-auto font-light leading-relaxed">
          Reach out to our window design specialists. We will guide you through fabric choices, motorization options, and provide a transparent custom quote.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-glow transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full border border-white/20 transition-all"
          >
            <Phone className="w-4 h-4 text-primary-light" />
            <span>Contact Showroom</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
