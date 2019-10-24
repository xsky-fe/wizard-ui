import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../src';

storiesOf('Card', module)
  .add('basic', () => (
    <Card header="Head">
      Content
    </Card>
  ))