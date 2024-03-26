import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Input } from '.';

vi.mock('uuid', () => ({
  v4: () => 'I am mocked'
}));

describe('components input', () => {
  it('renders correctly', () => {
    const result = render(<Input label='name' placeholder='Sang Nguyen' />);

    expect(result).toMatchSnapshot();
  });

  it('renders with error message', () => {
    const result = render(
      <Input label='name' placeholder='Sang Nguyen' errMsg='This is required' />
    );

    const { getByText } = result;
    expect(getByText('This is required')).not.toBeNull();
  });

  it('renders with toggle view password', () => {
    render(
      <Input label='password' type='password' data-testid='input-password' />
    );

    const toggleViewPassword = screen.getByTestId('toggle-view-password');
    expect(toggleViewPassword).not.toBeNull();

    fireEvent.click(toggleViewPassword);
    expect(screen.getByTestId('input-password').getAttribute('type')).toBe(
      'text'
    );
  });
});
