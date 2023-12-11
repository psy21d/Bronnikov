import type { Meta, StoryObj } from '@storybook/vue3';

import Button from 'primevue/button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    argTypes: {
      size: { control: 'select', options: ['small', 'medium', 'large'] },
      backgroundColor: { control: 'color' },
      onClick: { action: 'clicked' },
    },
  },
} as Meta<typeof Button>;

// export default meta;
type Story = StoryObj<typeof Button>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};
