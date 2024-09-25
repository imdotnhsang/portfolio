import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { NoSsr } from '.';

describe('components no-ssr', () => {
  it('renders correctly', () => {
    const result = render(<NoSsr>Click me</NoSsr>);

    expect(result).toMatchSnapshot();
  });
});
