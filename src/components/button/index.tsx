'use client';

import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

import { RemixiconComponentType } from '@remixicon/react';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  fullW?: boolean;
  startIcon?: RemixiconComponentType;
  endIcon?: RemixiconComponentType;
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
  return (
    <button
      className={twMerge(
        'flex items-center justify-center rounded-2 bg-black-500 px-4 py-2 text-sm text-white-500 ring-1 ring-inset ring-black-400 transition-all duration-300 hover:bg-black-700 hover:ring-black-500 focus:shadow-focus md:text-base dark:ring-black-300 dark:hover:bg-black-500 dark:hover:ring-black-200 dark:focus:shadow-focusDrk',
        fullW && 'w-full'
      )}
      {...props}
    >
      {StartIcon && <StartIcon className='mr-2' />}
      {children}
      {EndIcon && <EndIcon className='ml-2' />}
    </button>
  );
});
