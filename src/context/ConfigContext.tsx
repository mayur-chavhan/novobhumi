import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

interface SiteSettings {
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

interface SocialLink {
  id: number;
  platform: string;
  handle: string;
  url: string;
}

interface ConfigContextType {
  settings: SiteSettings | null;
  socialLinks: SocialLink[];
  loading: boolean;
  error: string | null;
  refreshConfig: () => Promise<void>;
}

const defaultSettings: SiteSettings = {
  siteName: 'Novobhumi',
  tagline: 'Grow Your Greens: Complete Soil Replacement for Your Home Gardens and Farming',
  phone: '+91 9226202224',
  email: 'support@novobhumi.com',
  location: 'Pune, Maharashtra, India',
  amazonUrl: 'https://amzn.in/d/asVswJT',
  shopifyUrl: '',
  showAmazon: true,
  showShopify: false
};

const defaultSocialLinks: SocialLink[] = [
  { id: 1, platform: 'instagram', handle: 'novobhumi', url: 'https://www.instagram.com/novobhumi' },
  { id: 2, platform: 'facebook', handle: 'novobhumi', url: 'https://www.facebook.com/novobhumi' },
  { id: 3, platform: 'twitter', handle: 'novobhumi', url: 'https://www.twitter.com/novobhumi' }
];

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings | null>(defaultSettings);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>(defaultSocialLinks);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchConfig = async () => {
    try {
      const [settingsRes, linksRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/config/settings`),
        fetch(`${API_BASE_URL}/api/config/social-links`)
      ]);

      if (settingsRes.ok) {
        const settingsData = await settingsRes.json();
        setSettings(settingsData);
      }

      if (linksRes.ok) {
        const linksData = await linksRes.json();
        setSocialLinks(linksData);
      }
    } catch (err) {
      console.log('Using default config (backend not available)');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfig();

    const eventSource = new EventSource(`${API_BASE_URL}/api/config/stream`);
    
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'settings') {
        setSettings(data.data);
      } else if (data.type === 'socialLinks') {
        fetchConfig();
      }
    };

    eventSource.onerror = () => {
      console.log('SSE connection failed, using polling fallback');
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const refreshConfig = async () => {
    await fetchConfig();
  };

  return (
    <ConfigContext.Provider value={{ settings, socialLinks, loading, error, refreshConfig }}>
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

export { API_BASE_URL };
