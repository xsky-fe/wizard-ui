import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Collapse } from 'react-bootstrap';
import { Button } from '../src';

storiesOf('Transitions | Collapse', module).add('default', () =>
  React.createElement(() => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(!open)}>click</Button>
        <Collapse in={open}>
          <div style={{ marginTop: 10, width: 300, height: 1000, backgroundColor: 'grey' }}>Collapse</div>
        </Collapse>
      </>
    );
  }),
);
