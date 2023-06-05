import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown } from '../src';

storiesOf('Components | Dropdown', module).add('default', () => (
  <Dropdown title="标题" children={<div style={{ padding: '5px 10px' }}>内容</div>} id="dropdown" />
));
