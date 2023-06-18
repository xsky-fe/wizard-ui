import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../src';
import moment, { Moment } from 'moment';

const meta: Meta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,
  decorators:[
    Story => (
      <div style={{ height:360 }}>
        <Story />
      </div>
    ),
  ],
  argTypes:{
    showTime:{
      description:'是否显示时间',
      table:{
        type:{summary:'boolean'}
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

function disabledDate(val: Moment | undefined) {
  if (!val) {
    return false;
  }
  const today: Moment = moment(new Date());
  return val.diff(today, 'seconds') > 0;
}

export const Basic: Story = {
  args: {
    placeholder: '请选择时间',
  },
};

export const DefaultValue: Story = {
  args: {
    defaultValue: '2019-08-13 12:02:53',
  },
};

export const GetTime: Story = {
  render: props => {
    const [value, setValue] = React.useState();
    const getTime = (val: string) => setValue(val as any);
    return (
      <>
        <p>change 值时获取时间：{value}</p>
        <DatePicker getTime={getTime} placeholder="请选择时间" />
      </>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const en: Story = {
  args: {
    lang: 'en',
    placeholder: 'Please select time',
  },
};

export const DisabledDate: Story = {
  args: {
    disabledDate,
  },
};

export const NoTimeSelect: Story = {
  args: {
    showTime: false,
  },
};
