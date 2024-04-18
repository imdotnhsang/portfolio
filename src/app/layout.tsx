import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { Fira_Code, Fira_Sans, Inter } from 'next/font/google';

import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

import { cn } from '@/services';
import '@/styles/_autoload.scss';

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira'
});
const firaSans = Fira_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-fira'
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

interface IAppLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Portfolio | Nguyen Hoang Sang (Leo)',
  description:
    'I am a software engineer who loves to build things. I am passionate about web development and mobile development, and I am always looking for new opportunities to learn and grow. I am currently working as a software engineer at a company in Vietnam.'
};

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  const locale = useLocale();

  const fonts: { [key in string]: string } = {
    en: firaCode.variable,
    vi: firaSans.variable
  };

  const messages = useMessages();

  return (
    <html
      lang={locale}
      className={cn(
        inter.variable,
        fonts[locale] || firaSans.variable,
        'font-base relative font-sans text-semantic-primary'
      )}
      suppressHydrationWarning
    >
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className='relative'>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>

        <SpeedInsights />
      </body>
    </html>
  );
};

export default AppLayout;
