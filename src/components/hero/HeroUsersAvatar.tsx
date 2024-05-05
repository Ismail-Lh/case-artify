import React from 'react';
import Image from 'next/image';
import { usersImage } from '@/utils/constants';

function HeroUsersAvatar() {
  return (
    <div className="flex -space-x-4">
      {usersImage.map((src: string) => (
        <Image
          key={src}
          className="inline-block size-10 rounded-full ring-2 ring-slate-100"
          src={src}
          alt="user image"
          width={300}
          height={300}
        />
      ))}
    </div>
  );
}

export default HeroUsersAvatar;
