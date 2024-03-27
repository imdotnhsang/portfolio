import type { Meta, StoryObj } from '@storybook/react';

import { CardProject } from './index';

const meta: Meta<typeof CardProject> = {
  title: 'Components/CardProject',
  component: CardProject
};
export default meta;

type Story = StoryObj<typeof CardProject>;

export const Default: Story = {
  args: {
    title: 'Project title',
    description: 'Project description',
    coverKey:
      'https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
};
