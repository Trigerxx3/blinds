'use client';

import React from 'react';
import { Calendar, Phone, Sparkles } from 'lucide-react';

interface CallToActionBannerProps {
  onOpenConsultation: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onOpenConsultation }) => {
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
          Schedule your free in-home measurement. Our designer will arrive with actual fabric samples, provide expert window advice, and offer an instant guaranteed price quote.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-glow transition-all transform hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Free Laser Measurement</span>
          </button>

          <a
            href="tel:+18005557890"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full border border-white/20 transition-all"
          >
            <Phone className="w-4 h-4 text-primary-light" />
            <span>Speak with a Consultant</span>
          </a>
        </div>
      </div>
    </section>
  );
};
