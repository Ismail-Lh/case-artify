export const heroListItems = [
  'High-quality, durable material',
  '5 year print guarantee',
  'Modern and stylish design',
] as const;

export const usersImage = Array.from(
  { length: 5 },
  (_, i) => `/images/users/user-${i + 1}.png`
);
