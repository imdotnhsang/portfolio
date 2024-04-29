import { CCore } from '@/constants';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from '.';

interface IUseMediaQueryOptions {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
}

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true
  }: IUseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (CCore.IS_SERVER) {
      return defaultValue;
    }

    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }

    return defaultValue;
  });

  function handleChange() {
    setMatches(getMatches(query));
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
}
