import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Leaf, Award } from "lucide-react";

interface ComparisonItem {
  feature: string;
  traditional: string | boolean;
  novobhumi: string | boolean;
}

const comparisonData: ComparisonItem[] = [
  {
    feature: "Water Retention",
    traditional: "5-6x weight",
    novobhumi: "8-10x weight",
  },
  {
    feature: "pH Level",
    traditional: "Varies (often unbalanced)",
    novobhumi: "Optimal 5.5-6.8",
  },
  {
    feature: "Salt Content (EC)",
    traditional: "High (needs washing)",
    novobhumi: "Pre-washed & Low EC",
  },
  {
    feature: "Consistency",
    traditional: "Uneven texture",
    novobhumi: "Uniform premium grade",
  },
  {
    feature: "Sterilization",
    traditional: false,
    novobhumi: true,
  },
  {
    feature: "Weed & Pest Free",
    traditional: false,
    novobhumi: true,
  },
  {
    feature: "Ready to Use",
    traditional: "Requires processing",
    novobhumi: "Just hydrate & plant",
  },
  {
    feature: "Reusability",
    traditional: "1-2 cycles",
    novobhumi: "3-5 cycles",
  },
  {
    feature: "Quality Certification",
    traditional: false,
    novobhumi: true,
  },
  {
    feature: "Made in India",
    traditional: "Often imported",
    novobhumi: true,
  },
];

const Comparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderValue = (value: string | boolean, isNovobhumi: boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
          <Check className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Yes</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-red-500 font-medium">
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">No</span>
        </span>
      );
    }
    return (
      <span className={`text-xs sm:text-sm ${isNovobhumi ? "text-green-700 font-semibold" : "text-gray-600"}`}>
        {value}
      </span>
    );
  };

  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Quality Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Traditional Cocopeat vs{" "}
            <span className="text-gradient">Novobhumi</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See why Indian gardeners are switching to Novobhumi's premium-grade cocopeat
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-100 overflow-x-auto">
            <div className="grid grid-cols-3 bg-gradient-to-r from-gray-100 to-gray-50 min-w-[320px]">
              <div className="p-3 sm:p-6 font-bold text-gray-700 text-xs sm:text-base">
                Feature
              </div>
              <div className="p-3 sm:p-6 font-bold text-gray-500 text-xs sm:text-base text-center border-l border-gray-200">
                <span className="hidden sm:inline">Traditional</span>
                <span className="sm:hidden">Others</span>
              </div>
              <div className="p-3 sm:p-6 font-bold text-primary-700 text-xs sm:text-base text-center border-l border-gray-200 bg-primary-50/50">
                <span className="inline-flex items-center gap-1">
                  <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Novobhumi</span>
                  <span className="sm:hidden">Novo</span>
                </span>
              </div>
            </div>

            {comparisonData.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className={`grid grid-cols-3 min-w-[320px] ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                } border-t border-gray-100 hover:bg-primary-50/30 transition-colors duration-200`}
              >
                <div className="p-3 sm:p-5 text-gray-800 font-medium text-xs sm:text-base">
                  {item.feature}
                </div>
                <div className="p-3 sm:p-5 text-center border-l border-gray-100">
                  {renderValue(item.traditional, false)}
                </div>
                <div className="p-3 sm:p-5 text-center border-l border-gray-100 bg-green-50/30">
                  {renderValue(item.novobhumi, true)}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 text-sm">
              Based on laboratory testing and customer feedback from 500+ gardeners across India
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
