import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../src';

const meta: Meta = {
  title: 'COMPONENTS/Dropdown',
  component: Dropdown,
  decorators: [
    Story => (
      <div style={{ marginBottom: 50 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

const CustomToggler = (props: any) => (
  <a
    onClick={e => {
      e.preventDefault();
      props.onClick(e);
    }}
  >
    点我 &#x25bc;
  </a>
);

export const Basic: Story = {
  args: {
    title: '标题',
    children: (
      <div style={{ padding: '5px 10px' }} id="dropdown">
        内容
      </div>
    ),
  },
};

export const CustomToggle: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Dropdown
       customToggle
       title={(props) => (
        <a
          onClick={e => {
            e.preventDefault();
            props.onClick(e);
          }}
        >
          点我 &#x25bc;
        </a>
      )}
       children={
        <div style={{ padding: '5px 10px' }} id="dropdown">
          内容
        </div>
       }
     />`,
      },
    },
  },
  render: props => (
    <Dropdown
      customToggle
      title={CustomToggler}
      children={
        <div style={{ padding: '5px 10px' }} id="dropdown">
          内容
        </div>
      }
    />
  ),
};
