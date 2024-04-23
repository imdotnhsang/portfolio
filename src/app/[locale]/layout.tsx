import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Fira_Code, Fira_Sans, Inter } from 'next/font/google';

import type { Metadata } from 'next';
import type { FC } from 'react';

import { ILayoutProps } from '@/interfaces';
import { Footer, Header } from '@/layouts';
import { LOCALES, cn } from '@/services';

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

export const metadata: Metadata = {
  title: 'Portfolio | Nguyen Hoang Sang (Leo)',
  description:
    'I am a software engineer who loves to build things. I am passionate about web development and mobile development, and I am always looking for new opportunities to learn and grow. I am currently working as a software engineer at a company in Vietnam.'
};

interface ILocaleLayoutProps extends ILayoutProps {}

const LocaleLayout: FC<ILocaleLayoutProps> = ({
  children,
  params: { locale }
}) => {
  unstable_setRequestLocale(locale);

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
        'font-base text-semantic-primary relative font-sans'
      )}
      suppressHydrationWarning
    >
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute='class'>
            <div id='root' className='bg-group'>
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>

        <SpeedInsights />
      </body>
    </html>
  );
};

export default LocaleLayout;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
