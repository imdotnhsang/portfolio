import type { ReactNode } from 'react';

export interface IPageProps {
  params: { locale: string };
}

export interface ILayoutProps {
  children: ReactNode;
  params: { locale: string };
}
