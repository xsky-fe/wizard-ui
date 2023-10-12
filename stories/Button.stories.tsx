import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src';
import { Placement } from 'react-bootstrap/esm/types';

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
      <Button variant="default">默认default</Button>
      <Button variant="primary">通用primary</Button>
      <Button variant="info">通知info</Button>
      <Button variant="success">成功success</Button>
      <Button variant="danger">危险danger</Button>
      <Button variant="warning">警告warning</Button>
      <Button variant="link">链接link</Button>
      <Button variant="text">文字</Button>
    </>
  ),
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
      <Button
        tooltip={false}
        disabled={true}
      >
        disabled but no tooltip
      </Button>
    </div >
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
