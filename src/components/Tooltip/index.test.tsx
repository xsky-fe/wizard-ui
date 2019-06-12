import React from 'react';
import Tooltip from './index';
import { mount, shallow } from 'enzyme';

describe('Tooltip', () => {
  it('show tips', () => {
    const tooltip = mount(
      <Tooltip label={<span>text</span>}>
        hello
      </Tooltip>
    );
    expect(tooltip.find('.Tooltip').length).toBe(1);
    const div = tooltip.find('.Tooltip').at(0);
    div.simulate('mouseenter');
    expect(tooltip.find('.in').length).toBeGreaterThan(1);
    div.simulate('mouseleave');
    expect(tooltip.find('.in').length).toBe(0);
  });
  it('without label showing icon', () => {
    const tooltip = shallow(<Tooltip>提示！</Tooltip>);
    expect(tooltip.find('.Tooltip__icon').length).toBe(1);
  });
});