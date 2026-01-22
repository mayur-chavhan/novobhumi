import { motion, useReducedMotion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export type BuyButtonVariant = "amazon" | "shopify" | "amazon-light" | "shopify-light";
export type BuyButtonSize = "sm" | "md" | "lg";

interface BuyButtonProps {
  href: string;
  variant?: BuyButtonVariant;
  size?: BuyButtonSize;
  className?: string;
  onClick?: () => void;
  /** Use motion.a wrapper with hover/tap effects */
  animated?: boolean;
  /** Custom label override */
  label?: string;
}

const VARIANT_STYLES: Record<BuyButtonVariant, string> = {
  amazon:
    "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl focus-visible:outline-orange-500",
  shopify:
    "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl focus-visible:outline-green-500",
  "amazon-light":
    "bg-white text-primary-700 shadow-xl hover:shadow-2xl focus-visible:outline-primary-500",
  "shopify-light":
    "bg-green-500 text-white shadow-xl hover:shadow-2xl focus-visible:outline-green-500",
};

const SIZE_STYLES: Record<BuyButtonSize, { className: string; iconSize: number }> = {
  sm: { className: "gap-2 px-4 py-2 text-sm", iconSize: 16 },
  md: { className: "gap-2 px-6 py-3 text-base", iconSize: 20 },
  lg: { className: "gap-3 px-8 py-4 text-lg font-bold", iconSize: 24 },
};

const VARIANT_LABELS: Record<BuyButtonVariant, string> = {
  amazon: "Buy from Amazon",
  shopify: "Buy from Shopify",
  "amazon-light": "Buy Now on Amazon",
  "shopify-light": "Buy Now on Shopify",
};

export function BuyButton({
  href,
  variant = "amazon",
  size = "md",
  className = "",
  onClick,
  animated = true,
  label,
}: BuyButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const sizeConfig = SIZE_STYLES[size];
  const variantStyle = VARIANT_STYLES[variant];
  const buttonLabel = label ?? VARIANT_LABELS[variant];

  const baseClasses = `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${sizeConfig.className} ${variantStyle} ${className}`;

  if (animated) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
        className={baseClasses}
      >
        <ShoppingCart size={sizeConfig.iconSize} />
        {buttonLabel}
      </motion.a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${baseClasses} hover:scale-105`}
    >
      <ShoppingCart size={sizeConfig.iconSize} />
      {buttonLabel}
    </a>
  );
}
