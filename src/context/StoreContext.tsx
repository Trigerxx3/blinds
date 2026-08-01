'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, GalleryItem, ConsultationFormData } from '@/types';
import { productsData } from '@/data/products';
import { galleryItemsData } from '@/data/galleryData';

interface StoreContextType {
  products: Product[];
  galleryItems: GalleryItem[];
  inquiries: ConsultationFormData[];
  addProduct: (product: Omit<Product, 'id'>) => Product;
  updateProduct: (id: string, updated: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => GalleryItem;
  deleteGalleryItem: (id: string) => void;
  addInquiry: (inquiry: ConsultationFormData) => void;
  updateInquiryStatus: (id: string, status: 'New' | 'Contacted' | 'Completed') => void;
  deleteInquiry: (id: string) => void;
  resetToDefaults: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const initialInquiries: ConsultationFormData[] = [
  {
    id: 'inq-1',
    name: 'Eleanor Vance',
    email: 'eleanor@example.com',
    phone: '+1 (555) 234-5678',
    address: 'Kensington Estate, Suite 402',
    preferredDate: '2026-08-05',
    preferredTime: 'Morning (9AM - 12PM)',
    roomTypes: ['Living Room', 'Bedroom'],
    productInterest: 'Royal Heavyweight Blackout Velvet Curtains',
    message: 'Interested in motorized curtain tracks and blackout lining for 3 master bedroom windows.',
    createdAt: new Date().toISOString(),
    status: 'New',
  },
  {
    id: 'inq-2',
    name: 'Marcus Sterling',
    email: 'marcus@architect.com',
    phone: '+1 (555) 987-6543',
    address: 'Financial District Tower',
    preferredDate: '2026-08-06',
    preferredTime: 'Afternoon (12PM - 4PM)',
    roomTypes: ['Office', 'Commercial'],
    productInterest: 'Architectural Sunscreen Roller Blinds',
    message: 'Looking for high-density solar screen roller blinds for 25 high-rise office windows.',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    status: 'Contacted',
  },
];

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(galleryItemsData);
  const [inquiries, setInquiries] = useState<ConsultationFormData[]>(initialInquiries);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const savedProducts = localStorage.getItem('rc_products');
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      } else {
        localStorage.setItem('rc_products', JSON.stringify(productsData));
      }

      const savedGallery = localStorage.getItem('rc_gallery');
      if (savedGallery) {
        setGalleryItems(JSON.parse(savedGallery));
      } else {
        localStorage.setItem('rc_gallery', JSON.stringify(galleryItemsData));
      }

      const savedInquiries = localStorage.getItem('rc_inquiries');
      if (savedInquiries) {
        setInquiries(JSON.parse(savedInquiries));
      } else {
        localStorage.setItem('rc_inquiries', JSON.stringify(initialInquiries));
      }
    } catch (e) {
      console.error('Failed to load store from localStorage', e);
    }
    setIsLoaded(true);
  }, []);

  // Save changes to localStorage helper
  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('rc_products', JSON.stringify(newProducts));
  };

  const saveGallery = (newGallery: GalleryItem[]) => {
    setGalleryItems(newGallery);
    localStorage.setItem('rc_gallery', JSON.stringify(newGallery));
  };

  const saveInquiries = (newInquiries: ConsultationFormData[]) => {
    setInquiries(newInquiries);
    localStorage.setItem('rc_inquiries', JSON.stringify(newInquiries));
  };

  // Actions
  const addProduct = (productData: Omit<Product, 'id'>): Product => {
    const slug = productData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newProduct: Product = {
      ...productData,
      id: `${slug}-${Date.now().toString().slice(-4)}`,
    };
    const updated = [newProduct, ...products];
    saveProducts(updated);
    return newProduct;
  };

  const updateProduct = (id: string, updatedFields: Partial<Product>) => {
    const updated = products.map((p) => (p.id === id ? { ...p, ...updatedFields } : p));
    saveProducts(updated);
  };

  const deleteProduct = (id: string) => {
    const updated = products.filter((p) => p.id !== id);
    saveProducts(updated);
  };

  const addGalleryItem = (itemData: Omit<GalleryItem, 'id'>): GalleryItem => {
    const newItem: GalleryItem = {
      ...itemData,
      id: `gal-${Date.now().toString().slice(-4)}`,
    };
    const updated = [newItem, ...galleryItems];
    saveGallery(updated);
    return newItem;
  };

  const deleteGalleryItem = (id: string) => {
    const updated = galleryItems.filter((g) => g.id !== id);
    saveGallery(updated);
  };

  const addInquiry = (inquiryData: ConsultationFormData) => {
    const newInquiry: ConsultationFormData = {
      ...inquiryData,
      id: inquiryData.id || `inq-${Date.now().toString().slice(-4)}`,
      createdAt: inquiryData.createdAt || new Date().toISOString(),
      status: inquiryData.status || 'New',
    };
    const updated = [newInquiry, ...inquiries];
    saveInquiries(updated);
  };

  const updateInquiryStatus = (id: string, status: 'New' | 'Contacted' | 'Completed') => {
    const updated = inquiries.map((inq) => (inq.id === id ? { ...inq, status } : inq));
    saveInquiries(updated);
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    saveInquiries(updated);
  };

  const resetToDefaults = () => {
    saveProducts(productsData);
    saveGallery(galleryItemsData);
    saveInquiries(initialInquiries);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        galleryItems,
        inquiries,
        addProduct,
        updateProduct,
        deleteProduct,
        addGalleryItem,
        deleteGalleryItem,
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        resetToDefaults,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
