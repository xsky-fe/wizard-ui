import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from '../src';

const LoaderDefault = () => {
  return <div style={{ background: 'rgba(0, 0, 0, 0.85)', paddingTop: '20px' }}><Loader>正在加载中...</Loader></div>;
};

const LoaderPrimary = () => {
  return <Loader bsStyle="primary">正在加载中...</Loader>;
};

storiesOf('Loader', module)
  .add('default', () => {
    return <LoaderDefault />;
  })
  .add('primary', () => {
    return <LoaderPrimary />;
  });
