export const CEnv = Object.freeze({
  NODE_ENV: process.env.NODE_ENV ?? '',
  FORK_REPO_URL: process.env.NEXT_PUBLIC_FORK_REPO_URL ?? '',
  STAR_REPO_URL: process.env.NEXT_PUBLIC_STAR_REPO_URL ?? '',
  USERNAME: process.env.NEXT_PUBLIC_USERNAME ?? '',
  EMAIL: process.env.NEXT_PUBLIC_EMAIL ?? '',
  MS_CLARITY_KEY: process.env.NEXT_PUBLIC_MS_CLARITY_KEY ?? ''
});
