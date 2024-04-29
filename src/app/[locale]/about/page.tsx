import { unstable_setRequestLocale } from 'next-intl/server';

import type { FC } from 'react';

// import { cn } from '@/services';
import { UnderConstruction } from '@/partials';

import type { IPageProps } from '@/interfaces';

interface IAboutPageProps extends IPageProps {}

const AboutPage: FC<IAboutPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return <UnderConstruction />;

  // return (
  //   <div className='center absolute left-0 top-0 z-2 h-full w-full'>
  //     {Array.from({ length: 6 }).map((_, index) => (
  //       <div
  //         key={index}
  //         className={cn(
  //           'absolute top-0 h-full w-1/6 bg-color-secondary transition-transform duration-200 bg-color-quaternary -translate-y-full'
  //         )}
  //         style={{
  //           transitionDelay: `${index * 75}ms`,
  //           left: `${((index * 1) / 6) * 100}%`,
  //           // transform: 'translateY(0)'
  //         }}
  //       />
  //     ))}
  //   </div>
  // );
};

export default AboutPage;
