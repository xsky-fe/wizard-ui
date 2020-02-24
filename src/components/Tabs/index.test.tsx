import React from 'react';
import Tabs from './index';
import { render,shallow,mount} from 'enzyme';

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
  // it('should render default tabs ui', () => {
  //   const tabs = render(<Tabs tabs={newTABS} />);
  //   expect(tabs).toMatchSnapshot();
  //  });
  it('tabs should set small', () => {
    const tabs = shallow(<Tabs tabs={newTABS} size="small" />);
    expect(tabs.find('.Tabs--small').length).toBe(1);
  });
  it('tabs should set right ', () => {
    const tabs = shallow(<Tabs tabs={newTABS} direction="right" />);
    expect(tabs.find('.Tabs--right').length).toBe(1);
  
  });
  it('tabs dropdown content to the right', () => {
    const tabs = mount(<Tabs tabs={newTABS} direction="right" />);
    expect(tabs.find('.dropdown-menu').length).toBe(1);

  });
  it('change title', () => {
    const tabs = mount(<Tabs tabs={newTABS} direction="right" />);
    const node = tabs.find('Nav');
    expect(tabs.find('NavDropdown').props().title).toBe('更多');
    node.simulate('click');
    expect(tabs.find('.dropdown-menu').find('li').length).toBe(2);
    expect(tabs.find('.dropdown-menu').find('li').at(0).find('a').length).toBe(1);
    tabs.find('.dropdown-menu').find('li').at(0).find('a').simulate('click');
    expect(tabs.find('NavDropdown').props().title).not.toBe('更多');
    expect(tabs.find('NavDropdown').props().title).toBe('标题6');

  });
  // it('change time', () => {
  //   const picker = mount(<DatePicker />);
  //   const node = picker.find('input');
  //   node.simulate('click');
  //   picker
  //     .find('.rc-calendar-tbody > tr')
  //     .at(4)
  //     .find('td')
  //     .at(3)
  //     .simulate('click');
  //   expect(
  //     picker
  //       .find('.rc-calendar-input')
  //       .at(0)
  //       .props().value,
  //   ).not.toBe('');
  // });


  


});