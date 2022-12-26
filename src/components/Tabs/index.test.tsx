import React, { useState } from 'react';
import Tabs from './index';
import { shallow, mount, render } from 'enzyme';

const TABS = [
  { title: '标题1', key: '1', children: <div>第1个tab</div> },
  { title: '标题2', key: '2', children: <div>第2个tab</div> },
  { title: '标题3', key: '3', children: <div>第3个tab</div> },
  { title: '标题4', key: '4', children: <div>第4个tab</div> },
];
const newTABS = [
  { title: '标题1', key: '1', children: <div>第1个tab</div> },
  { title: '标题2', key: '2', children: <div>第2个tab</div> },
  { title: '标题3', key: '3', children: <div>第3个tab</div> },
  { title: '标题4', key: '4', children: <div>第4个tab</div> },
  { title: '标题5', key: '5', children: <div>第5个tab</div> },
  { title: '标题6', key: '6', children: <div>第6个tab</div> },
  { title: '标题7', key: '7', children: <div>第7个tab</div> },
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

describe('Tabs width Dropdown', () => {
  it('should render default tabs ui', () => {
    const tabs = render(<Tabs tabs={newTABS} />);
    expect(tabs).toMatchSnapshot();
  });
  it('tabs should set small', () => {
    const tabs = shallow(<Tabs tabs={newTABS} size="small" />);
    expect(tabs.find('.Tabs--small').length).toBe(1);
  });
  it('tabs should set right ', () => {
    const tabs = shallow(<Tabs tabs={newTABS} direction="right" />);
    expect(tabs.find('.Tabs--right').length).toBe(1);
  });
  it('tabs dropdown content to the right', () => {
    const tabs = mount(<Tabs tabs={newTABS} limitNum={5} direction="right" />);
    expect(tabs.find('.dropdown-menu').length).toBe(1);
  });
  it('change title', () => {
    const Xtab = () => {
      const [key, setKey] = useState(newTABS[0].key);
      const handleSelect = (key: any) => setKey(key);
      return (
        <Tabs
          tabs={newTABS}
          activeKey={key}
          onSelect={(key: any) => handleSelect(key)}
          limitNum={5}
          direction="right"
        />
      );
    };
    const tabs = mount(<Xtab />);
    //title 默认值
    expect(tabs.find('NavDropdown').props().title).toBe('更多');
    // 下拉框中li标签个数
    expect(tabs.find('.dropdown-menu').find('li').length).toBe(2);
    // 判断是否存在下拉框中第一个li标签中的a标签
    expect(
      tabs
        .find('.dropdown-menu')
        .find('li')
        .at(0)
        .find('a').length,
    ).toBe(1);
    // 模拟点击“标题6”选项
    tabs
      .find('.dropdown-menu')
      .find('li')
      .at(0)
      .find('a')
      .simulate('click');
    // 判断title是否有改变
    expect(tabs.find('NavDropdown').props().title).not.toBe('更多');
    expect(tabs.find('NavDropdown').props().title).toBe('标题6');
  });
});
