'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { Product, GalleryItem, ProductCategory, RoomCategory, ProductColor } from '@/types';
import {
  Lock, Key, ShieldCheck, Plus, Trash2, Edit, Search, Check, X, Eye, Image as ImageIcon,
  Sparkles, Layers, MessageSquare, RefreshCcw, LogOut, CheckCircle, Clock, Filter, ArrowRight
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

  // Product Form State
  const [productForm, setProductForm] = useState<Partial<Product>>({
    name: '',
    category: 'Roller Blinds',
    categorySlug: 'roller-blinds',
    shortDescription: '',
    fullDescription: '',
    priceStartingFrom: 99,
    rating: 4.9,
    reviewsCount: 12,
    isFeatured: true,
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Warm Taupe', hex: '#A67C52' },
      { name: 'Charcoal', hex: '#3D3D3D' },
    ],
    material: 'Premium Woven Polyester',
    opacity: 'Semi-Opaque',
    features: ['UV Filtering', 'Child-Safe Control', 'Flame Retardant'],
    recommendedRooms: ['Living Room', 'Bedroom'],
    specifications: {
      maxWidth: '300 cm',
      maxHeight: '350 cm',
      operation: 'Manual Chain / Motorized',
      warranty: '5 Years Warranty',
      careInstructions: 'Wipe clean with soft damp cloth',
      uvProtection: '95% UV Filtration'
    }
  });

  // Gallery Form State
  const [galleryForm, setGalleryForm] = useState<Partial<GalleryItem>>({
    title: '',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    description: '',
    location: 'Residential Residence',
  });

  // Preset Image Options for quick selection
  const imagePresets = [
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540518614846-7ede433c5173?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505691938895-1758d7FEB511?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '1234' || passcode.toLowerCase() === 'admin') {
      setIsAuthenticated(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  // Open product form for create or edit
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
        priceStartingFrom: 99,
        rating: 4.9,
        reviewsCount: 10,
        isFeatured: true,
        isBestSeller: false,
        image: imagePresets[0],
        gallery: [imagePresets[0]],
        colors: [
          { name: 'Warm Beige', hex: '#D7C4B7' },
          { name: 'Luxe Taupe', hex: '#A67C52' },
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

  // Passcode Auth Gatekeeper Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-secondary py-16 px-4">
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-luxury border border-warmGrey max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-inner">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-3xl font-bold text-accent">Royal Capital Admin</h1>
            <p className="text-gray-500 text-xs">Enter administration passcode to access the portal.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                required
                placeholder="Enter Passcode (Default: 1234)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-center tracking-widest focus:outline-none focus:ring-2 ${
                  passcodeError ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'
                }`}
              />
              {passcodeError && (
                <p className="text-xs text-red-500 mt-1 font-semibold">Incorrect Passcode. Try: 1234</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-luxury transition-all"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header Bar */}
        <div className="bg-white p-6 rounded-3xl shadow-card border border-warmGrey flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-white font-serif font-bold text-xl flex items-center justify-center shadow-luxury">
              R
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-accent">Royal Capital Administration</h1>
              <p className="text-xs text-gray-500">Manage Models, Photo Gallery, and Customer Inquiries</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (confirm('Are you sure you want to reset all products and gallery items to original defaults?')) {
                  resetToDefaults();
                }
              }}
              className="flex items-center gap-1.5 bg-secondary hover:bg-warmGrey text-accent text-xs font-semibold px-3.5 py-2 rounded-xl border border-gray-200 transition-colors"
            >
              <RefreshCcw className="w-3.5 h-3.5 text-primary" />
              <span>Reset Store Defaults</span>
            </button>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Lock Portal</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-warmGrey">
          {[
            { id: 'overview', label: '📊 Overview', count: null },
            { id: 'models', label: '🛋️ Window Treatment Models', count: products.length },
            { id: 'gallery', label: '🖼️ Installation Gallery', count: galleryItems.length },
            { id: 'inquiries', label: '📩 Customer Leads & Inquiries', count: inquiries.length },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 rounded-2xl text-xs font-bold shrink-0 transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-primary text-white shadow-luxury scale-105'
                    : 'bg-white text-gray-700 hover:bg-warmGrey border border-warmGrey'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== null && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${isActive ? 'bg-white/20 text-white' : 'bg-secondary text-accent font-bold'}`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-card border border-warmGrey space-y-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-xs text-gray-500 font-semibold uppercase">Total Window Models</div>
                <div className="font-serif text-3xl font-bold text-accent">{products.length} Models</div>
                <div className="text-[11px] text-primary font-medium">12 Window Categories Active</div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-card border border-warmGrey space-y-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div className="text-xs text-gray-500 font-semibold uppercase">Gallery Projects</div>
                <div className="font-serif text-3xl font-bold text-accent">{galleryItems.length} Installations</div>
                <div className="text-[11px] text-gray-500">Living Room, Bedroom & Office</div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-card border border-warmGrey space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-xs text-gray-500 font-semibold uppercase">Customer Leads</div>
                <div className="font-serif text-3xl font-bold text-accent">{inquiries.length} Inquiries</div>
                <div className="text-[11px] text-emerald-600 font-medium">
                  {inquiries.filter((i) => i.status === 'New').length} New Pending
                </div>
              </div>
            </div>

            {/* Quick Action Hub */}
            <div className="bg-accent text-white p-8 rounded-3xl shadow-luxury space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-primary-light font-bold">Admin Actions</span>
                <h2 className="font-serif text-3xl font-bold">Manage Content Real-Time</h2>
                <p className="text-gray-300 text-xs">
                  Any new window model or installation image added here immediately updates across the live website catalog and homepage!
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setActiveTab('models');
                    openProductModal();
                  }}
                  className="bg-primary hover:bg-primary-dark text-white text-xs font-semibold px-6 py-3.5 rounded-xl shadow-glow flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Product Model</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('gallery');
                    setIsGalleryModalOpen(true);
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-6 py-3.5 rounded-xl border border-white/20 flex items-center gap-2"
                >
                  <ImageIcon className="w-4 h-4 text-primary-light" />
                  <span>Add Installation Photo</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS & MODELS MANAGER */}
        {activeTab === 'models' && (
          <div className="space-y-6">
            {/* Top Toolbar */}
            <div className="bg-white p-4 rounded-3xl shadow-card border border-warmGrey flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search model name or category..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Category Filter & Add Button */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-between">
                <select
                  value={productCatFilter}
                  onChange={(e) => setProductCatFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary bg-white"
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
                  className="bg-primary hover:bg-primary-dark text-white text-xs font-bold px-4 py-2 rounded-xl shadow-luxury flex items-center gap-1.5 shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Model</span>
                </button>
              </div>
            </div>

            {/* Product Table / Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <div key={p.id} className="bg-white rounded-3xl overflow-hidden border border-warmGrey shadow-card flex flex-col justify-between p-5 space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-24 h-20 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                      {/* eslint-disable-next-html-element-access */}
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full inline-block">
                        {p.category}
                      </span>
                      <h3 className="font-serif font-bold text-accent text-base line-clamp-1">{p.name}</h3>
                      <div className="text-xs text-gray-500 font-bold">${p.priceStartingFrom} / window</div>
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs line-clamp-2">{p.shortDescription}</p>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[11px] text-gray-400">
                      <span>Opacity:</span>
                      <strong className="text-accent">{p.opacity}</strong>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openProductModal(p)}
                        className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-white text-accent transition-colors"
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
                        className="p-2 rounded-lg bg-red-50 hover:bg-red-500 hover:text-white text-red-600 transition-colors"
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

        {/* TAB 3: GALLERY PROJECTS MANAGER */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-4 rounded-3xl border border-warmGrey shadow-card">
              <h2 className="font-serif text-xl font-bold text-accent">Installation Projects ({galleryItems.length})</h2>
              <button
                onClick={() => setIsGalleryModalOpen(true)}
                className="bg-primary hover:bg-primary-dark text-white text-xs font-bold px-4 py-2 rounded-xl shadow-luxury flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add Installation Photo</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-warmGrey shadow-card p-4 space-y-3">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    {/* eslint-disable-next-html-element-access */}
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-accent/80 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-accent text-base">{item.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.description}</p>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400">{item.location}</span>
                    <button
                      onClick={() => {
                        if (confirm(`Remove gallery photo "${item.title}"?`)) {
                          deleteGalleryItem(item.id);
                        }
                      }}
                      className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg text-xs flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: INQUIRIES & LEADS MANAGER */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-warmGrey shadow-card">
              <h2 className="font-serif text-xl font-bold text-accent">Customer Leads ({filteredInquiries.length})</h2>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-semibold">Filter Status:</span>
                {(['All', 'New', 'Contacted', 'Completed'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setInquiryStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
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
                        <h3 className="font-bold text-accent text-lg">{inq.name}</h3>
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                          inq.status === 'New' ? 'bg-emerald-100 text-emerald-700' :
                          inq.status === 'Contacted' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {inq.status || 'New'}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">Submitted: {new Date(inq.createdAt || '').toLocaleString()}</div>
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
                      <span className="text-gray-400 block font-semibold">Interest & Rooms:</span>
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
      </div>

      {/* MODAL: ADD / EDIT PRODUCT MODEL */}
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
              {editingProduct ? 'Edit Model details' : 'Add New Window Treatment Model'}
            </h3>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-accent mb-1">Model Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Venetian Gold"
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
                  <label className="block text-xs font-semibold text-accent mb-1">Starting Price ($) *</label>
                  <input
                    type="number"
                    required
                    value={productForm.priceStartingFrom}
                    onChange={(e) => setProductForm({ ...productForm, priceStartingFrom: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

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
              </div>

              {/* Image URL & Preset Selection */}
              <div>
                <label className="block text-xs font-semibold text-accent mb-1">Primary Image URL</label>
                <input
                  type="url"
                  required
                  value={productForm.image}
                  onChange={(e) => setProductForm({ ...productForm, image: e.target.value, gallery: [e.target.value] })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary mb-2"
                />
                <span className="text-[10px] text-gray-400 font-semibold block mb-1">Or Pick High-Res Preset Image:</span>
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

              {/* Material */}
              <div>
                <label className="block text-xs font-semibold text-accent mb-1">Material Composition</label>
                <input
                  type="text"
                  placeholder="e.g. 100% Organically Woven Linen"
                  value={productForm.material}
                  onChange={(e) => setProductForm({ ...productForm, material: e.target.value })}
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
                  {editingProduct ? 'Save Model Changes' : 'Publish Model to Site'}
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
                  placeholder="e.g. Penthouse Living Room Drapes"
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

              <div>
                <label className="block text-xs font-semibold text-accent mb-1">Image URL</label>
                <input
                  type="url"
                  required
                  value={galleryForm.image}
                  onChange={(e) => setGalleryForm({ ...galleryForm, image: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary mb-2"
                />
                <span className="text-[10px] text-gray-400 font-semibold block mb-1">Or Pick Preset Image:</span>
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
                  Add Gallery Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
