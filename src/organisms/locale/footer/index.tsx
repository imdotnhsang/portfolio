'use client';

import { ArrowUpRight } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';
import { memo } from 'react';

import type { FC } from 'react';

import { ExternalLink } from '@/components';
import { CEnv } from '@/constants';
import { withErrorBoundary } from '@/hocs';

import { ButtonKofi, ButtonMomo, ForkAndStarRepo } from './partials';

export const LocaleFooter: FC = withErrorBoundary(
  memo(function LocaleFooter() {
    const t = useTranslations();

    return (
      <div className='border-t border-stroke-subtle bg-fill-secondary'>
        <div className='container flex flex-col justify-between gap-4 py-4 md:gap-3 md:py-6 lg:flex-row lg:items-center xl:gap-0'>
          <div className='w-fulls flex flex-col justify-between md:gap-1 lg:justify-normal'>
            <p className='text-2xl-rps font-mono font-bold'>
              {t('footer.designBy')}: {CEnv.USERNAME}
            </p>
            <div className='flex justify-between'>
              <ExternalLink
                href={`mailto:${CEnv.EMAIL}`}
                className='text-base-rps middle gap-1 font-medium underline'
                target='_self'
              >
                {t('footer.contactMeByEmail')}
                <ArrowUpRight />
              </ExternalLink>
              <div className='hidden md:block lg:hidden'>
                <ForkAndStarRepo />
              </div>
            </div>
          </div>
          <div className='flex flex-col-reverse items-center justify-center gap-4 md:flex-row lg:gap-12 xl:gap-16'>
            <div className='flex flex-col items-center gap-2 xs:flex-row xs:gap-3 md:gap-5'>
              <ButtonMomo className='w-[128px] md:w-[140px]' />

              <div className='center relative w-full xs:w-auto'>
                <span className='text-base-rps z-1 bg-fill-secondary px-1 text-secondary'>
                  {t('common.or')}
                </span>
                <div className='bg-line-subtle absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2' />
              </div>

              <ButtonKofi className='w-[128px] md:w-[140px]' />
            </div>
            <div className='md:hidden lg:block'>
              <ForkAndStarRepo />
            </div>
          </div>
        </div>
      </div>
    );
  })
);
