import type { FC } from 'react';
import { ReactNode, memo } from 'react';

import dynamic from 'next/dynamic';

interface INoSsrProps {
  children: ReactNode;
}

const _NoSsr: FC<INoSsrProps> = memo(function NoSsr({ children }) {
  return <>{children}</>;
});

export const NoSsr = dynamic(() => Promise.resolve(_NoSsr), {
  ssr: false
});
