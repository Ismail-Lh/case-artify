/* eslint-disable react/jsx-pascal-case */
import { Check } from 'lucide-react';

import RatingStars from '@/components/global/RatingStars';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type UserReviewProps = {
  userReview: string;
  userName: string;
  userImage: string;
  userRating: number;
  userAlt: string;
};

function UserReview({
  userReview,
  userName,
  userImage,
  userRating,
  userAlt,
}: UserReviewProps) {
  return (
    <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
      <RatingStars
        className="mb-2 items-start justify-start"
        size="h-5 w-5"
        numberOfStars={userRating}
      />

      <div className="text-lg leading-8">
        <p>{userReview}</p>
      </div>

      <div className="mt-2 flex gap-4">
        <Avatar>
          <AvatarImage src={userImage} />
          <AvatarFallback>{userAlt}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <p className="font-semibold">{userName}</p>
          <div className="flex items-center gap-1.5 text-zinc-600">
            <Check className="size-4 stroke-[3px] text-green-600" />

            <p className="text-sm">Verified Purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReview;
