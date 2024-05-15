import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitArray<T>(arr: Array<T>, size: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < arr?.length; i += 1) {
    const index = i % size;

    if (!result[index]) {
      result[index] = [];
    }

    result[index].push(arr[i]);
  }

  return result;
}
