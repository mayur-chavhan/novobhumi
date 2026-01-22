// Hero section constants and data

import marqueeImg1 from "../../../../attached_assets/stock_images/hands_planting_seedl_a7b59a1b.jpg";
import marqueeImg2 from "../../../../attached_assets/stock_images/young_green_plant_sp_6574fa5f.jpg";
import marqueeImg3 from "../../../../attached_assets/stock_images/cocopeat_coir_fiber__56370582.jpg";
import marqueeImg4 from "../../../../attached_assets/stock_images/hands_planting_seedl_60881164.jpg";
import marqueeImg5 from "../../../../attached_assets/stock_images/young_green_plant_sp_4a8f5c44.jpg";
import marqueeImg6 from "../../../../attached_assets/stock_images/healthy_vegetable_pl_80e400fd.jpg";
import marqueeImg7 from "../../../../attached_assets/stock_images/hands_planting_seedl_5c812053.jpg";
import marqueeImg8 from "../../../../attached_assets/stock_images/young_green_plant_sp_e0e05568.jpg";
import marqueeImg9 from "../../../../attached_assets/stock_images/cocopeat_coir_fiber__049c16f9.jpg";
import marqueeImg10 from "../../../../attached_assets/stock_images/healthy_vegetable_pl_ab4ab2bc.jpg";

// Decorative illustration imports
import plant1 from "../../../assets/hero-illustrations/plant-1.svg";
import plant2 from "../../../assets/hero-illustrations/plant-2.svg";
import tomatoPlant from "../../../assets/hero-illustrations/vegetable-tomato.svg";
import carrot from "../../../assets/hero-illustrations/vegetable-carrot.svg";
import wateringCan from "../../../assets/hero-illustrations/tool-watering-can.svg";
import shovel from "../../../assets/hero-illustrations/tool-shovel.svg";
import seeds from "../../../assets/hero-illustrations/seeds.svg";
import leafAccent from "../../../assets/hero-illustrations/leaf-accent.svg";
import soilBag from "../../../assets/hero-illustrations/soil-bag.svg";
import strawberry from "../../../assets/hero-illustrations/strawberry.svg";
import cucumber from "../../../assets/hero-illustrations/cucumber.svg";
import bellPepper from "../../../assets/hero-illustrations/bell-pepper.svg";
import pumpkin from "../../../assets/hero-illustrations/pumpkin.svg";
import herbPot from "../../../assets/hero-illustrations/herb-pot.svg";
import farmerHat from "../../../assets/hero-illustrations/farmer-hat.svg";
import corn from "../../../assets/hero-illustrations/corn.svg";
import wheelbarrow from "../../../assets/hero-illustrations/wheelbarrow.svg";
import sunflower from "../../../assets/hero-illustrations/sunflower.svg";
import gardenGloves from "../../../assets/hero-illustrations/garden-gloves.svg";
import rake from "../../../assets/hero-illustrations/rake.svg";

export interface MarqueeImage {
  src: string;
  alt: string;
}

export interface StatCard {
  label: string;
  value: string;
  helper: string;
}

export interface DecorativeElement {
  src: string;
  className: string;
  parallaxType: 'normal' | 'slow' | 'fast';
  animation?: {
    rotate?: number[];
    scale?: number[];
    y?: number[];
    x?: number[];
  };
  duration?: number;
}

export const HERO_BULLETS = [
  "Retains 8-10x water without waterlogging",
  "Naturally pest-free and pH balanced (5.5 - 6.8)",
  "Ready in minutes - just soak, fluff, and plant",
] as const;

export const STAT_CARDS: StatCard[] = [
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
];

