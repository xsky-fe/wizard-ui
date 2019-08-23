import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputDropdown } from '../src';
import { FormControl, InputGroup } from 'react-bootstrap';

storiesOf('InputDropdown', module)
  .add('default', () => (
    <div style={{ width: '300px' }}>
      <InputGroup>
        <FormControl />
        <InputDropdown
          pullRight
          defaultValue="GB"
          options={[
            { title: 'MB', value: 'MB' },
            { title: 'GB', value: 'GB' },
            { title: 'TB', value: 'TB' },
          ]} />
      </InputGroup>
    </div>
  ))