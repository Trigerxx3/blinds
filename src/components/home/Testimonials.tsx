'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-secondary border-t border-warmGrey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Client Reviews</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-accent">
            Trusted by Thousands of Clients
          </h2>
          <p className="text-gray-500 text-sm">
            Read real feedback from homeowners, interior designers, and hotel directors who transformed their windows with Royal Capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-3xl shadow-card border border-warmGrey/70 relative flex flex-col justify-between space-y-6 hover:shadow-luxury transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
                {/* eslint-disable-next-html-element-access */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover shadow-inner"
                />
                <div>
                  <h3 className="font-bold text-sm text-accent">{t.name}</h3>
                  <div className="text-xs text-gray-500">{t.role} • {t.location}</div>
                  <div className="text-[11px] text-primary font-medium mt-0.5">Purchased: {t.productPurchased}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
