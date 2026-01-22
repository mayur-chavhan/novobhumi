import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Users, Image, Link2, Mail, Phone, MapPin, 
  ShoppingCart, Save, LogOut, Loader2, Check, Upload,
  Instagram, Facebook, Twitter, Linkedin
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { API_BASE_URL } from '../../context/ConfigContext';

interface SiteSettings {
  siteName: string;
  tagline: string;
  phone: string;
  email: string;
  location: string;
  amazonUrl: string;
  shopifyUrl: string;
  shopifyDomain: string;
  shopifyToken: string;
  showAmazon: boolean;
  showShopify: boolean;
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPassword: string;
  smtpFromName: string;
  smtpFromEmail: string;
  smtpSecure: boolean;
}

interface SocialLink {
  id?: number;
  platform: string;
  handle: string;
  url: string;
}

const tabs = [
  { id: 'general', label: 'General', icon: Settings },
  { id: 'contact', label: 'Contact', icon: Phone },
  { id: 'social', label: 'Social', icon: Users },
  { id: 'buylinks', label: 'Buy Links', icon: ShoppingCart },
  { id: 'smtp', label: 'SMTP', icon: Mail },
  { id: 'media', label: 'Media', icon: Image }
];

export default function Dashboard() {
  const { logout, user } = useAuth();
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [settingsRes, linksRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/config/settings/full`, { credentials: 'include' }),
        fetch(`${API_BASE_URL}/api/config/social-links`, { credentials: 'include' })
      ]);

      if (settingsRes.ok) {
        const data = await settingsRes.json();
        setSettings(data);
      }

      if (linksRes.ok) {
        const data = await linksRes.json();
        setSocialLinks(data);
      }
    } catch (err) {
      console.error('Failed to fetch data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = async () => {
    if (!settings) return;
    
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/config/settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(settings)
      });

      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    } catch (err) {
      console.error('Failed to save settings:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveSocialLink = async (link: SocialLink) => {
    try {
      if (link.id) {
        await fetch(`${API_BASE_URL}/api/config/social-links/${link.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(link)
        });
      } else {
        await fetch(`${API_BASE_URL}/api/config/social-links`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(link)
        });
      }
      fetchData();
    } catch (err) {
      console.error('Failed to save social link:', err);
    }
  };

  const updateSetting = (key: keyof SiteSettings, value: any) => {
    setSettings(prev => prev ? { ...prev, [key]: value } : null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Novobhumi Admin</h1>
            <p className="text-sm text-gray-500">Logged in as {user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <nav className="w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 space-y-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>

          <main className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              {activeTab === 'general' && settings && (
                <GeneralSettings settings={settings} updateSetting={updateSetting} />
              )}
              {activeTab === 'contact' && settings && (
                <ContactSettings settings={settings} updateSetting={updateSetting} />
              )}
              {activeTab === 'social' && (
                <SocialSettings links={socialLinks} onSave={handleSaveSocialLink} onRefresh={fetchData} />
              )}
              {activeTab === 'buylinks' && settings && (
                <BuyLinkSettings settings={settings} updateSetting={updateSetting} />
              )}
              {activeTab === 'smtp' && settings && (
                <SmtpSettings settings={settings} updateSetting={updateSetting} />
              )}
              {activeTab === 'media' && <MediaSettings />}

              {activeTab !== 'media' && activeTab !== 'social' && (
                <div className="mt-8 pt-6 border-t flex justify-end">
                  <button
                    onClick={handleSaveSettings}
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50"
                  >
                    {saving ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : saved ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Save className="w-5 h-5" />
                    )}
                    {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Changes'}
                  </button>
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}

function GeneralSettings({ settings, updateSetting }: { settings: SiteSettings; updateSetting: (key: keyof SiteSettings, value: any) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">General Settings</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
        <input
          type="text"
          value={settings.siteName}
          onChange={(e) => updateSetting('siteName', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
        <input
          type="text"
          value={settings.tagline}
          onChange={(e) => updateSetting('tagline', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}

function ContactSettings({ settings, updateSetting }: { settings: SiteSettings; updateSetting: (key: keyof SiteSettings, value: any) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Phone className="w-4 h-4 inline mr-2" />
          Phone Number
        </label>
        <input
          type="text"
          value={settings.phone}
          onChange={(e) => updateSetting('phone', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="+91 9226202224"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Mail className="w-4 h-4 inline mr-2" />
          Email Address
        </label>
        <input
          type="email"
          value={settings.email}
          onChange={(e) => updateSetting('email', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="support@novobhumi.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MapPin className="w-4 h-4 inline mr-2" />
          Location
        </label>
        <input
          type="text"
          value={settings.location}
          onChange={(e) => updateSetting('location', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Pune, Maharashtra, India"
        />
      </div>
    </div>
  );
}

function SocialSettings({ links, onSave, onRefresh }: { links: SocialLink[]; onSave: (link: SocialLink) => Promise<void>; onRefresh: () => void }) {
  const [editingLink, setEditingLink] = useState<SocialLink | null>(null);

  const platforms = [
    { id: 'instagram', label: 'Instagram', icon: Instagram },
    { id: 'facebook', label: 'Facebook', icon: Facebook },
    { id: 'twitter', label: 'Twitter/X', icon: Twitter },
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin }
  ];

  const handleSave = async () => {
    if (editingLink) {
      await onSave(editingLink);
      setEditingLink(null);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Social Media Links</h2>
      
      <div className="space-y-4">
        {links.map(link => {
          const platform = platforms.find(p => p.id === link.platform);
          const Icon = platform?.icon || Link2;
          
          return (
            <div key={link.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Icon className="w-6 h-6 text-gray-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">{platform?.label || link.platform}</p>
                <p className="text-sm text-gray-500">@{link.handle}</p>
              </div>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline text-sm">
                {link.url}
              </a>
              <button
                onClick={() => setEditingLink(link)}
                className="px-4 py-2 text-sm bg-white border rounded-lg hover:bg-gray-50"
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>

      {editingLink && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Edit Social Link</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Platform</label>
                <select
                  value={editingLink.platform}
                  onChange={(e) => setEditingLink({ ...editingLink, platform: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  {platforms.map(p => (
                    <option key={p.id} value={p.id}>{p.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Handle</label>
                <input
                  type="text"
                  value={editingLink.handle}
                  onChange={(e) => setEditingLink({ ...editingLink, handle: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="novobhumi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">URL</label>
                <input
                  type="url"
                  value={editingLink.url}
                  onChange={(e) => setEditingLink({ ...editingLink, url: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="https://instagram.com/novobhumi"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setEditingLink(null)} className="px-4 py-2 text-gray-600 hover:text-gray-900">
                Cancel
              </button>
              <button onClick={handleSave} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BuyLinkSettings({ settings, updateSetting }: { settings: SiteSettings; updateSetting: (key: keyof SiteSettings, value: any) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Buy Button Configuration</h2>
      
      <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
        <h3 className="font-semibold text-orange-800 mb-3">Amazon</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amazon Product URL</label>
            <input
              type="url"
              value={settings.amazonUrl}
              onChange={(e) => updateSetting('amazonUrl', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="https://amzn.in/d/..."
            />
          </div>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={settings.showAmazon}
              onChange={(e) => updateSetting('showAmazon', e.target.checked)}
              className="w-5 h-5 text-primary-600 rounded"
            />
            <span className="text-sm text-gray-700">Show Amazon buy button</span>
          </label>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
        <h3 className="font-semibold text-green-800 mb-3">Shopify</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Shopify Store URL</label>
            <input
              type="url"
              value={settings.shopifyUrl}
              onChange={(e) => updateSetting('shopifyUrl', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="https://yourstore.myshopify.com/products/..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Shopify Domain</label>
            <input
              type="text"
              value={settings.shopifyDomain}
              onChange={(e) => updateSetting('shopifyDomain', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="yourstore.myshopify.com"
            />
          </div>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={settings.showShopify}
              onChange={(e) => updateSetting('showShopify', e.target.checked)}
              className="w-5 h-5 text-primary-600 rounded"
            />
            <span className="text-sm text-gray-700">Show Shopify buy button</span>
          </label>
        </div>
      </div>
    </div>
  );
}

function SmtpSettings({ settings, updateSetting }: { settings: SiteSettings; updateSetting: (key: keyof SiteSettings, value: any) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">SMTP Configuration</h2>
      <p className="text-gray-600">Configure email settings for the contact form</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Host</label>
          <input
            type="text"
            value={settings.smtpHost}
            onChange={(e) => updateSetting('smtpHost', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="smtp.gmail.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
          <input
            type="number"
            value={settings.smtpPort}
            onChange={(e) => updateSetting('smtpPort', parseInt(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="587"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Username</label>
          <input
            type="text"
            value={settings.smtpUser}
            onChange={(e) => updateSetting('smtpUser', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Password</label>
          <input
            type="password"
            value={settings.smtpPassword}
            onChange={(e) => updateSetting('smtpPassword', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="••••••••"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From Name</label>
          <input
            type="text"
            value={settings.smtpFromName}
            onChange={(e) => updateSetting('smtpFromName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Novobhumi"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From Email</label>
          <input
            type="email"
            value={settings.smtpFromEmail}
            onChange={(e) => updateSetting('smtpFromEmail', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="noreply@novobhumi.com"
          />
        </div>
      </div>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={settings.smtpSecure}
          onChange={(e) => updateSetting('smtpSecure', e.target.checked)}
          className="w-5 h-5 text-primary-600 rounded"
        />
        <span className="text-sm text-gray-700">Use SSL/TLS (secure connection)</span>
      </label>
    </div>
  );
}

function MediaSettings() {
  const [uploading, setUploading] = useState(false);
  const [assets, setAssets] = useState<any[]>([]);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/media`, { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setAssets(data);
      }
    } catch (err) {
      console.error('Failed to fetch assets:', err);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    try {
      const res = await fetch(`${API_BASE_URL}/api/media/upload`, {
        method: 'POST',
        credentials: 'include',
        body: formData
      });

      if (res.ok) {
        fetchAssets();
      }
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Media Assets</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 mb-4">Upload Logo</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleUpload(e, 'logo')}
            className="hidden"
            id="logo-upload"
          />
          <label
            htmlFor="logo-upload"
            className="px-4 py-2 bg-primary-600 text-white rounded-lg cursor-pointer hover:bg-primary-700 inline-block"
          >
            {uploading ? 'Uploading...' : 'Choose File'}
          </label>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 mb-4">Upload Packaging Image</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleUpload(e, 'packaging')}
            className="hidden"
            id="packaging-upload"
          />
          <label
            htmlFor="packaging-upload"
            className="px-4 py-2 bg-primary-600 text-white rounded-lg cursor-pointer hover:bg-primary-700 inline-block"
          >
            {uploading ? 'Uploading...' : 'Choose File'}
          </label>
        </div>
      </div>

      {assets.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Uploaded Assets</h3>
          <div className="grid grid-cols-4 gap-4">
            {assets.map(asset => (
              <div key={asset.id} className="relative group">
                <img
                  src={`${API_BASE_URL}${asset.fileUrl}`}
                  alt={asset.altText || 'Asset'}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">{asset.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
