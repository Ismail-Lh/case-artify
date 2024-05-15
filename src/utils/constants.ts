// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

export const heroListItems = [
  'High-quality, durable material',
  '5 year print guarantee',
  'Modern and stylish design',
] as const;

export const usersImage = Array.from(
  { length: 5 },
  (_, i) => `/images/users/user-${i + 1}.png`
);

export const usersReviewData = [
  {
    userId: uuidv4(),
    userReview:
      '"The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and the image is super clear, on the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it."',
    userName: 'Jonathan',
    userImage: '/images/users/user-1.png',
    userAlt: 'JN',
    userRating: 5,
  },
  {
    userId: uuidv4(),
    userReview:
      '"I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratch marks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner, looks brand new after about half a year. I dig it."',
    userName: 'Josh',
    userImage: '/images/users/user-4.png',
    userAlt: 'JO',
    userRating: 5,
  },
];

export const PHONES = [
  '/images/testimonials/1.jpg',
  '/images/testimonials/2.jpg',
  '/images/testimonials/3.jpg',
  '/images/testimonials/4.jpg',
  '/images/testimonials/5.jpg',
  '/images/testimonials/6.jpg',
];
