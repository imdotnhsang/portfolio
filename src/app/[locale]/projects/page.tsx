import { unstable_setRequestLocale } from 'next-intl/server';

import type { FC } from 'react';

import type { IPageProps } from '@/interfaces';

interface IProjectsPageProps extends IPageProps {}

const ProjectsPage: FC<IProjectsPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return <div>projects page</div>;
};

export default ProjectsPage;
