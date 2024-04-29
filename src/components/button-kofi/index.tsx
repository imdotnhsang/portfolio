'use client';

import { memo } from 'react';

import type { ButtonHTMLAttributes, FC } from 'react';

import { ImageKofiLogo } from '@/assets';

import { useBoolean } from '@/hooks';
import { Button } from '..';
import { ModalBase } from '../modal-base';

interface IButtonKofiProps {
  fullW?: boolean;
}

export const ButtonKofi: FC<
  Omit<ButtonHTMLAttributes<Element>, keyof IButtonKofiProps> & IButtonKofiProps
> = memo(function ButtonKofi({ ...props }) {
  const {
    value: showKofiPanel,
    setTrue: onShowKofiPanel,
    setFalse: onHideKofiPanel
  } = useBoolean(false);

  return (
    <>
      <Button onClick={onShowKofiPanel} {...props}>
        <div className='relative mr-2 flex size-5 md:size-6'>
          <ImageKofiLogo className='m-auto !h-auto' />
        </div>
        Kofi me
      </Button>

      {showKofiPanel && (
        <ModalBase open={showKofiPanel} onClose={onHideKofiPanel} showCloseBtn>
          <div className='relative'>
            <iframe
              id='kofiframe'
              src='https://ko-fi.com/imdotnhsang/?hidefeed=true&widget=true&embed=true&preview=true'
              title='imdotnhsang'
              width='100%'
              height='100%'
              style={{
                borderRadius: '8px',
                border: 'none',
                minHeight: 720,
                minWidth: 360
              }}
            />
          </div>
        </ModalBase>
      )}
    </>
  );
});
