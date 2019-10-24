import React from 'react';
import InputDropdown from './index';
import { mount } from 'enzyme';
import { InputGroup, FormControl } from 'react-bootstrap';

describe('InputDropdown', () => {
  it('should render corrent dropdown', () => {
    const Demo = () => {
      const [value, updateValue] = React.useState('MB');
      return (
        <div style={{ width: '300px' }}>
          <InputGroup>
            <FormControl />
            <InputDropdown
              pullRight
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
    const dropdown = mount(<Demo />);
    const button = dropdown.find('button');
    expect(dropdown.find('.dropdown.input-group-btn').length).toBe(1);
    button.simulate('click');
    const tb = dropdown.find('a').at(2);
    tb.simulate('click');
    expect(dropdown.find('button[value="TB"]').length).toBe(1);
  });

  it('should render corrent with input', () => {
    const Demo = () => {
      const [value, updateValue] = React.useState('MB');
      return (
        <div style={{ width: '300px' }}>
          <InputGroup>
            <FormControl />
            <InputDropdown
              pullRight
              input={{ value, onChange: updateValue }}
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
    const dropdown = mount(<Demo />);
    const button = dropdown.find('button');
    button.simulate('click');
    const tb = dropdown.find('a').at(2);
    tb.simulate('click');
    // @ts-ignore
    expect(dropdown.find('button').instance().textContent).toBe('TB');
  });
});
