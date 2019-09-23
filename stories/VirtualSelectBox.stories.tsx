import React from 'react';
import { storiesOf } from '@storybook/react';
import { VirtualSelectBox } from '../src';
import { Query } from '../src/interface';
import { elasticQuery, getMockDatas } from '../src/utils';
import { get, isEmpty, concat } from 'lodash';

const resName = "list";
const limit = 30;
function getEmptyDatas(query: Query){
  return getMockDatas(query, 0, resName);
}

function getDatas(query: Query) {
  return getMockDatas(query, 180, resName);
}

const AsyncWithES = ({ clear, multi }: { clear?: boolean; multi?: boolean; }) => {
  const [item, setItem] = React.useState({ id: 1, name: `${resName}-1` } as object);
  const [value, setValue] = React.useState([]);
  const onSelect = React.useCallback((i: any) => {
    if (multi) {
      setValue(i);
    } else {
      setItem(i);
    }
  }, [setItem, setValue]);
  const fetchFormatDatas = async (isReloading: boolean, dQuery: Query = {}, search?: string) => {
    let nameKey = 'name';
    let extraQuery: Query = {};
    let resNamePlural = `${resName}s`;
    let query = dQuery;
    if (!isReloading) {
      query = { ...extraQuery, ...dQuery };
    } else {
      let qArr = elasticQuery.toArr(get(dQuery, 'q', ''));
      if (search) {
        qArr.push({
          type: nameKey,
          value: search,
        });
      }
      if (!isEmpty(extraQuery)) {
        qArr = concat(qArr, elasticQuery.toArr(extraQuery.q));
      }
      // 查询的时候重置 query
      query = {
        ...dQuery,
        ...extraQuery,
        limit,
        offset: 0,
        q: elasticQuery.toStr(qArr),
      };
    }

    const actionResult = await getDatas(query);
    const items = get(actionResult, `response.${resNamePlural}`, []);
    const totalCount = get(actionResult, 'response.paging.totalCount');
    const error = get(actionResult, 'error');
    return {
      query,
      items,
      totalCount,
      error
    }
  }
  return (
    <VirtualSelectBox
      onSelect={onSelect}
      item={item}
      fetchData={fetchFormatDatas}
      clear={clear}
      multi={!!multi}
      value={value}
    />
  )
}

const fetchEmptyDatas = async (isReloading: boolean, dQuery: Query = {}) => {
  let resNamePlural = `${resName}s`;
  const query = {
    ...dQuery,
    limit,
    offset: 0,
  };
  const actionResult = await getEmptyDatas(query);
  const items = get(actionResult, `response.${resNamePlural}`, []);
  const totalCount = get(actionResult, 'response.paging.totalCount');
  return {
    query,
    items,
    totalCount,
  }
}

storiesOf('DATA SHOW | VirtualSelectBox', module)
  .add('empty object data', () => (
    <VirtualSelectBox
      item={{}}
      fetchData={fetchEmptyDatas}
    />
  ))
  .add('empty string data', () => (
    <VirtualSelectBox
      item=""
      defaultItem=""
      fetchData={fetchEmptyDatas}
    />
  ))
  .add('async datas', () => <AsyncWithES />)
  .add('async datas with clear', () => <AsyncWithES clear/>)
  .add('multi with async datas', () => <AsyncWithES multi/>)