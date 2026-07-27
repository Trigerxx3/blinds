'use client';

import React from 'react';
import { Gem, Ruler, Wrench, Tag } from 'lucide-react';

export const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: Gem,
      title: 'Premium Quality Materials',
      description: 'Imported European linens, 100% blackout velvet, and kiln-dried sustainable basswood engineered to endure.',
    },
    {
      icon: Ruler,
      title: 'Custom Measurements',
      description: 'Millimetric laser site surveys to guarantee exact window casing fit with zero gaps or light spills.',
    },
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'White-glove installation by certified technicians equipped with concealed ceiling track anchors.',
    },
    {
      icon: Tag,
      title: 'Affordable Direct Pricing',
      description: 'Factory-direct transparent pricing with zero middleman markup and lifetime maintenance support.',
    },
  ];

  return (
    <section className="py-16 bg-secondary border-b border-warmGrey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-card border border-warmGrey/60 hover:shadow-luxury transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-accent mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
