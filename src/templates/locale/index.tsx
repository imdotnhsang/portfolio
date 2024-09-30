'use client';

import { memo } from 'react';

import type { FC } from 'react';

import { ExternalLink } from '@/components';
import { withErrorBoundary } from '@/hocs';
import { ArrowDown } from '@phosphor-icons/react';

export const LocaleTemplate: FC = withErrorBoundary(
  memo(function LocaleTemplate() {
    return (
      <main className='container'>
        <div className='h-page flex flex-col py-5 md:py-15'>
          <div className='center flex-1'>
            <h1 className='text-center font-mono text-xl font-bold !leading-tight text-primary xs:text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl'>
              Hey 👋 I’m Leo,
              <br />a Software Engineering
            </h1>
          </div>
          <div className='flex items-end justify-between'>
            <div className='middle flex gap-2'>
              <ArrowDown className='bounce size-6 text-primary md:size-8' />

              <span className='text-base-rps text-primary'>
                Keep
                <br />
                scrolling
              </span>
            </div>
            <p className='text-lg-rps text-primary'>
              Currently working at{' '}
              <ExternalLink
                className='font-bold underline'
                href='https://zim.vn/'
              >
                ZIM
              </ExternalLink>
            </p>
          </div>
        </div>
      </main>
    );
  })
);
