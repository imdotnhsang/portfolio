'use client';

import type { FC } from 'react';

interface IErrorProps {
  error: Error & { digest?: string };
}

const Error: FC<IErrorProps> = ({ error }) => {
  return (
    <div>
      <h2>locale error: {error.message}</h2>
    </div>
  );
};

export default Error;
