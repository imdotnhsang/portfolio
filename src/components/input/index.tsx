import type { FC } from 'react';
import { memo } from 'react';

interface IInputProps {}

export const Input: FC<IInputProps> = memo(function Input() {
  return <div>Input</div>;
});
