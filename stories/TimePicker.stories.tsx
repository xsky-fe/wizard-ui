import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import lodash from 'lodash';
import { TimePicker } from '../src';

const meta: Meta<typeof TimePicker> = {
  title: 'DATA ENTRY/TimePicker',
  component: TimePicker,
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Basic: Story = {
  args: {
    placeholder: '请选择时间',
  },
};

export const SelectHour: Story = {
  render: props => (
    <>
      分钟固定为 0 的小时选择
      <TimePicker placeholder="请选择时间" hourStart />
      <br />
      分钟固定为 59 的小时选择
      <TimePicker placeholder="请选择时间" hourEnd />
    </>
  ),
};

export const DisabledHour: Story = {
  render: props => (
    <>
      禁止选择 0-14 点
      <br />
      {/* @ts-ignore */}
      <TimePicker placeholder="请选择时间" disabledHours={() => lodash.range(0, 14)} />
    </>
  ),
};
