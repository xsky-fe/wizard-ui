import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { VirtualList } from '../src';
import AsyncVirtualList, { rowRenderer } from './demos/AsyncVirtualList';

const meta: Meta = {
  title: 'DATA SHOW/VirtualList',
  component: VirtualList,
  argTypes: {
    rowRenderer: {
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const EmptyData: Story = {
  args: {
    rowHeight: 10,
    rowRenderer,
    data: [],
    isFetching: false,
    isReloading: false,
    totalCount: 0,
  },
};

export const AsyncEqualHeight: Story = {
  render: props => <AsyncVirtualList />,
};

export const AsyncDynamicHeight: Story = {
  render: props => <AsyncVirtualList random />,
};
