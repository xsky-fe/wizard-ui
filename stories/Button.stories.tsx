import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src';
import { Placement } from 'react-bootstrap/esm/types';
import { CloseLine } from 'wizard-ui-icon';

const DisabledTooltip: { children: React.ReactNode; placement: Placement } = {
  children: <span>don't allowed to click</span>,
  placement: 'top',
};
const NormalTooltip: { children: React.ReactNode; placement: Placement } = {
  children: <span>allowed to click</span>,
  placement: 'top',
};

const meta: Meta<typeof Button> = {
  title: 'DATA SHOW/Button',
  component: Button,
  args: {
    variant: 'primary',
    children: 'button',
  },
  argTypes: {
    children: { description: '按钮中的内容' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {};

export const Variant: Story = {
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Story />
      </div>
    ),
  ],
  render: props => (
    <>
      <Button variant="primary">Button</Button>
      <Button variant="info">Button</Button>
      <Button variant="danger">Button</Button>
      <Button variant="outline-danger">Button</Button>
      <Button variant="text-primary">Button</Button>
      <Button variant="text-danger">Button</Button>
      <Button variant="text-default">Button</Button>
    </>
  ),
};

export const IconButton: Story = {
  render: () => {
    return (
      <>
        <Button className='hcy' isIcon>
          <CloseLine size={12} />
        </Button>
        {/* <Button isIcon>
          <CloseLine size={16} />
        </Button>
        <Button isIcon>
          <CloseLine size={20} />
        </Button> */}
      </>
    );
  },
};

export const Size: Story = {
  render: props => (
    <>
      <Button size="lg">button</Button>
      <Button>button</Button>
      <Button size="sm">button</Button>
      <Button size="xs">button</Button>
    </>
  ),
};

export const Active: Story = {
  render: props => (
    <>
      <Button active variant="primary">
        button
      </Button>
      &nbsp;&nbsp;
      <Button disabled variant="primary">
        button
      </Button>
    </>
  ),
};

export const Block: Story = {
  args: {
    block: true,
  },
};

export const Tooltip: Story = {
  render: props => (
    <div style={{ margin: '10px' }}>
      <Button
        variant="info"
        tooltip={DisabledTooltip}
        disabled={true}
        onClick={() => {
          alert('clicked');
        }}
        style={{ marginRight: '10px' }}
      >
        button
      </Button>
      <Button
        tooltip={NormalTooltip}
        disabled={false}
        onClick={() => {
          alert('clicked');
        }}
        style={{ marginRight: '10px' }}
      >
        button
      </Button>
      <Button tooltip={false} disabled={true}>
        disabled but no tooltip
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
