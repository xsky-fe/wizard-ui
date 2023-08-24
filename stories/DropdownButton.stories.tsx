import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DropdownButton } from '../src';
import { InputGroup } from 'react-bootstrap';

const meta: Meta = {
  title: 'COMPONENTS/DropdownButton',
  component: DropdownButton,
  decorators: [
    Story => (
      <div style={{ marginBottom: '60px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      description: '样式支持primary，success，info，warning，danger，默认为info',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'info' },
      },
      control: 'text'
    },
    as: {
      description: '元素类型',
      table: {
        type: {
          summary: 'elementType',
        },
      },
    },
    disabled: {
      description: '是否禁用',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    drop: {
      description: '下拉框弹出方向',
      table: {
        type: {
          summary: 'string',
          detail: "'up' | 'up-centered' | 'start' | 'end' | 'down' | 'down-centered'",
        },
      },
    },
    onSelect: {
      description: '下拉菜单选中时回调',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    show: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description:
        '下拉框是否展开;使用组件如未传入show属性，点击任何一级的MenuItem都会默认关闭下拉框;如有传入show属性，下拉框是否展开根据传入的show决定',
    },
    align: {
      description: '下拉框对齐方向',
      table: {
        type: {
          summary: 'string',
          detail:
            '"start" | "end" | { sm: "start" | "end" } | { md: "start" | "end" } | { lg: "start" | "end" } | { xl: "start" | "end"} | { xxl: "start" | "end"}',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownButton>;

export const Basic: Story = {
  render: props => (
    <DropdownButton
      title="标题"
      menu={[
        '操作-1',
        { key: 'menu2', title: '操作-2', children: ['操作-2-1', '操作-2-2'] },
        '操作-3',
      ]}
      {...props}
    />
  ),
};

export const Size: Story = {
  render: props => (
    <>
      <DropdownButton id="a1" size="lg" title="lg" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton id="a2" title="default" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton id="a3" size="sm" title="sm" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton id="a4" size="xs" title="xs" menu={['menu1', 'menu2', 'menu3']} />
    </>
  ),
};

export const Style: Story = {
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Story />
      </div>
    ),
  ],
  render: props => (
    <>
      <DropdownButton
        id="a2"
        variant="primary"
        title="primary"
        menu={['menu1', 'menu2', 'menu3']}
      />
      <DropdownButton
        id="a3"
        variant="success"
        title="success"
        menu={['menu1', 'menu2', 'menu3']}
      />
      <DropdownButton id="a4" variant="info" title="info" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton
        id="a5"
        variant="warning"
        title="warning"
        menu={['menu1', 'menu2', 'menu3']}
      />
      <DropdownButton id="a6" variant="danger" title="danger" menu={['menu1', 'menu2', 'menu3']} />
    </>
  ),
};

export const As: Story = {
  render: props => (
    <>
      <DropdownButton
        id="a1"
        title="input group"
        as={InputGroup}
        menu={['menu1', 'menu2', 'menu3']}
      />
      <DropdownButton id="a2" title="normal" menu={['menu1', 'menu2', 'menu3']} />
    </>
  ),
};

export const Modifier: Story = {
  render: props => (
    <DropdownButton
      id="a1"
      title="table toolbar"
      modifer="table-toolbar"
      menu={['menu1', 'menu2', 'menu3']}
    />
  ),
};

export const Menu: Story = {
  render: props => (
    <>
      <DropdownButton id="a1" title="simple menu" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton
        id="a2"
        title="complex menu"
        menu={[
          { title: 'data-action', 'data-action': 'update' },
          { title: 'eventKey', eventKey: 'delete' },
        ]}
      />
      <DropdownButton
        id="a3"
        title="sub menu"
        menu={[
          { key: 'menu1', title: 'menu1' },
          { key: 'menu2', title: 'menu2', children: ['sub menu1', 'sub menu2'] },
          { key: 'menu3', title: 'menu3' },
        ]}
      />
      <DropdownButton id="a4" title="children" children={<div>customized dropdown menu</div>} />
      <DropdownButton
        id="a5"
        title="menu"
        menu={[
          {
            key: 'menu1',
            title: 'menu1',
            disabled: true,
            tooltip: { label: 'menu1', children: 'Not allow to operate' },
          },
          {
            key: 'menu2',
            title: 'menu2',
            disabled: true,
            tooltip: { label: 'menu1', children: 'Not allow to operate', placement: 'top' },
          },
          {
            key: 'menu3',
            title: 'menu3',
            disabled: true,
            tooltip: { children: 'Not allow to operate' },
          },
        ]}
      />
    </>
  ),
};

export const Disabled: Story = {
  render: props => (
    <DropdownButton id="a1" title="disabled" disabled menu={['menu1', 'menu2', 'menu3']} />
  ),
};

export const DropUp: Story = {
  decorators: [
    Story => (
      <div style={{ margin: '80px 0 0 0' }}>
        <Story />
      </div>
    ),
  ],
  render: props => (
    <DropdownButton id="a1" title="dropup" drop="up" menu={['menu1', 'menu2', 'menu3']} />
  ),
};

export const NoCaret: Story = {
  render: props => (
    <DropdownButton id="a1" title="noCaret" noCaret menu={['menu1', 'menu2', 'menu3']} />
  ),
};

export const Show: Story = {
  render: props => (
    <>
      <DropdownButton
        id="a1"
        title="show"
        show
        onToggle={() => {}}
        menu={['menu1', 'menu2', '  menu3']}
      />
      <DropdownButton id="a2" title="normal" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton
        id="a3"
        title="close"
        show={false}
        onToggle={() => {}}
        menu={['menu1', 'menu2', 'menu3']}
      />
    </>
  ),
};

export const Align: Story = {
  render: props => (
    <>
      <DropdownButton id="a2" title="normal" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton id="a1" title="align" align="end" menu={['menu1', 'menu2', 'menu3']} />
    </>
  ),
};
