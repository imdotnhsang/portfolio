import type { FC } from 'react';
import { memo } from 'react';

interface IInputProps {
  label?: string;
}

export const Input: FC<IInputProps> = memo(function Input({ label }) {
  return <div>{label && <span>{label}: </span>}Input</div>;
});
