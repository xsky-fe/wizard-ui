import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import VirtualList from './index';
import { VirtualRowArgs } from '../../interface';
import AsyncVirtualList from '../../../stories/demos/AsyncVirtualList';

function createNodeMock(element: React.ReactElement) {
  if (element.type === 'div') {
    return {
      scrollTop: 0,
      offsetHeight: 100,
    };
  }
  return null;
}
const snapOptions = { createNodeMock };

const rowRenderer = (i: VirtualRowArgs) => <div key={i.index}>item</div>;

describe('VirtualList', () => {
  it('render without crush', () => {
    const list = shallow(<VirtualList rowHeight={10} rowRenderer={rowRenderer} />);
    expect(list.hasClass('VirtualList__holder')).toBeTruthy();
  });
  it('show no data placeholder when data array is empty', () => {
    const list = renderer
      .create(
        <VirtualList
          rowHeight={10}
          rowRenderer={rowRenderer}
          data={[]}
          isFetching={false}
          isReloading={false}
          totalCount={0}
        />,
        snapOptions,
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  });

  it('show list and loader when fetching more', () => {
    const list = renderer
      .create(
        <VirtualList
          rowHeight={10}
          rowRenderer={rowRenderer}
          data={[1]}
          isFetching={true}
          isReloading={false}
          totalCount={1}
        />,
        snapOptions,
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  });

  it('only show loader when reloading', () => {
    const list = renderer
      .create(
        <VirtualList
          rowHeight={10}
          rowRenderer={rowRenderer}
          data={[]}
          isFetching={true}
          isReloading={true}
          totalCount={0}
        />,
        snapOptions,
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  });

  it('show no more data hint when all data fetched', () => {
    const list = renderer
      .create(
        <VirtualList
          rowHeight={10}
          rowRenderer={rowRenderer}
          data={[1]}
          isFetching={false}
          isReloading={false}
          totalCount={1}
        />,
        snapOptions,
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  });

  it('scrolling equal row height', () => {
    const list = renderer
      .create(
        <AsyncVirtualList/>,
        snapOptions,
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  })
  it('scrolling dynamic row height', () => {
    const list = renderer
      .create(
        <AsyncVirtualList random />,
        snapOptions,
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  })
});
