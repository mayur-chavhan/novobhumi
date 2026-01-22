import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/novobhumi-logo.png';
import footerBackground from '../../../attached_assets/stock_images/seedlings_sprouting__c15fa77d.jpg';
import { useConfig } from '../../context/ConfigContext';

const Footer = () => {
  const { settings, socialLinks } = useConfig();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Products', href: '/#products' },
      { label: 'Benefits', href: '/#benefits' },
      { label: 'Contact', href: '/contact' }
    ],
    resources: [
      { label: 'Gardening Tips', href: '/tips' },
      { label: 'How to Use Cocopeat', href: '/how-to-use' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Blog', href: '/blog' }
    ],
    support: [
      { label: 'Customer Support', href: '/contact' },
      { label: 'Shipping Info', href: '/#contact' },
      { label: 'Returns Policy', href: '/#contact' },
      { label: 'Terms & Conditions', href: '/#contact' }
    ]
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook': return <Facebook size={20} />;
      case 'instagram': return <Instagram size={20} />;
      case 'twitter': return <Twitter size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      default: return <Instagram size={20} />;
    }
  };

  return (
    <footer className="relative text-gray-300 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={footerBackground}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logo}
                  alt={settings?.siteName || 'Novobhumi'}
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Your trusted partner for premium cocopeat and organic gardening solutions.
                Helping Indian gardeners grow healthy, thriving plants naturally.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <Mail size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                  <a href={`mailto:${settings?.email || 'support@novobhumi.com'}`} className="hover:text-primary-400 transition-colors">
                    {settings?.email || 'support@novobhumi.com'}
                  </a>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Phone size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                  <a href={`tel:${settings?.phone?.replace(/\s/g, '') || '+919226202224'}`} className="hover:text-primary-400 transition-colors">
                    {settings?.phone || '+91 9226202224'}
                  </a>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                  <span>{settings?.location || 'Pune, Maharashtra, India'}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-primary-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-primary-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-primary-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.id || index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
                  >
                    {getSocialIcon(social.platform)}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="text-sm text-gray-400">
              © {currentYear} {settings?.siteName || 'Novobhumi'}. All rights reserved.
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
