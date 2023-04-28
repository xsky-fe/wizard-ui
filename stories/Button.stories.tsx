import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';


storiesOf('DATA SHOW | Button', module)
  .add('toolTipButton', () => {
    const DisabledTooltip = {
      children: <span>don't allowed to click</span>,
      placement: "top",
    }
    const NormalTooltip = {
      children: <span>allowed to click</span>,
      placement: "top",
    }
    return (
      <div style={{ margin: '10px' }}>
        <Button
          bsStyle="info"
          toolTip={DisabledTooltip}
          disabled={true}
          onClick={() => {
            alert('clicked');
          }}
          style={{ marginRight: '10px' }}
        >
          button
        </Button>
        <Button
          bsStyle="info"
          toolTip={NormalTooltip}
          disabled={false}
          onClick={() => {
            alert('clicked');
          }}
        >
          button
        </Button>
      </div>
    );
  })
