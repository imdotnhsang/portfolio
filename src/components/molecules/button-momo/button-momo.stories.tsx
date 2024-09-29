import type { Meta, StoryObj } from '@storybook/react';

import { ButtonMomo } from '.';

const meta: Meta<typeof ButtonMomo> = {
  title: 'Components/ButtonMomo',
  component: ButtonMomo,
  parameters: {
    controls: {
      exclude: ['startIcon', 'endIcon']
    }
  }
};
export default meta;

type Story = StoryObj<typeof ButtonMomo>;

export const Default: Story = {
  args: {}
};
