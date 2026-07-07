import { motion } from "framer-motion";
import { Sprout, Heart, Target, Award } from "lucide-react";
import { SEO } from "../components/common";

const AboutUs = () => {
  const values = [
    {
      icon: <Sprout size={40} />,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and renewable resources"
    },
    {
      icon: <Heart size={40} />,
      title: "Quality First",
      description: "Premium products that help your garden thrive"
    },
    {
      icon: <Target size={40} />,
      title: "Customer Focus",
      description: "Your gardening success is our top priority"
    },
    {
      icon: <Award size={40} />,
      title: "Excellence",
      description: "Carefully processed and graded for consistency"
    }
  ];

  return (
    <>
      <SEO
        title="About Novobhumi"
        description="Learn about Novobhumi - India's trusted brand for premium organic cocopeat. Discover our mission to help gardeners grow healthier plants with sustainable, eco-friendly growing mediums."
        path="/about"
      />
      <div className="min-h-screen bg-gradient-earth pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Novobhumi</span>
            </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Your trusted partner in sustainable and organic gardening solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Novobhumi was founded with a simple yet powerful vision: to help gardeners across India grow healthier, more vibrant gardens using sustainable and eco-friendly growing mediums. Our journey began when we recognized the need for high-quality, reliable cocopeat products in the Indian gardening market.
              </p>
              <p>
                Made from renewable coconut husks, our premium cocopeat is a sustainable alternative to traditional peat moss and soil amendments. We carefully source and process our cocopeat to ensure consistent quality, proper pH balance, and freedom from impurities.
              </p>
              <p>
                Today, thousands of satisfied gardeners trust Novobhumi for their growing needs, from balcony herb gardens to large-scale vegetable cultivation. Whether you're a beginner or an experienced gardener, we're here to support your green journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower Indian gardeners with premium, eco-friendly cocopeat products that promote healthier plant growth, conserve water, and contribute to sustainable gardening practices. We believe that everyone deserves access to quality growing mediums that make gardening easier, more productive, and more enjoyable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
