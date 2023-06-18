import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { InputDropdown } from '../src';
import { FormControl, InputGroup } from 'react-bootstrap';

const meta: Meta = {
  title: 'FORM/InputDropdown',
  component: InputDropdown,
  decorators: [
    Story => (
      <div style={{ marginBottom: '60px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof InputDropdown>;

export const Basic: Story = {
  render: props => {
    const [value, updateValue] = React.useState('MB');
    return (
      <div style={{ width: '300px' }}>
        <InputGroup>
          <FormControl />
          <InputDropdown
            align="end"
            defaultValue="GB"
            onChange={(key: any) => updateValue(key)}
            value={value}
            options={[
              { title: 'MB', value: 'MB' },
              { title: 'GB', value: 'GB' },
              { title: 'TB', value: 'TB' },
            ]}
          />
        </InputGroup>
      </div>
    );
  },
};
