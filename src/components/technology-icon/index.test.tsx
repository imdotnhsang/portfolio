import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TechnologyIcon } from '.';

vi.mock('uuid', () => ({
  v4: () => 'I am mocked'
}));

describe('components technology-icon', () => {
  it('renders correctly', () => {
    const result = render(<TechnologyIcon key='reactjs' />);

    expect(result).toMatchSnapshot();
  });
});
