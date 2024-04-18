import type { FC, ReactNode } from 'react';

import { Footer, Header } from '@/layouts';

interface ILocaleLayoutProps {
  children: ReactNode;
}

const LocaleLayout: FC<ILocaleLayoutProps> = ({ children }) => {
  return (
    <div id='root' className='bg-group'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LocaleLayout;
