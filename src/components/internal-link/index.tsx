'use client';

import { LinkProps } from 'next/link';
import { memo } from 'react';

import type { ClassValue } from 'clsx';
import type { FC, ReactNode } from 'react';

import { useLocale } from '@/hooks';
import { TPathnames } from '@/routes';
import { Link, cn, usePathname } from '@/services';

interface IInternalLinkProps extends Omit<LinkProps, 'href' | 'locale'> {
  href: TPathnames;
  children: ReactNode;
  className?: ClassValue;
}

export const InternalLink: FC<IInternalLinkProps> = memo(function InternalLink({
  href,
  className,
  children,
  ...props
}) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <Link
      aria-current={pathname === href ? 'page' : undefined}
      href={href}
      locale={locale}
      className={cn('link transition-300', className)}
      {...props}
    >
      {children}
    </Link>
  );
});
