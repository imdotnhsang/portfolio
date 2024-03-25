import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './index';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'name',
    placeholder: 'Sang Nguyen'
  }
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'password',
    placeholder: '12345689@Aa'
  }
};
