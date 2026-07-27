'use client';

import React, { useState } from 'react';
import { Eye, Sparkles, Check } from 'lucide-react';

interface Swatch {
  id: string;
  name: string;
  category: string;
  opacity: string;
  hex: string;
  image: string;
  description: string;
}

export const VisualizerPreview: React.FC = () => {
  const swatches: Swatch[] = [
    {
      id: 'swatch-1',
      name: 'Organic Belgian Flax Linen',
      category: 'Sheer & Roman Curtains',
      opacity: 'Semi-Opaque Diffuse',
      hex: '#C2B69D',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
      description: 'Breaths organic warmth with natural linen slub texture and soft sun diffusion.',
    },
    {
      id: 'swatch-2',
      name: 'Royal Emerald Velvet',
      category: 'Blackout Curtains',
      opacity: '100% Total Blackout',
      hex: '#1C3B2B',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      description: 'Deep jewel tone velvet with triple-pass blackout thermal lining for master bedrooms.',
    },
    {
      id: 'swatch-3',
      name: 'Honey Basswood Timber',
      category: 'Wooden Venetian Blinds',
      opacity: 'Room Darkening Slats',
      hex: '#C68B45',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
      description: 'Sustainably harvested North American basswood with authentic hardwood grain finish.',
    },
    {
      id: 'swatch-4',
      name: 'Architectural Solar Screen',
      category: 'Sunscreen Roller Blinds',
      opacity: '5% Openness Screen',
      hex: '#D7C4B7',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      description: 'High-density solar screen reflecting 95% heat while preserving outdoor cityscape views.',
    },
  ];

  const [activeSwatch, setActiveSwatch] = useState<Swatch>(swatches[0]);

  return (
    <section className="py-24 bg-secondary border-t border-b border-warmGrey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Interactive Experience</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-accent">
            Fabric & Material Studio
          </h2>
          <p className="text-gray-500 text-sm">
            Select tactile fabric swatches below to preview how different textures transform room daylight and ambiance.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-card border border-warmGrey grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Swatch Selection Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-accent">{activeSwatch.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-primary">{activeSwatch.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-gray-500">{activeSwatch.opacity}</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {activeSwatch.description}
            </p>

            {/* Swatch Selector Cards */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider block">
                Select Fabric Texture:
              </span>
              <div className="grid grid-cols-2 gap-3">
                {swatches.map((swatch) => {
                  const isSelected = activeSwatch.id === swatch.id;
                  return (
                    <button
                      key={swatch.id}
                      onClick={() => setActiveSwatch(swatch)}
                      className={`p-3 rounded-2xl text-left border transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'border-primary bg-primary/5 shadow-sm ring-2 ring-primary/20'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full shadow-inner shrink-0 relative flex items-center justify-center"
                        style={{ backgroundColor: swatch.hex }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-white drop-shadow" />}
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-accent truncate">{swatch.name}</div>
                        <div className="text-[10px] text-gray-400 truncate">{swatch.category}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Visualizer Image Display */}
          <div className="lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury border border-warmGrey bg-accent">
            {/* eslint-disable-next-html-element-access */}
            <img
              key={activeSwatch.id}
              src={activeSwatch.image}
              alt={activeSwatch.name}
              className="w-full h-full object-cover animate-fadeIn"
            />
            <div className="absolute bottom-4 left-4 bg-accent/80 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary-light" />
              <span>Real Installation Preview: {activeSwatch.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
