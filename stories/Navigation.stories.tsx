import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Icon, Navigation } from '../src';

storiesOf('Navigation', module)
  .add('default', () => {
    const navs = {
      overview: {
        title: '概览',
        icon: 'overview',
      },
      nav1: {
        title: '导航栏一',
        children: [
          {
            title: '选项一',
            icon: 'volume',
          },
          {
            title: '选项二',
            icon: 'consistency-group',
          },
          {
            title: '选项三',
            icon: 'access-target',
          },
        ],
      },
      nav2: {
        title: '导航栏二',
        children: [
          {
            title: '选项一',
            icon: 'file-user',
          },
          {
            title: '选项二',
            icon: 'fs-client',
          },
        ],
      },
    };
    return (
      <div style={{ width: '200px', backgroundColor: '#2d3454' }}>
        <Navigation navGroups={navs} />
      </div>
    );
  })
  .add('toggled', () => {
    const navs = {
      overview: {
        title: '概览',
        icon: 'overview',
      },
      nav1: {
        title: '选项一',
        icon: 'volume',
      },
      nav2: {
        title: '选项二',
        icon: 'consistency-group',
      },
      nav3: {
        title: '选项三',
        icon: 'access-target',
      },
    };
    const [toggle, setToggle] = React.useState(true);
    const handleClick = () => setToggle(!toggle);
    return (
      <div>
        <Button variant="primary" onClick={handleClick} style={{ marginBottom: 8 }}>
          <Icon type={toggle ? 'slide-right' : 'slide-left'} />
        </Button>
        <div style={{ width: toggle ? '50px' : '200px', backgroundColor: '#2d3454' }}>
          <Navigation navGroups={navs} toggled={toggle} logo="Logo" />
        </div>
      </div>
    );
  });
