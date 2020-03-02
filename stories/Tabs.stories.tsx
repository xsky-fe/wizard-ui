import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs } from '../src';

storiesOf('DATA Display | Tabs', module)
.add('default', () => (
    <Tabs
    tabs={[
    { title: '标题1', key: 'key-1', children: <div>第1个tab</div> },
    { title: '标题2', key: 'key-2', children: <div>第2个tab</div> },
    { title: '标题3', key: 'key-3', children: <div>第3个tab</div> },
    { title: '标题4', key: 'key-4', children: <div>第4个tab</div> }
    ]}
/>
))
.add('small', () => (
    <Tabs
    tabs={[
    { title: '标题1', key: 'key-1', children: <div>第1个tab</div> },
    { title: '标题2', key: 'key-2', children: <div>第2个tab</div> },
    { title: '标题3', key: 'key-3', children: <div>第3个tab</div> },
    { title: '标题4', key: 'key-4', children: <div>第4个tab</div> }
    ]}
    size="small"
/>
))
.add('right', () => (
    <Tabs
    tabs={[
    { title: '标题1', key: 'key-1', children: <div>第1个tab</div> },
    { title: '标题2', key: 'key-2', children: <div>第2个tab</div> },
    { title: '标题3', key: 'key-3', children: <div>第3个tab</div> },
    { title: '标题4', key: 'key-4', children: <div>第4个tab</div> }
    ]}
    direction="right"
/>
))
.add('Item>5', () => (
    <Tabs
    tabs={[
    { title: '标题1', key: 'key-1', children: <div>第1个tab</div> },
    { title: '标题2', key: 'key-2', children: <div>第2个tab</div> },
    { title: '标题3', key: 'key-3', children: <div>第3个tab</div> },
    { title: '标题4', key: 'key-4', children: <div>第4个tab</div> },
    { title: '标题5', key: 'key-5', children: <div>第5个tab</div> },
    { title: '标题6', key: 'key-6', children: <div>第6个tab</div> },
    { title: '标题7', key: 'key-7', children: <div>第7个tab</div> },
    { title: '标题8', key: 'key-8', children: <div>第8个tab</div> }
    ]}
/>
))


.add('Item-samll>5', () => (
    <Tabs
    tabs={[
    { title: '标题1', key: 'key-1', children: <div>第1个tab</div> },
    { title: '标题2', key: 'key-2', children: <div>第2个tab</div> },
    { title: '标题3', key: 'key-3', children: <div>第3个tab</div> },
    { title: '标题4', key: 'key-4', children: <div>第4个tab</div> },
    { title: '标题5', key: 'key-5', children: <div>第5个tab</div> },
    { title: '标题6', key: 'key-6', children: <div>第6个tab</div> },
    { title: '标题7', key: 'key-7', children: <div>第7个tab</div> },
    { title: '标题8', key: 'key-8', children: <div>第8个tab</div> }
    ]}
    size="small"
/>
))

.add('ItemlimitNum=3', () => (
    <Tabs
    tabs={[
    { title: '这里是标题1', key: 'key-1', children: <div>第1个tab</div> },
    { title: '标题2', key: 'key-2', children: <div>第2个tab</div> },
    { title: '标题3', key: 'key-3', children: <div>第3个tab</div> },
    { title: '标题4', key: 'key-4', children: <div>第4个tab</div> },
    { title: '标题5', key: 'key-5', children: <div>第5个tab</div> },
    { title: '标题6', key: 'key-6', children: <div>第6个tab</div> },
    { title: '标题7', key: 'key-7', children: <div>第7个tab</div> },
    { title: '标题8', key: 'key-8', children: <div>第8个tab</div> }
    ]}
    limitNum={3}
/>
))

.add('Item-title-long>5', () => (
    <Tabs
    tabs={[
    { title: '这里是标题1', key: 'key-1', children: <div>第1个tab</div> },
    { title: '标题2', key: 'key-2', children: <div>第2个tab</div> },
    { title: '标题3', key: 'key-3', children: <div>第3个tab</div> },
    { title: '标题4', key: 'key-4', children: <div>第4个tab</div> },
    { title: '标题5', key: 'key-5', children: <div>第5个tab</div> },
    { title: '标题6', key: 'key-6', children: <div>第6个tab</div> },
    { title: '标题7', key: 'key-7', children: <div>第7个tab</div> },
    { title: '标题8', key: 'key-8', children: <div>第8个tab</div> }
    ]}

/>
))
.add('Item-right>5', () => (
    <Tabs
    tabs={[
    { title: '标题1', key: 'key-1', children: <div>第1个tab</div> },
    { title: '标题2', key: 'key-2', children: <div>第2个tab</div> },
    { title: '标题3', key: 'key-3', children: <div>第3个tab</div> },
    { title: '标题4', key: 'key-4', children: <div>第4个tab</div> },
    { title: '标题5', key: 'key-5', children: <div>第5个tab</div> },
    { title: '标题6', key: 'key-6', children: <div>第6个tab</div> },
    { title: '标题7', key: 'key-7', children: <div>第7个tab</div> },
    { title: '标题8', key: 'key-8', children: <div>第8个tab</div> }
    ]}
    direction="right"
/>
))
.add('Item-title-long>5-keyIsNumber', () => (
    <Tabs
    tabs={[
    { title: '这里是标题1', key: 1, children: <div>第1个tab</div> },
    { title: '标题2', key: 2, children: <div>第2个tab</div> },
    { title: '标题3', key: 3, children: <div>第3个tab</div> },
    { title: '标题4', key: 4, children: <div>第4个tab</div> },
    { title: '标题5', key: 5, children: <div>第5个tab</div> },
    { title: '标题6', key: 6, children: <div>第6个tab</div> },
    { title: '标题7', key: 7, children: <div>第7个tab</div> },
    { title: '标题8', key: 8, children: <div>第8个tab</div> }
    ]}

/>
))
