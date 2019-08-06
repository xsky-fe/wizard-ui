import React from 'react';
import Icon from './index';
import { render } from 'enzyme';

describe('Loader', () => {
  it('should render default ui', () => {
    const icon = render(<Icon type="os-search-role" />);
    expect(icon).toMatchSnapshot();
  });
});
