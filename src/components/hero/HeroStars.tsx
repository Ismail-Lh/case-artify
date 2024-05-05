import React from 'react';
import { Star } from 'lucide-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

type HeroStarsProps = {
  numberOfStars?: number;
};

function HeroStars({ numberOfStars = 5 }: HeroStarsProps) {
  return (
    <div className="flex items-center justify-center gap-0.5">
      {Array.from({ length: numberOfStars }).map(() => (
        <Star key={uuidv4()} className="size-4 fill-green-600 text-green-600" />
      ))}
    </div>
  );
}

export default HeroStars;