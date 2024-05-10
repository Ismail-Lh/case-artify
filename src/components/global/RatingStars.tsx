import React from 'react';
import { Star } from 'lucide-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

import { cn } from '@/lib/utils';

interface RatingStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  numberOfStars?: number;
  size?: string;
}

function RatingStars({ numberOfStars = 5, className, size }: RatingStarsProps) {
  return (
    <div className={cn('flex items-center justify-center gap-0.5', className)}>
      {Array.from({ length: numberOfStars }).map(() => (
        <Star
          key={uuidv4()}
          className={cn('size-4 fill-green-600 text-green-600', size)}
        />
      ))}
    </div>
  );
}

export default RatingStars;
