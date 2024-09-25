import { X } from '@phosphor-icons/react';
import { memo, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import type { FC, ReactNode } from 'react';

import { withErrorBoundary } from '@/hocs';
import { useEventListener } from '@/hooks';
import { cn } from '@/services';

interface IModalBaseProps {
  onClose?: () => void;
  open?: boolean;
  noKeyboard?: boolean;
  showCloseBtn?: boolean;
  children: ReactNode;
}

export const ModalBase: FC<IModalBaseProps> = withErrorBoundary(
  memo(function ModalBase({
    open: externalOpen = false,
    noKeyboard = false,
    showCloseBtn = false,
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
      setIsOpen(false);

      onClose?.();
    }, [onClose]);

    useEventListener('keydown', (e) => {
      if (!noKeyboard && e.key === 'Escape') {
        handleClose();
      }
    });

    return createPortal(
      <div
        className={cn(
          'center transition-all-400 fixed left-0 top-0 z-[9999] h-screen w-screen opacity-0',
          {
            'opacity-100': isOpen
          }
        )}
      >
        {showCloseBtn && (
          <button
            className='center transition-all-300 absolute right-4 top-4 z-2 size-10 text-semantic-negative hover:text-semantic-negative xl:text-primary'
            onClick={handleClose}
          >
            <X size={28} />
          </button>
        )}
        <div className='center z-1 h-full w-full p-4'>
          <div
            className='absolute left-0 top-0 h-full w-full bg-fill-secondary/70 backdrop-blur-md'
            onClick={handleClose}
          />
          {children}
        </div>
      </div>,
      document.body
    );
  })
);
