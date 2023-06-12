import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from '../src';

const meta: Meta<typeof Badge> = {
  title: '组件/Badge 徽章',
  component: Badge,
  args: { count: '关闭', status: 'default' },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  render: () => (
    <>
      <Badge count="关闭" status="default" />
      <Badge count="健康" status="success" />
      <Badge count="通知" status="info" />
      <Badge count="紧急" status="critical" />
      <Badge count="警告" status="warning" />
      <Badge count="错误" status="danger" />
      <Badge count="默认" />
      <Badge count="20" status="success" />
    </>
  ),
};

export const Dot: Story = {
  render: () => (
    <>
      <Badge dot text="关闭" status="default" />
      <span style={{ paddingLeft: '40px' }} />
      <Badge dot text="健康" status="success" />
      <span style={{ paddingLeft: '40px' }} />
      <Badge dot text="通知" status="info" />
      <span style={{ paddingLeft: '40px' }} />
      <Badge dot text="紧急" status="critical" />
      <span style={{ paddingLeft: '40px' }} />
      <Badge dot text="警告" status="warning" />
      <span style={{ paddingLeft: '40px' }} />
      <Badge dot text="错误" status="danger" />
    </>
  ),
};

export const NoCount: Story = {
  render: () => (
    <>
      <Badge count={0} showZero />
      <Badge count={0} />
    </>
  ),
};

export const Size: Story = {
  render: () => (
    <>
      <Badge dot size="small" text="健康" status="success" />
      <span style={{ paddingLeft: '40px' }} />
      <Badge dot size="middle" text="健康" status="success" />
      <span style={{ paddingLeft: '40px' }} />
      <Badge dot size="large" text="健康" status="success" />
    </>
  ),
};

export const MaxCount: Story = {
  render: () => (
    <>
      <Badge count={10000} />
      <Badge count={10000} overflowCount={999} />
      <Badge count={10000} overflowCount={9999} />
    </>
  ),
};

export const MessageShow: Story = {
  render: () => (
    <>
      <Badge count={2000}>UI</Badge>
      <span style={{ paddingLeft: '40px' }} />
      <Badge dot>UI</Badge>
    </>
  ),
};
