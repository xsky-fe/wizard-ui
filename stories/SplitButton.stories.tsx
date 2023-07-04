import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown, SplitButton } from 'react-bootstrap';

const meta: Meta<typeof SplitButton> = {
  title: 'COMPONENTS/SplitButton',
  component: SplitButton,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'space-between',marginBottom:'70px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SplitButton>;

export const Basic: Story = {
  render: props => (
    <>
      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(variant => (
        <SplitButton
          key={variant}
          id={`dropdown-split-variants-${variant}`}
          variant={variant.toLowerCase()}
          title={variant}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </SplitButton>
      ))}
    </>
  ),
};
