'use client';

import { memo } from 'react';

import type { ButtonHTMLAttributes, FC } from 'react';

import { IconMomo24 } from '@/assets';
import { cn } from '@/services';

interface IButtonMomoProps {
  fullW?: boolean;
}

export const ButtonMomo: FC<
  Omit<ButtonHTMLAttributes<Element>, keyof IButtonMomoProps> & IButtonMomoProps
> = memo(function ButtonMomo({ fullW = false, ...props }) {
  // const isBiggerMd = useMatchScreen('md');

  // const iconSize = useMemo(() => (isBiggerMd ? 24 : 20), [isBiggerMd]);

  return (
    <button
      className={cn(
        'center text-sm-rps transition-300 focus-shadow ring-border h-10 gap-2 rounded-2 bg-[#D82D8B] px-4 py-2.5 text-white-500 ring-[#C5297E] hover:bg-[#C1177C] md:h-11',
        { 'w-full': fullW }
      )}
      {...props}
    >
      <div className='w-5 scale-[83.275%] md:w-6 md:scale-100'>
        <IconMomo24 />
      </div>
      Momo me
    </button>
  );
});
