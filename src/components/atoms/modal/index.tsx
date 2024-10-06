'use client';

import { X } from '@phosphor-icons/react';
import { memo, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import type { FC, ReactNode } from 'react';

import { withErrorBoundary } from '@/hocs';
import { useEventListener } from '@/hooks';
import { cn } from '@/services';
import dynamic from 'next/dynamic';

interface IModalProps {
  onClose?: () => void;
  open?: boolean;
  noKeyboard?: boolean;
  showCloseBtn?: boolean;
  children: ReactNode;
  closeOnOverlayClick?: boolean;
}

const _Modal: FC<IModalProps> = withErrorBoundary(
  memo(function Modal({
    open: externalOpen = false,
    noKeyboard = false,
    showCloseBtn = false,
    closeOnOverlayClick = true,
    onClose,
    children
  }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      setIsOpen(!!externalOpen);
    }, [externalOpen]);

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.body.style.removeProperty('overflow');
      };
    }, [isOpen]);

    const handleClose = useCallback(() => {
      if (!closeOnOverlayClick) {
        return;
      }

      setIsOpen(false);

      onClose?.();
    }, [closeOnOverlayClick, onClose]);

    useEventListener('keydown', (e) => {
      if (!noKeyboard && e.key === 'Escape') {
        handleClose();
      }
    });

    return createPortal(
      <div
        className={cn(
          'center transition-all-150 fixed left-0 top-0 z-[-1] h-screen w-screen opacity-0',
          {
            'z-[9999] opacity-100': isOpen
          }
        )}
      >
        <div className='center z-1 h-full w-full p-4'>
          <div
            className='absolute left-0 top-0 h-full w-full bg-fill-secondary/70 backdrop-blur-md'
            onClick={handleClose}
          />
          <div className='relative'>
            {showCloseBtn && (
              <button
                className='center transition-all-300 absolute -right-9 top-0 z-2 size-7 text-semantic-negative hover:text-semantic-negative xl:text-primary'
                onClick={handleClose}
              >
                <X className='size-7' />
              </button>
            )}
            {children}
          </div>
        </div>
      </div>,
      document.body
    );
  })
);

export const Modal = dynamic(() => Promise.resolve(_Modal), {
  ssr: false
});
