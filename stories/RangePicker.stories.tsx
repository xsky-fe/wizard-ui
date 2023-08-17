import { Meta, StoryObj } from '@storybook/react';
import { RangePicker } from '../src';
import moment, { Moment } from 'moment';

function onChange(date: Moment[], dateString: string[]) {
  console.log(date, dateString);
}
function onOk(date: Moment[]) {
  console.log(date);
}

function disabledDate(current: Moment) {
  if (!current) return false;
  const date = moment();
  return current.isAfter(date); // can not select days after today
}

function disabledDateTime(value: Moment[] | string[]): Moment[] | string[]  {
  const now = moment();
  if (moment(value[0]).isAfter(now) || moment(value[1]).isAfter(now)) {
    const newValue = [
      moment(value[0]).isAfter(now) ? now : moment(value[0]),
      moment(value[1]).isAfter(now) ? now : moment(value[1])
    ];
    return newValue
  }

  return value
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

export const disabledAfterToday: Story = {
  args: {
    disabledDate,
  },
};

export const disabledAfterTodayTime: Story = {
  args: {
    disabledDate,
    disabledDateTime,
  },
};

export const HideDuration: Story = {
  args: {
    showDuration: false,
  },
};
