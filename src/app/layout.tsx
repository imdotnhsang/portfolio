import type { FC, ReactNode } from 'react';

import '@/styles/_autoload.scss';

interface IAppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  return children;
};

export default AppLayout;
