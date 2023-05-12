import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { storiesOf } from '@storybook/react';

storiesOf('Form | Checkbox', module).add('inline', () => (
  <Form>
    <Form.Group as={Row}>
      <Form.Label column xs="auto">
        业务场景:
      </Form.Label>
      <Col xs="auto" style={{ padding: '7px 0'}}>
        <Form.Check inline type="checkbox" id="default" label="块存储" value="block" />
        <Form.Check inline type="checkbox" id="priority" label="文件存储" value="file" />
        <Form.Check inline type="checkbox" id="priority" label="对象存储" value="object" />
      </Col>
    </Form.Group>
  </Form>
));
