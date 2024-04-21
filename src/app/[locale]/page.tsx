import { IPageProps } from '@/interfaces';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FC } from 'react';

interface ILocalePageProps extends IPageProps {}

const LocalePage: FC<ILocalePageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return <div className='h-[120vh]'>locale page</div>;
};

export default LocalePage;
