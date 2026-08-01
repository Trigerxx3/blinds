'use client';

import React, { useState } from 'react';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/ui/FloatingActions';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { StoreProvider } from '@/context/StoreContext';
import { AdminHotkey } from '@/components/ui/AdminHotkey';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedProductForConsultation, setSelectedProductForConsultation] = useState('');

  const handleOpenConsultation = (productName = '') => {
    setSelectedProductForConsultation(productName);
    setConsultationModalOpen(true);
  };

  return (
    <html lang="en">
      <head>
        <title>Royal Capital | Premium Custom Blinds & Curtains</title>
        <meta
          name="description"
          content="Custom-made window blinds, roller shades, motorized blinds, basswood venetians, and blackout curtains for homes, offices, hotels, and luxury commercial spaces."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased text-accent bg-white min-h-screen flex flex-col justify-between">
        <StoreProvider>
          <div>
            <Navbar onOpenConsultation={() => handleOpenConsultation()} />
            <main>{children}</main>
          </div>

          <Footer />

          <FloatingActions onOpenConsultation={() => handleOpenConsultation()} />
          <AdminHotkey />

          <ConsultationModal
            isOpen={consultationModalOpen}
            onClose={() => setConsultationModalOpen(false)}
            preselectedProduct={selectedProductForConsultation}
          />
        </StoreProvider>
      </body>
    </html>
  );
}
