import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ButtonKofi } from '.';

describe('components button kofi', () => {
  it('renders correctly', () => {
    const result = render(<ButtonKofi>Click me</ButtonKofi>);

    expect(result).toMatchSnapshot();
  });

  it('renders as full width', () => {
    const result = render(<ButtonKofi fullW>Click me</ButtonKofi>);

    expect(result).toMatchSnapshot();
  });
});
