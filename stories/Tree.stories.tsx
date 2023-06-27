import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tree } from '../src';

storiesOf('DATA SHOW | Tree', module).add('default', () => {
  const treeData = [
    {
      key: '0',
      title: 'parent 1',
      children: [
        {
          key: '0-0',
          title: 'parent 1-1',
          children: [
            {
              key: '0-0-0',
              title: 'parent 1-1-0',
            },
          ],
        },
        {
          key: '0-1',
          title: 'parent 1-2',
          children: [
            {
              key: '0-1-0',
              title: 'parent 1-2-0',
              disableCheckbox: true,
            },
            {
              key: '0-1-1',
              title: 'parent 1-2-1',
            },
          ],
        },
      ],
    },
  ];

  // @ts-ignore
  return <Tree data={treeData} onClick={() => console.log('clicked..')} />;
});
