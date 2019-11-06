import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Notification from './index';
import cn from 'classnames';
import Icon from '../Icon';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { NotificationItem, NotificationListProps, NotificationListStates } from '../../interface';
import './style.scss';

export default class NotificationList extends PureComponent<
  NotificationListProps,
  NotificationListStates
> {
  static propTypes = {
    /** 操作移除单个通知栏 */
    onClose: PropTypes.func,
    /** 统一格式化通知栏目的数据 */
    format: PropTypes.func,
    /** 是否开启自动关闭 */
    autoClose: PropTypes.bool,
  };
  constructor(props: NotificationListProps) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      expanded: true,
    };
  }
  handleToggle() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  renderNotification = (notification: NotificationItem) => {
    const { onClose, autoClose, format } = this.props;
    const formatNotification = format ? format(notification) : notification;

    return (
      <Notification
        key={notification.id}
        id={notification.id}
        onClose={onClose}
        autoClose={autoClose}
        {...formatNotification}
      />
    );
  };

  render() {
    const { notifications } = this.props;
    const { expanded } = this.state;
    const indicatorClass = cn('NotificationList__indicator', {
      'NotificationList__indicator-expanded': expanded,
    });

    let lists: NotificationItem[] = [];
    for (const nvs of notifications.values()) {
      nvs.forEach((notificationItem: NotificationItem) => {
        lists.push(notificationItem);
      });
    }
    if (!lists.length) {
      return null;
    }
    return (
      <div className="NotificationList">
        <div className="NotificationList__control-wrapper" onClick={this.handleToggle}>
          <span className="NotificationList__control">
            <span className="NotificationList__control-left">
              <Icon type="dialog" />
              {lists.length}
            </span>
            <Icon type="triangle-down" className={indicatorClass} />
          </span>
        </div>
        {expanded && (
          <div>
            {lists.map(this.renderNotification)}
          </div>
        )}
      </div>
    );
  }
}
