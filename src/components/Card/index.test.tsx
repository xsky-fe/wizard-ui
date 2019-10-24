import React from 'react';
import Card from './index';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('panel showing primary bg', () => {
    const panel = shallow(<Card bg="primary" />);
    expect(panel.find('.panel-primary-bg').length).toBe(1);
  });
  it('panel showing danger color', () => {
    const panel = shallow(<Card text="danger" />);
    expect(panel.find('.text-danger').length).toBe(1);
  });
});
