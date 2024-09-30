import { unstable_setRequestLocale } from 'next-intl/server';

import type { Metadata } from 'next';
import type { FC } from 'react';

import { ProjectsTemplate } from '@/templates';

import type { IPageProps } from '@/interfaces';

export const metadata: Metadata = {
  robots: {
    follow: true,
    index: true
  }
};

const ProjectsPage: FC<IPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return <ProjectsTemplate />;
};

export default ProjectsPage;
