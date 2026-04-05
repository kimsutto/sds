import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'accent', 'success', 'warning', 'error', 'info'],
    },
    style_type: { control: 'select', options: ['solid', 'subtle', 'outline'] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Solid: Story = { args: { children: 'Badge', variant: 'primary', style_type: 'solid' } };
export const Subtle: Story = { args: { children: 'Badge', variant: 'success', style_type: 'subtle' } };
export const Outline: Story = { args: { children: 'Badge', variant: 'error', style_type: 'outline' } };
export const WithDot: Story = { args: { children: 'Active', variant: 'success', style_type: 'subtle', dot: true } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ width: 50, fontSize: 13, color: '#6F7285' }}>Solid</span>
        {(['default', 'primary', 'accent', 'success', 'warning', 'error', 'info'] as const).map((v) => (
          <Badge key={v} variant={v} style_type="solid">{v}</Badge>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ width: 50, fontSize: 13, color: '#6F7285' }}>Subtle</span>
        {(['default', 'primary', 'accent', 'success', 'warning', 'error', 'info'] as const).map((v) => (
          <Badge key={v} variant={v} style_type="subtle">{v}</Badge>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ width: 50, fontSize: 13, color: '#6F7285' }}>Outline</span>
        {(['default', 'success', 'warning', 'error', 'info'] as const).map((v) => (
          <Badge key={v} variant={v} style_type="outline">{v}</Badge>
        ))}
      </div>
    </div>
  ),
};
