import type { FC, ReactNode } from 'react';

interface IAppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  return children;
};

export default AppLayout;
