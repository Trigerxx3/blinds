'use client';

import React from 'react';
import { Shield, Sparkles, Cpu, Award, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Shield,
      title: '10-Year Comprehensive Warranty',
      description: 'We stand behind our craftsmanship. Every custom curtain header, track mechanism, and wooden slat is backed by our full decade warranty guarantee.',
    },
    {
      icon: Cpu,
      title: 'Smart Home Motorization',
      description: 'Integration with Somfy, Apple HomeKit, Google Home, and Alexa. Program custom schedule scenes to control solar light automatically.',
    },
    {
      icon: Award,
      title: 'Certified Master Fitters',
      description: 'Our installation team consists exclusively of full-time master craftsmen—never outsourced sub-contractors.',
    },
    {
      icon: Sparkles,
      title: 'Eco-Friendly & Flame Retardant',
      description: 'Oeko-Tex Standard 100 certified textiles free from toxic chemicals, flame retardant NFPA 701, and anti-bacterial coatings.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Mosaic */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury aspect-[4/3] bg-gray-100">
              {/* eslint-disable-next-html-element-access */}
              <img
                src="https://images.unsplash.com/photo-1540518614846-7ede433c5173?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Master Fitting Installation"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-3xl shadow-2xl max-w-xs hidden sm:block border border-white/20">
              <div className="font-serif text-4xl font-bold text-primary-light">15+</div>
              <div className="text-sm font-semibold mt-1">Years of Window Treatment Excellence</div>
              <div className="text-xs text-gray-400 mt-1">Over 10,000+ custom installations completed.</div>
            </div>
          </div>

          {/* Right Column: Narrative & Reasons */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">Uncompromising Quality</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-accent">
                Why Discerning Homeowners Choose Us
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                We believe window coverings are more than light control—they define the architectural soul of your home. From initial consultation to final steam pressing, we deliver luxury at every touchpoint.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-accent">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
