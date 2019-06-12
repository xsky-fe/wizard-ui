import React from 'react';
import Badge from './index';
import { shallow } from 'enzyme';

describe('Badge', () => {
  it('badge not showing count === 0', () => {
    const badge = shallow(<Badge count={0} />);
    expect(badge.find('.Badge').exists()).toEqual(false);
  });
  it('badge showing count === 0 with showZero', () => {
    const badge = shallow(<Badge count={0} showZero />);
    expect(badge.find('.Badge').length).toBe(1);
    expect(badge.text()).toEqual('0');
  });
  it('default status danger', () => {
    const badge = shallow(<Badge count="default" />);
    expect(badge.find('.Badge--danger').exists()).toEqual(true);
  });
  it('number over 99 will be set to 99+', () => {
    const badge = shallow(<Badge count={500} />);
    expect(badge.text()).toEqual('99+');
  });
  it('overflowCount can be set', () => {
    const badge = shallow(<Badge count={10000} overflowCount={999} />);
    expect(badge.text()).toEqual('999+');
  });
  it('badge showing tip with children', () => {
    const badge = shallow(<Badge count="2000">UI</Badge>);
    expect(badge.find('.Badge__wrapper').exists()).toEqual(true);
  });
  it('badge showing dot with text', () => {
    const badge = shallow(<Badge dot text="关闭" status="default" />);
    expect(badge.find('.Badge__dot').exists()).toEqual(true); 
  });
})
