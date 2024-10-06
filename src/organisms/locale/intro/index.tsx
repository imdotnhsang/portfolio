'use client';

import { ArrowDown } from '@phosphor-icons/react';
import { memo } from 'react';

import type { FC } from 'react';

import { ExternalLink } from '@/components';
import { withErrorBoundary } from '@/hocs';
import { useTranslations } from 'next-intl';

export const LocaleIntro: FC = withErrorBoundary(
  memo(function LocaleIntro() {
    const t = useTranslations();

    return (
      <div className='h-page flex flex-col py-5 md:py-10'>
        <div className='center flex-1'>
          <h1 className='text-center font-mono text-xl font-bold !leading-tight text-primary xs:text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl'>
            Hey 👋 I&apos;m Leo,
            <br />a Software Engineering
          </h1>
        </div>
        <div className='flex items-end justify-between gap-4'>
          <div className='middle flex gap-2'>
            <ArrowDown className='bounce size-6 text-primary md:size-8' />

            <span
              className='text-base-rps text-primary'
              dangerouslySetInnerHTML={{
                __html: t.raw('page.home.intro.keepScrolling')
              }}
            ></span>
          </div>
          <p className='text-lg-rps text-wrap text-right text-primary'>
            {t('page.home.intro.currentlyWorkingAt')}{' '}
            <ExternalLink
              className='font-bold underline'
              href='https://zim.vn/'
            >
              ZIM
            </ExternalLink>
          </p>
        </div>
      </div>
    );
  })
);
