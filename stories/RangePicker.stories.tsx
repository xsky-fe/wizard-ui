import { Meta, StoryObj } from '@storybook/react';
import { RangePicker } from '../src';
import moment, { Moment } from 'moment';

function onChange(date: Moment[], dateString: string[]) {
  console.log(date, dateString);
}
function onOk(date: Moment[]) {
  console.log(date);
}

const meta: Meta<typeof RangePicker> = {
  title: 'DATA ENTRY/RangePicker',
  component: RangePicker,
};

export default meta;

type Story = StoryObj<typeof RangePicker>;

export const Basic: Story = {
  args: {
    onChange,
    onOk,
  },
};

export const DefaultTimes: Story = {
  args: {
    defaultValue: [moment('2019-02-16 18:01:57'), moment('2019-02-20 18:01:57')],
  },
};

export const HideDuration: Story = {
  args: {
    showDuration: false,
  },
};
