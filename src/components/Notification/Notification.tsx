import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import Icon from '../Icon';
import { NotificationProps } from '../../interface';
import './style.scss';

const STATUS = {
  success: ['check-circle'],
  info: ['info'],
  process: ['loading', 'info'],
  warning: ['warning'],
  danger: ['times-circle'],
};

export default class Notification extends PureComponent<NotificationProps> {
  static propTypes = {
    /** 通知栏标识符 */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** 多少毫秒后关闭通知栏 */
    counter: PropTypes.number,
    /** 操作通知栏关闭 */
    onDismiss: PropTypes.func,
    /** 状态 */
    status: PropTypes.oneOf(['success', 'info', 'process', 'warning', 'danger']).isRequired,
    /** 是否开启默认关闭 */
    autoClose: PropTypes.bool,
    /** 标题 */
    title: PropTypes.string,
    /** 详细说明 */
    text: PropTypes.string,
  };
  static defaultProps = {
    status: 'info',
    counter: 2000,
  };
  mouseIsEnter: boolean;
  constructor(props: NotificationProps) {
    super(props);
    this.mouseIsEnter = false;
    this.setTimer = this.setTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.close = this.close.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  /** 设置定时器 */
  setTimer(isSet?: boolean) {
    const { autoClose, intervalMap, id, counter } = this.props;
    if (intervalMap && (autoClose || isSet)) {
      intervalMap.clear(id);
      // 只有在鼠标不在通知栏上时，才设置定时器
      if (!this.mouseIsEnter) {
        intervalMap.set(id, this.close, counter);
      }
    }
  }
  /** 清除定时器 */
  clearTimer() {
    const { autoClose, intervalMap, id } = this.props;
    if (autoClose && intervalMap) {
      intervalMap.clear(id);
    }
  }
  /** 关闭通知栏 */
  close() {
    const { onDismiss, id } = this.props;
    this.clearTimer();
    if (onDismiss) {
      onDismiss(id);
    }
  }
  mouseEnter() {
    const { id, intervalMap, status } = this.props;
    this.mouseIsEnter = true;
    // 如果不是进行中状态，函数监听
    if (status !== 'process' && intervalMap && intervalMap.has(id)) {
      intervalMap.clear(id);
    }
  }
  mouseLeave() {
    const { autoClose, intervalMap, id, counter = 2000 } = this.props;
    this.mouseIsEnter = false;
    if (autoClose && intervalMap && !intervalMap.has(id)) {
      intervalMap.set(id, this.close, counter);
    }
  }
  renderIcon() {
    const { status } = this.props;
    const icon = STATUS[status] && STATUS[status][0];
    if (!icon) return null;
    return <Icon type={icon} />;
  }
  renderText() {
    const { text, title } = this.props;
    if (!text && !title) return null;
    return (
      <div className="Notification__Text">
        {title}
        {text}
      </div>
    );
  }
  componentDidMount() {
    this.setTimer();
  }
  componentDidUpdate(prevProps: NotificationProps) {
    const { intervalMap, id } = prevProps;
    // 更新同 id 的通知时，重新设置定时器
    if (this.props.autoClose && intervalMap && !intervalMap.has(id)) {
      this.setTimer(true);
    }
  }

  render() {
    const { status, id, onDismiss } = this.props;
    const style = (STATUS[status] && STATUS[status][1]) || status;
    return (
      <div
        className="Notification"
        data-nid={id}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <Alert bsStyle={style} onDismiss={onDismiss && this.close}>
          {this.renderIcon()}
          {this.renderText()}
        </Alert>
      </div>
    );
  }
}
