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
        'flex items-center justify-center rounded-2 px-3.5 py-2.5 text-sm outline-none transition-all duration-200 ease-in-out focus:ring-2 focus:ring-offset-1',
        variant === 'primary' && '',
        variant === 'primary' &&
          color === 'brown' &&
          'bg-brown text-black-bold shadow-border-brown hover:bg-brown/90 focus:ring-brown/20 focus:ring-offset-brown/10',
        variant === 'primary' &&
          color === 'black' &&
          'bg-black-slight text-white shadow-border-black-slight hover:bg-black-slight/90 focus:ring-black-slight/20 focus:ring-offset-black-slight/10',
        variant === 'ghost' &&
          'bg-transparent text-white shadow-border-white hover:bg-white/5 focus:ring-white/20 focus:ring-offset-white/10',
        fullW && 'w-full'
      )}
      {...props}
    >
      {children}
    </button>
  );
});
