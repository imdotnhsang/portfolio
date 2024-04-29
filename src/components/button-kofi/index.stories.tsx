import type { Meta, StoryObj } from '@storybook/react';

import { ButtonKofi } from '.';

const meta: Meta<typeof ButtonKofi> = {
  title: 'Components/ButtonKofi',
  component: ButtonKofi,
  parameters: {
    controls: {
      exclude: ['startIcon', 'endIcon']
    }
  }
};
export default meta;

type Story = StoryObj<typeof ButtonKofi>;

export const Default: Story = {};
