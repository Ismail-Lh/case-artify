import React from 'react';
import Image from 'next/image';
import { heroCheckListItems } from '@/utils/constants';
import { ArrowRight } from 'lucide-react';

import ButtonLink from '@/components/buttons/ButtonLink';
import CheckList from '@/components/global/CheckList';
import MaxWidthWrapper from '@/components/global/MaxWidthWrapper';
import PhoneImage from '@/components/global/PhoneImage';

function CustomCaseUploadSection() {
  return (
    <section>
      <MaxWidthWrapper className="py-24">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
              Upload your photo and get{' '}
              <span className="relative bg-green-600 px-2 text-white">
                your own case{' '}
              </span>{' '}
              now
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative flex grid-cols-2 flex-col items-center gap-40 md:grid">
            <Image
              src="/images/arrow.png"
              height={31}
              width={126}
              alt="arrow image"
              className="absolute left-1/2 top-[25rem] z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 md:top-1/2 md:rotate-0"
            />

            <div className="relative h-80 w-full max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 md:h-full md:justify-self-end lg:rounded-2xl">
              <Image
                src="/images/messi.jpg"
                width={1280}
                height={853}
                alt="horse image"
                className="size-full rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>

            <PhoneImage imgSrc="/images/messi.jpg" className="w-60" />
          </div>
        </div>

        <CheckList
          listData={heroCheckListItems}
          className="mt-12 sm:items-center"
        />
        <div className="flex justify-center">
          <ButtonLink
            href="/configure/upload"
            size="lg"
            className="mx-auto mt-8"
          >
            Create your case now <ArrowRight className="ml-1.5 size-4" />
          </ButtonLink>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default CustomCaseUploadSection;
