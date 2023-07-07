import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../src';

const tabs = [
  { title: '标题1', key: 'key-1', children: <div>第1个tab</div> },
  { title: '标题2', key: 'key-2', children: <div>第2个tab</div> },
  { title: '标题3', key: 'key-3', children: <div>第3个tab</div> },
  { title: '标题4', key: 'key-4', children: <div>第4个tab</div> },
];
const tabLists = [
  { title: '标题1', key: 'key-1', children: <div>第1个tab</div> },
  { title: '标题2', key: 'key-2', children: <div>第2个tab</div> },
  { title: '标题3', key: 'key-3', children: <div>第3个tab</div> },
  { title: '标题4', key: 'key-4', children: <div>第4个tab</div> },
  { title: '标题5', key: 'key-5', children: <div>第5个tab</div> },
  { title: '标题6', key: 'key-6', children: <div>第6个tab</div> },
  { title: '标题7', key: 'key-7', children: <div>第7个tab</div> },
  { title: '标题8', key: 'key-8', children: <div>第8个tab</div> },
];

const Xtab = (props: any) => {
  const [key, setKey] = useState(tabLists[0].key);
  const handleSelect = (key: any) => setKey(key);
  return (
    <Tabs
      {...props}
      tabs={tabLists}
      activeKey={key}
      onSelect={(key: any) => handleSelect(key)}
      limitNum={5}
    />
  );
};

const meta: Meta<typeof Tabs> = {
  title: 'DATA DISPLAY/Tabs',
  component: Tabs,
  args: {
    tabs: tabs,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
};

export const Secondary: Story = {
  args: { type: 'secondary' },
};

export const Small: Story = {
  args: { size: 'small' },
};

export const Right: Story = {
  args: { direction: 'right' },
};

export const ItemOverLimitNum: Story = {
  render: () => <Xtab />,
};
