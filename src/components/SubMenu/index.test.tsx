import React from 'react';
import SubMenu from './index';
import { mount } from 'enzyme';

describe('SubMenu', () => {
  it('render simple SubMenu', () => {
    const subMenu = mount(<SubMenu title="title" children="text" />);
    expect(subMenu.find('ul.dropdown-menu').length).toBe(1);
  });
});