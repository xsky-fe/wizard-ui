import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { UsageBar } from '../src';

const NOW = 900000;
const MAX = 7000000;
const UNAVAILABLE_DATA = 500000
const BYTESSERIES = [
  { name: '已使用（文案过长时省略文案过长时省略文案过长时省略文案过长时省略文案过长时省略文案过长时省略。。。）', value: 1024100 },
  { name: '恢复中', value: 1024280, bsStyle: 'success' },
  { name: '错误', value: 0, bsStyle: 'danger' },
  { name: '降级', value: 1024444, bsStyle: 'warning' },
  { name: '紧急', value: 1024444, bsStyle: 'critical' },
  { name: '未使用', value: 2048000, bsStyle: 'default' }];

const BULKSERIES = [
  { name: '已使用', value: 1024100 },
  { name: '恢复中', value: 1024, bsStyle: 'success' },
  { name: '错误', value: 1024223, bsStyle: 'danger' },
  { name: '降级', value: 1024444, bsStyle: 'warning' },
  { name: '紧急', value: 1024444, bsStyle: 'critical' },
  { name: '未使用', value: 20480000, bsStyle: 'default' }];

storiesOf('DATA SHOW | UsageBar', module)
  .add('percent', () => (
    <>
      <UsageBar now={NOW} max={MAX} unavailableData={UNAVAILABLE_DATA} isPercent withUnavailable />
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
  .add('series', () => (
    <>
      <h4>SERIES 模式 isByte</h4>
      <UsageBar series={BYTESSERIES} isByte />
      <h4>SERIES 模式，isByte，附带图例</h4>
      <UsageBar series={BYTESSERIES} isByte withLenged />
      <h4>SERIES 模式，isBulk，附带图例</h4>
      <UsageBar series={BULKSERIES} isBulk withLenged />
      <h4>SERIES 模式，isPercent，附带图例</h4>
      <UsageBar series={BYTESSERIES} isPercent withLenged />
    </>
  ))