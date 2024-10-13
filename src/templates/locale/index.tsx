'use client';

import { memo } from 'react';

import type { FC } from 'react';

import { withErrorBoundary } from '@/hocs';
import { LocaleIntro } from '@/organisms';

export const LocaleTemplate: FC = withErrorBoundary(
  memo(function LocaleTemplate() {
    return (
      <main className='container'>
        <LocaleIntro />
      </main>
    );
  })
);
