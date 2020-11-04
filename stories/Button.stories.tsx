import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';


storiesOf('DATA SHOW | Button', module)
  .add('default', () => {
    const toolTip = {
      children: <span>{123456}</span>,
      placement: "top",
    }
    return (
      <Button bsStyle="info" toolTip={toolTip} disabled={true} onClick={() => {alert(1111)}}>ddd</Button>
    )
  })
  .add('default2', () => {
    const toolTip = {
      children: <span>{123456}</span>,
      placement: "top",
    }
    return (
      <Button bsStyle="info" toolTip={toolTip} disabled={false} onClick={() => {alert(1111)}}>ddd</Button>
    )
  })
