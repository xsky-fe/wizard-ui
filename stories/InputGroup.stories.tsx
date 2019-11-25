import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormControl, InputGroup, Button } from '../src';

storiesOf('InputGroup', module)
  .add('default', () => (
    <InputGroup>
      <FormControl type="text" disabled />
      <InputGroup.Button>
        <Button>选择文件</Button>
      </InputGroup.Button>
    </InputGroup>
  ))
