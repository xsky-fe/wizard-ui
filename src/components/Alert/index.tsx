import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert as BSAlert } from 'react-bootstrap';
import Icon from '../Icon';
import { AlertProps } from '../../interface';
import './style.scss';

const icons = {
  success: 'check-circle',
  warning: 'warning',
  info: 'warning',
  danger: 'times-circle',
};

const Alert: React.FC<AlertProps> = props => {
  const { children, bsStyle, show, showIcon, onDismiss, dismissDirection } = props;
  const [classes, setClasses] = useState([
    show ? 'show-alert' : 'hidden-alert',
    showIcon ? 'with-icon' : '',
    dismissDirection ? 'dismiss-' + dismissDirection : '',
  ]);

  function onClose() {
    const index = classes.indexOf('show-alert');
    const tempClass = classes;
    tempClass[index] = 'hidden-alert';
    setClasses([...tempClass]);
    onDismiss && onDismiss();
    setTimeout(() => {
      setClasses([...tempClass, 'hidden']);
    }, 500);
  }

  return (
    <BSAlert bsStyle={bsStyle} className={classes.join(' ')} onDismiss={onClose}>
      {showIcon && <Icon type={icons[bsStyle ? bsStyle : 'info']} />}
      {children}
    </BSAlert>
  );
};

Alert.propTypes = {
  /* 配置alert内容 */
  children: PropTypes.node,
  /* 配置alert样式（主题） */

  bsStyle: PropTypes.oneOf(['success', 'warning', 'danger', 'info']),
  /* 配置alert是否显示 */

  show: PropTypes.bool,
  /* 配置是否显示图标 */

  showIcon: PropTypes.bool,
  /* 配置关闭alert时触发的事件 */

  onDismiss: PropTypes.func,
  /* 配置alert关闭时消失方向 */

  dismissDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
};
Alert.defaultProps = {
  bsStyle: 'info',
  showIcon: false,
  show: true,
  dismissDirection: 'up',
};

export default Alert;
