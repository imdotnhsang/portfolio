'use client';

import type { LinkProps } from 'next/link';
import { memo, useMemo } from 'react';

import type { ClassValue } from 'clsx';
import type { FC, ReactNode } from 'react';

import { withErrorBoundary } from '@/hocs';
import { useLocale } from '@/hooks';
import { Link, cn, usePathname } from '@/services';

import type { TPathnames } from '@/routes';

interface IInternalLinkProps extends Omit<LinkProps, 'href' | 'locale'> {
  href: TPathnames;
  children: ReactNode;
  className?: ClassValue;
}

export const InternalLink: FC<IInternalLinkProps> = withErrorBoundary(
  memo(function InternalLink({ href, className, children, ...props }) {
    const locale = useLocale();
    const pathname = usePathname();

    /**
     * * Determine the current page
     */
    const ariaCurrent = useMemo(
      () => (pathname === href ? 'page' : undefined),
      [pathname, href]
    );

    return (
      <Link
        {...props}
        href={href}
        locale={locale}
        aria-current={ariaCurrent}
        className={cn('link transition-all-300', className)}
        prefetch={props.prefetch || false}
      >
        {children}
      </Link>
    );
  })
);
