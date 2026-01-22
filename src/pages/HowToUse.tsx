import { motion } from "framer-motion";
import { Package, Droplets, HandMetal, Sprout, RefreshCw, CheckCircle } from "lucide-react";
import howToUseImage from "/images/how-to-use-cocopeat.png";

const HowToUse = () => {
  const steps = [
    {
      icon: <Package size={48} />,
      title: "Step 1: Unpack the Block",
      description: "Remove the cocopeat block from its packaging and place it in a large container or bucket.",
      tips: ["Choose a container at least 3x the block size", "Work in a well-ventilated area"]
    },
    {
      icon: <Droplets size={48} />,
      title: "Step 2: Add Water",
      description: "Pour 4-5 liters of clean water over the compressed block. It will start expanding immediately.",
      tips: ["Use room temperature water for best results", "Add water gradually to control expansion"]
    },
    {
      icon: <HandMetal size={48} />,
      title: "Step 3: Fluff & Break Apart",
      description: "Once expanded (10-15 minutes), use your hands or a garden fork to fluff and separate the fibers.",
      tips: ["Break up any clumps for uniform texture", "Add more water if too dry"]
    },
    {
      icon: <Sprout size={48} />,
      title: "Step 4: Mix with Compost",
      description: "For best results, mix cocopeat with compost or organic fertilizer in a 70:30 ratio.",
      tips: ["Add perlite for extra drainage if needed", "Mix thoroughly for even distribution"]
    },
    {
      icon: <CheckCircle size={48} />,
      title: "Step 5: Ready to Plant",
      description: "Your growing medium is ready! Fill pots or beds and start planting your seeds or seedlings.",
      tips: ["Water lightly before planting", "Make sure drainage holes are clear"]
    },
    {
      icon: <RefreshCw size={48} />,
      title: "Step 6: Reuse & Maintain",
      description: "After harvest, remove roots, fluff the cocopeat, add fresh compost, and reuse for your next crop.",
      tips: ["Can be reused 3-4 times", "Store dry cocopeat in an airtight container"]
    }
  ];

  const applications = [
    {
      title: "Seed Starting",
      description: "Perfect for germinating seeds. Mix with vermiculite for seedling trays."
    },
    {
      title: "Container Gardening",
      description: "Ideal for pots and containers. Provides excellent drainage and aeration."
    },
    {
      title: "Vegetable Gardens",
      description: "Mix with garden soil to improve structure and water retention."
    },
    {
      title: "Hydroponics",
      description: "Works great as a growing medium in hydroponic systems."
    },
    {
      title: "Hanging Baskets",
      description: "Lightweight and retains moisture, perfect for hanging plants."
    },
    {
      title: "Soil Amendment",
      description: "Add to heavy clay soil to improve drainage and workability."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How to Use <span className="text-gradient">Cocopeat</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Step-by-step guide to preparing and using Novobhumi cocopeat
          </p>
          
          {/* How to Use Infographic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-8"
          >
            <img
              src={howToUseImage}
              alt="How to use Novobhumi cocopeat bricks for gardening - 4 step guide"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary-100 p-4 rounded-2xl text-primary-600 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h2>
                    <p className="text-gray-700 text-lg mb-4">{step.description}</p>
                    <div className="bg-primary-50 rounded-xl p-4">
                      <h3 className="font-semibold text-primary-900 mb-2">Pro Tips:</h3>
                      <ul className="space-y-2">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2 text-gray-700">
                            <span className="text-primary-600">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Versatile Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowToUse;
