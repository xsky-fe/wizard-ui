import React from 'react';
import Tabs from './index';
import { render, shallow } from 'enzyme';

const TABS = [
  { title: '标题1', key: '1', children: <div>第1个tab</div> },
  { title: '标题2', key: '2', children: <div>第2个tab</div> },
  { title: '标题3', key: '3', children: <div>第3个tab</div> },
  { title: '标题4', key: '4', children: <div>第4个tab</div> },
];

describe('Tabs', () => {
  it('should render default ui', () => {
    const tabs = render(<Tabs tabs={TABS} />);
    expect(tabs).toMatchSnapshot();
  });
  it('should set small', () => {
    const tabs = shallow(<Tabs tabs={TABS} size="small" />);
    expect(tabs.find('.Tabs--small').length).toBe(1);
  });
  it('should set right', () => {
    const tabs = shallow(<Tabs tabs={TABS} direction="right" />);
    expect(tabs.find('.Tabs--right').length).toBe(1);
  });
});
