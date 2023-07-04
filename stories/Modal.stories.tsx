import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Modal, DatePicker } from '../src';
import { ModalProps } from '../src/interface';

const meta: Meta<typeof Modal> = {
  title: 'DATA SHOW/Modal',
  component: Modal,
  argTypes: {
    centered: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      description: '是否应垂直居中',
    },
  },
};

const ModalPicker = (props?: Partial<ModalProps>) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(true);
  const handleHide = () => setShow(false);
  return (
    <div>
      <Button variant="primary" onClick={handleClick}>
        <span>打开对话框</span>
      </Button>
      <Modal
        title="弹出框时间选择器"
        show={show}
        onHide={handleHide}
        onOk={handleHide}
        preventDragByTitle
        {...props}
      >
        <DatePicker defaultValue="2019-08-13 12:02:53" />
      </Modal>
    </div>
  );
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: props => <ModalPicker {...props} />,
};

export const Size: Story = {
  render: props => (
    <>
      <ModalPicker size="sm" />
      <br />
      <ModalPicker />
      <br />
      <ModalPicker size="lg" />
      <br />
      <ModalPicker size="xl" />
    </>
  ),
};

export const Center: Story = {
  render: props => <ModalPicker centered {...props} />,
};

export const HideFooter: Story = {
  render: props => <ModalPicker hideFooter />,
};
