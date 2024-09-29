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
    const result = render(<Button>Click me</Button>);

    expect(result).toMatchSnapshot();
  });

  it('renders with label "Click me"', () => {
    const { getByText } = render(<Button>Matched label</Button>);

    expect(getByText('Matched label')).not.toBeNull();
  });

  it('renders with start icon', () => {
    const result = render(<Button startIcon={Icon}>Click me</Button>);

    expect(result).toMatchSnapshot();
  });

  it('renders with end icon', () => {
    const result = render(<Button endIcon={Icon}>Click me</Button>);

    expect(result).toMatchSnapshot();
  });

  it('renders with both icons', () => {
    const result = render(
      <Button startIcon={Icon} endIcon={Icon}>
        Click me
      </Button>
    );

    expect(result).toMatchSnapshot();
  });

  it('renders with bigger icon on bigger screen', () => {
    vi.mock('@/hooks', async (importOriginal) => {
      const mod = await importOriginal<typeof import('@/hooks')>();
      return {
        ...mod,
        useMatchScreen: vi.fn().mockReturnValue(true)
      };
    });

    const result = render(<Button>Click me</Button>);

    expect(result).toMatchSnapshot();
  });
});
