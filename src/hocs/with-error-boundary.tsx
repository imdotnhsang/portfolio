'use client';

import { ArrowClockwise } from '@phosphor-icons/react';
import { memo } from 'react';
import { withErrorBoundary as _withErrorBoundary } from 'react-error-boundary';

import type {
  ComponentType,
  FC,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react';
import type { FallbackProps } from 'react-error-boundary';

const FallbackErrorBoundary: FC<FallbackProps> = memo(
  function FallbackErrorBoundary({ error, resetErrorBoundary }) {
    console.log('🚀 ~ FallbackErrorBoundary ~ error:', error);

    return (
      <div className='middle gap-2'>
        <span className='text-base-rps text-semantic-negative'>Error</span>
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

export function withErrorBoundary<Props extends object>(
  component: ComponentType<Props>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): ForwardRefExoticComponent<PropsWithoutRef<Props> & RefAttributes<any>> {
  return _withErrorBoundary(component, {
    FallbackComponent: FallbackErrorBoundary,
    onError(error, { componentStack }) {
      console.error('🚀 ~ onError ~ error:', error);
      console.error('🚀 ~ onError ~ componentStack:', componentStack);
    }
  });
}
