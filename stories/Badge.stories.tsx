import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge } from '../src';

storiesOf('DATA SHOW | Badge', module)
  .add('default', () => (
    <>
      <Badge count="关闭" status="default" />
      <Badge count="健康" status="success" />
      <Badge count="通知" status="info" />
      <Badge count="紧急" status="critical" />
      <Badge count="警告" status="warning" />
      <Badge count="错误" status="danger" />
      <Badge count="默认" />
    </>
  ))
  .add('dot', () => (
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
  ))
  .add('size', () => (
    <>
      <Badge dot text="关闭" status="default" />
      <Badge dot text="关闭" status="default" size="middle" />
      <Badge dot text="关闭" status="default" size="large" />
    </>
  ));
