'use client';

import { ThemeProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import { memo } from 'react';
import { ToastContainer } from 'react-toastify';

import type { FC, ReactNode } from 'react';

import { withErrorBoundary } from '@/hocs';
import { LocaleFooter, LocaleHeader } from '@/organisms';

interface ILocaleLayoutProps {
  children: ReactNode;
}

export const LocaleLayout: FC<ILocaleLayoutProps> = withErrorBoundary(
  memo(function LocaleLayout({ children }) {
    return (
      <ThemeProvider attribute='class'>
        <NextTopLoader
          showSpinner={false}
          shadow={false}
          template='<div class="bar !bg-sky" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        />

        <div id='root' className='flex min-h-screen flex-col bg-fill-secondary'>
          <LocaleHeader />

          <div className='flex-1'>{children}</div>

          <LocaleFooter />
        </div>

        <ToastContainer />
      </ThemeProvider>
    );
  })
);
