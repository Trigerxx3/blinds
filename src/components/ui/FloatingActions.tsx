'use client';

import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

interface FloatingActionsProps {
  onOpenConsultation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenConsultation }) => {
  const whatsappNumber = '18005557890';
  const defaultMsg = encodeURIComponent("Hello Royal Capital! I'm interested in booking a free in-home measurement and consultation for window blinds/curtains.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Free Measurement Quick Button */}
      <button
        onClick={onOpenConsultation}
        className="hidden sm:flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-xs font-semibold px-4 py-3 rounded-full shadow-luxury border border-white/20 transition-all transform hover:scale-105 group"
      >
        <Calendar className="w-4 h-4 text-primary-light group-hover:rotate-12 transition-transform" />
        <span>Book Free Measurement</span>
      </button>

      {/* Floating Direct Call Button */}
      <a
        href="tel:+18005557890"
        aria-label="Call Royal Capital Customer Care"
        className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-luxury transition-all transform hover:scale-110"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-glow transition-all transform hover:scale-110 animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
