'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Linkedin, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-accent text-white pt-16 pb-12 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-serif text-xl font-bold shadow-luxury">
                R
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Royal <span className="text-primary-light">Capital</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting premium custom-made window blinds and tailored drapes. Combining luxury fabrics, whisper-quiet motorization, and white-glove installation.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-primary-light transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-primary-light transition-colors">Product Collections</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-light transition-colors">Services & Process</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary-light transition-colors">Project Installation Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-light transition-colors">Contact & Consultation</Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-light/80 hover:text-primary-light hover:underline transition-colors pt-2 border-t border-white/10"
                  title="Store Staff & Admin Portal"
                >
                  <span>Staff Portal 🔒</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-5 pb-2 border-b border-white/10">
              Popular Collections
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/collections?cat=Roller+Blinds" className="hover:text-primary-light transition-colors">Roller & Sunscreen Blinds</Link></li>
              <li><Link href="/collections?cat=Zebra+Blinds" className="hover:text-primary-light transition-colors">Dual-Shade Zebra Blinds</Link></li>
              <li><Link href="/collections?cat=Wooden+Blinds" className="hover:text-primary-light transition-colors">Basswood & Oak Blinds</Link></li>
              <li><Link href="/collections?cat=Motorized+Blinds" className="hover:text-primary-light transition-colors">Somfy Motorized Shades</Link></li>
              <li><Link href="/collections?cat=Blackout+Curtains" className="hover:text-primary-light transition-colors">Heavy Velvet Blackout Curtains</Link></li>
              <li><Link href="/collections?cat=Sheer+Curtains" className="hover:text-primary-light transition-colors">Voile Sheer Linen Drapes</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Working Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white mb-5 pb-2 border-b border-white/10">
              Showroom Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                <span>15 Constitution Ave, Canberra ACT 2601, Australia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-light shrink-0" />
                <span>+61 (02) 6100 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                <a href="mailto:royalcapitalcurtains@gmail.com" className="hover:text-primary-light transition-colors">
                  royalcapitalcurtains@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 pt-2">
                <Clock className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Showroom Hours:</div>
                  <div className="text-xs text-gray-400">Mon - Sat: 9:00 AM - 7:00 PM</div>
                  <div className="text-xs text-gray-400">Sunday: By Appointment</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Banner */}
        <div className="bg-white/5 rounded-2xl p-6 md:p-8 mb-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl font-semibold text-white">Join Our Interior Inspiration Newsletter</h4>
            <p className="text-sm text-gray-300 mt-1">Receive seasonal window styling guides, fabric releases, and exclusive discounts.</p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto flex gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="px-4 py-2.5 rounded-xl text-accent text-sm focus:outline-none focus:ring-2 focus:ring-primary min-w-[260px]"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-medium px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2 text-sm shrink-0"
            >
              {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              <span>{subscribed ? 'Subscribed!' : 'Subscribe'}</span>
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Royal Capital Blinds & Curtains. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Warranty Details</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
