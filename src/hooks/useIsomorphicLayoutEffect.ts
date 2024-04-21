import { CCore } from '@/constants';
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect = CCore.IS_SERVER
  ? useEffect
  : useLayoutEffect;
