import React from 'react';
import Button from './index';
import { mount } from 'enzyme';

describe('Button-Tooltip', () => {
  it('Button is not disabled and show tooltip', () => {
    const button = mount(
      <Button
        tooltip={{ placement: 'top', children: 'tooltip showed and able to click' }}
        onClick={() => (document.title = 'clicked')}
      >
        click
      </Button>,
    );
    const tooltip = document.getElementsByTagName('#Tooltip');
    button.simulate('mouseenter');
    expect(tooltip.length === 1);
    button.simulate('mouseleave');
    expect(tooltip.length === 0);
    button.simulate('click');
    expect(document.title === 'clicked');
  });
  it('Button is disabled and show tooltip', () => {
    const button = mount(
      <Button
        disabled
        tooltip={{ placement: 'top', children: 'tooltip showed and not allowed to click' }}
        onClick={() => (document.title = 'clicked')}
      >
        click
      </Button>,
    );
    const tooltip = document.getElementsByTagName('#Tooltip');
    button.simulate('mouseenter');
    expect(tooltip.length === 1);
    button.simulate('mouseleave');
    expect(tooltip.length === 0);
    button.simulate('click');
    expect(document.title !== 'clicked');
  });
});
