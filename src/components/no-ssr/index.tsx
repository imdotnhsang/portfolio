import dynamic from 'next/dynamic';
import { memo } from 'react';

import type { FC, ReactNode } from 'react';

interface INoSsrProps {
  children: ReactNode;
}

const _NoSsr: FC<INoSsrProps> = memo(function NoSsr({ children }) {
  return <>{children}</>;
});

export const NoSsr = dynamic(() => Promise.resolve(_NoSsr), {
  ssr: false
});
