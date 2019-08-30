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
  it('size is xlarge', () => {
    const node = mount(
      <Modal title="Modal Title" onHide={noOp} bsSize="xlarge" show>
        <strong>Modal Content</strong>
      </Modal>,
    );
    expect(
      node
        .find('ModalDialog')
        .at(0)
        // @ts-ignore
        .props().dialogClassName,
    ).toEqual('modal-xlg');
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
});
