'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/home/Hero';
import { Highlights } from '@/components/home/Highlights';
import { FeaturedCollections } from '@/components/home/FeaturedCollections';
import { VisualizerPreview } from '@/components/home/VisualizerPreview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Testimonials } from '@/components/home/Testimonials';
import { CallToActionBanner } from '@/components/home/CallToActionBanner';
import { QuoteCalculator } from '@/components/ui/QuoteCalculator';
import { ConsultationModal } from '@/components/ui/ConsultationModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-0">
      <Hero onOpenConsultation={() => setModalOpen(true)} />
      <Highlights />
      
      {/* Interactive Estimator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator onOpenConsultation={() => setModalOpen(true)} />
        </div>
      </section>

      <FeaturedCollections />
      <VisualizerPreview />
      <WhyChooseUs />
      <Testimonials />
      <CallToActionBanner onOpenConsultation={() => setModalOpen(true)} />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
