'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-accent text-secondary text-xs py-2 px-4 text-center font-medium tracking-wide flex justify-center items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-primary-light" />
        <span>Book a Free In-Home Laser Measurement & Interior Consultation Today</span>
        <span className="hidden md:inline-block font-semibold underline cursor-pointer ml-2" onClick={onOpenConsultation}>
          Claim Free Quote →
        </span>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-3 border-b border-warmGrey'
            : 'bg-white/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-serif text-xl font-bold shadow-luxury group-hover:scale-105 transition-transform">
              L
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-accent leading-none">
                Luxe<span className="text-primary">Shade</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-gray-500 font-medium mt-0.5">
                Blinds & Curtains
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-accent hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+18005557890"
              className="flex items-center gap-2 text-xs font-semibold text-accent hover:text-primary transition-colors px-3 py-2 rounded-lg bg-secondary"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+1 (800) 555-7890</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full shadow-luxury hover:shadow-glow transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Free Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg text-accent hover:bg-secondary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-warmGrey px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-secondary text-primary font-semibold'
                      : 'text-accent hover:bg-secondary/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href="tel:+18005557890"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-accent py-2.5 rounded-xl bg-secondary"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call Us: +1 (800) 555-7890</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-primary hover:bg-primary-dark text-white text-sm uppercase tracking-wider font-semibold rounded-xl shadow-luxury flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Measurement</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
