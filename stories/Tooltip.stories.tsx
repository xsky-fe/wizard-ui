import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip } from '../src';

storiesOf('Tooltip', module).add('default', () => {
  return (
    <div>
      <div>
        <Tooltip>系统将为加入集群的第一台节点设置此角色</Tooltip>
        <h5>1. 图标提示</h5>
        <Tooltip placement="right" style={{ maxWidth: 800 }} children="测试" />
      </div>
      <div style={{ marginTop: '20px' }}>
        <h5>2. 文字提示</h5>
        <Tooltip placement="right" label={<span>测试</span>}>
          测试2
        </Tooltip>
      </div>
    </div>
  );
});
