import React from 'react';
import Notification from './Notification';
import NotificationList from './NotificationList';
import { NotificationItem, NotificationItemStatus } from '../../interface';
import { mount } from 'enzyme';

const STATUS = ['success', 'info', 'process', 'warning', 'danger'];

describe('Notification', () => {
  it('should support 5 status', () => {
    const node = mount(
      <div>
        {STATUS.map(s => (
          <Notification
            key={s}
            status={s as NotificationItemStatus}
            id={s}
            text={`${s} text message !`}
          />
        ))}
      </div>,
    );
    // alert
    expect(
      node
        .find('.alert')
        .at(0)
        .hasClass('alert-success'),
    ).toBe(true);
    expect(
      node
        .find('.alert')
        .at(1)
        .hasClass('alert-info'),
    ).toBe(true);
    expect(
      node
        .find('.alert')
        .at(2)
        .hasClass('alert-info'),
    ).toBe(true);
    expect(
      node
        .find('.alert')
        .at(3)
        .hasClass('alert-warning'),
    ).toBe(true);
    expect(
      node
        .find('.alert')
        .at(4)
        .hasClass('alert-danger'),
    ).toBe(true);
    // icon
    expect(
      node
        .find('.icon')
        .at(0)
        .hasClass('icon-check-circle'),
    ).toBe(true);
    expect(
      node
        .find('.icon')
        .at(1)
        .hasClass('icon-info'),
    ).toBe(true);
    expect(
      node
        .find('.icon')
        .at(2)
        .hasClass('icon-loading'),
    ).toBe(true);
    expect(
      node
        .find('.icon')
        .at(3)
        .hasClass('icon-warning'),
    ).toBe(true);
    expect(
      node
        .find('.icon')
        .at(4)
        .hasClass('icon-times-circle'),
    ).toBe(true);
  });
});

describe('NotificationList', () => {
  it('empty lists', () => {
    const notifications = new Map();
    notifications.set('1', new Map());
    const node = mount(<NotificationList notifications={notifications} />);
    expect(node.hasClass('NotificationList')).toBeFalsy();
  });
  it('lists', () => {
    const notifications = new Map();
    const items = new Map();
    STATUS.forEach(s => {
      const item: NotificationItem = {
        id: s,
        status: s as NotificationItemStatus,
        text: `${s} text message !`,
      };
      items.set(s, item);
    });
    notifications.set('1', items);
    const node = mount(<NotificationList notifications={notifications} />);
    // NotificationList Control And Icon
    expect(node.find('.NotificationList__control').length).toBe(1);
    expect(
      node
        .find('.icon')
        .at(0)
        .hasClass('icon-dialog'),
    ).toBe(true);
    expect(
      node
        .find('.icon')
        .at(1)
        .hasClass('icon-triangle-down'),
    ).toBe(true);
    // list length
    expect(node.find('CSSTransitionGroupChild').length).toBe(5);
  });
});
