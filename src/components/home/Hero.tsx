'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, ShieldCheck, Award, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-accent">
      {/* Background High-Res Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-html-element-access */}
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Living Room with Elegant Curtains"
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/75 to-accent/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl space-y-8">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-secondary text-xs sm:text-sm font-medium tracking-wide">
            <Sparkles className="w-4 h-4 text-primary-light animate-spin" style={{ animationDuration: '6s' }} />
            <span>Luxury Custom Window Treatments & Curtains</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Premium Blinds & <br />
            <span className="text-gold-gradient italic font-normal">Curtains</span> for Every Space
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed max-w-2xl">
            Custom-made window solutions that combine style, comfort, and functionality. Designed for homeowners, interior designers, and commercial spaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-glow transition-all transform hover:-translate-y-0.5 group"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all"
            >
              <Mail className="w-4 h-4 text-primary-light" />
              <span>Contact Sales</span>
            </Link>
          </div>

          {/* Social Proof Trust Bar */}
          <div className="pt-8 border-t border-white/15 flex flex-wrap items-center gap-8 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-light" />
              <span>10-Year Warranty</span>
            </div>

            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary-light" />
              <span>Precision Laser Fitting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
