import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip, Icon, Button } from '../src';

storiesOf('DATA DISPLAY | Tooltip', module)
  .add('default', () => {
    return (
      <div>
        <div style={{ marginTop: '20px' }}>
          <Tooltip placement="right" label={<span>hover 试试</span>}>
            文字提示
          </Tooltip>
        </div>
      </div>
    );
  })
  .add('icon', () => {
    return (
      <div>
        <Tooltip placement="right" style={{ maxWidth: 800 }} children="默认图标" />
        <br />
        <Tooltip label={<Icon type="edit-fill" />} style={{ maxWidth: 800 }} children="编辑" />
      </div>
    );
  })
  .add('placement', () => {
    return (
      <div style={{ paddingTop: '160px' }}>
        {['top', 'right', 'bottom', 'left'].map(placement => (
          <Tooltip
            placement={placement}
            style={{ maxWidth: 800 }}
            label={<Button style={{ marginRight: 20 }}>Tooltip on {placement}</Button>}
          >
            Tooltip on <strong>{placement}</strong>.
          </Tooltip>
        ))}
      </div>
    );
  });
