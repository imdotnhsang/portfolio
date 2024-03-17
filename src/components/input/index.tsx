import { memo } from 'react';

import type { FC } from 'react';

interface IInputProps {
  label?: string;
}

export const Input: FC<IInputProps> = memo(function Input({ label }) {
  return <div>{label && <span>{label}: </span>}Input</div>;
});
