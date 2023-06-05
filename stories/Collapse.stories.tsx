import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Collapse, Card } from 'react-bootstrap';
import { Button } from '../src';

storiesOf('Transitions | Collapse', module).add('default', () =>
  React.createElement(() => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(!open)}>click</Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
              ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
              sapiente ea proident.
            </Card>
          </div>
        </Collapse>
      </>
    );
  }),
);
