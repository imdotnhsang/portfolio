import type { Meta, StoryObj } from '@storybook/react';

import { Smiley } from '@phosphor-icons/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: {
      exclude: ['startIcon', 'endIcon']
    }
  }
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me'
  }
};

export const DefaultWithStartIcon: Story = {
  args: {
    children: 'Click me',
    startIcon: Smiley
  }
};

export const DefaultWithEndIcon: Story = {
  args: {
    children: 'Click me',
    endIcon: Smiley
  }
};
