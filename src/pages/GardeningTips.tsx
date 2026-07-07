import { motion } from "framer-motion";
import { Droplets, Sun, Sprout, Bug, Calendar, Thermometer } from "lucide-react";
import { SEO } from "../components/common";

const GardeningTips = () => {
  const tips = [
    {
      icon: <Droplets size={40} />,
      title: "Watering Wisdom",
      tips: [
        "Water early morning or late evening to reduce evaporation",
        "Check soil moisture before watering - stick your finger 2 inches deep",
        "Cocopeat retains water well, so avoid overwatering",
        "Use drip irrigation or soaker hoses for efficient watering"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Sun size={40} />,
      title: "Sunlight Requirements",
      tips: [
        "Most vegetables need 6-8 hours of direct sunlight",
        "Leafy greens can tolerate partial shade",
        "Observe your garden throughout the day to understand light patterns",
        "Rotate pots periodically for even growth"
      ],
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Sprout size={40} />,
      title: "Soil & Nutrients",
      tips: [
        "Mix cocopeat with compost for best results (70:30 ratio)",
        "Add organic fertilizers every 2-3 weeks during growing season",
        "Maintain pH between 6.0-7.0 for most plants",
        "Refresh top layer with fresh cocopeat every season"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Bug size={40} />,
      title: "Pest Management",
      tips: [
        "Inspect plants regularly for early pest detection",
        "Use neem oil spray as a natural pest deterrent",
        "Encourage beneficial insects like ladybugs",
        "Remove affected leaves immediately to prevent spread"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Calendar size={40} />,
      title: "Seasonal Planning",
      tips: [
        "Plant cool-season crops in winter (lettuce, peas, carrots)",
        "Grow heat-loving plants in summer (tomatoes, peppers, eggplant)",
        "Start seeds indoors 4-6 weeks before planting season",
        "Rotate crops to prevent soil depletion and disease"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Thermometer size={40} />,
      title: "Temperature Control",
      tips: [
        "Mulch with cocopeat to regulate soil temperature",
        "Provide shade cloth during extreme heat",
        "Protect plants from frost with covers or cloches",
        "Use black plastic mulch to warm soil in cool weather"
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <>
      <SEO
        title="Gardening Tips for Indian Climate"
        description="Expert gardening tips for Indian terrace, balcony, and container gardens. Learn watering, sunlight, pest control, and cocopeat usage for every season."
        path="/tips"
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
              Gardening <span className="text-gradient">Tips</span>
            </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Expert advice to help your garden flourish year-round
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${tip.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  {tip.icon}
                  <h2 className="text-2xl font-bold">{tip.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {tip.tips.map((tipText, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold mt-1">•</span>
                      <span className="text-gray-700">{tipText}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl shadow-xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Pro Tip for Cocopeat Users</h2>
          <p className="text-lg leading-relaxed">
            Cocopeat can be reused multiple times! After harvest, remove old roots, fluff the cocopeat, and add fresh compost. This sustainable practice saves money and reduces waste while maintaining excellent growing conditions for your next crop.
          </p>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default GardeningTips;
