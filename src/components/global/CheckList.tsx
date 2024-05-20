import React from 'react';

import { cn } from '@/lib/utils';
import CheckListItem from './CheckListItem';

type CheckListProps = {
  listData: string[];
  className?: string;
};

function CheckList({ listData, className }: CheckListProps) {
  return (
    <ul
      className={cn(
        'mt-8 flex flex-col items-center justify-center space-y-2 text-left font-medium sm:items-start',
        className
      )}
    >
      <div className="space-y-2">
        {listData.map((item) => (
          <CheckListItem key={item} text={item} />
        ))}
      </div>
    </ul>
  );
}

export default CheckList;
