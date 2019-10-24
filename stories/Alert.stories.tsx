import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert } from '../src';

storiesOf('Alert', module)
.add('danger', () => (
  <Alert variant="danger" dismissDirection="up">
    default text <a href="#">test link</a>
  </Alert>
))
.add('info', () => (
  <Alert variant="info" showIcon dismissDirection="right">
      default text <a href="#">test link</a>
  </Alert>
))
.add('warning', () => (
  <Alert variant="warning" dismissDirection="down">
      default text <a href="#">test link</a>
  </Alert>
))
.add('success', () => (
  <Alert variant="success" showIcon dismissDirection="left" onClose={()=>alert("You can pass a `show` props to the component, and set it to `false` when click the close icon")}>
      default text <a href="#">test link</a>
  </Alert>
))