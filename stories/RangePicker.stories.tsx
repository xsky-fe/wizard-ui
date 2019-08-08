import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { RangePicker } from '../src';
import moment, { Moment } from 'moment';

function onChange(date: Moment[], dateString: string[]) {
  console.log(date, dateString);
}
function onOk(date: Moment[]) {
  console.log(date);
}

storiesOf('DATA ENTRY | RangePicker', module)
  .add('default', () => (
    <RangePicker onChange={onChange} onOk={onOk} />
  ))
  .add('en', () => (
    <RangePicker onChange={onChange} lang="en" />
  ))
  .add('default times', () => (
    <RangePicker defaultValue={[moment('2019-02-16 18:01:57'), moment('2019-02-20 18:01:57')]} />
  ))
  .add('hide duration', () => (
    <RangePicker showDuration={false} />
  ))