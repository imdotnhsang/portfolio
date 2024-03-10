'use client';

import type { FC } from 'react';

interface IGlobalErrorProps {
  error: Error & { digest?: string };
}

const GlobalError: FC<IGlobalErrorProps> = ({ error }) => {
  return (
    <html>
      <body>
        <h2>app global error: {error.message}</h2>
      </body>
    </html>
  );
};

export default GlobalError;
