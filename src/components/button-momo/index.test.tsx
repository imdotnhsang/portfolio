import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ButtonMomo } from '.';

describe('components button momo', () => {
  it('renders correctly', () => {
    const result = render(<ButtonMomo>Click me</ButtonMomo>);

    expect(result).toMatchSnapshot();
  });

  it('renders as full width', () => {
    const result = render(<ButtonMomo fullW>Click me</ButtonMomo>);

    expect(result).toMatchSnapshot();
  });
});
