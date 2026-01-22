/**
 * Benefits section data constants
 */

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
} from 'lucide-react';
import type { Benefit, KeyStat } from '../types';

export const benefits: Benefit[] = [
  {
    icon: Droplets,
    title: 'Superior Water Retention',
    description: 'Holds up to 8-10 times its weight in water, reducing watering frequency significantly.',
    stat: '8-10x',
    statLabel: 'Water Retention',
  },
  {
    icon: Sprout,
    title: 'Promotes Root Growth',
    description: 'Excellent aeration and drainage create ideal conditions for robust root development.',
    stat: '50%',
    statLabel: 'Faster Growth',
  },
  {
    icon: Leaf,
    title: '100% Eco-Friendly',
    description: 'Made from renewable coconut husks, a sustainable alternative to peat moss.',
    stat: '100%',
    statLabel: 'Natural',
  },
  {
    icon: FlaskConical,
    title: 'Perfect pH Balance',
    description: 'Naturally balanced pH (5.5-6.8) creates optimal growing conditions for all plants.',
    stat: '5.5-6.8',
    statLabel: 'pH Level',
  },
  {
    icon: Shield,
    title: 'Disease Resistant',
    description: 'Naturally resistant to fungal growth and soil-borne diseases for healthier plants.',
  },
  {
    icon: Wind,
    title: 'Excellent Aeration',
    description: 'Porous structure allows optimal air circulation to roots for better nutrient uptake.',
  },
  {
    icon: Recycle,
    title: 'Reusable 3-5 Cycles',
    description: 'Can be reused multiple times, making it cost-effective and environmentally friendly.',
    stat: '3-5x',
    statLabel: 'Reusable',
  },
  {
    icon: Thermometer,
    title: 'Temperature Stability',
    description: 'Excellent insulation protects roots from extreme temperature fluctuations.',
  },
  {
    icon: Bug,
    title: 'Weed & Pest Free',
    description: 'Sterilized and free from weed seeds, pathogens, and harmful pests.',
  },
  {
    icon: Flower2,
    title: 'Ideal for All Plants',
    description: 'Perfect for vegetables, herbs, flowers, houseplants, and hydroponics.',
  },
  {
    icon: Layers,
    title: 'Reduces Compaction',
    description: 'Improves soil structure and enhances overall soil health over time.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Carefully processed and graded, free from impurities and excess salts.',
  },
];

export const keyStats: KeyStat[] = [
  { value: '8-10x', label: 'Water Retention', icon: Droplets },
  { value: '40%', label: 'Less Watering', icon: Sprout },
  { value: '100%', label: 'Organic & Natural', icon: Leaf },
  { value: '4.9/5', label: 'Customer Rating', icon: Award },
];
