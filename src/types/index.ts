/**
 * Shared TypeScript interfaces for Novobhumi
 */

import type { LucideIcon } from 'lucide-react';

// ============================================
// Site Configuration Types
// ============================================

export interface SiteSettings {
  siteName: string;
  tagline: string;
  phone: string;
  email: string;
  location: string;
  amazonUrl: string;
  shopifyUrl: string;
  showAmazon: boolean;
  showShopify: boolean;
}

export interface SocialLink {
  id: number;
  platform: string;
  handle: string;
  url: string;
}

// ============================================
// Benefits Section Types
// ============================================

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface KeyStat {
  value: string;
  label: string;
  icon: LucideIcon;
}

// ============================================
// Testimonials Section Types
// ============================================

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  title: string;
  review: string;
  date: string;
  verified: boolean;
  image: string;
  plantType: string;
}

// ============================================
// Products Section Types
// ============================================

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  features: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
}

// ============================================
// Navigation Types
// ============================================

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinks {
  company: FooterLink[];
  resources: FooterLink[];
  support: FooterLink[];
}

// ============================================
// Coming Soon Types
// ============================================

export interface UpcomingProduct {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

// ============================================
// Hero Section Types
// ============================================

export interface HeroCopyVariant {
  headline: string;
  description: string;
  badge: string;
}
