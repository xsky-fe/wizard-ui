import React from 'react';
import { mount } from 'enzyme';
import RangePicker from './index';
import renderer from 'react-test-renderer';

describe('RangePicker', () => {
  it ('render with agreed class', () => {
    const picker = mount(<RangePicker />);
    const node = picker.find('.RangePicker');
    // class RangePicker 的节点有 1个
    expect(node.length).toBe(1);
    node.simulate('click');
    // 点击后立即更新
    picker.update();
    // 展开日期选择框 dom 节点 div.rc-calendar-picker 有一个
    expect(picker.find('div.rc-calendar-picker').length).toBe(1);
  });
  it('render show primary without props inject', () => {
    const picker = renderer.create(
      <RangePicker />
    ).toJSON();
    expect(picker).toMatchSnapshot();
  });
  it('render show with en lang', () => {
    const picker = renderer.create(
      <RangePicker lang="en" />
    ).toJSON();
    expect(picker).toMatchSnapshot();
  });
})