import React from 'react';
import { storiesOf } from '@storybook/react';
import { Overlay } from '../src';

storiesOf('Overlay', module)
.add('basic', () => (
  <Overlay 
    content="danger"
    placement="right"
    rootClose={true}
    onHide={()=> console.log("hide")}
    onExit={()=> console.log("exit")}
  >
    <a href="javascript:void(0);">test link</a>
  </Overlay>
))
.add('node content', () => (
  <Overlay 
    content={<p>hello</p>}
    placement="right"
    rootClose={true}
    onHide={()=> console.log("hide")}
    onExit={()=> console.log("exit")}
  >
    <a href="javascript:void(0);">test link</a>
  </Overlay>
))