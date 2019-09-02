import React from 'react';
import { storiesOf } from '@storybook/react';
import { Overlay } from '../src';

storiesOf('Overlay', module)
.add('basic', () => (
  <Overlay 
  content=
    "danger"
  >
    <a href="javascript:void(0);">test link</a>
  </Overlay>
))