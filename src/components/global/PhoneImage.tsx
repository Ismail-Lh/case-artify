import React, { HTMLAttributes } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

interface PhoneImageProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

function PhoneImage({
  className,
  imgSrc,
  dark = false,
  ...props
}: PhoneImageProps) {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? '/images/phone-template-dark-edges.png'
            : '/images/phone-template-white-edges.png'
        }
        alt="phone-template"
        height={1831}
        width={896}
        className="pointer-events-none z-50 select-none overflow-hidden"
      />

      <div className="absolute inset-0 -z-10 ">
        <Image
          src={imgSrc}
          alt="overlaying phone image"
          width={896}
          height={1831}
          className="rounded-[2.7rem] object-cover"
        />
      </div>
    </div>
  );
}

export default PhoneImage;
