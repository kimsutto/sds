import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  decorators: [(Story) => <div style={{ maxWidth: 700 }}><Story /></div>],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = { args: { variant: 'info', title: 'Information', children: 'This is an informational alert for general notices.' } };
export const Success: Story = { args: { variant: 'success', title: 'Success', children: 'Action completed successfully.' } };
export const Warning: Story = { args: { variant: 'warning', title: 'Warning', children: 'Please review your input.' } };
export const Error: Story = { args: { variant: 'error', title: 'Error', children: 'Something went wrong.' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Alert variant="info" title="Information">This is an informational alert for general notices.</Alert>
      <Alert variant="success" title="Success">Action completed successfully. Changes have been saved.</Alert>
      <Alert variant="warning" title="Warning">Please review your input. Some fields may need attention.</Alert>
      <Alert variant="error" title="Error">Something went wrong. Please try again or contact support.</Alert>
    </div>
  ),
};
