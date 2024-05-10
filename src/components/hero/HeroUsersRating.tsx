import React from 'react';

import RatingStars from '../global/RatingStars';
import HeroUsersAvatar from './HeroUsersAvatar';

function HeroUsersRating() {
  return (
    <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
      <HeroUsersAvatar />

      <div className="flex flex-col items-center justify-between">
        <RatingStars />

        <p className="font-semibold text-gray-500">
          Rated 5/5 by 1000+ customers
        </p>
      </div>
    </div>
  );
}

export default HeroUsersRating;
