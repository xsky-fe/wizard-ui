import React from 'react';
import { storiesOf } from '@storybook/react';
import { Panel } from '../src';
import { CardGroup } from 'react-bootstrap';

storiesOf('DATA DISPLAY | Panel', module)
  .add('basic', () => (
    <>
      <h5>底层卡片</h5>
      <Panel header="Head">Content</Panel>
      <br />
      <h5>嵌套卡片</h5>
      <Panel header="Head" embedded>
        Content
      </Panel>
    </>
  ))
  .add('size', () => (
    <>
      <p>
        内边距 16px 24px, 标题字号 16px
        <Panel header="Head">Content</Panel>
      </p>
      <p>
        内边距 8px 16px, 标题字号 14px 加粗
        <Panel header="Head" innerPaddingSize="sm">
          Content
        </Panel>
      </p>
      <p>
        内边距 8px 8px, 标题字号 16px
        <Panel header="Head" innerPaddingSize="xs">
          Content
        </Panel>
      </p>
    </>
  ))
  .add('collapse', () => (
    <Panel header="Head" collapsible>
      Content
    </Panel>
  ))
  .add('group', () => (
    <CardGroup>
      <Panel header="1" collapsible>
        content1
      </Panel>
      <Panel header="2" collapsible>
        content2
      </Panel>
      <Panel header="3" collapsible>
        content3
      </Panel>
      <Panel header="4" collapsible>
        content4
      </Panel>
    </CardGroup>
  ));
