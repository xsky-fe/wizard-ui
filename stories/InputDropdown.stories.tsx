import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputDropdown } from '../src';
import { FormControl, InputGroup } from 'react-bootstrap';

storiesOf('Form | InputDropdown', module).add('default', () => {
  const Demo = () => {
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
  };
  return <Demo />;
});
