'use client';

import { useMatchScreen } from '@/hooks';
import { omit } from 'ramda';
import { memo, useMemo } from 'react';

import type { Icon } from '@phosphor-icons/react';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { withErrorBoundary } from '@/hocs';
import { cn } from '@/services';

interface IButtonProps {
  children: ReactNode;
  startIcon?: Icon;
  endIcon?: Icon;
}

export const Button: FC<
  Omit<ButtonHTMLAttributes<Element>, keyof IButtonProps> & IButtonProps
> = withErrorBoundary(
  memo(function Button({
    startIcon: StartIcon,
    endIcon: EndIcon,
    children,
    ...props
  }) {
    const isBiggerMd = useMatchScreen('md');

    const iconSize = useMemo(() => (isBiggerMd ? 24 : 20), [isBiggerMd]);

    return (
      <button
        className={cn(
          'center focus-shadow text-sm-rps ring-border transition-all-300 rounded-2 bg-gray-1000 px-4 py-2.5 text-white outline-none ring-gray-1100 hover:bg-gray-1100 hover:ring-gray-1200 focus:shadow-focus dark:bg-gray-1200 dark:ring-gray-1300 dark:hover:bg-gray-1300 dark:hover:ring-gray-1400',
          props.className
        )}
        {...omit(['className'], props)}
      >
        {StartIcon && <StartIcon className='mr-2' size={iconSize} />}
        {children}
        {EndIcon && <EndIcon className='ml-2' size={iconSize} />}
      </button>
    );
  })
);
