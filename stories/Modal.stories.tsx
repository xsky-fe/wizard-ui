import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, Button, DatePicker } from '../src';

const ModalPicker = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(true);
  const handleHide = () => setShow(false);
  return (
    <div>
      <Button bsStyle="primary" onClick={handleClick}>打开对话框</Button>
      <Modal
        title="弹出框时间选择器"
        show={show}
        onHide={handleHide}
        onOk={handleHide}
        hideFooter
      >
        <DatePicker defaultValue="2019-08-13 12:02:53" />
      </Modal>
    </div>
  )
}

storiesOf('DATA SHOW | Modal', module)
  .add('modal picker', () => (
    <ModalPicker />
  ))
