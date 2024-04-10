import { CSite } from '@/constants';
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect = CSite.IS_SERVER
  ? useEffect
  : useLayoutEffect;
