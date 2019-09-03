import React from 'react';
import { storiesOf } from '@storybook/react';
import { Overlay } from '../src';

storiesOf('Overlay', module)
.add('basic', () => (
  <Overlay 
    label="danger"
    placement="right"
    onExit={()=> console.log("exit")}
  >
    <a>test link</a>
  </Overlay>
))
.add('top', () => (
  <Overlay 
    label="hello"
    placement="top"
    onExit={()=> console.log("exit")}
  >
    <a>test link</a>
  </Overlay>
))
.add('left', () => (
  <Overlay 
    label="hello"
    placement="left"
    onExit={()=> console.log("exit")}
  >
    test link
  </Overlay>
))
.add('node label', () => (
  <Overlay 
    label={<p>hello</p>}
    onExit={()=> console.log("exit")}
  >
    <a>test link</a>
  </Overlay>
))
.add('rootClose', () => (
  <Overlay 
    label="hello"
    rootClose={true}
    onHide={()=> console.log("hide")}
    onExit={()=> console.log("exit")}
  >
    <a>test link</a>
  </Overlay>
))