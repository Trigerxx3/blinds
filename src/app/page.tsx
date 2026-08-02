'use client';

import React from 'react';
import { Hero } from '@/components/home/Hero';
import { FeaturedCollections } from '@/components/home/FeaturedCollections';
import { VisualizerPreview } from '@/components/home/VisualizerPreview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CallToActionBanner } from '@/components/home/CallToActionBanner';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <FeaturedCollections />
      <VisualizerPreview />
      <WhyChooseUs />
      <CallToActionBanner />
    </div>
  );
}
