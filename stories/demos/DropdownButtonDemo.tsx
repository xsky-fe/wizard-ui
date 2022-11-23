import React, {useState} from 'react';
import {DropdownButton} from '../../src';


const data1 = [
  {
    title: '网关节点',
    key: 'target',
    children: [
      {
        'data-action': 'AddTarget',
        key: 'AddTarget',
        title: '添加'
      },
      {
        'data-action': 'RemoveTarget',
        key: 'RemoveTarget',
        title: '移除'
      },
    ],
  },
]

const data2 = [
  {
    title: '网关节点',
    key: 'target',
    children: [
      {
        'data-action': 'AddTarget',
        key: 'AddTarget',
        title: '添加'
      },
      {
        'data-action': 'RemoveTarget',
        key: 'RemoveTarget',
        title: '移除'
      },
    ],
  },
  {
    title: '网关节点2',
    key: 'target2',
    children: [
      {
        'data-action': 'AddTarget2',
        key: 'AddTarget2',
        title: '添加2'
      },
      {
        'data-action': 'RemoveTarget2',
        key: 'RemoveTarget2',
        title: '移除'
      },
    ],
  },
]

let i = 0;

const DropdownButtonDemoDemo = () => {
  const [menu, setMenu] = useState();
  React.useEffect(() => {
    setInterval(() => {
      const dataList = [data1, data2];
      i += 1;
      setMenu(dataList[i % 2]);
    }, 1000);
  }, []);
  return (
    <DropdownButton id="w1" title="测试动态加载" menu={menu}/>
  )
};

export default DropdownButtonDemoDemo;