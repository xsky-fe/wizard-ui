import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'FORM/ToggleButtonGroup',
  component: ToggleButtonGroup,
};

export default meta;

type Story = StoryObj<typeof ToggleButtonGroup>;

export const Checkout: Story = {
  render: props => {
    const [value, setValue] = React.useState([1]);
    return (
      <ToggleButtonGroup type="checkbox" value={value} onChange={val => setValue(val)}>
        <ToggleButton
          id="tbg-checkbox-1"
          value={1}
          variant={value.includes(1) ? 'primary' : 'info'}
        >
          checkbox 1
        </ToggleButton>
        <ToggleButton
          id="tbg-checkbox-2"
          value={2}
          variant={value.includes(2) ? 'primary' : 'info'}
        >
          checkbox 2
        </ToggleButton>
        <ToggleButton
          id="tbg-checkbox-3"
          value={3}
          variant={value.includes(3) ? 'primary' : 'info'}
        >
          checkbox 3
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};

export const Radio: Story = {
  render: props => {
    const [value, setValue] = React.useState(1);
    return (
      <ToggleButtonGroup type="radio" name="option" value={value} onChange={val => setValue(val)}>
        <ToggleButton id="tbg-radio-1" value={1} variant={value === 1 ? 'primary' : 'info'}>
          radio 1
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} variant={value === 2 ? 'primary' : 'info'}>
          radio 2
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3} variant={value === 3 ? 'primary' : 'info'}>
          radio 3
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};
