export type ProductCategory = 
  | 'Roller Blinds'
  | 'Zebra Blinds'
  | 'Roman Blinds'
  | 'Venetian Blinds'
  | 'Vertical Blinds'
  | 'Wooden Blinds'
  | 'Motorized Blinds'
  | 'Blackout Curtains'
  | 'Sheer Curtains'
  | 'Eyelet Curtains'
  | 'Pleated Curtains'
  | 'Custom Curtains';

export type RoomCategory = 
  | 'Living Room'
  | 'Bedroom'
  | 'Kitchen'
  | 'Office'
  | 'Hotel'
  | 'Commercial';

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categorySlug: string;
  shortDescription: string;
  fullDescription: string;
  priceStartingFrom: number;
  rating: number;
  reviewsCount: number;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  image: string;
  gallery: string[];
  colors: ProductColor[];
  material: string;
  opacity: 'Sheer' | 'Semi-Opaque' | 'Room Darkening' | '100% Blackout';
  features: string[];
  recommendedRooms: RoomCategory[];
  specifications: {
    maxWidth: string;
    maxHeight: string;
    operation: string;
    warranty: string;
    careInstructions: string;
    uvProtection: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: RoomCategory;
  image: string;
  description: string;
  location?: string;
  productsUsed?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  productPurchased: string;
  date: string;
}

export interface ConsultationFormData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  preferredDate?: string;
  preferredTime?: string;
  roomTypes: string[];
  productInterest: string;
  message?: string;
  createdAt?: string;
  status?: 'New' | 'Contacted' | 'Completed';
}
