import type { Meta, StoryObj } from '@storybook/react';

import { TechnologyIcon } from './index';

const meta: Meta<typeof TechnologyIcon> = {
  title: 'Components/TechnologyIcon',
  component: TechnologyIcon
};
export default meta;

type Story = StoryObj<typeof TechnologyIcon>;

export const Default: Story = {
  args: {}
};
