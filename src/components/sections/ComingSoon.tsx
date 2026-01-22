import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Sparkles, Package2, Leaf, Flower2, Salad } from 'lucide-react';
import { useConfig } from '../../context/ConfigContext';

const upcomingProducts = [
  {
    icon: <Package2 size={40} />,
    title: 'Cocopeat Grow Bags',
    description: 'Ready-to-use grow bags perfect for vegetables and herbs',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <Leaf size={40} />,
    title: 'Organic Fertilizer Mix',
    description: 'Premium blend of organic nutrients for optimal plant growth',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: <Flower2 size={40} />,
    title: 'Potting Mix',
    description: 'Complete cocopeat-based potting mix for all indoor plants',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <Salad size={40} />,
    title: 'Seeds Collection',
    description: 'Curated selection of vegetable and herb seeds for Indian climate',
    color: 'from-amber-500 to-amber-600'
  }
];

const ComingSoon = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { socialLinks } = useConfig();

  const instagramLink = socialLinks.find((link) => link.platform === 'instagram')?.url || 'https://www.instagram.com/novobhumi';
  const facebookLink = socialLinks.find((link) => link.platform === 'facebook')?.url || 'https://www.facebook.com/novobhumi';

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Clock size={16} />
            Coming Soon
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            More Products on the <span className="text-gradient">Horizon</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're constantly expanding our product line to bring you the best gardening solutions.
            Stay tuned for these exciting new additions!
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {upcomingProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Soon
              </div>

              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${product.color} text-white mb-4 shadow-md`}
              >
                {product.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 shadow-2xl"
        >
          <div className="text-center text-white">
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Sparkles size={48} />
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Be the First to Know!
            </h3>
            <p className="text-primary-100 mb-6 text-lg">
              Want to be notified when we launch new products? Follow us on social media
              or check back regularly for updates.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-primary-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Follow on Instagram
              </motion.a>
              <motion.a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 text-white rounded-full font-semibold border-2 border-white hover:bg-white/20 transition-all duration-300"
              >
                Follow on Facebook
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
