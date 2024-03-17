import { memo } from 'react';

import type { FC } from 'react';

interface IButtonProps {}

export const Button: FC<IButtonProps> = memo(function Button() {
  return <div>123</div>;
});
