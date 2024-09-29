'use client';

import { useTheme } from 'next-themes';
import { useMemo } from 'react';

import { IconLogoDark36, IconLogoLight36 } from '@/assets';
import { useIsClient } from '@/hooks';

import type { TBasicTheme, TSvgComp } from '@/types';

export function useLogo(): TSvgComp {
  const isClient = useIsClient();
  const { resolvedTheme } = useTheme();

  const Logo = useMemo(() => {
    if (!isClient) {
      return IconLogoLight36;
    }

    const logoByTheme = {
      light: IconLogoLight36,
      dark: IconLogoDark36
    };

    return logoByTheme[resolvedTheme as TBasicTheme];
  }, [isClient, resolvedTheme]);

  return Logo;
}
