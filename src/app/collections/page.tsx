'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, Star, Eye, Sparkles } from 'lucide-react';
import { productsData } from '@/data/products';
import { ProductCategory, RoomCategory } from '@/types';

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRoom, setSelectedRoom] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Roller Blinds',
    'Zebra Blinds',
    'Roman Blinds',
    'Venetian Blinds',
    'Vertical Blinds',
    'Wooden Blinds',
    'Motorized Blinds',
    'Blackout Curtains',
    'Sheer Curtains',
    'Eyelet Curtains',
    'Pleated Curtains',
    'Custom Curtains',
  ];

  const rooms = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Hotel', 'Commercial'];

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesRoom = selectedRoom === 'All' || product.recommendedRooms.includes(selectedRoom as RoomCategory);
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesRoom && matchesSearch;
    });
  }, [selectedCategory, selectedRoom, searchQuery]);

  return (
    <div className="py-12 md:py-20 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Catalog & Collections</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-accent">
            Custom Window Collections
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Discover our complete range of high-performance blinds and handcrafted drapery. Tailored to your exact window dimensions with premium fabrics and smooth controls.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-6 rounded-3xl shadow-card border border-warmGrey space-y-6">
          {/* Top Search & Room Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search by collection name, material, or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-secondary/40"
              />
            </div>

            {/* Room Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <span className="text-xs font-bold text-accent flex items-center gap-1 shrink-0 mr-2">
                <Filter className="w-3.5 h-3.5 text-primary" /> Room:
              </span>
              {rooms.map((room) => {
                const isActive = selectedRoom === room;
                return (
                  <button
                    key={room}
                    onClick={() => setSelectedRoom(room)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                      isActive
                        ? 'bg-accent text-white shadow-sm'
                        : 'bg-secondary text-gray-600 hover:bg-warmGrey'
                    }`}
                  >
                    {room}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="pt-4 border-t border-gray-100 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-luxury'
                      : 'bg-secondary/60 text-gray-700 hover:bg-warmGrey'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center text-xs text-gray-500 px-2">
          <span>Showing <strong className="text-accent font-bold">{filteredProducts.length}</strong> window collections</span>
          {(selectedCategory !== 'All' || selectedRoom !== 'All' || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedRoom('All');
                setSearchQuery('');
              }}
              className="text-primary underline font-semibold hover:text-primary-dark"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl text-center space-y-4 max-w-md mx-auto border border-warmGrey">
            <Sparkles className="w-10 h-10 text-primary/40 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-accent">No Collections Match Your Filter</h3>
            <p className="text-gray-500 text-xs">Try selecting a different room type or clearing your search keywords.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedRoom('All');
                setSearchQuery('');
              }}
              className="bg-primary text-white text-xs font-semibold px-5 py-2.5 rounded-full"
            >
              Show All Collections
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-warmGrey shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Product Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-html-element-access */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-accent/85 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.category}
                    </span>
                    <span className="bg-white/90 backdrop-blur-md text-accent text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                      {product.opacity}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-accent shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-accent group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Available Color Swatches Preview */}
                    <div className="flex items-center gap-1.5 mt-3">
                      <span className="text-[10px] text-gray-400 font-semibold mr-1">Colors:</span>
                      {product.colors.slice(0, 4).map((c, i) => (
                        <div
                          key={i}
                          title={c.name}
                          className="w-4 h-4 rounded-full border border-gray-300 shadow-inner"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                      {product.colors.length > 4 && (
                        <span className="text-[10px] text-gray-400 font-semibold">
                          +{product.colors.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Starting from</span>
                      <span className="font-serif text-2xl font-bold text-accent">${product.priceStartingFrom}</span>
                    </div>

                    <Link
                      href={`/collections/${product.id}`}
                      className="inline-flex items-center gap-2 bg-secondary hover:bg-primary hover:text-white text-accent font-semibold text-xs px-4 py-2.5 rounded-xl transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
