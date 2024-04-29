import { vi } from 'vitest';

vi.mock('@/hooks', async (importOriginal) => {
  const mod = await importOriginal<typeof import('@/hooks')>();

  return {
    ...mod,
    useMatchScreen: vi.fn()
  };
});
