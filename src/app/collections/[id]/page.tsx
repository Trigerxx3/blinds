'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { productsData } from '@/data/products';
import { Star, ShieldCheck, Calendar, ArrowLeft, Check, Sparkles, Ruler, Sun, RefreshCw } from 'lucide-react';
import { ConsultationModal } from '@/components/ui/ConsultationModal';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const product = productsData.find((p) => p.id === id) || productsData[0];

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="py-12 md:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Collections</span>
        </Link>

        {/* Top Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-luxury border border-warmGrey bg-gray-100">
              {/* eslint-disable-next-html-element-access */}
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover animate-fadeIn"
              />
              <div className="absolute top-4 left-4 bg-accent/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-24 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === img
                        ? 'border-primary ring-2 ring-primary/30'
                        : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    {/* eslint-disable-next-html-element-access */}
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Overview & Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-accent">{product.rating}</span>
                <span className="text-xs text-gray-400">({product.reviewsCount} reviews)</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-accent">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Starting from</span>
                <span className="font-serif text-3xl font-bold text-primary">${product.priceStartingFrom}</span>
                <span className="text-xs text-gray-500">/ window (fitted)</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed border-t border-b border-gray-100 py-4">
              {product.fullDescription}
            </p>

            {/* Color Swatch Selector */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-accent uppercase tracking-wider">Available Color Finish:</span>
                <span className="font-bold text-primary">{selectedColor?.name}</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.colors.map((color, idx) => {
                  const isSelected = selectedColor?.name === color.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      title={color.name}
                      className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? 'border-primary ring-2 ring-primary/30 scale-110'
                          : 'border-gray-200 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {isSelected && <Check className="w-4 h-4 text-white drop-shadow" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Key Specs Pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-secondary p-3 rounded-2xl border border-warmGrey text-xs">
                <span className="text-gray-400 block font-medium">Material:</span>
                <span className="font-bold text-accent truncate block">{product.material}</span>
              </div>
              <div className="bg-secondary p-3 rounded-2xl border border-warmGrey text-xs">
                <span className="text-gray-400 block font-medium">Opacity Level:</span>
                <span className="font-bold text-accent block">{product.opacity}</span>
              </div>
            </div>

            {/* Recommended Rooms */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider block">
                Recommended Rooms:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.recommendedRooms.map((room) => (
                  <span
                    key={room}
                    className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {room}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Booking CTA */}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold text-xs uppercase tracking-wider rounded-2xl shadow-luxury hover:shadow-glow transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Measurement for This Product</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>100% Free Consultation • Includes sample kit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Detailed Tabs: Specs & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12 border-t border-gray-100">
          {/* Key Features List */}
          <div className="bg-secondary p-8 rounded-3xl border border-warmGrey space-y-4">
            <h3 className="font-serif text-2xl font-bold text-accent flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Product Features & Craftsmanship</span>
            </h3>
            <ul className="space-y-3">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications Table */}
          <div className="bg-white p-8 rounded-3xl border border-warmGrey shadow-card space-y-4">
            <h3 className="font-serif text-2xl font-bold text-accent flex items-center gap-2">
              <Ruler className="w-5 h-5 text-primary" />
              <span>Technical Specifications</span>
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Max Width Capacity:</span>
                <span className="font-bold text-accent">{product.specifications.maxWidth}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Max Height Drop:</span>
                <span className="font-bold text-accent">{product.specifications.maxHeight}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Operation Options:</span>
                <span className="font-bold text-accent">{product.specifications.operation}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">UV Protection:</span>
                <span className="font-bold text-accent">{product.specifications.uvProtection}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Warranty Coverage:</span>
                <span className="font-bold text-accent">{product.specifications.warranty}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-500 font-medium">Care & Cleaning:</span>
                <span className="font-bold text-accent text-right max-w-xs">{product.specifications.careInstructions}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedProduct={product.name}
      />
    </div>
  );
}
