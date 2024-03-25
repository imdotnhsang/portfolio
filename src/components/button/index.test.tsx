import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from '.';

describe('components-button', () => {
  it('renders correctly', () => {
    const result = render(<Button>Click me</Button>);

    expect(result).toMatchSnapshot();
  });

  it('renders with black color', () => {
    const result = render(<Button color='black'>Click me</Button>);

    expect(result).toMatchSnapshot();
  });

  it('renders as ghost', () => {
    const result = render(<Button variant='ghost'>Click me</Button>);

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
});
