import { motion, useReducedMotion } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import heroProduct from "../../../assets/novobhumi-cocopeat-5kg-block.png";
import { use3DTilt } from "../../../hooks/use3DTilt";
import { PRODUCT_DECORATIONS } from "./constants";

interface HeroProductShowcaseProps {
  isMobile?: boolean;
}

export function HeroProductShowcase({ isMobile = false }: HeroProductShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const productImageRef = useRef<HTMLImageElement>(null);

  // 3D tilt effect for product image - more pronounced movement
  const tiltStyle = use3DTilt(productImageRef, {
    maxTiltX: 20,
    maxTiltY: 20,
    perspective: 1000,
    scale: 1.05,
    transitionSpeed: 0.2,
  });

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative flex items-center justify-center py-4"
      >
        <motion.img
          src={heroProduct}
          alt="Novobhumi premium cocopeat 5kg block"
          className="relative z-20 h-auto w-full max-w-md object-contain drop-shadow-2xl"
          loading="eager"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="order-2 relative flex items-center justify-center lg:order-2"
    >
      {/* Floating decorative elements around product - closer and more visible */}
      <motion.img
        src={PRODUCT_DECORATIONS.tomatoPlant}
        alt=""
        aria-hidden="true"
        className="absolute -left-8 top-8 z-10 w-20 opacity-50 sm:-left-12 sm:top-12 sm:w-24"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [-8, 8, -8],
                rotate: [-8, 8, -8],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      />
      <motion.img
        src={PRODUCT_DECORATIONS.plant2}
        alt=""
        aria-hidden="true"
        className="absolute -right-4 top-16 z-10 w-24 opacity-50 sm:-right-8 sm:top-20 sm:w-28"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [8, -8, 8],
                rotate: [5, -5, 5],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      />
      <motion.img
        src={PRODUCT_DECORATIONS.carrot}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-2 -left-6 z-10 w-18 opacity-50 sm:-bottom-4 sm:-left-8 sm:w-20"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [-5, 5, -5],
                rotate: [-10, 10, -10],
              }
        }
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      />
      <motion.img
        src={PRODUCT_DECORATIONS.shovel}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-6 -right-2 z-10 w-16 opacity-45 sm:-bottom-8 sm:-right-4 sm:w-18"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [5, -5, 5],
                rotate: [8, -8, 8],
              }
        }
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      />

      {/* Product image with 3D tilt - no borders, clean presentation */}
      <motion.div className="relative w-full max-w-2xl">
        <motion.img
          ref={productImageRef}
          src={heroProduct}
          alt="Novobhumi premium cocopeat 5kg block"
          className="relative z-20 h-auto w-full object-contain drop-shadow-2xl"
          style={{
            ...(tiltStyle as CSSProperties),
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
          loading="eager"
        />
      </motion.div>
    </motion.div>
  );
}
