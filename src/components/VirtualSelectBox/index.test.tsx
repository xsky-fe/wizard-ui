import React from 'react';
import { mount } from 'enzyme';
import VirtualSelectBox from './index';
import getMockDatas from '../../../stories/utils/getMockDatas';
import { sleep } from '../../utils';
import { Query } from '../../interface';

const resName = 'osUser';
function getEmptyDatas(query: Query) {
  return getMockDatas(query, 0, resName);
}
function getDatas(query: Query) {
  return getMockDatas(query, 180, resName);
}

describe('VirtualSelectBox', () => {
  it('render with empty data', async () => {
    const picker = mount(
      <VirtualSelectBox item={{}} resName={resName} fetchData={getEmptyDatas} />,
    );
    const node = picker.find('.SelectBox');
    expect(node.length).toBe(1);
    node.find('Glyphicon').simulate('click');
    expect(picker.find('.SelectBox__search').exists()).toBeTruthy();
    // 数据加载中
    expect(picker.find('.VirtualList__loader').exists()).toBeTruthy();
    await sleep(500);
    picker.update();
    // 暂无数据
    expect(picker.find('.VirtualList__placeholder').exists()).toBeTruthy();
  });
  it('render with async datas', async () => {
    const picker = mount(
      <VirtualSelectBox
        item={{ id: 1, name: `${resName}-1` }}
        resName={resName}
        fetchData={getDatas}
        clear
      />,
    );
    const node = picker.find('.SelectBox');
    // default value
    expect(
      picker
        .find('.SelectBox__btn > span')
        .at(0)
        .props().children,
    ).toBe('osUser-1');
    expect(picker.find('.icon-close').exists()).toBeTruthy();
    node.find('Glyphicon').simulate('click');
    await sleep(500);
    picker.update();
    // 默认第二个高亮
    expect(
      picker
        .find('.VirtualList > .SelectBox__item')
        .at(1)
        .hasClass('active'),
    ).toEqual(true);
    // 选择第三个
    picker
      .find('.VirtualList > .SelectBox__item')
      .at(2)
      .simulate('click');
    picker.update();
    // 展开自动隐藏
    expect(picker.find('.SelectBox__outer').exists()).toBeFalsy();
  });
});
