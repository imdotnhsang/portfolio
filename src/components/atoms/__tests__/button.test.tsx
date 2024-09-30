import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Smiley } from '@phosphor-icons/react';
import { Button } from '../button';

describe('components/atoms button', () => {
  const Icon = Smiley;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders correctly', () => {
    const result = render(
      <Button startIcon={Icon} endIcon={Icon}>
        Click me
      </Button>
    );

    expect(result).toMatchSnapshot();
  });
});
