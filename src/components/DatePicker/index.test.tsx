import React from 'react';
import { mount } from 'enzyme';
import DatePicker from './index';
import renderer from 'react-test-renderer';

describe('DatePicker', () => {
  it('set defautValue', () => {
    const picker = mount(<DatePicker defaultValue="2019-08-13 12:02:53" />);
    const node = picker.find('input');
    expect(node.at(0).props().value).toBe('2019-08-13 12:02:53');
  });
  it('render show en lang', () => {
    const picker = renderer.create(<DatePicker lang="en" />).toJSON();
    expect(picker).toMatchSnapshot();
  });
  it('render disable', () => {
    const picker = renderer.create(<DatePicker disabled />).toJSON();
    expect(picker).toMatchSnapshot();
  });
  it('change time', () => {
    const picker = mount(<DatePicker />);
    const node = picker.find('input');
    node.simulate('click');
    picker
      .find('.rc-calendar-tbody > tr')
      .at(4)
      .find('td')
      .at(3)
      .simulate('click');
    expect(
      picker
        .find('.rc-calendar-input')
        .at(0)
        .props().value,
    ).not.toBe('');
  });
  it('get time', () => {
    const getTime = (val: string) => console.log(val);
    const picker = renderer.create(<DatePicker getTime={getTime} />).toJSON();
    expect(picker).toMatchSnapshot();
  })
});
