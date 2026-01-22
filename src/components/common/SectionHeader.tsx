/**
 * SectionHeader - Reusable section header with badge, title, and description
 */

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: {
    icon?: ReactNode;
    text: string;
    color?: 'emerald' | 'amber' | 'primary' | 'blue';
  };
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
  className?: string;
}

const badgeColors = {
  emerald: 'bg-emerald-100 text-emerald-700',
  amber: 'bg-amber-100 text-amber-700',
  primary: 'bg-primary-100 text-primary-700',
  blue: 'bg-blue-100 text-blue-700',
};

const SectionHeader = ({
  badge,
  title,
  description,
  centered = true,
  className = '',
}: SectionHeaderProps) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 lg:mb-16 ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm ${
            badgeColors[badge.color || 'emerald']
          }`}
        >
          {badge.icon}
          {badge.text}
        </motion.div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
