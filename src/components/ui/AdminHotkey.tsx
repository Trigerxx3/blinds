'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Sparkles, X } from 'lucide-react';

export const AdminHotkey: React.FC = () => {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Hotkey: Ctrl + Shift + A  OR  Cmd + Shift + A
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setShowToast(true);
        setTimeout(() => {
          router.push('/admin');
        }, 600);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  if (!showToast) return null;

  return (
    <div className="fixed top-6 right-6 z-50 bg-accent text-white p-4 rounded-2xl shadow-2xl border border-primary/40 flex items-center gap-3 animate-bounce">
      <div className="w-9 h-9 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center">
        <ShieldCheck className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xs font-bold text-white">Opening Admin Console...</div>
        <div className="text-[10px] text-primary-light font-medium">Redirecting to /admin portal</div>
      </div>
    </div>
  );
};
