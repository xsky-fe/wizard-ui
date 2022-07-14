import React from 'react';
import { Button as BaseButton, ButtonProps } from 'react-bootstrap';
import { storiesOf } from '@storybook/react';
import { Popover } from '../src';

const Button = (props: ButtonProps) => (
  // @ts-ignore
  <BaseButton {...props} style={{ marginRight: '30px' }}></BaseButton>
)

storiesOf('Popover', module)
  .add('placement', () => (
    <div style={{ paddingTop: '160px' }}>
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
    </div>
  ))
  .add('trigger', () => (
    <div style={{ paddingTop: '160px' }}>
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
    </div>
  ))
  .add('arrow-shadow', () => (
    <div style={{ paddingTop: '160px' }}>
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
    </div>
  ))
