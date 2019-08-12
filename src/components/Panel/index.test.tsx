import React from 'react';
import Panel from './index';
import { shallow } from 'enzyme';

describe('Panel', () => {
  it('panel showing primary bg', () => {
    const panel = shallow(<Panel bg="primary" />);
    expect(panel.find('.primary').length).toBe(1);
  });
  it('panel showing danger color', () => {
    const panel = shallow(<Panel text="danger" />);
    expect(panel.find('.text-danger').length).toBe(1);
  });
});
