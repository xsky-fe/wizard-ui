import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Panel } from '../src';
import {  CardGroup  } from 'react-bootstrap';;

const meta: Meta<typeof Panel> = {
  title: '组件/Panel 面板',
  component: Panel,
  args: { children: 'i am panel', header: 'header' },
  argTypes: {
    children: {
      type: { required: true } as any,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const Basic: Story = {};

export const Size: Story = {
  render: () => (
    <>
      <p>
        内边距 16px 24px, 标题字号 16px
        <Panel header="Head">Content</Panel>
      </p>
      <p>
        内边距 8px 16px, 标题字号 14px 加粗
        <Panel header="Head" innerPaddingSize="sm">
          Content
        </Panel>
      </p>
      <p>
        内边距 8px 8px, 标题字号 16px
        <Panel header="Head" innerPaddingSize="xs">
          Content
        </Panel>
      </p>
    </>
  ),
};

export const Collapse: Story = {
  args: {
    collapsible: true,
    expanded: true
  },
};

export const Group: Story = {
  render: () => (
    <CardGroup>
      <Panel header="1" collapsible>

        content1

      </Panel>
      <Panel header="2" collapsible>

        content2

      </Panel>
      <Panel header="3" collapsible>

        content3

      </Panel>
      <Panel header="4" collapsible>

        content4

      </Panel>
    </CardGroup>
  ),
};
