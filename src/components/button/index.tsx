import type { FC } from 'react';
import { memo } from 'react';

interface IButtonProps {}

export const Button: FC<IButtonProps> = memo(function Button() {
  return <div>Button</div>;
});
