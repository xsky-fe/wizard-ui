import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { storiesOf } from '@storybook/react';

storiesOf('Form | Radio', module)
  .add('inline', () => (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column xs="auto">
          性能优先级:
        </Form.Label>
        <Col xs="auto" style={{ padding: '7px 0' }}>
          <Form.Check inline name="name1" type="radio" id="default" label="默认" value="default" />
          <Form.Check
            inline
            name="name1"
            type="radio"
            id="priority"
            label="优先"
            value="priority"
          />
        </Col>
      </Form.Group>
    </Form>
  ))
  .add('with help text', () => (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column xs="auto">
          迁移速度级别:
        </Form.Label>
        <Col xs="auto" style={{ padding: '7px 0' }}>
          <Form.Check name="name1" type="radio" id="low" label="低速" value="low" />
          <Form.Text style={{ marginLeft: '1.5em' }}>
            以较低的速度迁移数据，迁移时间可能较长，但是基本不影响业务。
          </Form.Text>
          <Form.Check name="name1" type="radio" id="middle" label="中速" value="middle" />
          <Form.Text style={{ marginLeft: '1.5em' }}>
            以中等的速度迁移数据，迁移时间适中，在大部分场景不影响业务，除非业务压力很大。
          </Form.Text>
          <Form.Check name="name1" type="radio" id="hight" label="高速" value="hight" />
          <Form.Text style={{ marginLeft: '1.5em' }}>
            以较高的速度迁移数据，迁移时间较短，可能会影响业务的 IO 时延。
          </Form.Text>
        </Col>
      </Form.Group>
    </Form>
  ));
