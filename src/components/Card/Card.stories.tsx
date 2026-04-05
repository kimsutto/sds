import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  decorators: [(Story) => <div style={{ maxWidth: 360 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    title: 'Basic Card',
    subtitle: 'Subtitle text',
    children: 'Simple card with a title, subtitle and body text. Great for displaying content.',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Action Card',
    subtitle: 'With buttons',
    children: 'Card with action buttons in the footer.',
    actions: (
      <>
        <Button size="sm">Action</Button>
        <Button size="sm" variant="ghost">Cancel</Button>
      </>
    ),
  },
};

export const Compact: Story = {
  decorators: [(Story) => <div style={{ maxWidth: 240 }}><Story /></div>],
  args: {
    title: 'Compact',
    children: 'Smaller card variant.',
  },
};
