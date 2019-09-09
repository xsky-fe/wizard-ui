import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Notification from './index';
import cn from 'classnames';
import Icon from '../Icon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { NotificationItem, NotificationListProps, NotificationListStates } from '../../interface';
import './style.scss';



export default class   extends PureComponent<NotificationListProps, NotificationListStates> {
  static propTypes = {
    /** 操作移除单个通知栏 */
    onDismiss: PropTypes.func.isRequired,
    /** 统一格式化通知栏目的数据 */
    format: PropTypes.func,
    /** 是否开启自动关闭 */
    autoClose: PropTypes.bool,
  }
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

  renderNotification(uuid: string | number, notification: NotificationItem) {
    const { onDismiss, autoClose, format } = this.props;
    const formatNotification = format ? format(notification) : notification;

    return (
      <Notification
        key={uuid}
        id={uuid}
        onDismiss={onDismiss}
        autoClose={autoClose}
        {...formatNotification}
      />
    );
  }

  render() {
    const { notifications } = this.props;
    const { expanded } = this.state;
    const indicatorClass = cn(
      'NotificationList__indicator',
      {'NotificationList__indicator-expanded': expanded }
    );

    let lists: [string | number, NotificationItem][] = [];
    for (let nvs of notifications.values()) {
      lists.push(...nvs.entries())
    }

    return (
      <div className="NotificationList">
        {!!notifications.size && (
          <div className="NotificationList__control-wrapper" onClick={this.handleToggle}>
            <span className="NotificationList__control">
              <span className="NotificationList__control-left">
                <Icon type="dialog"/>
                {lists.length}
              </span>
              <Icon type="triangle-down" className={indicatorClass} />
            </span>
          </div>
        )}
        {expanded && (
          <div>
            <ReactCSSTransitionGroup
              transitionName="Notification"
              transitionEnterTimeout={700}
              transitionLeaveTimeout={650}
            >
              {lists.map(val => this.renderNotification(...val))
              }
            </ReactCSSTransitionGroup>
          </div>
        )}
      </div>
    );
  }
}

