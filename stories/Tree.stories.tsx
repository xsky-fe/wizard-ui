// import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tree } from '../src';

const meta: Meta<typeof Tree> = {
  title: 'DATA SHOW/Tree',
  component: Tree,
};

export default meta;

const treeData = [
  {
    key: '0-0',
    title: 'parent 1',
    children: [
      {
        key: '0-0-0',
        title: 'parent 1-1',
        children: [{ key: '0-0-0-0', title: 'parent 1-1-0' }],
      },
      {
        key: '0-0-1',
        title: 'parent 1-2',
        children: [
          { key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true },
          { key: '0-0-1-1', title: 'parent 1-2-1' },
        ],
      },
    ],
  },
];

type Story = StoryObj<typeof Tree>;

export const Basic: Story = {
  args: {
    data: treeData,
  },
};
