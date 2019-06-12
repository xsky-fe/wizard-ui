import React from 'react';
import Loader from './index';
import { render } from 'enzyme';

describe('Loader', () => {
  it('should render default ui', () => {
    const loader = render(<Loader />);
    expect(loader).toMatchSnapshot();
  });
  it('should render primary style ui', () => {
    const loader = render(<Loader bsStyle="primary" />);
    expect(loader).toMatchSnapshot();
  });
  it('should render p with text', () => {
    const loader = render(<Loader bsStyle="primary">加载中...</Loader>);
    expect(loader).toMatchSnapshot();
  });
});