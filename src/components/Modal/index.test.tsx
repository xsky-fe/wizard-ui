import React from 'react';
import { mount } from 'enzyme';
import Modal from './index';

const noOp = () => {};

describe('Modal', () => {
  it('render content', () => {
    const node = mount(
      <Modal title="Modal Title" onHide={noOp} show>
        <strong>Modal Content</strong>
      </Modal>,
    );
    expect(node.find('strong').text()).toBe('Modal Content');
  });
  it('close when close button is clicked', done => {
    const doneOp = () => {
      done();
    };
    const node = mount(
      <Modal title="Modal Title" onHide={doneOp} show>
        <strong>Modal Content</strong>
      </Modal>,
    );
    node.find('.close').simulate('click');
  });
  it('style to modal', () => {
    const node = mount(
      <Modal title="Modal Title" onHide={noOp} style={{ color: 'red' }} show>
        <strong>Modal Content</strong>
      </Modal>,
    );
    expect(
      node
        .find('Modal')
        .at(0)
        .props().style,
    ).toEqual({ color: 'red' });
  });
  it('hide footer', () => {
    const node = mount(
      <Modal title="Modal Title" onHide={noOp} hideFooter show>
        <strong>Modal Content</strong>
      </Modal>,
    );
    expect(node.find('ModalFooter').length).toBe(0);
  });
  it('loading content', () => {
    const node = mount(
      <Modal title="Modal Title" onHide={noOp} loading show>
        <strong>Modal Content</strong>
      </Modal>,
    );
    expect(
      node
        .find('Button')
        .at(0)
        .props().disabled,
    ).toBeTruthy();
    expect(node.find('Loader').length).toBe(1);
  });
  it('draggable props', () => {
    const draggableNode = mount(
      <Modal title="Modal Title" onHide={noOp}>
        <strong>Modal Content</strong>
      </Modal>,
    );
    setTimeout(() => {
      expect(draggableNode.find('.drag-handle').length).toBe(1);
    }, 0);

    const disDraggableNode = mount(
      <Modal title="Modal Title" onHide={noOp} draggable={false}>
        <strong>Modal Content</strong>
      </Modal>,
    );
    expect(disDraggableNode.find('.drag-handle').length).toBe(0);
  });
});
