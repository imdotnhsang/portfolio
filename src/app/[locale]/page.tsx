import { unstable_setRequestLocale } from 'next-intl/server';

import type { Metadata } from 'next';
import type { FC } from 'react';

import type { IPageProps } from '@/interfaces';
import { LocaleTemplate } from '@/templates';

export const metadata: Metadata = {
  robots: {
    follow: true,
    index: true
  }
};

const Page: FC<IPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return <LocaleTemplate />;
};

export default Page;
