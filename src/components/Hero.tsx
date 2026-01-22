import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Sprout, ShoppingCart, ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroProduct from "../../assets/novobhumi-cocopeat-5kg-block.png";
import { activeHeroCopy } from "../constants/heroCopy";
import { useConfig } from "../context/ConfigContext";
import { use3DTilt } from "../hooks/use3DTilt";

import marqueeImg1 from "../../attached_assets/stock_images/hands_planting_seedl_a7b59a1b.jpg";
import marqueeImg2 from "../../attached_assets/stock_images/young_green_plant_sp_6574fa5f.jpg";
import marqueeImg3 from "../../attached_assets/stock_images/cocopeat_coir_fiber__56370582.jpg";
import marqueeImg4 from "../../attached_assets/stock_images/hands_planting_seedl_60881164.jpg";
import marqueeImg5 from "../../attached_assets/stock_images/young_green_plant_sp_4a8f5c44.jpg";
import marqueeImg6 from "../../attached_assets/stock_images/healthy_vegetable_pl_80e400fd.jpg";
import marqueeImg7 from "../../attached_assets/stock_images/hands_planting_seedl_5c812053.jpg";
import marqueeImg8 from "../../attached_assets/stock_images/young_green_plant_sp_e0e05568.jpg";
import marqueeImg9 from "../../attached_assets/stock_images/cocopeat_coir_fiber__049c16f9.jpg";
import marqueeImg10 from "../../attached_assets/stock_images/healthy_vegetable_pl_ab4ab2bc.jpg";

// Decorative illustration imports
// License: Created for Novobhumi project, free to use
import plant1 from "../../assets/hero-illustrations/plant-1.svg";
import plant2 from "../../assets/hero-illustrations/plant-2.svg";
import tomatoPlant from "../../assets/hero-illustrations/vegetable-tomato.svg";
import carrot from "../../assets/hero-illustrations/vegetable-carrot.svg";
import wateringCan from "../../assets/hero-illustrations/tool-watering-can.svg";
import shovel from "../../assets/hero-illustrations/tool-shovel.svg";
import seeds from "../../assets/hero-illustrations/seeds.svg";
import leafAccent from "../../assets/hero-illustrations/leaf-accent.svg";
import soilBag from "../../assets/hero-illustrations/soil-bag.svg";
import strawberry from "../../assets/hero-illustrations/strawberry.svg";
import cucumber from "../../assets/hero-illustrations/cucumber.svg";
import bellPepper from "../../assets/hero-illustrations/bell-pepper.svg";
import pumpkin from "../../assets/hero-illustrations/pumpkin.svg";
import herbPot from "../../assets/hero-illustrations/herb-pot.svg";
import farmerHat from "../../assets/hero-illustrations/farmer-hat.svg";
import corn from "../../assets/hero-illustrations/corn.svg";
import wheelbarrow from "../../assets/hero-illustrations/wheelbarrow.svg";
import sunflower from "../../assets/hero-illustrations/sunflower.svg";
import gardenGloves from "../../assets/hero-illustrations/garden-gloves.svg";
import rake from "../../assets/hero-illustrations/rake.svg";

