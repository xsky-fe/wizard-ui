import React from 'react';
import UsageBar from './index';
import { mount, shallow } from 'enzyme';

describe('UsageBar', () => {
  it('should showing with percent', () => {
    const usagebar = shallow(<UsageBar percent={0.16} />);
    const left = usagebar.find('.UsageBar__footer--left');
    expect(left.text()).toBe('16.00%');
  });
  it('percent less than 0.0001 should be 0.01%', () => {
    const usagebar = shallow(<UsageBar percent={0.00008} />);
    const left = usagebar.find('.UsageBar__footer--left');
    expect(left.text()).toBe('0.01%');
  });
  it('percent should be 2 decimal point', () => {
    const usagebar = shallow(<UsageBar percent={0.1234567} />);
    const left = usagebar.find('.UsageBar__footer--left');
    expect(left.text()).toBe('12.35%');
  });
  it('should showing with byte', () => {
    const usagebar = shallow(<UsageBar now={900000} max={7000000} isByte />);
    const left = usagebar.find('.UsageBar__footer--left');
    const right = usagebar.find('.UsageBar__footer--right');
    expect(left.text()).toBe('878.91KB');
    expect(right.text()).toBe('6.68MB');
  });
  it('should showing with percent and byte', () => {
    const usagebar = shallow(<UsageBar now={900000} max={7000000} isByte withPercent />);
    const left = usagebar.find('.UsageBar__footer--left');
    const right = usagebar.find('.UsageBar__footer--right');
    expect(left.text()).toBe('12.86%');
    expect(right.text()).toBe('878.91KB/6.68MB');
  });
  it('should showing with byte hide now', () => {
    const usagebar = shallow(<UsageBar now={900000} max={7000000} isByte withPercent hideNow />);
    const left = usagebar.find('.UsageBar__footer--left');
    const right = usagebar.find('.UsageBar__footer--right');
    expect(left.text()).toBe('12.86%');
    expect(right.text()).toBe('6.68MB');
  });
  it('should showing with number and hide right', () => {
    const usagebar = shallow(<UsageBar now={60} max={100} hideRight />);
    const left = usagebar.find('.UsageBar__footer--left');
    const right = usagebar.find('.UsageBar__footer--right');
    expect(left.text()).toBe('60');
    expect(right.text()).toBe('');
  });
  it('should showing warning between 0.75 and 0.85', () => {
    const usagebar = mount(<UsageBar now={76} max={100} />);
    expect(usagebar.find('.progress-bar-warning').length).toBe(1);
  });
  it('should showing danger between 0.85 and 1', () => {
    const usagebar = mount(<UsageBar now={90} max={100} />);
    expect(usagebar.find('.progress-bar-danger').length).toBe(1);
  });
  it('should showing no limit', () => {
    const usagebar = shallow(<UsageBar now={0} isBulk />);
    const right = usagebar.find('.UsageBar__footer--right');
    expect(right.text()).toBe('no limit');
  });
});
