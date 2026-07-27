'use client';

import React from 'react';
import { X, Calendar, MapPin } from 'lucide-react';
import { GalleryItem } from '@/types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onOpenConsultation,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-accent/90 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row relative border border-white/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-accent/60 text-white flex items-center justify-center hover:bg-accent transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Container */}
        <div className="md:w-2/3 bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[480px]">
          {/* eslint-disable-next-html-element-access */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover max-h-[600px]"
          />
        </div>

        {/* Details & CTA Column */}
        <div className="md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-white space-y-6">
          <div className="space-y-4">
            <div className="inline-block bg-primary/10 text-primary font-semibold text-xs px-3 py-1 rounded-full">
              {item.category}
            </div>

            <h3 className="font-serif text-2xl font-bold text-accent leading-tight">
              {item.title}
            </h3>

            {item.location && (
              <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>{item.location}</span>
              </div>
            )}

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>

            {item.productsUsed && item.productsUsed.length > 0 && (
              <div className="pt-2 border-t border-gray-100">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2">
                  Featured Products Used:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.productsUsed.map((p) => (
                    <span key={p} className="bg-secondary text-accent text-xs px-2.5 py-1 rounded-md border border-warmGrey">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full py-3 bg-primary hover:bg-primary-dark text-white text-xs uppercase tracking-wider font-semibold rounded-xl shadow-luxury flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              <span>Get This Look in Your Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
