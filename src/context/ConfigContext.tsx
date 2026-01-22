import { createContext, useContext, type ReactNode } from 'react';
import type { SiteSettings, SocialLink } from '../types';

interface ConfigContextType {
  settings: SiteSettings;
  socialLinks: SocialLink[];
}

const siteSettings: SiteSettings = {
  siteName: 'Novobhumi',
  tagline: 'Grow Your Greens: Complete Soil Replacement for Your Home Gardens and Farming',
  phone: '+91 9226202224',
  email: 'support@novobhumi.com',
  location: 'Pune, Maharashtra, India',
  amazonUrl: 'https://amzn.in/d/asVswJT',
  shopifyUrl: '',
  showAmazon: true,
  showShopify: false,
};

const socialLinks: SocialLink[] = [
  { id: 1, platform: 'instagram', handle: 'novobhumi', url: 'https://www.instagram.com/novobhumi' },
  { id: 2, platform: 'facebook', handle: 'novobhumi', url: 'https://www.facebook.com/novobhumi' },
  { id: 3, platform: 'twitter', handle: 'novobhumi', url: 'https://www.twitter.com/novobhumi' },
];

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigContext.Provider value={{ settings: siteSettings, socialLinks }}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
}
