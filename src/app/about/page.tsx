'use client';

import React, { useState } from 'react';
import { Award, Users, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { ConsultationModal } from '@/components/ui/ConsultationModal';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const teamMembers = [
    {
      name: 'Julian Vance',
      role: 'Founder & Principal Designer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
      bio: '20+ years in architectural drapery design across London, New York, and Dubai.',
    },
    {
      name: 'Alexander Sterling',
      role: 'Master Technical Fitter & Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      bio: 'Specialist in Somfy motorized systems and complex double-height void window installations.',
    },
    {
      name: 'Elena Rostova',
      role: 'Head Textile Curator',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
      bio: 'Curates organic Belgian linens, Italian velvet, and flame-retardant commercial textiles.',
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-white space-y-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Our Heritage & Craft</span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-accent leading-tight">
              Crafting Window Perfection Since 2011
            </h1>
            <p className="text-gray-600 text-base leading-relaxed font-light">
              LuxeShade was born from a simple conviction: custom window treatments should combine architectural elegance, effortless daylight control, and white-glove personal service.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              What started as a small drapery atelier has grown into a premier window solutions provider trusted by homeowners, interior designers, five-star hotels, and commercial developments.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-primary">15+</div>
                <div className="text-xs text-gray-500 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-primary">10k+</div>
                <div className="text-xs text-gray-500 font-medium">Windows Fitted</div>
              </div>
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-primary">99.4%</div>
                <div className="text-xs text-gray-500 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100">
              {/* eslint-disable-next-html-element-access */}
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                alt="LuxeShade Atelier Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-secondary py-20 border-t border-b border-warmGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-card border border-warmGrey space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-accent">Our Mission</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                To elevate everyday indoor living through tailored light management, thermal comfort, and timeless textile aesthetics. We deliver precision-engineered blinds and custom curtains with zero stress and complete transparency.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-card border border-warmGrey space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-accent">Our Vision</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                To remain the gold standard in bespoke window treatments—continuously pushing boundaries in smart home automation, eco-sustainable fabrics, and architectural window design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Expert Leadership</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-accent">Meet Our Team</h2>
          <p className="text-gray-500 text-sm">
            Passionate artisans, interior consultants, and certified technical installers dedicated to window perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-warmGrey shadow-card hover:shadow-luxury transition-all duration-300 group">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                {/* eslint-disable-next-html-element-access */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-bold text-accent">{member.name}</h3>
                <div className="text-xs font-semibold text-primary">{member.role}</div>
                <p className="text-gray-500 text-xs leading-relaxed pt-2 border-t border-gray-100">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-accent text-white p-10 md:p-16 rounded-3xl shadow-luxury space-y-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold max-w-2xl mx-auto">
          Why Over 10,000 Clients Trust LuxeShade
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-2">
            <ShieldCheck className="w-6 h-6 text-primary-light" />
            <h3 className="font-bold text-base">10-Year Warranty</h3>
            <p className="text-xs text-gray-300">Full replacement coverage on all mechanical hardware and tracks.</p>
          </div>
          <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-2">
            <Award className="w-6 h-6 text-primary-light" />
            <h3 className="font-bold text-base">Master Fitters</h3>
            <p className="text-xs text-gray-300">Certified technicians ensuring millimeter-exact window installations.</p>
          </div>
          <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-2">
            <Users className="w-6 h-6 text-primary-light" />
            <h3 className="font-bold text-base">In-Home Consultation</h3>
            <p className="text-xs text-gray-300">Fabric sample catalog brought directly to your room daylight.</p>
          </div>
          <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-2">
            <CheckCircle2 className="w-6 h-6 text-primary-light" />
            <h3 className="font-bold text-base">Transparent Pricing</h3>
            <p className="text-xs text-gray-300">Guaranteed fixed quotes with zero hidden surprises or extras.</p>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
