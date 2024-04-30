'use client';

import { cn, usePathname } from '@/services';
import { URouter } from '@/utils';
import { useSearchParams } from 'next/navigation';
import { memo, useCallback, useEffect, useState } from 'react';

import type { FC } from 'react';

export const PagePreLoader: FC = memo(function PagePreLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isLoadedPage, setIsLoadedPage] = useState(false);

  const handleClick = useCallback((e: MouseEvent) => {
    try {
      const target = e.target as HTMLElement;
      const anchor = URouter.findClosestAnchor(target);
      const newUrl = anchor?.href;

      if (newUrl) {
        const currentUrl = window.location.href;
        const isExternalLink =
          (anchor as HTMLAnchorElement).target === '_blank';

        const isSpecialScheme = [
          'tel:',
          'mailto:',
          'sms:',
          'blob:',
          'download:'
        ].some((scheme) => newUrl.startsWith(scheme));

        const isAnchor: boolean = URouter.isAnchorOfCurrentUrl(
          currentUrl,
          newUrl
        );
        const notSameHost = !URouter.isSameHostName(
          window.location.href,
          anchor.href
        );

        if (notSameHost) {
          return;
        }

        if (
          newUrl === currentUrl ||
          isAnchor ||
          isExternalLink ||
          isSpecialScheme ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.altKey ||
          URouter.isHashAnchor(window.location.href, anchor.href) ||
          !URouter.toAbsoluteURL(anchor.href).startsWith('http')
        ) {
          setIsLoadedPage(true);
        } else {
          setIsLoadedPage(false);
        }
      }
    } catch (err) {
      setIsLoadedPage(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadedPage(true);
    }, 775);

    return () => {
      setIsLoadedPage(false);
    };
  }, [pathname, searchParams]);

  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'transition-200 absolute top-0 z-3 h-full w-1/6 translate-y-0 bg-color-quaternary',
            {
              '-translate-y-full': isLoadedPage
            }
          )}
          style={{
            transitionDelay: `${index * 100}ms`,
            left: `${((index * 1) / 6) * 100}%`
          }}
        />
      ))}
    </>
  );
});
