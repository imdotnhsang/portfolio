import { unstable_setRequestLocale } from 'next-intl/server';

import type { Metadata } from 'next';
import type { FC } from 'react';

import { AboutTemplate } from '@/templates';

import type { IPageProps } from '@/interfaces';

export const metadata: Metadata = {
  robots: {
    follow: true,
    index: true
  }
};

const Page: FC<IPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return <AboutTemplate />;
};

export default Page;
