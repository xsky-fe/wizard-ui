import React from 'react';
import Collapse from './index';
import { mount } from 'enzyme';

describe('Collapse', () => {
  it('could collapse render detail right', () => {
    const collapse = mount(
    <Collapse showIcon={true} title="title">
      default text <a href="#">test link</a>
    </Collapse>);
    expect(collapse.find('.collapse-title').hasClass('with-icon')).toEqual(true);
    expect(collapse.find('.collapse-title').children().length).toEqual(1);
    expect(collapse.find('.collapse').children().length).toEqual(1);
  });
  it('could collapse render props right', () => {
    const collapse = mount(
    <Collapse showIcon={"triangle-down"} title="title" open={false}
      contentStyle={{
        background: '#f7f7f7',
        border: 0,
      }}>
      default text
    </Collapse>);
    expect(collapse.props().contentStyle).toEqual({
      background: '#f7f7f7',
      border: 0,
    });
    expect(collapse.props().open).toEqual(false);
    expect(collapse.find('.icon').hasClass('icon-triangle-down')).toEqual(true);
    const title = collapse.find('.collapse-title');
    title.simulate('click');
    setTimeout(
      () => {
        expect(collapse.find('.collapse').hasClass('in')).toEqual(true);
        expect(collapse.props().open).toEqual(true);
      }
    , 350);
  });
});