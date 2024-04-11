'use client';

import { useMatchScreen } from '@/hooks';
import { IconProps } from '@phosphor-icons/react';
import { memo, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  fullW?: boolean;
  startIcon?: FC<IconProps>;
  endIcon?: FC<IconProps>;
}

export const Button: FC<
  Omit<ButtonHTMLAttributes<Element>, keyof IButtonProps> & IButtonProps
> = memo(function Button({
  fullW = false,
  startIcon: StartIcon,
  endIcon: EndIcon,
  children,
  ...props
}) {
  const isBiggerMd = useMatchScreen('md');
  console.log('🚀 ~ isBiggerMd:', isBiggerMd);

  const iconSize = useMemo(() => (isBiggerMd ? 24 : 20), [isBiggerMd]);

  return (
    <button
      className={twMerge(
        'flex items-center justify-center rounded-2 bg-black-500 px-4 py-2 text-sm text-white-500 ring-1 ring-inset ring-black-400 transition-all duration-300 hover:bg-black-700 hover:ring-black-500 focus:shadow-focus md:text-base dark:ring-black-300 dark:hover:bg-black-500 dark:hover:ring-black-200 dark:focus:shadow-focusDrk',
        fullW && 'w-full'
      )}
      {...props}
    >
      {StartIcon && <StartIcon className='mr-2' size={iconSize} />}
      {children}
      {EndIcon && <EndIcon className='ml-2' size={iconSize} />}
    </button>
  );
});
