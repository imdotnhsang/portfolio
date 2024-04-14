import { memo, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import type { FC, ReactNode } from 'react';

import { useEventListener } from '@/hooks';
import { cn } from '@/services';
import { X } from '@phosphor-icons/react';

interface IModalProps {
  onClose?: () => void;
  open?: boolean;
  noKeyboard?: boolean;
  showCloseBtn?: boolean;
  children: ReactNode;
}

export const Modal: FC<IModalProps> = memo(function Modal({
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
        'center transition-300 fixed left-0 top-0 z-[9999] h-screen w-screen scale-0 opacity-0',
        {
          'scale-100 opacity-100': isOpen
        }
      )}
    >
      {showCloseBtn && (
        <button
          className='center absolute right-4 top-4 z-2 size-10'
          onClick={handleClose}
        >
          <X size={24} />
        </button>
      )}
      <div className='absolute left-0 top-0 h-full w-full bg-group/70 backdrop-blur-md' />
      <div className='center z-1 w-full p-4'>
        <div className='absolute h-full w-full' onClick={handleClose} />
        {children}
      </div>
    </div>,
    document.body
  );
});
