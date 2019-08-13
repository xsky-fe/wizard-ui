import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { UsageBar } from '../src';

const NOW = 900000;
const MAX = 7000000;

storiesOf('DATA SHOW | UsageBar', module)
  .add('percent', () => (
    <>
      <UsageBar now={NOW} max={MAX} isPercent />
      <UsageBar percent={NOW / MAX} />
    </>
  ))
  .add('byte', () => (
    <>
      <UsageBar now={NOW} max={MAX} isByte />
      <UsageBar percent={NOW / MAX} max={MAX} isByte />
      <UsageBar now={NOW} max={MAX} isByte withPercent hideNow />
      <UsageBar now={NOW} max={MAX} isByte withPercent />
    </>
  ))
  .add('number', () => (
    <>
      <UsageBar now={NOW} max={MAX} isBulk />
      <UsageBar percent={NOW / MAX} max={MAX} isBulk />
      <UsageBar now={NOW} max={MAX} isBulk withPercent hideNow />
      <UsageBar now={NOW} max={MAX} isBulk withPercent />
    </>
  ))
  .add('inline', () => (
    <>
      <UsageBar now={NOW} max={MAX} isPercent inline />
      &nbsp;&nbsp;
      <UsageBar now={NOW} max={MAX} isByte inline />
      &nbsp;&nbsp;
      <UsageBar now={NOW} max={MAX} isBulk inline />
    </>
  ))
  .add('status', () => (
    <>
      <h4>告警：大于max的75%，小于max的85%</h4>
      <UsageBar now={76} max={100} />
      <h4>危险：大于max的85% </h4>
      <UsageBar now={90} max={100} />
    </>
  ))
  .add('limit', () => (
    <>
      <UsageBar now={0} isByte />
      <UsageBar now={0} isBulk />
      <UsageBar percent={0} isByte />
      <UsageBar percent={0} isBulk />
      <UsageBar percent={0} />
    </>
  ))