import { unstable_setRequestLocale } from 'next-intl/server';

import type { FC } from 'react';

import type { IPageProps } from '@/interfaces';
import { LocaleTemplate } from '@/templates';

const Page: FC<IPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return <LocaleTemplate />;
};

export default Page;
