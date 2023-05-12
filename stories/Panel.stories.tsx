import React from 'react';
import { storiesOf } from '@storybook/react';
import { Panel } from '../src';
import {CardGroup} from 'react-bootstrap'

storiesOf('Panel', module)
  .add('basic', () => (
    <Panel header="Head">
      Content
    </Panel>
  )).add('group', () => (
    <CardGroup>
      <Panel header="1" >content1</Panel>
      <Panel header="2" >content2</Panel>
      <Panel header="3" >content3</Panel>
      <Panel header="4" >content4</Panel>
    </CardGroup>
  ));