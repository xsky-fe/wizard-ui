import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { DatePicker } from '../src';
import moment, { Moment } from 'moment';

// 今天以后的 disable
function disabledDate(val: Moment | undefined) {
  if (!val) {
    return false;
  }
  const today: Moment = moment(new Date());
  return val.diff(today, 'seconds') > 0;
}

storiesOf('DATA ENTRY | DatePicker', module)
  .add('default', () => (
    <DatePicker placeholder="请选择时间"/>
  ))
  .add('default value', () => (
    <DatePicker defaultValue="2019-08-13 12:02:53" />
  ))
  .add('get time', () => React.createElement(() => {
    const [value, setValue] = React.useState();
    const getTime = (val: string) => setValue(val as any);
    return (
      <>
        <p>change 值时获取时间：{value}</p>
        <DatePicker getTime={getTime} placeholder="请选择时间" />
      </>
    )
  }))
  .add('disable', () => (
    <DatePicker disabled />
  ))
  .add('en', () => (
    <DatePicker lang="en" placeholder="Please select time"/>
  ))
  .add('disable date', () => (
    <>
      <h3>今天之后的 disable</h3>
      <DatePicker disabledDate={disabledDate} />
    </>
  ))
  .add('no time select', () => (
    <>
      <h3>只选择日期</h3>
      <DatePicker showTime={false}/>
    </>
  ))