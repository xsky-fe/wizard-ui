import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Collapse, DatePicker, } from '../src';

storiesOf('Collapse', module)
  .add('default', () => (
    <Collapse
      title={"title"}
      open={true}
      collapseStyle={{
        background: '#f7f7f7',
        borderRadius: 4,
        marginBottom: 24,
        border: 0,
        overflow: 'hidden',
      }}
      contentStyle={{
        background: '#f7f7f7',
        border: 0,
      }}
    >
      hello
    </Collapse>
  ))
  .add('no-icon', () => (
    <Collapse
      title={"title"}
      showIcon={false}
      onOpen={() => alert("opened")}
      onClose={() => alert("closed")}
    >
      hello
    </Collapse>
  ))
  .add('with-components', () => (
    <Collapse
      title={"title"}
      showIcon={"triangle-down"}
    >
      <DatePicker placeholder="请选择时间"/>
    </Collapse>
  ))