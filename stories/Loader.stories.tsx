import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Loader } from '../src';

const meta: Meta<typeof Loader> = {
  title: 'OTHERS/Loader',
  component: Loader,
  args: {
    children: '正在加载中...',
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Basic: Story = {
  decorators: [
    Story => (
      <div style={{ background: 'rgba(0, 0, 0, 0.85)', paddingTop: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Primary: Story = {
  args: {
    bsStyle: 'primary',
  },
};

export const Size: Story = {
  render: props => (
    <>
      <Loader bsStyle="primary" />
      <Loader bsStyle="primary" bsSize="mi" />
      <Loader bsStyle="primary" bsSize="sm" />
      <Loader bsStyle="primary" bsSize="xs" />
    </>
  ),
};
