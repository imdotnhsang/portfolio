'use client';

import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';
import Lottie from 'react-lottie-player';

import type { FC } from 'react';

import { AnimationComingSoon } from '@/assets';
import { usePathname } from '@/services';
import { URouter } from '@/utils';

export const UnderConstruction: FC = memo(function UnderConstruction() {
  const t = useTranslations();
  const pathname = usePathname();

  const routeName = useMemo(() => URouter.getRouteName(pathname), [pathname]);

  return (
    <div className='container py-8 md:py-16'>
      <h1 className='mb-4 font-mono text-3xl font-bold text-primary md:mb-6 md:text-4xl'>
        {t(`page.${routeName || 'home'}.name`)}
      </h1>
      <p className='mb-14 text-sm text-secondary md:mb-10 md:text-base'>
        {t('comingSoon.description')}
      </p>
      <div className='flex items-start justify-center'>
        <Lottie
          animationData={AnimationComingSoon}
          loop
          className='w-full max-w-[500px]'
          play
        />
      </div>
    </div>
  );
});
