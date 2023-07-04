import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Col, Form, Row } from 'react-bootstrap';

const meta: Meta = {
  title: 'FORM/CheckBox',
  component: Form.Check
};

export default meta;

type Story = StoryObj;

export const Basic: Story = {
  render: props => (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column xs="auto">
          业务场景:
        </Form.Label>
        <Col xs="auto" style={{ padding: '7px 0' }}>
          <Form.Check inline type="checkbox" id="default" label="块存储" value="block" />
          <Form.Check inline type="checkbox" id="priority" label="文件存储" value="file" />
          <Form.Check inline type="checkbox" id="priority" label="对象存储" value="object" />
        </Col>
      </Form.Group>
    </Form>
  ),
};
