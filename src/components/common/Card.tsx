/**
 * Card - Reusable card component with hover effects
 */

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  hover?: boolean;
  delay?: number;
}

const variantClasses = {
  default: 'bg-white shadow-sm border border-gray-100',
  elevated: 'bg-white shadow-lg border border-gray-100',
  outlined: 'bg-white border-2 border-gray-200',
};

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  delay = 0,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`rounded-2xl p-6 transition-all duration-300 ${variantClasses[variant]} ${
        hover ? 'hover:shadow-xl hover:border-emerald-200' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
