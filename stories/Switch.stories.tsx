import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../src';

const meta: Meta<typeof Switch> = {
  title: 'FORM/Switch',
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: props => {
    const [value, updateValue] = React.useState(false);
    return <Switch checked={!!value} onChange={() => updateValue(!value)} {...props} />;
  },
};
