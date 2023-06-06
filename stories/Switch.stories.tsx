import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Switch } from '../src';

storiesOf('Form |Switch', module).add('default', () => {
  const Demo = () => {
    const [value, updateValue] = useState(false);
    return <Switch checked={!!value} onChange={() => updateValue(!value)} />;
  };
  return <Demo />;
});
