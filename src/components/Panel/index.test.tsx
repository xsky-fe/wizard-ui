import React from 'react';
import Panel from './index';
import { shallow } from 'enzyme';

describe('Panel', () => {
  it('panel showing warning style', () => {
    const panel = shallow(<Panel bsStyle="warning" />);
    expect(panel.find('.panel-warning').length).toBe(1);
  });
});
