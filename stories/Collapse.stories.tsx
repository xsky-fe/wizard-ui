import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Collapse, Card } from 'react-bootstrap';
import { Button } from '../src';

const meta: Meta<typeof Collapse> = {
  title: 'TRANSITIONS/Collapse',
  component: Collapse,
};

export default meta;

type Story = StoryObj<typeof Collapse>;

export const Basic: Story = {
  render: props => {
    const [open, setOpen] = React.useState(false);
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
  },
};
