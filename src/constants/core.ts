import { CEnv } from './env';

export const CCore = Object.freeze({
  IS_SERVER: typeof window === 'undefined',
  IS_DEVELOPMENT: CEnv.NODE_ENV === 'development',
  IS_PRODUCTION: CEnv.NODE_ENV === 'production'
});
