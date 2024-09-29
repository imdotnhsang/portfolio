import { NextIntlClientProvider, useMessages } from 'next-intl';

import type { Metadata } from 'next';
import type { FC } from 'react';

import { CfgFonts } from '@/configs';
import { LocaleLayout } from '@/layouts';
import { LocaleMetrics } from '@/organisms';
import { LOCALES, cn } from '@/services';

import type { ILayoutProps } from '@/interfaces';

export const metadata: Metadata = {
  title: 'Portfolio | Nguyen Hoang Sang (Leo)',
  description:
    'I am a software engineer who loves to build things. I am passionate about web development and mobile development, and I am always looking for new opportunities to learn and grow. I am currently working as a software engineer at a company in Vietnam.'
};

const Layout: FC<ILayoutProps> = ({ children, params: { locale } }) => {
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
          <LocaleLayout>{children}</LocaleLayout>
        </NextIntlClientProvider>

        <LocaleMetrics />
      </body>
    </html>
  );
};

export default Layout;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
