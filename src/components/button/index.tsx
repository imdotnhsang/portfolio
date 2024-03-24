'use client';

import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  color?: 'brown' | 'black';
  fullW?: boolean;
}

export const Button: FC<
  Omit<ButtonHTMLAttributes<Element>, keyof IButtonProps> & IButtonProps
> = memo(function Button({
  variant = 'primary',
  color = 'brown',
  fullW = false,
  children,
  ...props
}) {
  return (
    <button
      className={twMerge(
        'rounded-2 px-3.5 py-2.5 text-sm transition-all duration-200 ease-in-out ',
        variant === 'primary' && '',
        variant === 'primary' &&
          color === 'brown' &&
          'bg-brown text-black-bold shadow-border-brown hover:bg-brown/90',
        variant === 'primary' &&
          color === 'black' &&
          'bg-black-slight text-white shadow-border-black-slight hover:bg-black-slight/90',
        variant === 'ghost' &&
          ' bg-transparent text-white shadow-border-white hover:bg-white/5',
        fullW && 'w-full'
      )}
      {...props}
    >
      {children}
    </button>
  );
});
