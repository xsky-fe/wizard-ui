import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Icon, Button } from '../src';
import StrangeTooltip from './demos/strangeTooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'DATA DISPLAY/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      type: { required: true } as any,
    },
    onClick: {
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    children:
      '文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示',
    placement: 'top',
    label: <span>hover 试试</span>,
  },
};

export const strangeTooltip: Story = {
  render: () => {
    return <StrangeTooltip />;
  },
};

export const icon: Story = {
  render: props => (
    <>
      <Tooltip placement="right" style={{ maxWidth: 800 }} children="默认图标" />
      <br />
      <Tooltip label={<Icon type="edit-fill" />} style={{ maxWidth: 800 }} children="编辑" />
    </>
  ),
};

export const Placement: Story = {
  render: props => {
    return (
      <>
        {['top', 'right', 'bottom', 'left'].map(placement => (
          <Tooltip
            placement={placement}
            style={{ maxWidth: 800 }}
            label={<Button style={{ marginRight: 20 }}>Tooltip on {placement}</Button>}
          >
            Tooltip on <strong>{placement}</strong>.
          </Tooltip>
        ))}
      </>
    );
  },
};
