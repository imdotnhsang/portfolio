'use client';

import { IconLogoLight36 } from '@/assets';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { memo, useMemo } from 'react';

import type { FC } from 'react';

import { router } from '@/routes';

import type { IObject } from '@/interfaces';
import type { TSvgComp } from '@/types';

const LogoConfig: IObject<TSvgComp> = {
  light: IconLogoLight36,
  dark: IconLogoLight36
};

const Logo: FC = memo(function Logo() {
  const { theme } = useTheme();

  const Icon: TSvgComp = useMemo(() => {
    if (!theme) {
      return IconLogoLight36;
    }

    return LogoConfig[theme];
  }, [theme]);

  return <Icon />;
});

export const Header: FC = memo(function Header() {
  return (
    <div className='container flex w-full items-center justify-between py-5'>
      <div className='flex items-center gap-16'>
        <Link href={router.home.path}>
          <Logo />
        </Link>
        <div className='flex h-12.5 items-center gap-16 rounded-full border border-line-strong px-8'>
          {Object.values(router)
            .filter((route) => route.path !== '/')
            .map((route) => (
              <Link
                key={route.name}
                href={route.path}
                className='link font-mono font-bold'
                locale='/en'
              >
                {route.name}
              </Link>
            ))}
        </div>
      </div>
      <div>right</div>
    </div>
  );
});
