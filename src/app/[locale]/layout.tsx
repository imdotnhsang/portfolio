import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';
import { Fira_Code, Fira_Sans } from 'next/font/google';

import type { Metadata } from 'next';
import type { NextFont } from 'next/dist/compiled/@next/font';
import type { FC, ReactNode } from 'react';

import '@/styles/_autoload.scss';

const firaCode = Fira_Code({ subsets: ['latin'] });
const firaSans = Fira_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['vietnamese']
});

export const metadata: Metadata = {
  title: 'Portfolio | Nguyen Hoang Sang (Leo)',
  description:
    'I am a software engineer who loves to build things. I am passionate about web development and mobile development, and I am always looking for new opportunities to learn and grow. I am currently working as a software engineer at a startup in Vietnam.'
};

const RootLayout: FC<{ children: ReactNode; params: { locale: string } }> = ({
  children,
  params: { locale }
}) => {
  const fonts: { [key in string]: NextFont } = {
    en: firaCode,
    vi: firaSans
  };

  return (
    <html
      lang={locale}
      className={(fonts[locale] || firaSans).className}
      suppressHydrationWarning
    >
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        <ThemeProvider>
          <span>app layout</span>
          <div>header</div>
          {children}
          <div>footer</div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
