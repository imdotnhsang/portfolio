'use client';

import { memo } from 'react';

import type { ButtonHTMLAttributes, FC } from 'react';

import { ImageKofiLogo } from '@/assets';

import { Button } from '..';

interface IButtonKofiProps {
  fullW?: boolean;
}

export const ButtonKofi: FC<
  Omit<ButtonHTMLAttributes<Element>, keyof IButtonKofiProps> & IButtonKofiProps
> = memo(function ButtonKofi({ ...props }) {
  return (
    <Button {...props}>
      <div className='relative mr-2 flex size-5 md:size-6'>
        <ImageKofiLogo className='m-auto !h-auto' />
      </div>
      Kofi me
    </Button>
  );
});
