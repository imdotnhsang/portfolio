'use client';

import { memo } from 'react';

import type { ButtonHTMLAttributes, FC } from 'react';

import { IconMomo24, ImageMomoQr } from '@/assets';
import { Modal } from '@/components';
import { withErrorBoundary } from '@/hocs';
import { useBoolean } from '@/hooks';
import { cn } from '@/services';

export const ButtonMomo: FC<ButtonHTMLAttributes<Element>> = withErrorBoundary(
  memo(function ButtonMomo({ ...props }) {
    const {
      value: showMomoQr,
      setTrue: onShowMomoQr,
      setFalse: onHideMomoQr
    } = useBoolean(false);

    return (
      <>
        <button
          {...props}
          className={cn(
            'center text-base-rps transition-all-300 focus-shadow ring-border h-10 rounded-2 bg-[#D82D8B] px-4 py-2.5 text-white outline-none ring-[#C5297E] hover:bg-[#C1177C] md:h-11',
            props.className
          )}
          onClick={onShowMomoQr}
        >
          <div className='mr-2 w-5 scale-[83.275%] md:w-6 md:scale-100'>
            <IconMomo24 />
          </div>
          Momo me
        </button>

        <Modal open={showMomoQr} onClose={onHideMomoQr} showCloseBtn>
          <div
            className={
              'relative aspect-[199/235] h-[75vh] max-h-[292px] 2xs:max-h-[340px] sm:max-h-[425px]'
            }
          >
            <ImageMomoQr />
          </div>
        </Modal>
      </>
    );
  })
);
