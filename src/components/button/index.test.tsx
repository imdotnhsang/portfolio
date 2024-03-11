import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './index';

describe('components-button', () => {
  it('renders correctly', () => {
    const result = render(<Button />);

    expect(result).toMatchSnapshot();
  });
});
