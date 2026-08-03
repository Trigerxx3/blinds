'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, GalleryItem, ConsultationFormData } from '@/types';
import { productsData } from '@/data/products';
import { galleryItemsData } from '@/data/galleryData';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

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
  seedSupabase: () => Promise<void>;
  isCloudConnected: boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const initialInquiries: ConsultationFormData[] = [
  {
    id: 'inq-1',
    name: 'Eleanor Vance',
    email: 'eleanor@example.com',
    phone: '+61 (02) 6100 7890',
    address: 'Kensington Estate, Canberra ACT',
    preferredDate: '2026-08-05',
    preferredTime: 'Morning (9AM - 12PM)',
    roomTypes: ['Living Room', 'Bedroom'],
    productInterest: 'Royal Heavyweight Blackout Velvet Curtains',
    message: 'Interested in motorized curtain tracks and blackout lining for 3 master bedroom windows in Canberra.',
    createdAt: new Date().toISOString(),
    status: 'New',
  },
  {
    id: 'inq-2',
    name: 'Marcus Sterling',
    email: 'marcus@architect.com',
    phone: '+61 (02) 6100 7890',
    address: 'Civic Centre Tower, Canberra ACT',
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

  // Fetch initial data from Supabase Cloud DB & Auto-Seed if empty
  const fetchSupabaseData = async () => {
    if (!supabase) return;
    try {
      // 1. Products Table Sync
      const { data: cloudProducts, error: prodErr } = await supabase.from('products').select('*');
      if (prodErr) {
        console.warn('Supabase products fetch warning:', prodErr.message);
      } else if (cloudProducts && cloudProducts.length > 0) {
        setProducts(cloudProducts as Product[]);
      } else {
        // Table is empty -> auto seed default products
        await supabase.from('products').upsert(productsData);
        setProducts(productsData);
      }

      // 2. Gallery Table Sync
      const { data: cloudGallery, error: galErr } = await supabase.from('gallery').select('*');
      if (galErr) {
        console.warn('Supabase gallery fetch warning:', galErr.message);
      } else if (cloudGallery && cloudGallery.length > 0) {
        setGalleryItems(cloudGallery as GalleryItem[]);
      } else {
        // Table is empty -> auto seed default gallery
        await supabase.from('gallery').upsert(galleryItemsData);
        setGalleryItems(galleryItemsData);
      }

      // 3. Inquiries Table Sync
      const { data: cloudInquiries, error: inqErr } = await supabase.from('inquiries').select('*');
      if (inqErr) {
        console.warn('Supabase inquiries fetch warning:', inqErr.message);
      } else if (cloudInquiries && cloudInquiries.length > 0) {
        setInquiries(cloudInquiries as ConsultationFormData[]);
      } else {
        // Table is empty -> auto seed default inquiries
        await supabase.from('inquiries').upsert(initialInquiries);
        setInquiries(initialInquiries);
      }
    } catch (err) {
      console.error('Supabase fetch error:', err);
    }
  };

  // Manual trigger to force seed all data into Supabase
  const seedSupabase = async () => {
    if (!supabase) return;
    try {
      await supabase.from('products').upsert(products);
      await supabase.from('gallery').upsert(galleryItems);
      await supabase.from('inquiries').upsert(inquiries);
      await fetchSupabaseData();
    } catch (err) {
      console.error('Failed to seed Supabase:', err);
    }
  };

  // Real-time Cloud Synchronization via Supabase WebSockets
  useEffect(() => {
    if (isSupabaseConfigured && supabase) {
      fetchSupabaseData();

      // Subscribe to Supabase Realtime channel for products, gallery, inquiries
      const channel = supabase
        .channel('schema-db-changes')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'products' },
          () => fetchSupabaseData()
        )
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'gallery' },
          () => fetchSupabaseData()
        )
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'inquiries' },
          () => fetchSupabaseData()
        )
        .subscribe();

      setIsLoaded(true);
      return () => {
        supabase?.removeChannel(channel);
      };
    } else {
      // Fallback: Load from localStorage if Cloud DB is not configured
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
    }
  }, []);

  // Helper to save to localStorage
  const saveProductsLocally = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('rc_products', JSON.stringify(newProducts));
  };

  const saveGalleryLocally = (newGallery: GalleryItem[]) => {
    setGalleryItems(newGallery);
    localStorage.setItem('rc_gallery', JSON.stringify(newGallery));
  };

  const saveInquiriesLocally = (newInquiries: ConsultationFormData[]) => {
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
    saveProductsLocally(updated);

    if (isSupabaseConfigured && supabase) {
      supabase.from('products').upsert(newProduct).then(({ error }) => {
        if (error) console.error('Supabase product save error:', error);
      });
    }

    return newProduct;
  };

  const updateProduct = (id: string, updatedFields: Partial<Product>) => {
    const updatedProduct = products.find((p) => p.id === id);
    const merged = updatedProduct ? { ...updatedProduct, ...updatedFields } : null;
    const updated = products.map((p) => (p.id === id ? { ...p, ...updatedFields } : p));
    saveProductsLocally(updated);

    if (isSupabaseConfigured && supabase && merged) {
      supabase.from('products').upsert(merged).then(({ error }) => {
        if (error) console.error('Supabase product update error:', error);
      });
    }
  };

  const deleteProduct = (id: string) => {
    const updated = products.filter((p) => p.id !== id);
    saveProductsLocally(updated);

    if (isSupabaseConfigured && supabase) {
      supabase.from('products').delete().eq('id', id).then(({ error }) => {
        if (error) console.error('Supabase product delete error:', error);
      });
    }
  };

  const addGalleryItem = (itemData: Omit<GalleryItem, 'id'>): GalleryItem => {
    const newItem: GalleryItem = {
      ...itemData,
      id: `gal-${Date.now().toString().slice(-4)}`,
    };
    const updated = [newItem, ...galleryItems];
    saveGalleryLocally(updated);

    if (isSupabaseConfigured && supabase) {
      supabase.from('gallery').upsert(newItem).then(({ error }) => {
        if (error) console.error('Supabase gallery save error:', error);
      });
    }

    return newItem;
  };

  const deleteGalleryItem = (id: string) => {
    const updated = galleryItems.filter((g) => g.id !== id);
    saveGalleryLocally(updated);

    if (isSupabaseConfigured && supabase) {
      supabase.from('gallery').delete().eq('id', id).then(({ error }) => {
        if (error) console.error('Supabase gallery delete error:', error);
      });
    }
  };

  const addInquiry = (inquiryData: ConsultationFormData) => {
    const newInquiry: ConsultationFormData = {
      ...inquiryData,
      id: inquiryData.id || `inq-${Date.now().toString().slice(-4)}`,
      createdAt: inquiryData.createdAt || new Date().toISOString(),
      status: inquiryData.status || 'New',
    };
    const updated = [newInquiry, ...inquiries];
    saveInquiriesLocally(updated);

    if (isSupabaseConfigured && supabase) {
      supabase.from('inquiries').upsert(newInquiry).then(({ error }) => {
        if (error) console.error('Supabase inquiry save error:', error);
      });
    }
  };

  const updateInquiryStatus = (id: string, status: 'New' | 'Contacted' | 'Completed') => {
    const updated = inquiries.map((inq) => (inq.id === id ? { ...inq, status } : inq));
    saveInquiriesLocally(updated);

    if (isSupabaseConfigured && supabase) {
      supabase.from('inquiries').update({ status }).eq('id', id).then(({ error }) => {
        if (error) console.error('Supabase inquiry update error:', error);
      });
    }
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    saveInquiriesLocally(updated);

    if (isSupabaseConfigured && supabase) {
      supabase.from('inquiries').delete().eq('id', id).then(({ error }) => {
        if (error) console.error('Supabase inquiry delete error:', error);
      });
    }
  };

  const resetToDefaults = () => {
    saveProductsLocally(productsData);
    saveGalleryLocally(galleryItemsData);
    saveInquiriesLocally(initialInquiries);
    if (isSupabaseConfigured) {
      seedSupabase();
    }
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
        seedSupabase,
        isCloudConnected: isSupabaseConfigured,
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
