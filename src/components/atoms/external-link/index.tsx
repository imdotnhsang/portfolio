'use client';

import { withErrorBoundary } from '@/hocs';
import { memo } from 'react';

import type { ClassValue } from 'clsx';
import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';

import { cn } from '@/services';

interface IExternalLinkProps {
  children: ReactNode;
  className?: ClassValue;
}

export const ExternalLink: FC<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof IExternalLinkProps> &
    IExternalLinkProps
> = withErrorBoundary(
  memo(function ExternalLink({ children, className, ...props }) {
    return (
      <a
        {...props}
        className={cn('link', className)}
        rel='noreferrer'
        target='_blank'
      >
        {children}
      </a>
    );
  })
);
