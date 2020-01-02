import React from 'react';
import Alert from './index';
import { mount } from 'enzyme';

describe('Alert', () => {
  it('could alter render classes right', () => {
    const alert = mount(
      <Alert bsStyle="danger" dismissDirection="up">
        default text <a href="#">test link</a>
      </Alert>,
    );
    expect(alert.find('.alert').hasClass('with-icon')).toEqual(false);
    expect(alert.find('.alert').hasClass('dismiss-up')).toEqual(true);
    expect(alert.find('.alert').hasClass('alert-danger')).toEqual(true);
  });
  it('could alter show and hidden', () => {
    const alert = mount(
      <Alert bsStyle="info" showIcon dismissDirection="right" onDismiss={()=>console.log(1)}>
        default text <a href="#">test link</a>
      </Alert>,
    );
    expect(alert.find('.alert').hasClass('show-alert')).toEqual(true);
    expect(alert.find('.alert').hasClass('with-icon')).toEqual(true);
    expect(alert.find('.alert').hasClass('dismiss-right')).toEqual(true);
    const button = alert.find('button');
    button.simulate('click');
    expect(alert.find('.alert').hasClass('hidden-alert')).toEqual(true);
  });
});
