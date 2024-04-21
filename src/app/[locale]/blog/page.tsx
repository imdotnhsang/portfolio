import { unstable_setRequestLocale } from 'next-intl/server';

import type { FC } from 'react';

import type { IPageProps } from '@/interfaces';

interface IBlogPageProps extends IPageProps {}

const BlogPage: FC<IBlogPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return <div>blog page</div>;
};

export default BlogPage;
