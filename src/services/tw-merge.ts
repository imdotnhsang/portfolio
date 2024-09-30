import _clsx from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-sm-rps',
        'text-base-rps',
        'text-lg-rps',
        'text-xl-rps',
        'text-2xl-rps',
        'text-3xl-rps',
        'text-4xl-rps',
        'text-5xl-rps',
        'text-6xl-rps',
        'text-7xl-rps',
        'text-8xl-rps',
        'text-9xl-rps'
      ],
      'ring-w': ['ring-border']
    }
  }
});

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(_clsx(inputs));
};
