import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Nav } from '../src';

const meta: Meta<typeof Nav> = {
  title: 'COMPONENTS/Nav',
  component: Nav,
};

export default meta;

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

type Story = StoryObj<typeof Nav>;

export const Basic: Story = {
  render: props => (
    <>
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
    </>
  ),
};
