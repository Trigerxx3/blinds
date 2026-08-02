'use client';

import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Highlights } from '@/components/home/Highlights';
import { FeaturedCollections } from '@/components/home/FeaturedCollections';
import { VisualizerPreview } from '@/components/home/VisualizerPreview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Testimonials } from '@/components/home/Testimonials';
import { CallToActionBanner } from '@/components/home/CallToActionBanner';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <Highlights />
      <FeaturedCollections />
      <VisualizerPreview />
      <WhyChooseUs />
      <Testimonials />
      <CallToActionBanner />
    </div>
  );
}
