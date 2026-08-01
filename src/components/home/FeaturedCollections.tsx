'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Eye } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export const FeaturedCollections: React.FC = () => {
  const { products } = useStore();
  const featured = products.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Curated Selections</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-accent">
              Featured Collections
            </h2>
            <p className="text-gray-500 text-sm max-w-xl">
              Explore our most sought-after window blinds and custom drapery tailored for high-end residential and luxury commercial spaces.
            </p>
          </div>

          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm group"
          >
            <span>View All 12 Collections</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-warmGrey shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {/* eslint-disable-next-html-element-access */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-accent/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                  {product.isBestSeller && (
                    <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Best Seller
                    </span>
                  )}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-accent shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-accent group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Starting from</span>
                    <span className="font-serif text-2xl font-bold text-accent">${product.priceStartingFrom}</span>
                  </div>

                  <Link
                    href={`/collections/${product.id}`}
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-primary hover:text-white text-accent font-semibold text-xs px-4 py-2.5 rounded-xl transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
