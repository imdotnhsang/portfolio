import { unstable_setRequestLocale } from 'next-intl/server';

import type { FC } from 'react';

import { UnderConstruction } from '@/partials';

import type { IPageProps } from '@/interfaces';

const ProjectsPage: FC<IPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return <UnderConstruction />;
};

export default ProjectsPage;
