import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'Option One', value: '1' },
  { label: 'Option Two', value: '2' },
  { label: 'Option Three', value: '3' },
  { label: 'Option Four', value: '4' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: { options },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = { args: {} };
export const WithValue: Story = { args: { value: '2' } };
export const Disabled: Story = { args: { disabled: true } };
export const CustomPlaceholder: Story = { args: { placeholder: 'Choose a color...' } };
