import { describe, expect, test } from 'vitest';
import { UMedia } from '..';

describe('media utils', () => {
  test('should remove last slash in domain', () => {
    const domain = 'https://example.com/';
    const key = 'key';
    const result = UMedia.appendDomain(domain, key);

    expect(result).toBe('https://example.com/key');
  });

  test('should remove first slash in key', () => {
    const domain = 'https://example.com';
    const key = '/key';
    const result = UMedia.appendDomain(domain, key);

    expect(result).toBe('https://example.com/key');
  });

  test('should remove first slash in key and last slash in domain', () => {
    const domain = 'https://example.com/';
    const key = '/key';
    const result = UMedia.appendDomain(domain, key);

    expect(result).toBe('https://example.com/key');
  });
});
