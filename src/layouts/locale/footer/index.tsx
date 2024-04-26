'use client';

import { ArrowUpRight, GitBranch, Star } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';
import { memo } from 'react';

import type { FC } from 'react';

import { ButtonKofi, ButtonMomo, ExternalLink } from '@/components';
import { CEnv } from '@/constants';

const ForkAndStarRepo: FC = memo(function ForkAndStarRepo() {
  return (
    <div className='flex items-center gap-5'>
      <ExternalLink
        className='text-sm-rps middle gap-1.5'
        href={CEnv.STAR_REPO_URL}
      >
        <Star weight='fill' /> Star
      </ExternalLink>
      <ExternalLink
        className='text-sm-rps middle gap-1.5'
        href={CEnv.FORK_REPO_URL}
      >
        <GitBranch weight='fill' /> Fork
      </ExternalLink>
    </div>
  );
});

export const Footer: FC = memo(function Footer() {
  const t = useTranslations();

  return (
    <div className='border-t border-line-subtle bg-color-secondary'>
      <div className='container flex flex-col justify-between gap-4 py-4 md:gap-3 md:py-6 lg:flex-row lg:items-center xl:gap-0'>
        <div className='w-fulls flex flex-col justify-between md:gap-1 lg:justify-normal'>
          <p className='text-xl-rps font-mono font-bold'>
            {t('footer.designBy')}: {CEnv.USERNAME}
          </p>
          <div className='flex justify-between'>
            <ExternalLink
              href={`mailto:${CEnv.EMAIL}`}
              className='text-sm-rps middle gap-1 font-medium underline'
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
          <div className='flex flex-col items-center gap-1 xs:flex-row xs:gap-3 md:gap-5'>
            <div className='w-[140px]'>
              <ButtonMomo fullW />
            </div>
            <div className='center relative w-full xs:w-auto'>
              <span className='text-xs-rps z-1 bg-color-secondary px-1 text-secondary'>
                {t('common.or')}
              </span>
              <div className='absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-line-subtle' />
            </div>
            <div className='w-[140px]'>
              <ButtonKofi fullW />
            </div>
          </div>
          <div className='md:hidden lg:block'>
            <ForkAndStarRepo />
          </div>
        </div>
      </div>
    </div>
  );
});
