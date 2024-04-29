import { unstable_setRequestLocale } from 'next-intl/server';

import type { FC } from 'react';

import { UnderConstruction } from '@/partials';

import type { IPageProps } from '@/interfaces';

interface IBlogPageProps extends IPageProps {}

const BlogPage: FC<IBlogPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return <UnderConstruction />;
};

export default BlogPage;
