import Image from 'next/image';

import MaxWidthWrapper from '@/components/global/MaxWidthWrapper';
import HeroDescription from '@/components/hero/HeroDescription';
import HeroImage from '@/components/hero/HeroImage';
import HeroList from '@/components/hero/HeroList';
import HeroTitle from '@/components/hero/HeroTitle';
import HeroUsersRating from '@/components/hero/HeroUsersRating';

function HeroSection() {
  return (
    <section>
      <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="absolute -top-20 left-0 hidden w-28 lg:block">
              <Image
                src="/images/snake-1.png"
                width={500}
                height={500}
                alt="snake-img"
                className="w-full"
              />
            </div>

            <HeroTitle />

            <HeroDescription />

            <HeroList />

            <HeroUsersRating />
          </div>
        </div>

        <HeroImage />
      </MaxWidthWrapper>
    </section>
  );
}

export default HeroSection;
