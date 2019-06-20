import React from 'react';
import { Navigation } from '../../../src/components';

const location = {
  pathname: 'dashboard/email-groups',
  basename: '/',
}

const navGroups = {
    overview: {
      title: '概览',
      children: [
        {
          path: 'dashboard',
          title: '集群概览',
          icon: 'overview',
        },
      ],
    },
    blockStorage: {
      title: '块存储管理',
      panelKey: '1',
      children: [
        {
          path: 'dashboard/block-volumes',
          title: '块存储卷',
          icon: 'volume',
        },
        {
          path: 'dashboard/block-volume-groups',
          title: '一致性组',
          icon: 'consistency-group',
        },
        {
          path: 'dashboard/access-paths',
          title: '访问路径',
          icon: 'access-target',
        },
      ],
    },
  };
export default function () {
  return (
    <div>
      <h3>default</h3>
      <div style={{ backgroundColor: "#2d3454", width: "200px" }}>
        <Navigation navGroups={navGroups} />
      </div>
      <h3>toggled</h3>
      <div style={{ backgroundColor: "#2d3454", width: "50px" }}>
        <Navigation navGroups={navGroups} toggled={true} />
      </div>
      <h3>location</h3>
      <div style={{ backgroundColor: "#2d3454", width: "200px" }}>
        <Navigation navGroups={navGroups} location={location} />
      </div>
    </div>
  )
}