'use client';

import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import { Mail, CheckCircle2, Sparkles, Ruler, Palette, Scissors, Wrench, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  const iconMap: Record<string, any> = {
    Ruler,
    Palette,
    Scissors,
    Wrench,
    ShieldCheck,
  };

  const processSteps = [
    { step: '01', title: 'Laser Measurement', desc: 'Our technician visits your home with digital laser measuring tools.' },
    { step: '02', title: 'Fabric & Style Selection', desc: 'Compare tactile swatches in your room daylight with our design consultant.' },
    { step: '03', title: 'Custom Atelier Crafting', desc: 'Hand-tailored in our precision workshop down to the exact millimeter.' },
    { step: '04', title: 'White-Glove Installation', desc: 'Clean, silent installation, track testing, and motor app setup.' },
  ];

  return (
    <div className="py-16 md:py-24 bg-white space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-widest text-primary font-bold">End-to-End Solutions</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-accent">
          Our Premier Window Services
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          From initial laser measurement to white-glove installation and lifetime maintenance, we manage every detail with uncompromising care.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Ruler;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-warmGrey shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-html-element-access */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md text-primary flex items-center justify-center shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-accent group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Highlights Checklist */}
                  <ul className="space-y-2 pt-2 border-t border-gray-100">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="w-full mt-4 py-3 bg-secondary hover:bg-primary hover:text-white text-accent font-semibold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-primary group-hover:text-white" />
                    <span>Inquire About Service</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4-Step Process Timeline */}
      <section className="bg-secondary py-20 border-t border-b border-warmGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Our Craftsmanship</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-accent">
              Our 4-Step Process
            </h2>
            <p className="text-gray-500 text-sm">
              How we take your window visions from initial concept to custom installed reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((p, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-warmGrey shadow-card space-y-4 relative">
                <div className="font-serif text-5xl font-bold text-primary/20">{p.step}</div>
                <h3 className="font-serif text-xl font-bold text-accent">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-luxury transition-all transform hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Contact Our Design Atelier</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
