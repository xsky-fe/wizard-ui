import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Modal, DatePicker } from '../src';
import { ModalProps } from '../src/interface';
import { Form } from 'react-bootstrap';

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

const ModalSizePicker = () => {
  const SIZES = [['sm', '小'], ['', '中'], ['lg', '大'], ['xl', '最大']];
  const [size, setSize] = React.useState('lg');
  return (
    <div>
      <div>
        {SIZES.map(([val, text]) => (
          <Form.Check
            inline
            name="size"
            type="radio"
            id={text}
            label={text}
            value={val}
            onClick={() => {
              if (val !== size) {
                setSize(val);
              }
            }}
          />
        ))}
      </div>
      <ModalPicker size={size as ModalProps['size']} />
    </div>
  );
};
storiesOf('DATA SHOW | Modal', module)
  .add('default', () => <ModalPicker />)
  .add('size', () => <ModalSizePicker />)
  .add('center', () => <ModalPicker centered />)
  .add('hide footer', () => <ModalPicker hideFooter />);
