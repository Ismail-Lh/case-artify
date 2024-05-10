/* eslint-disable react/jsx-pascal-case */
import Image from 'next/image';
import { usersReviewData } from '@/utils/constants';

import { Icons } from '@/components/global/Icons';
import MaxWidthWrapper from '@/components/global/MaxWidthWrapper';
import UserReview from '@/components/usersReview/UserReview';

function UsersReviewSection() {
  return (
    <section className="bg-slate-100 py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
          <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
            What our{' '}
            <span className="relative px-2">
              customers{' '}
              <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-green-500 sm:block" />
            </span>{' '}
            say
          </h2>

          <Image
            src="/images/snake-2.png"
            alt="snake image"
            width={761}
            height={675}
            className="w-24 lg:order-2"
          />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {usersReviewData.map((userData) => (
            <UserReview
              key={userData.userId}
              userReview={userData.userReview}
              userName={userData.userName}
              userImage={userData.userImage}
              userRating={userData.userRating}
              userAlt={userData.userAlt}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default UsersReviewSection;
