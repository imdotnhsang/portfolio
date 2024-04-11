'use client';

import { ArrowUpRight } from '@phosphor-icons/react';
import Link from 'next/link';
import { memo } from 'react';

import type { FC } from 'react';

export const Footer: FC = memo(function Footer() {
  return (
    <div className='border-t border-line-subtle bg-group'>
      <div className='container flex items-center justify-between gap-4 py-4 md:py-6 xl:gap-0'>
        <div className='flex flex-col gap-1'>
          <p className='text-xl-rps font-mono font-bold'>
            Design by: imdotnhsang
          </p>
          <Link
            href='mailto:im.nhsang@gmail.com'
            className='text-sm-rps flex items-center gap-1 font-medium'
          >
            Contact me by email
            <ArrowUpRight className='text-semantic-primary' />
          </Link>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
});