export const MARQUEE_IMAGES: MarqueeImage[] = [
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

// Background decorative elements configuration
export const BACKGROUND_DECORATIONS: DecorativeElement[] = [
  // Top section
  {
    src: plant1,
    className: "absolute left-4 top-28 w-24 opacity-40 sm:left-12 sm:top-32 sm:w-32 lg:block",
    parallaxType: 'normal',
    animation: { rotate: [0, 5, 0], scale: [1, 1.05, 1] },
    duration: 6,
  },
  {
    src: wateringCan,
    className: "absolute right-4 top-28 w-20 opacity-40 sm:right-16 sm:top-36 sm:w-28 lg:block",
    parallaxType: 'slow',
    animation: { rotate: [0, -3, 0] },
    duration: 5,
  },
  {
    src: soilBag,
    className: "absolute left-[10%] top-[15%] hidden w-24 opacity-30 lg:block",
    parallaxType: 'fast',
  },
  {
    src: herbPot,
    className: "absolute right-[8%] top-[12%] hidden w-20 opacity-35 lg:block",
    parallaxType: 'normal',
    animation: { y: [-5, 5, -5] },
    duration: 4,
  },
  // Middle section
  {
    src: strawberry,
    className: "absolute left-[5%] top-[45%] hidden w-16 opacity-35 lg:block",
    parallaxType: 'slow',
    animation: { rotate: [-3, 3, -3] },
    duration: 5.5,
  },
  {
    src: bellPepper,
    className: "absolute right-[5%] top-[50%] hidden w-16 opacity-30 lg:block",
    parallaxType: 'normal',
    animation: { rotate: [2, -2, 2] },
    duration: 6,
  },
  // Bottom section
  {
    src: leafAccent,
    className: "absolute bottom-24 left-8 w-16 opacity-30 sm:left-20 sm:w-20 lg:block",
    parallaxType: 'normal',
    animation: { rotate: [0, 8, 0] },
    duration: 7,
  },
  {
    src: seeds,
    className: "absolute bottom-20 right-12 w-20 opacity-25 sm:right-24 sm:w-24 lg:block",
    parallaxType: 'slow',
  },
  {
    src: pumpkin,
    className: "absolute bottom-[15%] left-[8%] hidden w-24 opacity-30 lg:block",
    parallaxType: 'fast',
    animation: { scale: [1, 1.05, 1] },
    duration: 8,
  },
  {
    src: cucumber,
    className: "absolute bottom-[20%] right-[10%] hidden w-20 opacity-35 lg:block",
    parallaxType: 'normal',
    animation: { rotate: [-5, 5, -5] },
    duration: 6.5,
  },
  // Additional decorations
  {
    src: farmerHat,
    className: "absolute left-[18%] top-[25%] hidden w-18 opacity-30 lg:block",
    parallaxType: 'normal',
    animation: { rotate: [-3, 3, -3] },
    duration: 5,
  },
  {
    src: corn,
    className: "absolute right-[12%] top-[22%] hidden w-16 opacity-35 lg:block",
    parallaxType: 'fast',
  },
  {
    src: wheelbarrow,
    className: "absolute bottom-[25%] right-[12%] hidden w-24 opacity-30 lg:block",
    parallaxType: 'slow',
    animation: { x: [-2, 2, -2] },
    duration: 7,
  },
  {
    src: sunflower,
    className: "absolute left-[8%] top-[35%] hidden w-20 opacity-35 lg:block",
    parallaxType: 'normal',
    animation: { rotate: [0, 5, 0] },
    duration: 6,
  },
  {
    src: gardenGloves,
    className: "absolute bottom-[30%] left-[12%] hidden w-20 opacity-30 lg:block",
    parallaxType: 'fast',
  },
  {
    src: rake,
    className: "absolute right-[15%] top-[40%] hidden w-16 opacity-30 lg:block",
    parallaxType: 'normal',
    animation: { rotate: [2, -2, 2] },
    duration: 5.5,
  },
];

// Product floating decorations (around the product image)
export const PRODUCT_DECORATIONS = {
  tomatoPlant,
  plant2,
  carrot,
  shovel,
};
