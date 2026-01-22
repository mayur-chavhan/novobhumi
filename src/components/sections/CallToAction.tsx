import { motion } from "framer-motion";
import { Sprout, Heart, TrendingUp } from "lucide-react";
import { useConfig } from "../../context/ConfigContext";
import { BuyButton } from "../common/BuyButton";
import backgroundImage from "../../../attached_assets/stock_images/cocopeat_coir_fiber__738ed80a.jpg";
import farmingVideo from "../../../attached_assets/generated_videos/planting_seedlings_in_cocopeat_db4f229b.mp4";

const CallToAction = () => {
  const { settings } = useConfig();
  
  const stats = [
    { icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />, value: "500+", label: "Happy Gardeners" },
    { icon: <Sprout className="w-5 h-5 sm:w-6 sm:h-6" />, value: "5000+", label: "Plants Growing" },
    { icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, value: "95%", label: "Success Rate" },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-12 sm:py-20 scroll-mt-28"
    >
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-primary-900/85" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Start Your Gardening Journey Today
            </h2>
            <p className="text-base sm:text-xl text-primary-100 mb-8 sm:mb-12 leading-relaxed">
              Join thousands of satisfied gardeners who trust {settings?.siteName || 'Novobhumi'} for
              their cocopeat needs. Experience the difference that premium
              quality makes in your garden.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <div className="relative max-w-3xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-2 sm:ring-4 ring-white/20">
              <video
                src={farmingVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-12 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-6 border border-white/20"
              >
                <div className="text-white mb-1.5 sm:mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-lg sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-sm text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center items-center"
          >
            {settings?.showAmazon && settings?.amazonUrl && (
              <BuyButton 
                href={settings.amazonUrl} 
                variant="amazon-light" 
                size="lg" 
                label="Buy Now on Amazon"
                className="w-full sm:w-auto justify-center"
              />
            )}

            {settings?.showShopify && settings?.shopifyUrl && (
              <BuyButton 
                href={settings.shopifyUrl} 
                variant="shopify-light" 
                size="lg"
                label="Buy Now on Shopify"
                className="w-full sm:w-auto justify-center"
              />
            )}

            <motion.a
              href="#benefits"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3.5 sm:px-8 sm:py-4 bg-transparent text-white rounded-full font-semibold text-sm sm:text-lg border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Learn More About Benefits
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-primary-100">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                <span className="text-xs sm:text-sm">Free Delivery Available</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                <span className="text-xs sm:text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                <span className="text-xs sm:text-sm">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                <span className="text-xs sm:text-sm">All India Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
