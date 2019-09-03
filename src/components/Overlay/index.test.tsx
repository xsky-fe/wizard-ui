import React from 'react';
import Overlay from './index';
import { mount } from 'enzyme';

function handleHide() {
  console.log('hide');
}
function handleExit() {
  console.log('exit');
}
describe('Overlay', () => {
  it('could overlay render right', () => {
    const overlay = mount(
      <Overlay label="hello" rootClose={true} onHide={handleHide} onExit={handleExit}>
        <a>test link</a>
      </Overlay>,
    );
    expect(overlay.find('.overlay-target').length).toBe(1);
    var target = overlay.find('.overlay-target').at(0);
    target.simulate('click');
    expect(overlay.find('.overlay-label').length).toBe(2);
    var wrapper = overlay.find('.overlay-wrapper').at(0);
    wrapper.simulate('click');
    setTimeout(() => {
      expect(overlay.find('.overlay-label').length).toBe(0);
    }, 1);
  });
  it('could overlay render custom label', () => {
    const overlay = mount(
      <Overlay label={<p>hello</p>} rootClose={true} onHide={handleHide} onExit={handleExit}>
        <a>test link</a>
      </Overlay>,
    );
    var target = overlay.find('.overlay-target').at(0);
    target.simulate('click');
    expect(overlay.find('.overlay-label').length).toBe(1);
  });
});
