import React from 'react';
import { heroListItems } from '@/utils/constants';

import HeroListItem from './HeroListItem';

function HeroList() {
  return (
    <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
      <div className="space-y-2">
        {heroListItems.map((item) => (
          <HeroListItem key={item} text={item} />
        ))}
      </div>
    </ul>
  );
}

export default HeroList;
