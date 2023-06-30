import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { SwitchProps } from '../src/interface';
import { Switch } from '../src';

const Demo = (props: SwitchProps) => {
  const [value, updateValue] = useState(false);
  return (
    <>
      <div>
        <span style={{ marginRight: 10, marginTop: -2 }}>Normal</span>
        <Switch checked={!!value} onChange={() => updateValue(!value)} {...props} />
      </div>
      <div>
        <span style={{ marginRight: 10, marginTop: -2 }}>Disabled</span>
        <Switch disabled checked={!!value} onChange={() => updateValue(!value)} {...props} />
      </div>
      <div>
        <span style={{ marginRight: 10, marginTop: -2 }}>Loading</span>
        <Switch loading checked={!!value} onChange={() => updateValue(!value)} {...props} />
      </div>
    </>
  );
};
storiesOf('Form |Switch', module)
  .add('default', () => {
    return (
      <>
        <Demo />
      </>
    );
  })
  .add('legend', () => {
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
  });
