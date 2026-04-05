import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItem, ListGroup } from './ListItem';

const meta: Meta<typeof ListItem> = {
  title: 'Components/ListItem',
  component: ListItem,
  decorators: [(Story) => <div style={{ maxWidth: 480 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Simple: Story = {
  render: () => (
    <ListGroup>
      <ListItem title="Dashboard" />
      <ListItem title="Analytics" active />
      <ListItem title="Settings" />
      <ListItem title="Profile" />
    </ListGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <ListGroup>
      <ListItem title="Notifications" description="Manage your notification preferences" trailing="›" />
      <ListItem title="Privacy" description="Control your privacy and security" trailing="›" />
      <ListItem title="Appearance" description="Customize the look and feel" trailing="›" />
    </ListGroup>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <ListGroup>
      <ListItem title="Alice Kim" description="Designer" avatar={{ initial: 'A', color: '#A79DBF' }} />
      <ListItem title="Bob Park" description="Developer" avatar={{ initial: 'B', color: '#5A8EC4' }} />
      <ListItem title="Carol Lee" description="PM" avatar={{ initial: 'C', color: '#5B9A6B' }} />
    </ListGroup>
  ),
};
