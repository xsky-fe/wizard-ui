import * as React from 'react';
import { storiesOf } from '@storybook/react';
import lodash from 'lodash';
import { TimePicker } from '../src';

storiesOf('DATA ENTRY | TimePicker', module)
  .add('default', () => <TimePicker placeholder="请选择时间" />)
  .add('select hour', () => (
    <>
      分钟固定为 0 的小时选择
      <TimePicker placeholder="请选择时间" hourStart />
      <br />
      分钟固定为 59 的小时选择
      <TimePicker placeholder="请选择时间" hourEnd />
    </>
  ))
  .add('disabled hour', () => (
    <>
      禁止选择 0-14 点
      <br />
      {/* @ts-ignore */}
      <TimePicker placeholder="请选择时间" disabledHours={() => lodash.range(0, 14)} />
    </>
  ));
