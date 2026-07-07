import { motion } from 'framer-motion';
import { Leaf, Droplets, Sprout, Heart, TrendingUp, Shield } from 'lucide-react';
import { SEO } from "../components/common";

const Benefits = () => {
  const benefits = [
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Superior Water Retention",
      description: "Cocopeat can retain water up to 8-10 times its weight, ensuring your plants stay hydrated longer and reducing watering frequency by up to 50%."
    },
    {
      icon: <Sprout className="w-12 h-12" />,
      title: "Excellent Aeration",
      description: "The fibrous structure of cocopeat provides optimal air circulation to plant roots, promoting healthy root development and preventing root rot."
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "100% Organic & Sustainable",
      description: "Made from renewable coconut husks, cocopeat is completely biodegradable and environmentally friendly, reducing your carbon footprint."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "pH Balanced",
      description: "Naturally pH balanced (5.5-6.5), cocopeat creates the ideal growing environment for most plants without requiring additional amendments."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Reusable & Long-Lasting",
      description: "Unlike peat moss, cocopeat can be reused for 3-4 growing seasons, making it a cost-effective choice for sustainable gardening."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Disease Resistant",
      description: "Naturally resistant to fungal growth and harmful bacteria, cocopeat provides a safer growing medium that protects your plants."
    }
  ];

  return (
    <>
      <SEO
        title="Benefits of Cocopeat"
        description="Discover why cocopeat is the best growing medium for Indian gardens. Superior water retention, better aeration, pH balanced, reusable, and 100% organic."
        path="/benefits"
      />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Why Choose <span className="text-primary-600">Cocopeat</span>?
            </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the amazing benefits of using premium cocopeat for your gardening needs
          </motion.p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Cocopeat vs Traditional Soil
          </motion.h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-left">Cocopeat</th>
                    <th className="px-6 py-4 text-left">Traditional Soil</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Water Retention</td>
                    <td className="px-6 py-4 text-green-600">8-10x its weight</td>
                    <td className="px-6 py-4 text-gray-600">2-3x its weight</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Aeration</td>
                    <td className="px-6 py-4 text-green-600">Excellent</td>
                    <td className="px-6 py-4 text-gray-600">Moderate</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Reusability</td>
                    <td className="px-6 py-4 text-green-600">3-4 seasons</td>
                    <td className="px-6 py-4 text-gray-600">1 season</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">pH Balance</td>
                    <td className="px-6 py-4 text-green-600">5.5-6.5 (ideal)</td>
                    <td className="px-6 py-4 text-gray-600">Varies widely</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Environmental Impact</td>
                    <td className="px-6 py-4 text-green-600">100% sustainable</td>
                    <td className="px-6 py-4 text-gray-600">Limited resource</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Weight</td>
                    <td className="px-6 py-4 text-green-600">Lightweight</td>
                    <td className="px-6 py-4 text-gray-600">Heavy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Scientific Advantages
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Nutrient Retention</h3>
              <p className="text-gray-600 leading-relaxed">
                Cocopeat's high cation exchange capacity (CEC) allows it to effectively hold and release nutrients to plant roots. This means your fertilizers work more efficiently, and plants receive a steady supply of nutrients over time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Root Development Support</h3>
              <p className="text-gray-600 leading-relaxed">
                The fibrous structure creates an ideal balance between water retention and drainage, preventing waterlogging while ensuring roots have access to both moisture and oxygen. This promotes stronger, healthier root systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Temperature Regulation</h3>
              <p className="text-gray-600 leading-relaxed">
                Cocopeat provides natural insulation for plant roots, protecting them from temperature extremes. This thermal stability creates a more consistent growing environment, especially important in India's diverse climate zones.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Experience the Benefits?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-green-100 mb-8"
          >
            Join thousands of satisfied gardeners who have switched to Novobhumi cocopeat
          </motion.p>
          <motion.a
            href="https://www.amazon.in"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Buy from Amazon
          </motion.a>
        </div>
      </section>
    </div>
    </>
  );
};

export default Benefits;
