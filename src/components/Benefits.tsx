import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Droplets, 
  Sprout, 
  Leaf, 
  FlaskConical, 
  Shield, 
  Wind,
  Recycle,
  Thermometer,
  Bug,
  Flower2,
  Layers,
  Award,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

const benefits: Benefit[] = [
  {
    icon: Droplets,
    title: "Superior Water Retention",
    description: "Holds up to 8-10 times its weight in water, reducing watering frequency significantly.",
    stat: "8-10x",
    statLabel: "Water Retention"
  },
  {
    icon: Sprout,
    title: "Promotes Root Growth",
    description: "Excellent aeration and drainage create ideal conditions for robust root development.",
    stat: "50%",
    statLabel: "Faster Growth"
  },
  {
    icon: Leaf,
    title: "100% Eco-Friendly",
    description: "Made from renewable coconut husks, a sustainable alternative to peat moss.",
    stat: "100%",
    statLabel: "Natural"
  },
  {
    icon: FlaskConical,
    title: "Perfect pH Balance",
    description: "Naturally balanced pH (5.5-6.8) creates optimal growing conditions for all plants.",
    stat: "5.5-6.8",
    statLabel: "pH Level"
  },
  {
    icon: Shield,
    title: "Disease Resistant",
    description: "Naturally resistant to fungal growth and soil-borne diseases for healthier plants.",
  },
  {
    icon: Wind,
    title: "Excellent Aeration",
    description: "Porous structure allows optimal air circulation to roots for better nutrient uptake.",
  },
  {
    icon: Recycle,
    title: "Reusable 3-5 Cycles",
    description: "Can be reused multiple times, making it cost-effective and environmentally friendly.",
    stat: "3-5x",
    statLabel: "Reusable"
  },
  {
    icon: Thermometer,
    title: "Temperature Stability",
    description: "Excellent insulation protects roots from extreme temperature fluctuations.",
  },
  {
    icon: Bug,
    title: "Weed & Pest Free",
    description: "Sterilized and free from weed seeds, pathogens, and harmful pests.",
  },
  {
    icon: Flower2,
    title: "Ideal for All Plants",
    description: "Perfect for vegetables, herbs, flowers, houseplants, and hydroponics.",
  },
  {
    icon: Layers,
    title: "Reduces Compaction",
    description: "Improves soil structure and enhances overall soil health over time.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully processed and graded, free from impurities and excess salts.",
  },
];

const BenefitCard = ({
  benefit,
  index,
}: {
  benefit: Benefit;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const Icon = benefit.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200/50 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-white" />
          </div>
          {benefit.stat && (
            <div className="text-right">
              <p className="text-2xl font-bold text-emerald-600">{benefit.stat}</p>
              <p className="text-xs text-gray-500">{benefit.statLabel}</p>
            </div>
          )}
        </div>
        
        <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-emerald-700 transition-colors">
          {benefit.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
};

const Benefits = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const keyStats = [
    { value: "8-10x", label: "Water Retention", icon: Droplets },
    { value: "40%", label: "Less Watering", icon: Sprout },
    { value: "100%", label: "Organic & Natural", icon: Leaf },
    { value: "4.9/5", label: "Customer Rating", icon: Award },
  ];

  return (
    <section
      id="benefits"
      className="relative bg-gradient-to-b from-gray-50 via-white to-emerald-50/30 py-20 sm:py-24 scroll-mt-28 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isTitleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4" />
            12 Proven Benefits
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Novobhumi Cocopeat?
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the superior benefits of premium cocopeat—trusted by{" "}
            <span className="font-semibold text-emerald-600">5,000+ gardeners</span> across India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
        >
          {keyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#products"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold shadow-lg shadow-emerald-200/50 hover:shadow-xl hover:shadow-emerald-300/50 transition-all duration-300"
          >
            View Our Products
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
