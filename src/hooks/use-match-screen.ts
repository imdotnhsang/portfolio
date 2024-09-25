import { screens } from '@/theme';

import { useMediaQuery } from './use-media-query';

export function useMatchScreen(
  size: keyof typeof screens = 'sm',
  compare: 'min' | 'max' = 'min'
) {
  const isMatch = useMediaQuery(
    `(${compare}-width: ${screens[size] + (compare === 'max' ? -1 : 0)}px)`
  );

  return isMatch;
}
