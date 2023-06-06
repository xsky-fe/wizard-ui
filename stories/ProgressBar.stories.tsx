import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressBar } from '../src';

storiesOf('DATA SHOW | ProgressBar', module)
  .add('color', () => (
    <div style={{ width: '460px' }}>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
  ))
  .add('label', () => (
    <div style={{ width: '460px' }}>
      <ProgressBar max={100} now={40} label={40} />
    </div>
  ));
