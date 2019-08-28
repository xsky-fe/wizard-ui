import React from 'react';
import { storiesOf } from '@storybook/react';
import { VirtualSelectBox } from '../src';
import getMockDatas from './utils/getMockDatas';
import { Query } from '../src/interface';

const resName = "list";
function getEmptyDatas(query: Query) {
  return getMockDatas(query, 0, resName);
}

function getDatas(query: Query) {
  return getMockDatas(query, 180, resName);
}

const Async = ({ clear } : { clear?: boolean }) => {
  const [item, setItem] = React.useState({ id: 1, name: `${resName}-1` } as object);
  const onSelect = React.useCallback(async (item: object) => {
    setItem(item);
  }, [item, setItem]);
  return (
    <VirtualSelectBox
      onSelect={onSelect}
      item={item}
      resName={resName}
      fetchData={getDatas}
      clear={clear}
    />
  )
}

storiesOf('DATA SHOW | VirtualSelectBox', module)
  .add('empty data', () => (
    <VirtualSelectBox
      item={{}}
      resName={resName}
      fetchData={getEmptyDatas}
    />
  ))
  .add('async datas', () => <Async />)
  .add('async datas with clear', () => <Async clear/>)