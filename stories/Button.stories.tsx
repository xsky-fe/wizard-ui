import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';

storiesOf('DATA SHOW | Button', module)
  .add('default', () => {
    return (
      <div style={{ margin: '10px' }}>
        <Button style={{ marginLeft: '5px' }} bsStyle="info">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} bsStyle="primary">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} bsStyle="danger">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} bsStyle="success">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} bsStyle="warning">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} bsStyle="link">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} bsStyle="default">
          button
        </Button>
        <br />
        <br />
        <Button style={{ marginLeft: '5px' }} bsStyle="default" bsSize="lg">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} bsStyle="default">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} bsStyle="default" bsSize="sm">
          button
        </Button>
        <Button style={{ marginLeft: '5px' }} bsStyle="default" bsSize="xs">
          button
        </Button>
        <br />
        <br />
        <Button block>
          button
        </Button>
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
