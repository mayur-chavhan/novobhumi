/**
 * SectionWrapper - Reusable section container with common styling
 */

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'primary';
  withBlobs?: boolean;
}

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  gradient: 'bg-gradient-to-b from-gray-50 via-white to-emerald-50/30',
  primary: 'bg-gradient-to-b from-primary-50 to-white',
};

const SectionWrapper = ({
  id,
  children,
  className = '',
  background = 'white',
  withBlobs = false,
}: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-16 sm:py-20 lg:py-24 scroll-mt-28 overflow-hidden ${backgroundClasses[background]} ${className}`}
    >
      {withBlobs && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl" />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
