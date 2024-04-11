import { sizesScreen } from '@/theme';
import { useMediaQuery } from './useMediaQuery';

export function useMatchScreen(
  size: keyof typeof sizesScreen = 'sm',
  compare: 'min' | 'max' = 'min'
) {
  const isMatch = useMediaQuery(
    `(${compare}-width: ${sizesScreen[size] + (compare === 'max' ? -1 : 0)}px)`
  );

  return isMatch;
}
