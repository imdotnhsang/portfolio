'use client';

import { memo } from 'react';

import type { ButtonHTMLAttributes, FC } from 'react';

import { ImageKofiLogo } from '@/assets';
import { Button, Modal } from '@/components';
import { withErrorBoundary } from '@/hocs';
import { useBoolean } from '@/hooks';

export const ButtonKofi: FC<ButtonHTMLAttributes<Element>> = withErrorBoundary(
  memo(function ButtonKofi({ ...props }) {
    const {
      value: showKofiPanel,
      setTrue: onShowKofiPanel,
      setFalse: onHideKofiPanel
    } = useBoolean(false);

    return (
      <>
        <Button {...props} onClick={onShowKofiPanel}>
          <div className='relative mr-2 flex size-5 md:size-6'>
            <ImageKofiLogo className='m-auto !h-auto' />
          </div>
          Kofi me
        </Button>

        <Modal open={showKofiPanel} onClose={onHideKofiPanel} showCloseBtn>
          <div className='shadow-md-st relative rounded-3 bg-fill-inverse-primary p-2'>
            <iframe
              id='kofiframe'
              src='https://ko-fi.com/imdotnhsang/?hidefeed=true&widget=true&embed=true&preview=true'
              title='imdotnhsang'
              width='100%'
              height='100%'
              style={{
                borderRadius: '8px',
                border: 'none',
                minHeight: 640,
                minWidth: 320
              }}
            />
          </div>
        </Modal>
      </>
    );
  })
);
