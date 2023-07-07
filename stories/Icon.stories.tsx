import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../src';
import * as Icons from 'wizard-ui-icon';
import lodash from 'lodash';

const keys = lodash.keys(Icons);

const meta: Meta<typeof Icon> = {
  title: 'OTHERS/Icon',
  component: Icon,
  args: {
    type: 'os-search-role-fill',
  },
  argTypes: {
    onClick: {
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Basic: Story = {};

export const Color: Story = {
  args: {
    color: 'primary',
  },
};

export const inheritColorSize: Story = {
  render: props => (
    <div style={{ fontSize: '40px', color: '#6b58c4' }}>
      <Icon type="os-search-role-fill" />
    </div>
  ),
};

export const Cursor: Story = {
  args: {
    cursor: true,
    color: 'primary',
  },
};

export const allIcons: Story = {
  render: props => {
    return (
      <div className="Icon">
        <p>总共有 {keys.length} 个图标</p>
        <div className="Icon__ul">
          {keys.map((key, index) => {
            const Icon = Icons[key];
            const name = lodash.kebabCase(key);
            return (
              <div className="Icon__li" key={index}>
                <Icon />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};
