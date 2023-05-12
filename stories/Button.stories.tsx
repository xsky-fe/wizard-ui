import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';

storiesOf('DATA SHOW | Button', module)
  .add('default', () => {
    return (
      <div style={{ margin: '10px' }}>
        <Button style={{ marginLeft: '5px' }} variant="info">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} variant="primary">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} variant="danger">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} variant="success">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} variant="warning">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} variant="link">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} variant="default">
          button
        </Button>
        <br />
        <br />
        <Button style={{ marginLeft: '5px' }} disabled variant="info">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} disabled variant="primary">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} disabled variant="danger">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} disabled variant="success">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} disabled variant="warning">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} disabled variant="link">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} disabled variant="default">
          button
        </Button>
        <br />
        <br />
        <Button style={{ marginLeft: '5px' }} variant="default" size="lg">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} variant="default">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} variant="default" size="sm">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} variant="default" size="xs">
          button
        </Button>
        <br />
        <br />
        <Button block>button</Button>
      </div>
    );
  })
  .add('toolTipButton', () => {
    const DisabledTooltip = {
      children: <span>don't allowed to click</span>,
      placement: 'top',
    };
    const NormalTooltip = {
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
