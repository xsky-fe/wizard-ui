import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';
import { Placement } from 'react-bootstrap/esm/types';
import { ButtonToolbar } from 'react-bootstrap';
import { DropdownButton, Icon } from '../src';

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
  .add('toolTip button', () => {
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
  .add('group button', () => {
    return (
      <div style={{ margin: '10px' }}>
        <ButtonToolbar>
          <Button data-action="CreateOsd" variant="primary">
            创建
          </Button>
          <DropdownButton
            title="操作"
            id="dropdown-operations"
            variant="info"
            modifer="table-toolbar"
            menu={['操作-1', '操作-2', '操作-3']}
          />

          <Button data-action="RefreshOsd" variant="info">
            <Icon type="plus-line" />
          </Button>
        </ButtonToolbar>
      </div>
    );
  });
