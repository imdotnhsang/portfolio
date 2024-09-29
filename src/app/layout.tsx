import type { FC, ReactNode } from 'react';

import '@/styles/_autoload.scss';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return children;
};

export default Layout;
