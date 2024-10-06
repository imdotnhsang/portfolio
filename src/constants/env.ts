export const CEnv = Object.freeze({
  NODE_ENV: process.env.NODE_ENV ?? '',
  MS_CLARITY_KEY: process.env.NEXT_PUBLIC_MS_CLARITY_KEY ?? ''
});
console.log('🚀 ~ process.env.NODE_ENV :', process.env.NODE_ENV);
