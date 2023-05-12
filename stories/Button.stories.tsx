import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';
import { Placement } from 'react-bootstrap/esm/types';

storiesOf('DATA SHOW | Button', module).add('toolTipButton', () => {
  const DisabledTooltip: { children: React.ReactNode; placement: Placement } = {
    children: <span>don't allowed to click</span>,
    placement: 'top',
  };
  const NormalTooltip: { children: React.ReactNode; placement: Placement } = {
    children: <span>allowed to click</span>,
    placement: 'top',
  };
  return (
    <div style={{ margin: '10px' }}>
      <Button
        variant="info"
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
        variant="info"
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
});
