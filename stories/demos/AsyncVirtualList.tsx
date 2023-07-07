import React from 'react';
import { VirtualList } from '../../src';
import { getMockDatas } from '../../src/utils';
import { get } from 'lodash';
import { Query, VirtualRowArgs, VirtualItem } from '../../src/interface';

const resName = 'list';
function getDatas(query: Query) {
  return getMockDatas(query, 180, resName);
}

export const rowRenderer = (i: VirtualRowArgs<VirtualItem>) => (
  <div className="list-item" style={i.style} key={i.index}>
    {resName}-{i.index + 1}
  </div>
);

const rowRendererRandomHeight = (i: VirtualRowArgs<VirtualItem>) => (
  <div className="list-item" style={i.style} key={i.index}>
    <div style={{ height: `${35 + (i.index % 5) * 4}px` }}>
      {resName}-{i.index + 1}
    </div>
  </div>
);

export default (props: { random?: boolean }) => {
  const [fetching, setFetch] = React.useState(false);
  const [datas, setDatas] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    handleQueryChange({
      limit: 30,
      offset: 0,
    });
  }, []);
  React.useEffect(() => {
    const existLists = document.querySelectorAll('.VirtualList > *');
    setCount(existLists ? existLists.length : 0);
  }, [datas]);
  const handleQueryChange = async (query: Query) => {
    setFetch(true);
    const actionResult: any = await getDatas(query);
    setFetch(false);
    const totalCount = get(actionResult, 'response.paging.totalCount');
    const lists = actionResult.response.lists;
    setTotalCount(totalCount);
    setDatas(datas.concat(lists));
  };
  return (
    <div>
      <p>
        总共 {totalCount}, 获取了 {datas.length} 条数据。
      </p>
      <p>
        VirtualList 会在增加 list 条数的同时，销毁超出的 UI，目前渲染出来的 list 条数是： {count}
      </p>
      <div className="box">
        <VirtualList
          rowHeight={35}
          rowRenderer={props.random ? rowRendererRandomHeight : rowRenderer}
          height={210}
          data={datas}
          query={{
            limit: 30,
            offset: 0,
          }}
          onQueryChange={handleQueryChange}
          totalCount={totalCount}
          isFetching={fetching}
          noMore={datas.length === totalCount}
          isEstimate={props.random}
        />
      </div>
    </div>
  );
};
