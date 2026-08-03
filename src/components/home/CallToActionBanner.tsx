'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Sparkles } from 'lucide-react';

export const CallToActionBanner: React.FC = () => {
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
          Reach out to our Canberra window design specialists. We will guide you through fabric choices, motorization options, and provide tailored recommendations.
        </p>

        <div className="flex justify-center pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm uppercase tracking-wider px-9 py-4 rounded-full shadow-luxury hover:shadow-glow transition-all transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-white" />
            <span>Send Email Inquiry</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
