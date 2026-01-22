import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Package, Truck, Shield } from "lucide-react";
import productImage from "../../assets/novobhumi-cocopeat-5kg-block.png";
import { useConfig } from "../../context/ConfigContext";
import { BuyButton } from "../common/BuyButton";
import howToUseStepsImage from "/images/how-to-use-steps-home.png";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { settings } = useConfig();

  const productFeatures = [
    { icon: <Package size={20} />, text: "Compressed Block" },
    { icon: <Truck size={20} />, text: "Fast Delivery" },
    { icon: <Shield size={20} />, text: "Quality Guaranteed" },
  ];

  return (
    <section id="products" className="scroll-mt-28 bg-white py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Our Premium <span className="text-gradient">Cocopeat Products</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
            High-quality, eco-friendly cocopeat products designed for Indian
            gardening enthusiasts. Perfect for all your gardening needs.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-50 to-earth-50 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-5 sm:p-8 lg:p-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-100 to-earth-100 shadow-lg">
                  <img
                    src={productImage}
                    alt="Novobhumi premium cocopeat block"
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  Premium Quality
                </div>
              </motion.div>

              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                    Novobhumi Premium Cocopeat Block
                  </h3>

                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <div className="flex gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-yellow-400 text-yellow-400 sm:w-5 sm:h-5"
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 font-medium text-xs sm:text-base">
                      (500+ Happy Gardeners)
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    Our premium cocopeat block expands to provide nutrient-rich,
                    well-aerated growing medium for all your plants. Perfect for
                    vegetables, flowers, herbs, and indoor plants.
                  </p>

                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-600 rounded-full mt-1.5 sm:mt-2" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        Expands up to 8-10 times when hydrated
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-600 rounded-full mt-1.5 sm:mt-2" />
                      <p className="text-gray-700 text-sm sm:text-base">100% natural and organic</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-600 rounded-full mt-1.5 sm:mt-2" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        Low EC, pH balanced (5.5-6.8)
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-600 rounded-full mt-1.5 sm:mt-2" />
                      <p className="text-gray-700 text-sm sm:text-base">Weed-free and sterilized</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {productFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 sm:gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md"
                      >
                        <span className="text-primary-600 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">{feature.icon}</span>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                    {settings?.showAmazon && settings?.amazonUrl && (
                      <BuyButton href={settings.amazonUrl} variant="amazon" size="lg" className="w-full sm:w-auto justify-center" />
                    )}
                    
                    {settings?.showShopify && settings?.shopifyUrl && (
                      <BuyButton href={settings.shopifyUrl} variant="shopify" size="lg" className="w-full sm:w-auto justify-center" />
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                    * Available for delivery across India
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 overflow-hidden"
          >
            <img
              src={howToUseStepsImage}
              alt="How to Use Novobhumi Cocopeat - 4 Step Infographic"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
