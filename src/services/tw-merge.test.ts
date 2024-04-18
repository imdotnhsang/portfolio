import { describe, expect, it } from 'vitest';
import { cn } from './tw-merge';

describe('services tw merge', () => {
  it('should merge tailwind classes', () => {
    const result = cn('text-base', 'text-2xl');

    expect(result).toBe('text-2xl');
  });

  it('should merge tailwind classes with clsx', () => {
    const result = cn('text-base-rps text-2xl text-red-500 text-center');

    expect(result).toBe('text-2xl text-red-500 text-center');
  });

  it('should merge tailwind classes with clsx and object', () => {
    const result = cn('text-base-rps', 'text-2xl', { 'text-center': true });

    expect(result).toBe('text-2xl text-center');
  });
});
