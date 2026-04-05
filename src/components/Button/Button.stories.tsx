import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'ghost', 'danger'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: 'Button', variant: 'primary' } };
export const Secondary: Story = { args: { children: 'Button', variant: 'secondary' } };
export const Accent: Story = { args: { children: 'Button', variant: 'accent' } };
export const Ghost: Story = { args: { children: 'Button', variant: 'ghost' } };
export const Danger: Story = { args: { children: 'Button', variant: 'danger' } };
export const Disabled: Story = { args: { children: 'Button', variant: 'primary', disabled: true } };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(['primary', 'secondary', 'accent', 'ghost', 'danger'] as const).map((v) => (
        <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 80, fontSize: 13, color: '#6F7285' }}>{v}</span>
          <Button variant={v}>Default</Button>
          <Button variant={v} disabled>Disabled</Button>
        </div>
      ))}
    </div>
  ),
};
