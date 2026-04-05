import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';

const items = [
  { label: 'Dashboard', value: 'dashboard' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Settings', value: 'settings' },
  { label: 'Users', value: 'users' },
];

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  args: { items },
  argTypes: {
    variant: { control: 'select', options: ['underline', 'pill', 'boxed'] },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Underline: Story = { args: { variant: 'underline' } };
export const Pill: Story = { args: { variant: 'pill' } };
export const Boxed: Story = { args: { variant: 'boxed' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <p style={{ fontSize: 13, color: '#6F7285', marginBottom: 8 }}>Underline</p>
        <Tabs items={items} variant="underline" />
      </div>
      <div>
        <p style={{ fontSize: 13, color: '#6F7285', marginBottom: 8 }}>Pill</p>
        <Tabs items={items} variant="pill" />
      </div>
      <div>
        <p style={{ fontSize: 13, color: '#6F7285', marginBottom: 8 }}>Boxed</p>
        <Tabs items={items} variant="boxed" />
      </div>
    </div>
  ),
};
