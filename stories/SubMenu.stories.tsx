import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SubMenu } from '../src';

const title = '第一层';
const children = <div style={{ padding: '4px' }}>下一层</div>;

const meta: Meta<typeof SubMenu> = {
  title: 'COMPONENTS/SubMenu',
  component: SubMenu,
  args: { title, children },
  decorators: [
    Story => (
      <div style={{ width: '100px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SubMenu>;

export const Basic: Story = {};