const Hero = () => {
  const { settings } = useConfig();
  const shouldReduceMotion = useReducedMotion();
  const productImageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // 3D tilt effect for product image - more pronounced movement
  const tiltStyle = use3DTilt(productImageRef, {
    maxTiltX: 20,
    maxTiltY: 20,
    perspective: 1000,
    scale: 1.05,
    transitionSpeed: 0.2,
  });

  // Parallax scroll effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const parallaxYSlow = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const parallaxYFast = useTransform(scrollYProgress, [0, 1], [0, -180]);

  // Marquee images for cocopeat showcase
  const marqueeImages = [
    { src: marqueeImg1, alt: "Hands planting seedling in cocopeat soil" },
    { src: marqueeImg2, alt: "Young green plant sprouting from soil" },
    { src: marqueeImg3, alt: "Natural coconut coir fiber texture" },
    { src: marqueeImg4, alt: "Planting seeds in rich organic cocopeat" },
    { src: marqueeImg5, alt: "Fresh seedling growing in cocopeat medium" },
    { src: marqueeImg6, alt: "Healthy vegetable plants in garden soil" },
    { src: marqueeImg7, alt: "Gardener planting in cocopeat growing medium" },
    { src: marqueeImg8, alt: "Vibrant green plant emerging from soil" },
    { src: marqueeImg9, alt: "Cocopeat coir fiber close-up texture" },
    { src: marqueeImg10, alt: "Lush vegetables growing in organic soil" },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-start justify-center overflow-hidden bg-gradient-earth px-4 pt-32 pb-48 scroll-mt-0 sm:px-6 sm:pt-36 sm:pb-52 lg:px-8 lg:pt-32 lg:pb-32"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/50 to-transparent"
        aria-hidden="true"
      />

      {/* Background decorative illustrations - more abundant */}
      {/* Top section decorations */}
      <motion.img
        src={plant1}
        alt=""
        aria-hidden="true"
        className="absolute left-4 top-28 w-24 opacity-40 sm:left-12 sm:top-32 sm:w-32 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={wateringCan}
        alt=""
        aria-hidden="true"
        className="absolute right-4 top-28 w-20 opacity-40 sm:right-16 sm:top-36 sm:w-28 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxYSlow }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: [0, -3, 0],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={soilBag}
        alt=""
        aria-hidden="true"
        className="absolute left-[10%] top-[15%] hidden w-24 opacity-30 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxYFast }}
      />
      <motion.img
        src={herbPot}
        alt=""
        aria-hidden="true"
        className="absolute right-[8%] top-[12%] hidden w-20 opacity-35 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [-5, 5, -5],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Middle section decorations */}
      <motion.img
        src={strawberry}
        alt=""
        aria-hidden="true"
        className="absolute left-[5%] top-[45%] hidden w-16 opacity-35 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxYSlow }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: [-3, 3, -3],
              }
        }
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={bellPepper}
        alt=""
        aria-hidden="true"
        className="absolute right-[5%] top-[50%] hidden w-16 opacity-30 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: [2, -2, 2],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom section decorations */}
      <motion.img
        src={leafAccent}
        alt=""
        aria-hidden="true"
        className="absolute bottom-24 left-8 w-16 opacity-30 sm:left-20 sm:w-20 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: [0, 8, 0],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={seeds}
        alt=""
        aria-hidden="true"
        className="absolute bottom-20 right-12 w-20 opacity-25 sm:right-24 sm:w-24 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxYSlow }}
      />
      <motion.img
        src={pumpkin}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[15%] left-[8%] hidden w-24 opacity-30 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxYFast }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={cucumber}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[20%] right-[10%] hidden w-20 opacity-35 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: [-5, 5, -5],
              }
        }
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional decorations */}
      <motion.img
        src={farmerHat}
        alt=""
        aria-hidden="true"
        className="absolute left-[18%] top-[25%] hidden w-18 opacity-30 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: [-3, 3, -3],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={corn}
        alt=""
        aria-hidden="true"
        className="absolute right-[12%] top-[22%] hidden w-16 opacity-35 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxYFast }}
      />
      <motion.img
        src={wheelbarrow}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[25%] right-[12%] hidden w-24 opacity-30 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxYSlow }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [-2, 2, -2],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={sunflower}
        alt=""
        aria-hidden="true"
        className="absolute left-[8%] top-[35%] hidden w-20 opacity-35 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: [0, 5, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={gardenGloves}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[30%] left-[12%] hidden w-20 opacity-30 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxYFast }}
      />
      <motion.img
        src={rake}
        alt=""
        aria-hidden="true"
        className="absolute right-[15%] top-[40%] hidden w-16 opacity-30 lg:block"
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: [2, -2, 2],
              }
        }
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Mobile/Tablet Layout: Single Column */}
        <div className="lg:hidden space-y-6">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl"
          >
            {activeHeroCopy.headline}
          </motion.h1>

          {/* Product Image - Mobile Only (appears right after title) */}
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

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 text-sm text-gray-700 sm:text-base"
          >
            <p>{activeHeroCopy.description}</p>
            <ul className="space-y-2">
              {[
                "Retains 8-10x water without waterlogging",
                "Naturally pest-free and pH balanced (5.5 - 6.8)",
                "Ready in minutes - just soak, fluff, and plant",
              ].map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            {settings?.showAmazon && settings?.amazonUrl && (
              <motion.a
                href={settings.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                <ShoppingCart size={22} /> Buy from Amazon
              </motion.a>
            )}
            {settings?.showShopify && settings?.shopifyUrl && (
              <motion.a
                href={settings.shopifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                <ShoppingCart size={22} /> Buy from Shopify
              </motion.a>
            )}
            <motion.a
              href="#products"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-600 px-8 py-4 text-base font-semibold text-primary-700 transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
            >
              <Sprout size={22} /> Explore products
            </motion.a>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {[
              {
                label: "Customer rating",
                value: "4.9/5",
                helper: "500+ gardener reviews",
              },
              {
                label: "Water saved",
                value: "40%",
                helper: "Average reduction in watering",
              },
              {
                label: "Setup time",
                value: "5 mins",
                helper: "Hydrate, fluff, and plant",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-2xl bg-white/85 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
                  {card.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-gray-900">
                  {card.value}
                </p>
                <p className="mt-1 text-sm text-gray-600">{card.helper}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Layout: Two Column Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left column: Content */}
          <div className="space-y-6">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight text-gray-900 xl:text-5xl"
            >
              {activeHeroCopy.headline}
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 text-lg text-gray-700"
            >
              <p>{activeHeroCopy.description}</p>
              <ul className="space-y-2">
                {[
                  "Retains 8-10x water without waterlogging",
                  "Naturally pest-free and pH balanced (5.5 - 6.8)",
                  "Ready in minutes - just soak, fluff, and plant",
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              {settings?.showAmazon && settings?.amazonUrl && (
                <motion.a
                  href={settings.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  <ShoppingCart size={22} /> Buy from Amazon
                </motion.a>
              )}
              {settings?.showShopify && settings?.shopifyUrl && (
                <motion.a
                  href={settings.shopifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                >
                  <ShoppingCart size={22} /> Buy from Shopify
                </motion.a>
              )}
              <motion.a
                href="#products"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-600 px-8 py-4 text-base font-semibold text-primary-700 transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
              >
                <Sprout size={22} /> Explore products
              </motion.a>
            </motion.div>

            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid gap-3 sm:grid-cols-3"
            >
              {[
                {
                  label: "Customer rating",
                  value: "4.9/5",
                  helper: "500+ gardener reviews",
                },
                {
                  label: "Water saved",
                  value: "40%",
                  helper: "Average reduction in watering",
                },
                {
                  label: "Setup time",
                  value: "5 mins",
                  helper: "Hydrate, fluff, and plant",
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl bg-white/85 p-4 shadow-sm backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
                    {card.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">
                    {card.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{card.helper}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column: Product showcase with enhanced 3D tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 relative flex items-center justify-center lg:order-2"
        >
          {/* Floating decorative elements around product - closer and more visible */}
          <motion.img
            src={tomatoPlant}
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
            src={plant2}
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
            src={carrot}
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
            src={shovel}
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
                ...tiltStyle,
                willChange: "transform",
                transformStyle: "preserve-3d",
              }}
              loading="eager"
            />
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Cocopeat Showcase Marquee */}
      <div className="absolute bottom-8 left-0 right-0 z-20 overflow-hidden sm:bottom-16 lg:bottom-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary-50 to-transparent z-10 pointer-events-none sm:w-24 lg:w-32" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary-50 to-transparent z-10 pointer-events-none sm:w-24 lg:w-32" />
          
          {/* Marquee container */}
          <div className="flex gap-3 animate-marquee hover:pause-marquee py-2 sm:gap-4 sm:py-3 lg:gap-6 lg:py-4">
            {/* First set of images */}
            {marqueeImages.map((image, index) => (
              <div
                key={`marquee-1-${index}`}
                className="flex-shrink-0 group relative"
              >
                <div className="w-48 h-28 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white ring-2 ring-primary-200 hover:ring-primary-400 sm:w-56 sm:h-32 sm:rounded-2xl lg:w-64 lg:h-40">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {image.alt}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {marqueeImages.map((image, index) => (
              <div
                key={`marquee-2-${index}`}
                className="flex-shrink-0 group relative"
              >
                <div className="w-48 h-28 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white ring-2 ring-primary-200 hover:ring-primary-400 sm:w-56 sm:h-32 sm:rounded-2xl lg:w-64 lg:h-40">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {image.alt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Button - hidden on mobile to prevent overlap */}
      <motion.a
        href="#benefits"
        className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-primary-700 transition hover:text-primary-800 lg:flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-sm font-semibold">Scroll to explore</span>
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur"
        >
          <ChevronDown size={28} strokeWidth={2.5} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
