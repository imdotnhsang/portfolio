import { unstable_setRequestLocale } from 'next-intl/server';

import type { FC } from 'react';

import type { IPageProps } from '@/interfaces';

interface IAboutPageProps extends IPageProps {}

const AboutPage: FC<IAboutPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return <div>about page </div>;
};

export default AboutPage;
