import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { label: 'Label', placeholder: 'Placeholder text' } };
export const WithValue: Story = { args: { label: 'Focused', defaultValue: 'Typing here...' } };
export const Error: Story = { args: { label: 'Error', defaultValue: 'Invalid input', error: 'This field is required' } };
export const Success: Story = { args: { label: 'Success', defaultValue: 'Valid input', success: 'Looks good!' } };
export const Disabled: Story = { args: { label: 'Disabled', placeholder: 'Cannot edit', disabled: true } };

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 300px)', gap: 24 }}>
      <Input label="Default" placeholder="Placeholder text" />
      <Input label="With Value" defaultValue="Typing here..." />
      <Input label="Error" defaultValue="Invalid input" error="This field is required" />
      <Input label="Success" defaultValue="Valid input" success="Looks good!" />
      <Input label="Disabled" placeholder="Cannot edit" disabled />
    </div>
  ),
};
