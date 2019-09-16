import React from 'react';
import { storiesOf } from '@storybook/react';
import { SubMenu } from '../src';

const menuStyle = {
  width: '100px',
};
const title = '第一层';
const children = <div style={{ padding: '4px' }}>下一层</div>;
storiesOf('SubMenu', module)
  .add('default', () => (
    <div>
      <div style={menuStyle}>
        <SubMenu title={title}>{children}</SubMenu>
      </div>
    </div>
  ));