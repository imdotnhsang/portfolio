'use client';

import { ArrowUpRight, GitBranch, Star } from '@phosphor-icons/react';
import Link from 'next/link';
import { memo } from 'react';

import type { FC } from 'react';

import { ButtonKofi, ButtonMomo } from '@/components';
import { CEnv } from '@/constants';

const ForkAndStarRepo: FC = memo(function ForkAndStarRepo() {
  return (
    <div className='flex items-center gap-5'>
      <Link
        className='text-sm-rps middle link gap-1.5'
        href={CEnv.STAR_REPO_URL}
        target='_blank'
      >
        <Star weight='fill' /> Star
      </Link>
      <Link
        className='text-sm-rps middle link gap-1.5'
        href={CEnv.FORK_REPO_URL}
        target='_blank'
      >
        <GitBranch weight='fill' /> Fork
      </Link>
    </div>
  );
});

export const Footer: FC = memo(function Footer() {
  return (
    <div className='border-t border-line-subtle bg-group'>
      <div className='container flex flex-col justify-between gap-4 py-4 md:gap-3 md:py-6 lg:flex-row lg:items-center xl:gap-0'>
        <div className='w-fulls flex flex-col justify-between md:gap-1 lg:justify-normal'>
          <p className='text-xl-rps font-mono font-bold'>
            Design by: imdotnhsang
          </p>
          <div className='flex justify-between'>
            <Link
              href='mailto:im.nhsang@gmail.com'
              className='text-sm-rps middle link gap-1 font-medium underline'
            >
              Contact me by email
              <ArrowUpRight />
            </Link>
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
              <span className='text-xs-rps z-1 bg-group px-1 text-semantic-secondary'>
                Or
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
