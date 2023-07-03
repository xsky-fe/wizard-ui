import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SwitchProps } from '../src/interface';
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

export const Legend:Story ={
  render: () => {
    function generateSwitches() {
      const switches: any = [];
      for (let colorIndex = 1; colorIndex <= 11; colorIndex++) {
        switches.push(
          <Switch checked loading={colorIndex === 1} colorIndex={colorIndex} size="sm" />,
        );
      }
      return switches;
    }

    return (
      <>
        Normal:
        {generateSwitches()}
        disabled:
        <Switch checked={false} disabled colorIndex={1} size="sm" />,
      </>
    );
  }
}
