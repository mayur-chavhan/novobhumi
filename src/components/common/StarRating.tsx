/**
 * StarRating - Reusable star rating display component
 */

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showEmpty?: boolean;
}

const sizeMap = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-6 h-6',
};

const StarRating = ({
  rating,
  maxRating = 5,
  size = 'md',
  showEmpty = true,
}: StarRatingProps) => {
  const sizeClass = sizeMap[size];

  return (
    <div className="flex gap-0.5">
      {[...Array(maxRating)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${
            i < rating
              ? 'text-yellow-400 fill-yellow-400'
              : showEmpty
              ? 'text-gray-300'
              : 'hidden'
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
