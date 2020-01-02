import React from 'react';
import { mount } from 'enzyme';
import VirtualSelectBox from './index';
import { sleep, getMockDatas } from '../../utils';
import { Query } from '../../interface';
import get from 'lodash/get';
const noOp = () => { };

const resName = 'list';
const limit = 30;
function getEmptyDatas(query: Query) {
  return getMockDatas(query, 0, resName);
}
function getDatas(query: Query) {
  return getMockDatas(query, 180, resName);
}

const fetchEmptyDatas = async (isReloading: boolean, dQuery: Query = {}) => {
  let resNamePlural = `${resName}s`;
  const query = {
    ...dQuery,
    limit,
    offset: 0,
  };
  const actionResult = await getEmptyDatas(dQuery);
  const items = get(actionResult, `response.${resNamePlural}`, []);
  const totalCount = get(actionResult, 'response.paging.totalCount');
  return {
    query,
    items,
    totalCount,
  };
};
const fetchDatas = async (isReloading: boolean, dQuery: Query = {}) => {
  let resNamePlural = `${resName}s`;
  const query = {
    ...dQuery,
    limit,
    offset: 0,
  };
  const actionResult = await getDatas(dQuery);
  const items = get(actionResult, `response.${resNamePlural}`, []);
  const totalCount = get(actionResult, 'response.paging.totalCount');
  return {
    query,
    items,
    totalCount,
  };
};

describe('VirtualSelectBox', () => {
  it('render with empty data', async () => {
    const picker = mount(<VirtualSelectBox item={{}} fetchData={fetchEmptyDatas} />);
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
        fetchData={fetchDatas}
        onSelect={noOp}
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
    ).toBe('list-1');
    expect(picker.find('.icon-close').exists()).toBeTruthy();
    node.find('Glyphicon').simulate('click');
    await sleep(500);
    picker.update();
    // 存在 onClick 操作
    expect(
      picker
        .find('.VirtualList > .SelectBox__item')
        .at(1)
        .props().onClick,
    ).not.toBeUndefined;
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
