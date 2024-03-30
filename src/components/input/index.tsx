'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { RiEyeLine, RiEyeOffLine } from '@remixicon/react';
import { omit } from 'ramda';
import type { FC, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface IInputProps {
  label?: string;
  errMsg?: string;
}

export const Input: FC<
  Omit<InputHTMLAttributes<Element>, keyof IInputProps> & IInputProps
> = memo(function Input({ label = '', errMsg = '', ...props }) {
  const inputId = useMemo(() => {
    if (!label) {
      return undefined;
    }

    return uuidv4();
  }, [label]);

  const [showPassword, setShowPassword] = useState(false);

  const showViewPasswordToggle = useMemo(
    () => props.type === 'password',
    [props.type]
  );

  const handleToggleViewPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword]
  );

  return (
    <div className='flex flex-col'>
      {!!label && (
        <label
          className='text-gray-secondary mb-2.5 w-fit text-base'
          htmlFor={inputId}
        >
          _{label}:
        </label>
      )}
      <div>
        <div className='relative w-full'>
          <input
            id={inputId}
            type={showPassword ? 'text' : props.type}
            className={twMerge(
              'bg-black-strong text-white placeholder-gray-subtle shadow-border-line focus:ring-line/20 focus:ring-offset-line/10 w-full rounded-2 px-4 py-2.5 text-base outline-none transition-all duration-200 ease-in-out focus:ring-2 focus:ring-offset-1',
              showViewPasswordToggle && 'pr-11',
              props.className
            )}
            {...omit(['type'], props)}
          />
          {showViewPasswordToggle && (
            <button
              className='absolute right-4 top-1/2 -translate-y-1/2'
              onClick={handleToggleViewPassword}
              data-testid='toggle-view-password'
            >
              {showPassword ? (
                <RiEyeLine
                  size={16}
                  className='text-gray-secondary hover:text-gray-secondary/90'
                />
              ) : (
                <RiEyeOffLine
                  size={16}
                  className='text-gray-secondary hover:text-gray-secondary/90'
                />
              )}
            </button>
          )}
        </div>
        {!!errMsg && (
          <span className='text-red mt-1 inline-block text-sm'>{errMsg}</span>
        )}
      </div>
    </div>
  );
});
