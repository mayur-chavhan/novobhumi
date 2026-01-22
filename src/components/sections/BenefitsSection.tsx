import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { benefits, keyStats } from "../../constants/benefits";
import type { Benefit } from "../../types";

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
      className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200/50 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
          </div>
          {benefit.stat && (
            <div className="text-right">
              <p className="text-xl sm:text-2xl font-bold text-emerald-600">{benefit.stat}</p>
              <p className="text-[10px] sm:text-xs text-gray-500">{benefit.statLabel}</p>
            </div>
          )}
        </div>
        
        <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-emerald-700 transition-colors">
          {benefit.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="benefits"
      className="relative bg-gradient-to-b from-gray-50 via-white to-emerald-50/30 py-12 sm:py-20 lg:py-24 scroll-mt-28 overflow-hidden"
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
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isTitleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm"
          >
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            12 Proven Benefits
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Novobhumi Cocopeat?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the superior benefits of premium cocopeat—trusted by{" "}
            <span className="font-semibold text-emerald-600">5,000+ gardeners</span> across India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-16 max-w-4xl mx-auto"
        >
          {keyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 sm:mt-16"
        >
          <motion.a
            href="#products"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-emerald-200/50 hover:shadow-xl hover:shadow-emerald-300/50 transition-all duration-300"
          >
            View Our Products
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
