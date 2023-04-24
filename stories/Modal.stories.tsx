import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, Button, DatePicker } from '../src';

const ModalPicker = () => {
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
        hideFooter
        preventDragByTitle
      >
        <DatePicker defaultValue="2019-08-13 12:02:53" />
      </Modal>
    </div>
  );
};

storiesOf('DATA SHOW | Modal', module)
  .add('modal picker', () => (
    <ModalPicker />
  ))
