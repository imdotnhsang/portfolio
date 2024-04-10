import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '.';

describe('components button', () => {
  const Icon = vi.fn();

  it('renders correctly', () => {
    const result = render(<Button>Click me</Button>);

    expect(result).toMatchSnapshot();
  });

  it('renders as full width', () => {
    const result = render(<Button fullW>Click me</Button>);

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

  // TODO: add test for screen size
});
