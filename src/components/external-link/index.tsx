import { cn } from '@/services';
import { ClassValue } from 'clsx';
import { memo } from 'react';

import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';

interface IExternalLinkProps {
  children: ReactNode;
  className?: ClassValue;
}

export const ExternalLink: FC<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof IExternalLinkProps> &
    IExternalLinkProps
> = memo(function ExternalLink({ children, className, ...props }) {
  return (
    <a
      className={cn('link', className)}
      rel='noreferrer'
      target='_blank'
      {...props}
    >
      {children}
    </a>
  );
});
