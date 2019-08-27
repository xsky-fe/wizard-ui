import React from 'react';
import { storiesOf } from '@storybook/react';
import { VirtualList } from '../src';
import AsyncVirtualList, { rowRenderer } from './demos/AsyncVirtualList';


storiesOf('DATA SHOW | VirtualList', module)
  .add('empty data', () => {
    return (
      <VirtualList
        rowHeight={10}
        rowRenderer={rowRenderer}
        data={[]}
        isFetching={false}
        isReloading={false}
        totalCount={0}
      />
    )
  })
  .add('async equal height', () => <AsyncVirtualList/>)
  .add('async dynamic height', () => <AsyncVirtualList random/>)