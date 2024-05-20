import React from 'react';
import { Check } from 'lucide-react';

type CheckListItemProps = {
  text: string;
};

function CheckListItem({ text }: CheckListItemProps) {
  return (
    <li className="flex items-center gap-1.5 text-left">
      <Check className="size-5 shrink text-green-600" />
      {text}
    </li>
  );
}

export default CheckListItem;
