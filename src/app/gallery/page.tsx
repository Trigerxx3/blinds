'use client';

import React, { useState } from 'react';
import { MasonryGallery } from '@/components/gallery/MasonryGallery';
import { LightboxModal } from '@/components/ui/LightboxModal';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { GalleryItem } from '@/types';

export default function GalleryPage() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="py-16 md:py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Inspiration & Showcase</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-accent">
            Installation Gallery
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Explore real residential and luxury commercial projects crafted and installed by Royal Capital. Filter by room category to draw inspiration for your space.
          </p>
        </div>

        {/* Masonry Grid */}
        <MasonryGallery onSelectItem={(item) => setActiveItem(item)} />

        {/* Lightbox Modal */}
        <LightboxModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* Consultation Booking Modal */}
        <ConsultationModal
          isOpen={consultationOpen}
          onClose={() => setConsultationOpen(false)}
          preselectedProduct={activeItem?.title}
        />
      </div>
    </div>
  );
}
