import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Popover, Button } from '../src';

const meta: Meta<typeof Popover> = {
  title: 'DATA DISPLAY/Popover',
  component: Popover,
  argTypes: {
    trigger: {
      control: 'check',
      options: ['hover','click','focus']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  args: {
    children: <span>鼠标移入会展示提示或者节点元素。</span>,
    content: (
      <>
        <h4>你好👋！</h4>
        <div>这是一段内容！这是一段内容！这是一段内容！</div>
        <div>
          <a>这是一个链接！</a>
        </div>
      </>
    ),
  },
};

export const Placement: Story = {
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Story />
      </div>
    ),
  ],
  render: props => (
    <>
      <Popover
        placement="right"
        content={
          <>
            <h4>你好👋！</h4>
            <div>这是一段内容！这是一段内容！这是一段内容！</div>
          </>
        }
      >
        <Button>右 right</Button>
      </Popover>
      <Popover
        placement="top"
        content={
          <>
            <h4>你好👋！</h4>
            <div>这是一段内容！这是一段内容！这是一段内容！</div>
          </>
        }
      >
        <Button>上 top</Button>
      </Popover>
      <Popover
        placement="bottom"
        content={
          <>
            <h4>你好👋！</h4>
            <div>这是一段内容！这是一段内容！这是一段内容！</div>
          </>
        }
      >
        <Button>下 bottom</Button>
      </Popover>
      <Popover
        placement="left"
        content={
          <>
            <h4>你好👋！</h4>
            <div>这是一段内容！这是一段内容！这是一段内容！</div>
          </>
        }
      >
        <Button>左 left</Button>
      </Popover>
    </>
  ),
};

export const Trigger: Story = {
  render: props => (
    <>
      <Popover
        placement="top"
        content={
          <>
            <h4>你好👋！</h4>
            <div>鼠标移开按钮关闭我！</div>
          </>
        }
      >
        <Button>鼠标移入（默认情况） hover</Button>
      </Popover>
      <Popover
        placement="top"
        content={
          <>
            <h4>你好👋！</h4>
            <div>再次点击按钮关闭我！</div>
          </>
        }
        trigger="click"
      >
        <Button>点击 click</Button>
      </Popover>
      <Popover
        placement="top"
        content={
          <>
            <h4>你好👋！</h4>
            <div>再次点击按钮或点空白处关闭我！</div>
          </>
        }
        trigger="click"
        rootClose
      >
        <Button>点击 click</Button>
      </Popover>
    </>
  ),
};

export const ArrowShow: Story = {
  render: props => (
    <>
      <Popover
        placement="top"
        content={
          <>
            <h4>你好👋！</h4>
            <div>这是默认颜色</div>
          </>
        }
      >
        <Button>默认白色</Button>
      </Popover>
      <Popover
        shadow
        placement="top"
        content={
          <>
            <h4>你好👋！</h4>
            <div>这是紫颜色</div>
          </>
        }
      >
        <Button>这是紫颜色</Button>
      </Popover>
    </>
  ),
};
