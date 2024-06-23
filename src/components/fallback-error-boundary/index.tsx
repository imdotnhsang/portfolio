'use client';

import { ArrowClockwise } from '@phosphor-icons/react';
import { memo } from 'react';

import type { FC } from 'react';
import type { FallbackProps } from 'react-error-boundary';

export const FallbackErrorBoundary: FC<FallbackProps> = memo(
  function FallbackErrorBoundary({ error, resetErrorBoundary }) {
    console.log('🚀 ~ FallbackErrorBoundary ~ error:', error);

    return (
      <div className='middle gap-2'>
        <span className='text-sm-rps text-semantic-negative'>Error</span>
        <button
          className='transition-all-300 rounded-1 bg-fill-subtle p-1 hover:bg-fill-strong'
          onClick={resetErrorBoundary}
        >
          <ArrowClockwise />
        </button>
      </div>
    );
  }
);
