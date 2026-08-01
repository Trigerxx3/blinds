'use client';

import React, { useState } from 'react';
import { GalleryItem, RoomCategory } from '@/types';
import { useStore } from '@/context/StoreContext';
import { Maximize2, MapPin } from 'lucide-react';

interface MasonryGalleryProps {
  onSelectItem: (item: GalleryItem) => void;
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({ onSelectItem }) => {
  const { galleryItems } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Hotel', 'Commercial'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                isActive
                  ? 'bg-primary text-white shadow-luxury scale-105'
                  : 'bg-secondary text-gray-600 hover:bg-warmGrey'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Masonry Columns */}
      <div className="masonry-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="masonry-item group relative rounded-3xl overflow-hidden shadow-card border border-warmGrey cursor-pointer bg-accent"
          >
            {/* eslint-disable-next-html-element-access */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
              <span className="bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full self-start mb-2">
                {item.category}
              </span>
              <h3 className="font-serif text-xl font-bold">{item.title}</h3>
              {item.location && (
                <div className="flex items-center gap-1.5 text-xs text-gray-300 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-primary-light" />
                  <span>{item.location}</span>
                </div>
              )}
              <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-primary-light">
                <Maximize2 className="w-4 h-4" />
                <span>View Fullscreen & Details</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
