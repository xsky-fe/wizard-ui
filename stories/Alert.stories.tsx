import { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../src';
import React from 'react';

type Story = StoryObj<typeof Alert>;

const meta: Meta<typeof Alert> = {
  title: '组件/Alert 警告',
  component: Alert,
  args: {
    bsStyle: 'info',
    children: '警告',
    onDismiss: undefined,
  },
  argTypes: {
    bsStyle: {
      control: 'radio',
      options: ['warning', 'info', 'error'],
    },
    dismissDirection: {
      control: 'radio',
      options: ['up', 'right', 'down', 'left'],
    },
    children: { type: { required: true } as any },
  },
};

export const Basic: Story = {};

export const Variant: Story = {
  render: () => (
    <>
      <Alert bsStyle="info" showIcon>
        这里是 info 级别
      </Alert>
      <Alert bsStyle="warning" showIcon>
        这里是 warning 级别
      </Alert>
      <Alert bsStyle="error" showIcon>
        这里是 error 级别
      </Alert>
    </>
  ),
};

export const Info: Story = {
  args: { bsStyle: 'info', showIcon: true },
};

export const Center: Story = {
  args: { textAlign: 'center', showIcon: true },
};

export const Inline: Story = {
  args: { textAlign: 'inline', showIcon: true },
};

export const Operation: Story = {
  args: { onDismiss: () => {} },
};

export default meta;
