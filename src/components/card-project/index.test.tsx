import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CardProject } from '.';

describe('components card-project', () => {
  it('renders correctly', () => {
    const result = render(
      <CardProject
        coverKey='https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        description='Project description'
        title='Project title'
      />
    );

    expect(result).toMatchSnapshot();
  });
});
