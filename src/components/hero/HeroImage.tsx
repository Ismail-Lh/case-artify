import React from 'react';
import Image from 'next/image';

import PhoneImage from '../global/PhoneImage';

function HeroImage() {
  return (
    <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
      <div className="relative md:max-w-xl">
        <Image
          src="/images/your-image.png"
          alt="hero image"
          height={428}
          width={619}
          className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
        />
        <Image
          src="/images/line.png"
          alt="hero image"
          height={339}
          width={608}
          className="absolute -bottom-6 -left-6 w-20 select-none"
        />

        <PhoneImage className="w-64" imgSrc="/images/testimonials/1.jpg" />
      </div>
    </div>
  );
}

export default HeroImage;
