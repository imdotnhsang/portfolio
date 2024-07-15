import { useEffect, useLayoutEffect } from 'react';

import { CCore } from '@/constants';

export const useIsomorphicLayoutEffect = CCore.IS_SERVER
  ? useEffect
  : useLayoutEffect;
