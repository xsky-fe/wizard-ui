import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';
import { Modal } from 'react-bootstrap';

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
        // animation={true}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      {/* <Modal
        title="弹出框时间选择器"
        show={show}
        onHide={handleHide}
        onOk={handleHide}
        hideFooter
        preventDragByTitle
      >
        <DatePicker defaultValue="2019-08-13 12:02:53" />
      </Modal> */}
    </div>
  );
};

storiesOf('DATA SHOW | Modal', module)
  .add('modal picker', () => (
    <ModalPicker />
  ))
