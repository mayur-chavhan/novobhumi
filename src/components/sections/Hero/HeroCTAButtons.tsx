import { motion, useReducedMotion } from "framer-motion";
import { Sprout } from "lucide-react";
import { useConfig } from "../../../context/ConfigContext";
import { BuyButton } from "../../common/BuyButton";

interface HeroCTAButtonsProps {
  isMobile?: boolean;
}

export function HeroCTAButtons({ isMobile = false }: HeroCTAButtonsProps) {
  const { settings } = useConfig();
  const shouldReduceMotion = useReducedMotion();

  const buttonSize = isMobile ? "md" : "lg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: isMobile ? 0.2 : 0.3 }}
      className={`flex gap-3 ${isMobile ? "flex-col" : "flex-col sm:flex-row"}`}
    >
      {settings?.showAmazon && settings?.amazonUrl && (
        <BuyButton 
          href={settings.amazonUrl} 
          variant="amazon" 
          size={buttonSize}
          className={isMobile ? "w-full justify-center" : ""}
        />
      )}
      {settings?.showShopify && settings?.shopifyUrl && (
        <BuyButton 
          href={settings.shopifyUrl} 
          variant="shopify" 
          size={buttonSize}
          className={isMobile ? "w-full justify-center" : ""}
        />
      )}
      <motion.a
        href="#products"
        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-600 font-semibold text-primary-700 transition-colors hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 active:bg-primary-100 ${
          isMobile 
            ? "w-full px-6 py-3.5 text-sm" 
            : "px-8 py-4 text-base"
        }`}
      >
        <Sprout size={isMobile ? 18 : 22} /> 
        Explore Products
      </motion.a>
    </motion.div>
  );
}
