import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { UsageBar } from '../src';

const meta: Meta<typeof UsageBar> = {
  title: 'DATA SHOW/UsageBar',
  component: UsageBar,
};

export default meta;

const NOW = 900000;
const MAX = 7000000;
const UNAVAILABLE_DATA = 500000;
const BYTESSERIES = [
  {
    name:
      '已使用（文案过长时省略文案过长时省略文案过长时省略文案过长时省略文案过长时省略文案过长时省略。。。）',
    value: 1024100,
  },
  { name: '恢复中', value: 1024280, bsStyle: 'success' },
  { name: '错误', value: 0, bsStyle: 'danger' },
  { name: '降级', value: 1024444, bsStyle: 'warning' },
  { name: '紧急', value: 1024444, bsStyle: 'critical' },
  { name: '未使用', value: 2048000, bsStyle: 'default' },
];

const BULKSERIES = [
  { name: '已使用', value: 1024100 },
  { name: '恢复中', value: 1024, bsStyle: 'success' },
  { name: '错误', value: 1024223, bsStyle: 'danger' },
  { name: '降级', value: 1024444, bsStyle: 'warning' },
  { name: '紧急', value: 1024444, bsStyle: 'critical' },
  { name: '未使用', value: 20480000, bsStyle: 'default' },
];

type Story = StoryObj<typeof UsageBar>;

export const Percent: Story = {
  render: props => (
    <>
      <UsageBar now={NOW} max={MAX} unavailableData={UNAVAILABLE_DATA} isPercent withUnavailable />
      <UsageBar percent={NOW / MAX} />
    </>
  ),
};

export const Byte: Story = {
  render: props => (
    <>
      <UsageBar now={NOW} max={MAX} isByte />
      <UsageBar percent={NOW / MAX} max={MAX} isByte />
      <UsageBar now={NOW} max={MAX} isByte withPercent hideNow />
      <UsageBar now={NOW} max={MAX} isByte withPercent />
    </>
  ),
};

export const Number: Story = {
  render: props => (
    <>
      <UsageBar now={NOW} max={MAX} isBulk />
      <UsageBar percent={NOW / MAX} max={MAX} isBulk />
      <UsageBar now={NOW} max={MAX} isBulk withPercent hideNow />
      <UsageBar now={NOW} max={MAX} isBulk withPercent />
    </>
  ),
};

export const Inline: Story = {
  render: props => (
    <>
      <UsageBar now={NOW} max={MAX} isPercent inline />
      &nbsp;&nbsp;
      <UsageBar now={NOW} max={MAX} isByte inline />
      &nbsp;&nbsp;
      <UsageBar now={NOW} max={MAX} isBulk inline />
    </>
  ),
};

export const Status: Story = {
  render: props => (
    <>
      <h4>告警：大于max的75%，小于max的85%</h4>
      <UsageBar now={76} max={100} />
      <h4>危险：大于max的85% </h4>
      <UsageBar now={90} max={100} />
    </>
  ),
};

export const WaterLine: Story = {
  args: {
    now: 900000,
    max: 7000000,
    waterLine: 0.6,
  },
};

export const Limit: Story = {
  render: props => (
    <>
      <UsageBar now={0} isByte />
      <UsageBar now={0} isBulk />
      <UsageBar percent={0} isByte />
      <UsageBar percent={0} isBulk />
      <UsageBar percent={0} />
      <UsageBar now={55} max={0} showZeroMax isByte />
      <UsageBar now={1} max={0} showZeroMax isBulk />
    </>
  ),
};

export const Series: Story = {
  render: props => (
    <>
      <h4>SERIES 模式 isByte</h4>
      <UsageBar series={BYTESSERIES} isHideFooter isByte />
      <h4>SERIES 模式，isByte，附带图例</h4>
      <UsageBar series={BYTESSERIES} isHideFooter isByte withLegend />
      <h4>SERIES 模式，isBulk，附带图例</h4>
      <UsageBar series={BULKSERIES} isHideFooter isBulk withLegend />
      <h4>SERIES 模式，isPercent，附带图例</h4>
      <UsageBar series={BYTESSERIES} isHideFooter isPercent withLegend />
    </>
  ),
};

export const ExtraInfo: Story = {
  render: props => (
    <>
      <UsageBar isByte now={NOW} max={MAX} extraFooterInfo="（压缩后 100 GB）" />
      <UsageBar isByte now={NOW} max={MAX} extraFooterInfo="（压缩后 100 GB）" />
      <UsageBar isBulk now={NOW} max={MAX} extraFooterInfo="（压缩后 100 GB）" />
      <UsageBar isBulk percent={NOW / MAX} max={MAX} extraFooterInfo="（压缩后 100 GB）" />
      <>
        <UsageBar now={NOW} max={MAX} isPercent inline extraFooterInfo="（压缩后 100 GB）" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <UsageBar now={NOW} max={MAX} isByte inline extraFooterInfo="（压缩后 100 GB）" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <UsageBar now={NOW} max={MAX} isBulk inline extraFooterInfo="（压缩后 100 GB）" />
      </>
    </>
  ),
};

export const CustomFooter: Story = {
  render: props => {
    const handleCustomFooter = (left?: string | 0, right?: string) => {
      return <div style={{ color: 'red' }}>{`容量即将耗尽，请尽快扩容（已使用 ${left}，${right}）`}</div>;
    };
    return (
      <UsageBar now={6000000} max={MAX} isBulk withPercent handleCustomFooter={handleCustomFooter} />
    );
  },
};
