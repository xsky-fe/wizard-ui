import React from 'react';
import InputDropdown from './index';
import { mount } from 'enzyme';
import { InputGroup, FormControl } from 'react-bootstrap';

describe('InputDropdown', () => {
  it('should render corrent dropdown', () => {
    const dropdown = mount(<div style={{ width: '300px' }}>
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
    </div>)
    expect(dropdown.find('.dropdown.input-group-btn').length).toBe(1);
  });
});