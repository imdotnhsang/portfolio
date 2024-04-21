'use client';

import { memo } from 'react';

import type { ButtonHTMLAttributes, FC } from 'react';

import { IconMomo24, ImageMomoQr } from '@/assets';
import { cn } from '@/services';

import { useBoolean } from '@/hooks';

import { ModalBase } from '../modal-base';

interface IButtonMomoProps {
  fullW?: boolean;
}

export const ButtonMomo: FC<
  Omit<ButtonHTMLAttributes<Element>, keyof IButtonMomoProps> & IButtonMomoProps
> = memo(function ButtonMomo({ fullW = false, ...props }) {
  const {
    value: showMomoQr,
    setTrue: onShowMomoQr,
    setFalse: onHideMomoQr
  } = useBoolean(false);

  return (
    <>
      <button
        className={cn(
          'center text-sm-rps transition-300 focus-shadow ring-border h-10 rounded-2 bg-[#D82D8B] px-4 py-2.5 text-white-500 outline-none ring-[#C5297E] hover:bg-[#C1177C] md:h-11',
          { 'w-full': fullW }
        )}
        onClick={onShowMomoQr}
        {...props}
      >
        <div className='mr-2 w-5 scale-[83.275%] md:w-6 md:scale-100'>
          <IconMomo24 />
        </div>
        Momo me
      </button>

      {showMomoQr && (
        <ModalBase open={showMomoQr} onClose={onHideMomoQr} showCloseBtn>
          <div
            className={
              'relative aspect-[199/235] h-[75vh] max-h-[292px] 2xs:max-h-[340px] sm:max-h-[425px]'
            }
          >
            <ImageMomoQr />
          </div>
        </ModalBase>
      )}
    </>
  );
});
