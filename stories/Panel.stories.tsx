import React from 'react';
import { storiesOf } from '@storybook/react';
import { Panel } from '../src';
import {CardGroup} from 'react-bootstrap'

storiesOf('Panel', module)
  .add('basic', () => (
    <Panel header="Head">
      Content
    </Panel>
  )).add('collapse', () => (
    <Panel header="Head" collapsible>
      Content
    </Panel>
  )).add('group', () => (
    <CardGroup>
      <Panel header="1" collapsible>content1</Panel>
      <Panel header="2" collapsible>content2</Panel>
      <Panel header="3" collapsible>content3</Panel>
      <Panel header="4" collapsible>content4</Panel>
    </CardGroup>
  ));