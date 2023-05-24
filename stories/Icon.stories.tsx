import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../src';

storiesOf('Icon', module)
  .add('default', () => <Icon type="os-search-role-fill" color="primary" />)
  .add('color', () => <Icon type="os-search-role-fill" color="primary" />)
  .add('inherit-color-size', () => (
    <div style={{ fontSize: '40px', color: '#6b58c4' }}>
      <Icon type="os-search-role-fill" />
    </div>
  ))
  .add('cursor', () => <Icon type="os-search-role-fill" cursor color="primary" />);
