import React from 'react';
import { storiesOf } from '@storybook/react';
import { Panel } from '../src';

storiesOf('Panel', module)
  .add('basic', () => (
    <Panel header="Head">
      Content
    </Panel>
  )).add('collapse', () => (
    <Panel header="Head" collapsible>
      Content
    </Panel>
  ))