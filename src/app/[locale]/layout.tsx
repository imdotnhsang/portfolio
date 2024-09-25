import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ThemeProvider } from 'next-themes';

import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';

import type { Metadata } from 'next';
import type { FC } from 'react';

import { CfgFonts } from '@/configs';
import { Footer, Header } from '@/layouts';
import { Metrics } from '@/partials';
import { LOCALES, cn } from '@/services';

import type { ILayoutProps } from '@/interfaces';

export const metadata: Metadata = {
  title: 'Portfolio | Nguyen Hoang Sang (Leo)',
  description:
    'I am a software engineer who loves to build things. I am passionate about web development and mobile development, and I am always looking for new opportunities to learn and grow. I am currently working as a software engineer at a company in Vietnam.'
};

const LocaleLayout: FC<ILayoutProps> = ({ children, params: { locale } }) => {
  const fonts: { [key in string]: string } = {
    en: CfgFonts.firaCode.variable,
    vi: CfgFonts.firaSans.variable
  };

  const messages = useMessages();

  return (
    <html
      lang={locale}
      className={cn(
        CfgFonts.inter.variable,
        fonts[locale] || CfgFonts.firaSans.variable,
        'font-base relative font-sans text-primary'
      )}
      suppressHydrationWarning
    >
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>

      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute='class'>
            <NextTopLoader
              showSpinner={false}
              shadow={false}
              template='<div class="bar !bg-sky" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            />

            <div
              id='root'
              className='flex min-h-screen flex-col bg-fill-secondary'
            >
              <Header />
              <div className='flex-1'>{children}</div>
              <Footer />
            </div>

            <ToastContainer />
          </ThemeProvider>
        </NextIntlClientProvider>

        <Metrics />
      </body>
    </html>
  );
};

export default LocaleLayout;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
