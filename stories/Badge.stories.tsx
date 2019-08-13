import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge } from '../src';

storiesOf('DATA SHOW | Badge', module)
  .add('default', () => (
    <Badge count="关闭" status="default" />
  ))