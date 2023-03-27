import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert } from '../src';

storiesOf('Alert', module)
.add('error', () => (
  <Alert bsStyle="error" dismissDirection="up">
    default text <a href="#">test link</a>
  </Alert>
))
.add('info', () => (
  <Alert bsStyle="info" showIcon dismissDirection="right">
      default text <a href="#">test link</a>
  </Alert>
))
.add('warning', () => (
  <Alert bsStyle="warning" dismissDirection="down">
      default text <a href="#">test link</a>
  </Alert>
))