'use client';

import React, { useState } from 'react';
import { X, Calendar, Check, ShieldCheck, Ruler, User, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { ConsultationFormData } from '@/types';
import { useStore } from '@/context/StoreContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct = '',
}) => {
  const { addInquiry } = useStore();

  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredDate: '',
    preferredTime: 'Morning (9AM - 12PM)',
    roomTypes: ['Living Room'],
    productInterest: preselectedProduct || 'Custom Blinds & Curtains',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const roomOptions = ['Living Room', 'Bedroom', 'Kitchen', 'Office', 'Hotel', 'Commercial'];
  const productOptions = [
    'Custom Blinds & Curtains',
    'Roller Blinds',
    'Zebra Blinds',
    'Roman Blinds',
    'Venetian Blinds',
    'Wooden Blinds',
    'Motorized Blinds',
    'Blackout Curtains',
    'Sheer Curtains',
    'Eyelet Curtains',
    'Pleated Curtains',
    'Bespoke Atelier Curtains',
  ];

  const handleRoomToggle = (room: string) => {
    setFormData((prev) => {
      const exists = prev.roomTypes.includes(room);
      if (exists) {
        return { ...prev, roomTypes: prev.roomTypes.filter((r) => r !== room) };
      } else {
        return { ...prev, roomTypes: [...prev.roomTypes, room] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    addInquiry(formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-accent/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-warmGrey relative">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-accent hover:bg-secondary transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="p-8 md:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-luxury">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-accent">Consultation Booked!</h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Thank you, <span className="font-semibold text-accent">{formData.name}</span>. Our senior designer and laser measurement technician will contact you at <span className="font-semibold text-primary">{formData.phone}</span> within 2 hours to confirm your appointment details.
            </p>

            <div className="bg-secondary p-4 rounded-2xl text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-warmGrey pb-1.5">
                <span className="text-gray-500">Service:</span>
                <span className="font-semibold text-accent">Free Laser Measurement</span>
              </div>
              <div className="flex justify-between border-b border-warmGrey pb-1.5">
                <span className="text-gray-500">Product Interest:</span>
                <span className="font-semibold text-accent">{formData.productInterest}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Selected Rooms:</span>
                <span className="font-semibold text-accent">{formData.roomTypes.join(', ')}</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full text-sm shadow-luxury transition-all"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div className="p-6 md:p-10">
            {/* Header */}
            <div className="mb-6 space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold text-xs px-3 py-1 rounded-full">
                <Ruler className="w-3.5 h-3.5" />
                <span>100% Free - Zero Obligation</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-accent">
                Book Free In-Home Measurement
              </h3>
              <p className="text-gray-500 text-sm">
                Get millimetric window measurement, fabric samples brought to your doorstep, and instant quote calculation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-accent mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-primary" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-accent mb-1.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-primary" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +1 (555) 234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-accent mb-1.5 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-primary" /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-accent mb-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> City / Address
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kensington, Suite 402"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Product Interest Selector */}
              <div>
                <label className="block text-xs font-semibold text-accent mb-1.5">
                  Primary Window Treatment Interest
                </label>
                <select
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                >
                  {productOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Types Selection */}
              <div>
                <label className="block text-xs font-semibold text-accent mb-2">
                  Which Rooms Require Window Solutions?
                </label>
                <div className="flex flex-wrap gap-2">
                  {roomOptions.map((room) => {
                    const isSelected = formData.roomTypes.includes(room);
                    return (
                      <button
                        type="button"
                        key={room}
                        onClick={() => handleRoomToggle(room)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-primary text-white shadow-sm'
                            : 'bg-secondary text-gray-600 hover:bg-warmGrey'
                        }`}
                      >
                        {room} {isSelected && '✓'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-accent mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-accent mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                  >
                    <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                    <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                    <option value="Evening (4PM - 7PM)">Evening (4PM - 7PM)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-accent mb-1.5">
                  Special Notes or Window Dimensions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 3 bay windows, interested in Somfy app motorization..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Guarantee Disclaimer */}
              <div className="flex items-center gap-2 text-xs text-gray-500 bg-secondary/80 p-3 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>Your information is strictly private. We never spam or sell data.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold uppercase tracking-wider text-sm rounded-xl shadow-luxury hover:shadow-glow transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processing Appointment...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm Free Consultation</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
