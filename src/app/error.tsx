'use client';

import type { FC } from 'react';

interface IAppErrorProps {
  error: Error & { digest?: string };
}

const Error: FC<IAppErrorProps> = ({ error }) => {
  return (
    <div>
      <h2>app error: {error.message}</h2>
    </div>
  );
};

export default Error;
