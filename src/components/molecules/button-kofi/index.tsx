'use client';

import { memo } from 'react';

import type { ButtonHTMLAttributes, FC } from 'react';

import { ImageKofiLogo } from '@/assets';
import { withErrorBoundary } from '@/hocs';
import { useBoolean } from '@/hooks';

import { Button, Modal } from '../../atoms';

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

        {showKofiPanel && (
          <Modal open={showKofiPanel} onClose={onHideKofiPanel} showCloseBtn>
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
          </Modal>
        )}
      </>
    );
  })
);
