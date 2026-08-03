'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const whatsappNumber = '61261007890';
  const defaultMsg = encodeURIComponent("Hello Royal Capital! I'm interested in learning more about your custom window blinds and curtains collection in Canberra.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Direct Call Button */}
      <a
        href="tel:+61261007890"
        aria-label="Call Royal Capital Customer Care"
        className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-luxury transition-all transform hover:scale-110"
        title="Call Royal Capital Canberra"
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
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
