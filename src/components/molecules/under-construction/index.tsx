'use client';

import { useTranslations } from 'next-intl';
import { memo } from 'react';
import Lottie from 'react-lottie';

import type { FC } from 'react';

import { AmtDataComingSoon } from '@/assets';
import { withErrorBoundary } from '@/hocs';

export const UnderConstruction: FC = withErrorBoundary(
  memo(function UnderConstruction() {
    const t = useTranslations();

    return (
      <div className='md::space-y-8 container space-y-6 py-8 md:py-16'>
        <p className='text-base-rps text-secondary'>{t('comingSoon.label')}</p>
        <div className='flex items-start justify-center'>
          <div className='w-full md:w-2/5'>
            <Lottie
              options={{
                animationData: AmtDataComingSoon,
                loop: true,
                autoplay: true
              }}
              isClickToPauseDisabled
              ariaRole='div'
            />
          </div>
        </div>
      </div>
    );
  })
);
