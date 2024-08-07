'use client';

import { LinkProps } from 'next/link';
import { memo } from 'react';

import type { ClassValue } from 'clsx';
import type { FC, ReactNode } from 'react';

import { withErrorBoundary } from '@/hocs';
import { useLocale } from '@/hooks';
import { TPathnames } from '@/routes';
import { Link, cn, usePathname } from '@/services';

interface IInternalLinkProps extends Omit<LinkProps, 'href' | 'locale'> {
  href: TPathnames;
  children: ReactNode;
  className?: ClassValue;
}

export const InternalLink: FC<IInternalLinkProps> = withErrorBoundary(
  memo(function InternalLink({ href, className, children, ...props }) {
    const locale = useLocale();
    const pathname = usePathname();

    return (
      <Link
        aria-current={pathname === href ? 'page' : undefined}
        href={href}
        locale={locale}
        className={cn('link transition-all-300', className)}
        {...props}
      >
        {children}
      </Link>
    );
  })
);
