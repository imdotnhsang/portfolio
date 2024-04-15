'use client';

import type { FC } from 'react';

interface ILocaleErrorProps {
  error: Error & { digest?: string };
}

const LocaleError: FC<ILocaleErrorProps> = ({ error }) => {
  return (
    <div>
      <h2>locale error: {error.message}</h2>
    </div>
  );
};

export default LocaleError;
