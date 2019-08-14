import React from 'react';
import Dropdown from './index';
import { mount } from 'enzyme';

describe('Dropdown', () => {
  it('render simple dropdown', () => {
    const dropdown = mount(<Dropdown title="title" children="text" />);
    const title = dropdown.find('button');
    expect(dropdown.find('div.dropdown').length).toBe(1);
    title.simulate('click');
    expect(dropdown.find('div.dropdown.open').length).toBe(1);
  });
});