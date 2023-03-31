import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert } from '../src';

storiesOf('Alert', module)
  .add('error', () => (
    <div>
      <h3>对齐方式</h3>
      <p>居左对齐</p>
      <Alert bsStyle="error"  showIcon>
      这里是 error 级别
      </Alert>
      <p>居中对齐</p>
      <Alert bsStyle="error"  textAlign='center' showIcon>
      这里是 error 级别
      </Alert>
      <p>内置提示</p>
      <Alert bsStyle="error"  textAlign='inline' showIcon>
      这里是 error 级别
      </Alert>
      <h3>关闭功能</h3>
      <Alert bsStyle="error" showIcon dismissDirection="right" onDismiss={() =>{}}>
      这里是 error 级别 <a href="#">点击操作</a>
      </Alert>
    </div>
  ))
  .add('info', () => (
    <Alert bsStyle="info" showIcon>
      这里是 info 级别 <a href="#">点击操作</a>
    </Alert>
  ))
  .add('warning', () => (
    <Alert bsStyle="warning">
      这里是 warning 级别 <a href="#">点击操作</a>
    </Alert>
  ));
