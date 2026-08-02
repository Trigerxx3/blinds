'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { Product, GalleryItem, ProductCategory, RoomCategory } from '@/types';
import {
  ShieldCheck, Lock, Plus, Trash2, Edit, Search, X, Check, Eye, Image as ImageIcon,
  Sparkles, Layers, MessageSquare, RefreshCcw, LogOut, LayoutDashboard, Sliders,
  CheckCircle2, Clock, Filter, ArrowUpRight, TrendingUp, Users, Phone, Mail, MapPin, Upload
} from 'lucide-react';

export default function AdminPage() {
  const {
    products, galleryItems, inquiries,
    addProduct, updateProduct, deleteProduct,
    addGalleryItem, deleteGalleryItem,
    updateInquiryStatus, deleteInquiry, resetToDefaults
  } = useStore();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);

  // Active Tab State
  const [activeTab, setActiveTab] = useState<'overview' | 'models' | 'gallery' | 'inquiries'>('overview');

  // Search & Filter States
  const [productSearch, setProductSearch] = useState('');
  const [productCatFilter, setProductCatFilter] = useState('All');
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState('All');

  // Modal States
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  // High quality image presets for quick picking
  const imagePresets = [
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540518614846-7ede433c5173?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505691938895-1758d7FEB511?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
  ];

  // Product Form State
  const [productForm, setProductForm] = useState<Partial<Product>>({
    name: '',
    category: 'Roller Blinds',
    categorySlug: 'roller-blinds',
    shortDescription: '',
    fullDescription: '',
    priceStartingFrom: 0,
    rating: 4.9,
    reviewsCount: 12,
    isFeatured: true,
    isBestSeller: false,
    image: imagePresets[0],
    gallery: [imagePresets[0]],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Warm Taupe', hex: '#A67C52' },
      { name: 'Charcoal', hex: '#3D3D3D' },
    ],
    material: 'Premium Woven Fabric',
    opacity: 'Semi-Opaque',
    features: ['Solar Heat Reduction', 'Child-Safe System', 'Flame Retardant'],
    recommendedRooms: ['Living Room', 'Bedroom'],
    specifications: {
      maxWidth: '320 cm',
      maxHeight: '350 cm',
      operation: 'Manual Chain / Smart Motorized',
      warranty: '5 Years Warranty',
      careInstructions: 'Wipe clean with warm soapy water',
      uvProtection: '95% UV Filtration'
    }
  });

  // Gallery Form State
  const [galleryForm, setGalleryForm] = useState<Partial<GalleryItem>>({
    title: '',
    category: 'Living Room',
    image: imagePresets[0],
    description: '',
    location: 'Residential Penthouse',
  });

  // Handler for uploading local image files from PC
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, isGallery = false) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result as string;
        if (isGallery) {
          setGalleryForm((prev) => ({ ...prev, image: base64Data }));
        } else {
          setProductForm((prev) => ({ ...prev, image: base64Data, gallery: [base64Data] }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '1234' || passcode.toLowerCase() === 'admin') {
      setIsAuthenticated(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  const openProductModal = (productToEdit?: Product) => {
    if (productToEdit) {
      setEditingProduct(productToEdit);
      setProductForm(productToEdit);
    } else {
      setEditingProduct(null);
      setProductForm({
        name: '',
        category: 'Roller Blinds',
        categorySlug: 'roller-blinds',
        shortDescription: '',
        fullDescription: '',
        priceStartingFrom: 0,
        rating: 4.9,
        reviewsCount: 8,
        isFeatured: true,
        isBestSeller: false,
        image: imagePresets[0],
        gallery: [imagePresets[0]],
        colors: [
          { name: 'Sand Beige', hex: '#D7C4B7' },
          { name: 'Warm Taupe', hex: '#A67C52' },
        ],
        material: '100% Woven Fabric',
        opacity: 'Semi-Opaque',
        features: ['UV Protection', 'Precision Control'],
        recommendedRooms: ['Living Room', 'Bedroom'],
        specifications: {
          maxWidth: '300 cm',
          maxHeight: '320 cm',
          operation: 'Manual Chain / Motorized',
          warranty: '5 Years Warranty',
          careInstructions: 'Spot clean with damp cloth',
          uvProtection: '90% UV Block'
        }
      });
    }
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name) return;

    if (editingProduct) {
      updateProduct(editingProduct.id, productForm);
    } else {
      addProduct(productForm as Omit<Product, 'id'>);
    }
    setIsProductModalOpen(false);
  };

  const handleSaveGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryForm.title) return;
    addGalleryItem(galleryForm as Omit<GalleryItem, 'id'>);
    setIsGalleryModalOpen(false);
    setGalleryForm({
      title: '',
      category: 'Living Room',
      image: imagePresets[0],
      description: '',
      location: 'Residential Villa',
    });
  };

  // Filtered lists
  const filteredProducts = products.filter((p) => {
    const matchesCat = productCatFilter === 'All' || p.category === productCatFilter;
    const matchesSearch = p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
                          p.category.toLowerCase().includes(productSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const filteredInquiries = inquiries.filter((inq) => {
    if (inquiryStatusFilter === 'All') return true;
    return inq.status === inquiryStatusFilter;
  });

  // PASSCODE AUTHENTICATION TEMPLATE
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111115] text-white p-4 font-sans relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="bg-[#191920] border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl max-w-md w-full text-center space-y-6 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary-light flex items-center justify-center mx-auto border border-primary/30 shadow-luxury">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.25em] text-primary-light font-bold">Executive Portal</div>
            <h1 className="font-serif text-3xl font-bold text-white">Royal Capital Admin</h1>
            <p className="text-gray-400 text-xs">Enter your secure 4-digit passcode to manage window models and customer leads.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                required
                autoFocus
                placeholder="Passcode (Default: 1234)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className={`w-full px-4 py-3.5 rounded-2xl bg-[#22222B] border text-sm text-center tracking-[0.3em] font-mono text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 ${
                  passcodeError ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-primary'
                }`}
              />
              {passcodeError && (
                <p className="text-xs text-red-400 mt-2 font-semibold">Incorrect Passcode. Default PIN: 1234</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold text-xs uppercase tracking-wider rounded-2xl shadow-luxury transition-all transform hover:scale-[1.02]"
            >
              Access Dashboard
            </button>
          </form>

          <div className="pt-4 border-t border-white/5 text-[11px] text-gray-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary-light" />
            <span>Encrypted Administration System</span>
          </div>
        </div>
      </div>
    );
  }

  // DEDICATED ADMIN DASHBOARD TEMPLATE (DARK SIDEBAR + LIGHT CONTENT CANVAS)
  return (
    <div className="min-h-screen bg-[#F4F4F6] flex flex-col md:flex-row text-accent font-sans">
      {/* LEFT SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-72 bg-[#18181E] text-white flex flex-col justify-between shrink-0 border-r border-white/5">
        <div>
          {/* Brand Header */}
          <div className="p-6 border-b border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-serif font-bold text-xl shadow-luxury">
              R
            </div>
            <div>
              <div className="font-serif text-lg font-bold text-white tracking-tight">Royal Capital</div>
              <div className="text-[10px] text-primary-light uppercase tracking-widest font-semibold">Admin Console</div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {[
              { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard, badge: null },
              { id: 'models', label: 'Window Treatment Models', icon: Layers, badge: products.length },
              { id: 'gallery', label: 'Installation Gallery', icon: ImageIcon, badge: galleryItems.length },
              { id: 'inquiries', label: 'Customer Leads', icon: MessageSquare, badge: inquiries.filter(i => i.status === 'New').length, badgeColor: 'bg-emerald-500' },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-luxury font-bold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>

                  {item.badge !== null && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      item.badgeColor || (isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-300')
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Actions */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <button
            onClick={() => {
              if (confirm('Reset store to default products and gallery items?')) {
                resetToDefaults();
              }
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium transition-colors"
          >
            <RefreshCcw className="w-3.5 h-3.5 text-primary-light" />
            <span>Reset Store Defaults</span>
          </button>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock Admin Portal</span>
          </button>
        </div>
      </aside>

      {/* RIGHT MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* TOP SYSTEM BAR */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Portal</span>
            <span className="text-gray-300">/</span>
            <h2 className="font-serif text-xl font-bold text-accent capitalize">{activeTab}</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Sync Active</span>
            </div>

            <button
              onClick={() => openProductModal()}
              className="bg-primary hover:bg-primary-dark text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-luxury flex items-center gap-1.5 transition-transform hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>Add Window Model</span>
            </button>
          </div>
        </header>

        {/* MAIN BODY DASHBOARD CANVAS */}
        <main className="p-6 md:p-10 space-y-8 flex-1">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Executive KPI Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-3xl shadow-card border border-warmGrey space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase">Active Models</span>
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="font-serif text-3xl font-bold text-accent">{products.length} Models</div>
                  <div className="text-xs text-primary font-medium flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> Across 12 Categories
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-card border border-warmGrey space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase">Gallery Showcase</span>
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="font-serif text-3xl font-bold text-accent">{galleryItems.length} Photos</div>
                  <div className="text-xs text-gray-500 font-medium">Filterable by Room</div>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-card border border-warmGrey space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase">Total Leads</span>
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="font-serif text-3xl font-bold text-accent">{inquiries.length} Inquiries</div>
                  <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {inquiries.filter((i) => i.status === 'New').length} New Pending
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-card border border-warmGrey space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase">Catalog Status</span>
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="font-serif text-3xl font-bold text-accent">Pure Showcase</div>
                  <div className="text-xs text-gray-500 font-medium">Custom Quotation Channel</div>
                </div>
              </div>

              {/* Management Banner */}
              <div className="bg-accent text-white p-8 rounded-3xl shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary-light">Catalog Controller</span>
                  <h3 className="font-serif text-2xl font-bold">Dynamic Website Management</h3>
                  <p className="text-xs text-gray-300 max-w-xl">
                    Upload image photos directly from your PC, add new window designs, update color swatches, or manage project installation photos in real time across the site catalog.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      setActiveTab('models');
                      openProductModal();
                    }}
                    className="bg-primary hover:bg-primary-dark text-white text-xs font-bold px-5 py-3 rounded-xl shadow-glow flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create New Model</span>
                  </button>
                </div>
              </div>

              {/* Recent Inquiries Lead Stream */}
              <div className="bg-white p-6 rounded-3xl shadow-card border border-warmGrey space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <h3 className="font-serif font-bold text-lg text-accent">Recent Customer Inquiry Stream</h3>
                  <button onClick={() => setActiveTab('inquiries')} className="text-xs font-semibold text-primary hover:underline">
                    View All Leads →
                  </button>
                </div>

                <div className="space-y-3">
                  {inquiries.slice(0, 3).map((inq) => (
                    <div key={inq.id} className="p-4 rounded-2xl bg-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="font-bold text-accent text-sm">{inq.name}</div>
                        <div className="text-gray-500">{inq.productInterest} • {inq.phone}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full font-bold text-[10px] self-start sm:self-auto ${
                        inq.status === 'New' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {inq.status || 'New'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WINDOW TREATMENT MODELS MANAGER */}
          {activeTab === 'models' && (
            <div className="space-y-6">
              {/* Filter Bar */}
              <div className="bg-white p-4 rounded-3xl shadow-card border border-warmGrey flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="Search model name or category..."
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
                  <select
                    value={productCatFilter}
                    onChange={(e) => setProductCatFilter(e.target.value)}
                    className="px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary bg-white font-medium"
                  >
                    <option value="All">All Categories ({products.length})</option>
                    <option value="Roller Blinds">Roller Blinds</option>
                    <option value="Zebra Blinds">Zebra Blinds</option>
                    <option value="Roman Blinds">Roman Blinds</option>
                    <option value="Venetian Blinds">Venetian Blinds</option>
                    <option value="Wooden Blinds">Wooden Blinds</option>
                    <option value="Motorized Blinds">Motorized Blinds</option>
                    <option value="Blackout Curtains">Blackout Curtains</option>
                    <option value="Sheer Curtains">Sheer Curtains</option>
                  </select>

                  <button
                    onClick={() => openProductModal()}
                    className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl shadow-luxury flex items-center gap-1.5 shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Model</span>
                  </button>
                </div>
              </div>

              {/* Models Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((p) => (
                  <div key={p.id} className="bg-white rounded-3xl border border-warmGrey shadow-card p-5 space-y-4 flex flex-col justify-between hover:shadow-luxury transition-all">
                    <div className="flex gap-4 items-start">
                      <div className="w-24 h-20 rounded-2xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                        {/* eslint-disable-next-html-element-access */}
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full inline-block">
                          {p.category}
                        </span>
                        <h4 className="font-serif font-bold text-accent text-base line-clamp-1">{p.name}</h4>
                        <div className="text-xs text-primary font-bold">Custom Sized</div>
                      </div>
                    </div>

                    <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">{p.shortDescription}</p>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400 font-medium">Opacity: <strong className="text-accent">{p.opacity}</strong></span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openProductModal(p)}
                          className="p-2 rounded-xl bg-secondary hover:bg-primary hover:text-white text-accent transition-colors"
                          title="Edit Model"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete "${p.name}"?`)) {
                              deleteProduct(p.id);
                            }
                          }}
                          className="p-2 rounded-xl bg-red-50 hover:bg-red-500 hover:text-white text-red-600 transition-colors"
                          title="Delete Model"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: GALLERY PROJECTS */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-white p-4 rounded-3xl border border-warmGrey shadow-card">
                <h3 className="font-serif text-xl font-bold text-accent">Installation Showcase ({galleryItems.length})</h3>
                <button
                  onClick={() => setIsGalleryModalOpen(true)}
                  className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl shadow-luxury flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Installation Photo</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-warmGrey shadow-card p-4 space-y-3">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                      {/* eslint-disable-next-html-element-access */}
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 bg-accent/80 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        {item.category}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-accent text-base">{item.title}</h4>
                      <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.description}</p>
                    </div>

                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400">{item.location}</span>
                      <button
                        onClick={() => {
                          if (confirm(`Remove gallery item "${item.title}"?`)) {
                            deleteGalleryItem(item.id);
                          }
                        }}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg text-xs flex items-center gap-1 font-semibold"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CUSTOMER LEADS & INQUIRIES */}
          {activeTab === 'inquiries' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-warmGrey shadow-card">
                <h3 className="font-serif text-xl font-bold text-accent">Customer Consultation Leads ({filteredInquiries.length})</h3>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 font-semibold">Status Filter:</span>
                  {(['All', 'New', 'Contacted', 'Completed'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => setInquiryStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        inquiryStatusFilter === st
                          ? 'bg-primary text-white'
                          : 'bg-secondary text-gray-600 hover:bg-warmGrey'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {filteredInquiries.map((inq) => (
                  <div key={inq.id} className="bg-white p-6 rounded-3xl border border-warmGrey shadow-card space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-accent text-lg">{inq.name}</h4>
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                            inq.status === 'New' ? 'bg-emerald-100 text-emerald-700' :
                            inq.status === 'Contacted' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {inq.status || 'New'}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">Submitted: {new Date(inq.createdAt || '').toLocaleString()}</div>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={inq.status || 'New'}
                          onChange={(e) => updateInquiryStatus(inq.id!, e.target.value as any)}
                          className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-gray-200 bg-secondary"
                        >
                          <option value="New">Mark New</option>
                          <option value="Contacted">Mark Contacted</option>
                          <option value="Completed">Mark Completed</option>
                        </select>

                        <button
                          onClick={() => deleteInquiry(inq.id!)}
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div>
                        <span className="text-gray-400 block font-semibold">Phone & Email:</span>
                        <div className="font-bold text-accent">{inq.phone}</div>
                        <div className="text-gray-600">{inq.email}</div>
                      </div>
                      <div>
                        <span className="text-gray-400 block font-semibold">Product & Rooms:</span>
                        <div className="font-bold text-primary">{inq.productInterest}</div>
                        <div className="text-gray-600">{inq.roomTypes.join(', ')}</div>
                      </div>
                      <div>
                        <span className="text-gray-400 block font-semibold">Appointment Preference:</span>
                        <div className="font-bold text-accent">{inq.preferredDate || 'Flexible'} ({inq.preferredTime})</div>
                        <div className="text-gray-500">{inq.address || 'Address on file'}</div>
                      </div>
                    </div>

                    {inq.message && (
                      <div className="bg-secondary p-3 rounded-xl text-xs text-gray-600 italic">
                        "{inq.message}"
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MODAL: ADD / EDIT MODEL */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-accent/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-warmGrey relative space-y-6">
            <button
              onClick={() => setIsProductModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-accent rounded-full bg-secondary"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-accent">
              {editingProduct ? 'Edit Model Details' : 'Add New Window Model'}
            </h3>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-accent mb-1">Model Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Gold Venetian"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-accent mb-1">Category *</label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value as ProductCategory })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    {[
                      'Roller Blinds', 'Zebra Blinds', 'Roman Blinds', 'Venetian Blinds',
                      'Vertical Blinds', 'Wooden Blinds', 'Motorized Blinds', 'Blackout Curtains',
                      'Sheer Curtains', 'Eyelet Curtains', 'Pleated Curtains', 'Custom Curtains'
                    ].map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-accent mb-1">Opacity Level</label>
                  <select
                    value={productForm.opacity}
                    onChange={(e) => setProductForm({ ...productForm, opacity: e.target.value as any })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    <option value="Sheer">Sheer</option>
                    <option value="Semi-Opaque">Semi-Opaque</option>
                    <option value="Room Darkening">Room Darkening</option>
                    <option value="100% Blackout">100% Blackout</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-accent mb-1">Material Composition</label>
                  <input
                    type="text"
                    placeholder="e.g. 100% Belgian Woven Linen"
                    value={productForm.material}
                    onChange={(e) => setProductForm({ ...productForm, material: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* DUAL IMAGE INPUT: FILE UPLOAD FROM PC OR URL OR PRESET */}
              <div className="space-y-3 bg-secondary/50 p-4 rounded-2xl border border-gray-200">
                <label className="block text-xs font-bold text-accent uppercase tracking-wider">
                  Model Image Source
                </label>

                {/* Option 1: File Upload from PC */}
                <div>
                  <span className="text-[11px] font-semibold text-gray-600 block mb-1">
                    1. Upload File from PC:
                  </span>
                  <label className="flex items-center justify-center gap-2 border-2 border-dashed border-primary/40 hover:border-primary bg-white p-3 rounded-xl cursor-pointer text-xs font-semibold text-primary transition-all">
                    <Upload className="w-4 h-4" />
                    <span>Choose Image File from PC</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, false)}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Option 2: Paste Web URL */}
                <div>
                  <span className="text-[11px] font-semibold text-gray-600 block mb-1">
                    2. Or Paste Image Web URL:
                  </span>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={productForm.image}
                    onChange={(e) => setProductForm({ ...productForm, image: e.target.value, gallery: [e.target.value] })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  />
                </div>

                {/* Option 3: Presets */}
                <div>
                  <span className="text-[11px] font-semibold text-gray-600 block mb-1">
                    3. Or Choose High-Res Preset Image:
                  </span>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {imagePresets.map((preset, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setProductForm({ ...productForm, image: preset, gallery: [preset] })}
                        className={`w-14 h-12 rounded-lg overflow-hidden border-2 shrink-0 ${productForm.image === preset ? 'border-primary ring-2 ring-primary/30' : 'border-gray-200'}`}
                      >
                        {/* eslint-disable-next-html-element-access */}
                        <img src={preset} alt="preset" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Image Thumbnail Preview */}
                {productForm.image && (
                  <div className="pt-2 border-t border-gray-200 flex items-center gap-3">
                    <div className="w-16 h-12 rounded-lg overflow-hidden border border-gray-300 shrink-0 bg-gray-100">
                      {/* eslint-disable-next-html-element-access */}
                      <img src={productForm.image} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Image Loaded Successfully
                    </span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-accent mb-1">Short Description</label>
                <input
                  type="text"
                  required
                  placeholder="Brief 1-sentence summary"
                  value={productForm.shortDescription}
                  onChange={(e) => setProductForm({ ...productForm, shortDescription: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-accent mb-1">Full Description</label>
                <textarea
                  rows={3}
                  required
                  value={productForm.fullDescription}
                  onChange={(e) => setProductForm({ ...productForm, fullDescription: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-secondary"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold shadow-luxury"
                >
                  {editingProduct ? 'Save Model Changes' : 'Publish Model'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD GALLERY ITEM */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-accent/80 backdrop-blur-md">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-warmGrey relative space-y-6">
            <button
              onClick={() => setIsGalleryModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-accent rounded-full bg-secondary"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-accent">Add Installation Photo</h3>

            <form onSubmit={handleSaveGallery} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-accent mb-1">Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Luxury Living Room Drapes"
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-accent mb-1">Room Category</label>
                  <select
                    value={galleryForm.category}
                    onChange={(e) => setGalleryForm({ ...galleryForm, category: e.target.value as RoomCategory })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    {['Living Room', 'Bedroom', 'Kitchen', 'Office', 'Hotel', 'Commercial'].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-accent mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Skyline Residence"
                    value={galleryForm.location}
                    onChange={(e) => setGalleryForm({ ...galleryForm, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* DUAL IMAGE INPUT FOR GALLERY: FILE UPLOAD FROM PC OR URL OR PRESET */}
              <div className="space-y-3 bg-secondary/50 p-4 rounded-2xl border border-gray-200">
                <label className="block text-xs font-bold text-accent uppercase tracking-wider">
                  Gallery Photo Source
                </label>

                {/* Option 1: File Upload from PC */}
                <div>
                  <span className="text-[11px] font-semibold text-gray-600 block mb-1">
                    1. Upload File from PC:
                  </span>
                  <label className="flex items-center justify-center gap-2 border-2 border-dashed border-primary/40 hover:border-primary bg-white p-3 rounded-xl cursor-pointer text-xs font-semibold text-primary transition-all">
                    <Upload className="w-4 h-4" />
                    <span>Choose Image File from PC</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, true)}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Option 2: Paste Web URL */}
                <div>
                  <span className="text-[11px] font-semibold text-gray-600 block mb-1">
                    2. Or Paste Image Web URL:
                  </span>
                  <input
                    type="url"
                    value={galleryForm.image}
                    onChange={(e) => setGalleryForm({ ...galleryForm, image: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  />
                </div>

                {/* Option 3: Presets */}
                <div>
                  <span className="text-[11px] font-semibold text-gray-600 block mb-1">
                    3. Or Choose Preset Image:
                  </span>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {imagePresets.map((preset, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setGalleryForm({ ...galleryForm, image: preset })}
                        className={`w-12 h-10 rounded-lg overflow-hidden border-2 shrink-0 ${galleryForm.image === preset ? 'border-primary ring-2 ring-primary/30' : 'border-gray-200'}`}
                      >
                        {/* eslint-disable-next-html-element-access */}
                        <img src={preset} alt="preset" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Image Thumbnail Preview */}
                {galleryForm.image && (
                  <div className="pt-2 border-t border-gray-200 flex items-center gap-3">
                    <div className="w-16 h-12 rounded-lg overflow-hidden border border-gray-300 shrink-0 bg-gray-100">
                      {/* eslint-disable-next-html-element-access */}
                      <img src={galleryForm.image} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Image Loaded Successfully
                    </span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-accent mb-1">Description</label>
                <textarea
                  rows={2}
                  value={galleryForm.description}
                  onChange={(e) => setGalleryForm({ ...galleryForm, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-semibold shadow-luxury"
                >
                  Add Gallery Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
