import React from 'react';
import { storiesOf } from '@storybook/react';
import { Nav } from '../src';

storiesOf('Components | Nav', module).add('tabs', () => {
  const monitorTabs = [
    {
      title: '用户业务',
      key: 'users',
    },
    {
      title: '复制',
      key: 'copy',
    },
    {
      title: '生命周期',
      key: 'flow',
    },
  ];
  return (
    <div>
      <Nav
        variant="tabs"
        defaultActiveKey="users"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        {monitorTabs.map(tab => {
          return (
            <Nav.Item>
              <Nav.Link eventKey={tab.key}>{tab.title}</Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </div>
  );
});
