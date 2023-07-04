import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '../src';

const meta: Meta<typeof ProgressBar> = {
  title: 'DATA SHOW/ProgressBar',
  component: ProgressBar,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Basic: Story = {};

export const Color: Story = {
  render: props => (
    <div style={{ width: '460px' }}>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
  ),
};

export const Label: Story = {
  render: props => (
    <div style={{ width: '460px' }}>
      <ProgressBar max={100} now={40} label={40} />
    </div>
  ),
};
