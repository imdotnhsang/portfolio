'use client';

import { IconLogoLight36 } from '@/assets';
import { useTheme } from 'next-themes';
import { memo, useMemo } from 'react';

import type { FC } from 'react';

import type { IObject } from '@/interfaces';
import type { TSvgComp } from '@/types';

const LogoConfig: IObject<TSvgComp> = {
  light: IconLogoLight36,
  dark: IconLogoLight36
};

export const Header: FC = memo(function Header() {
  const { theme } = useTheme();

  const Logo: TSvgComp = useMemo(() => {
    if (!theme) {
      return IconLogoLight36;
    }

    return LogoConfig[theme];
  }, [theme]);

  return (
    <div>
      <Logo />
    </div>
  );
});
