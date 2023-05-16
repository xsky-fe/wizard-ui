import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

storiesOf('ToggleButtonGroup', module)
  .add('checkout', () => {
    const [value, setValue] = useState([1]);
    return (
      <ToggleButtonGroup type="checkbox" value={value} onChange={val => setValue(val)}>
        <ToggleButton
          id="tbg-checkbox-1"
          value={1}
          variant={value.includes(1) ? 'primary' : 'default'}
        >
          checkbox 1
        </ToggleButton>
        <ToggleButton
          id="tbg-checkbox-2"
          value={2}
          variant={value.includes(2) ? 'primary' : 'default'}
        >
          checkbox 2
        </ToggleButton>
        <ToggleButton
          id="tbg-checkbox-3"
          value={3}
          variant={value.includes(3) ? 'primary' : 'default'}
        >
          checkbox 3
        </ToggleButton>
      </ToggleButtonGroup>
    );
  })
  .add('radio', () => {
    const [value, setValue] = useState(1);
    return (
      <ToggleButtonGroup type="radio" name="option" value={value} onChange={val => setValue(val)}>
        <ToggleButton id="tbg-radio-1" value={1} variant={value === 1 ? 'primary' : 'default'}>
          radio 1
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} variant={value === 2 ? 'primary' : 'default'}>
          radio 2
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3} variant={value === 3 ? 'primary' : 'default'}>
          radio 3
        </ToggleButton>
      </ToggleButtonGroup>
    );
  });
