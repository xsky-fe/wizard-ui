import React from 'react';
import Popover from './index';
import { mount } from 'enzyme';

describe('Popover', () => {
  it('show Popover', () => {
    const popover = mount(<Popover content={<span>text</span>}>hello</Popover>);
    expect(popover.find('.Popover__wrapper').length).toBe(1);
    const div = popover.find('.Popover__wrapper').at(0);
    div.simulate('mouseenter');
    expect(popover.find('.in').length).toBeGreaterThan(1);
    div.simulate('mouseleave');
    expect(popover.find('.in').length).toBe(0);
    div.simulate('click');
    expect(popover.find('.popover-content').length).toBe(1);
  });
});
