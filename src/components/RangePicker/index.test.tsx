import React from 'react';
import { mount } from 'enzyme';
import RangePicker from './index';
import renderer from 'react-test-renderer';
import moment, { Moment } from 'moment';

function onChange(date: Moment[], dateString: string[]) {
  console.log('onChange', date, dateString);
}
function onOk(date: Moment[]) {
  console.log('onOk', date);
}
function onOpenChange(open: boolean) {
  console.log('open', open);
}

describe('RangePicker', () => {
  it('render with agreed class', () => {
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
    const picker = renderer.create(<RangePicker />).toJSON();
    expect(picker).toMatchSnapshot();
  });
  it('render show with en lang', () => {
    const picker = renderer.create(<RangePicker lang="en" />).toJSON();
    expect(picker).toMatchSnapshot();
  });
  it('click show time panel', () => {
    const picker = mount(
      <RangePicker defaultValue={[moment('2019-02-16 18:01:57'), moment('2019-02-20 18:01:57')]} />,
    );
    const node = picker.find('.RangePicker');
    node.simulate('click');
    picker
      .find('a.rc-calendar-time-picker-btn')
      .at(0)
      .simulate('click');
    expect(picker.find('.rc-calendar-time-picker').length).toBe(2);
  });
  it('clear choosed duration', () => {
    const picker = mount(
      <RangePicker
        defaultValue={[moment('2019-02-16 18:01:57'), moment('2019-02-20 18:01:57')]}
        onOk={onOk}
      />,
    );
    const node = picker.find('.RangePicker');
    node.simulate('mouseenter');
    picker
      .find('.icon-close-line')
      .at(0)
      .simulate('click');
    const inputs = picker.find('input');
    // 开始时间
    expect(inputs.at(0).props().value).toBe('');
    // 结束时间
    expect(inputs.at(1).props().value).toBe('');
  });
  it('hide duration', () => {
    const picker = mount(<RangePicker showDuration={false} />);
    const node = picker.find('.RangePicker');
    node.simulate('click');
    expect(picker.find('.RangePicker__duration').length).toBe(0);
  });
  it('3 hours duration', () => {
    const picker = mount(
      <RangePicker onChange={onChange} onOk={onOk} onOpenChange={onOpenChange} />,
    );
    const node = picker.find('.RangePicker');
    node.simulate('click');
    picker
      .find('.RangePicker__duration button')
      .at(0)
      .simulate('click');
    const inputs = picker.find('input');
    // 开始时间
    expect(inputs.at(0).props().value).not.toBe('');
    // 结束时间
    expect(inputs.at(1).props().value).not.toBe('');
  });
});
