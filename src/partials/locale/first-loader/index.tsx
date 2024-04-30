'use client';

import { memo, useEffect, useState } from 'react';

import type { FC } from 'react';

import { useGetLogo } from '@/hooks';
import { cn } from '@/services';

export const PagePreLoader: FC = memo(function PagePreLoader() {
  const Logo = useGetLogo();

  const [isLoadedWeb, setIsLoadedWeb] = useState(false);

  useEffect(() => {
    setIsLoadedWeb(true);

    return () => {
      setIsLoadedWeb(false);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'transition-500 center absolute top-0 z-3 h-full w-1/5 bg-color-quaternary',
            {
              '-translate-y-full': isLoadedWeb,
              'translate-y-0': !isLoadedWeb
            }
          )}
          style={{
            transitionDelay: `${index * 100}ms`,
            left: `${((index * 1) / 5) * 100}%`
          }}
        >
          {index === 2 && <Logo className='scale-1 lg:scale-[2]' />}
        </div>
      ))}
    </>
  );
});
