import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { AlertProps } from '../../interface';
import './style.scss';

const icons = {
  warning: 'warning-triangle',
  info: 'warning',
  error: 'times-circle',
};

// 不同样式的对齐方式
const bgStyleMap = {
  left: 'bordered',
  center: 'solid',
  inline: 'plain',
};

const Alert: React.FC<AlertProps> = props => {
  const {
    children,
    bsStyle,
    show,
    showIcon,
    onDismiss,
    dismissDirection,
    textAlign = 'left',
  } = props;
  const dismissable = !!onDismiss;

  const [classes, setClasses] = useState([
    `Alert-${bsStyle}`,
    `bg-${bgStyleMap[textAlign]}`,
    show ? 'show-alert' : 'hidden-alert',
    showIcon ? 'with-icon' : '',
    dismissDirection ? `dismiss-${dismissDirection}` : ''
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
      <div role="alert" className={cn('Alert', classes.join(' '))}>
        <div className={cn('Alert-container', textAlign === 'center' && 'justify-center', dismissable && 'dismiss-container')}>
          {showIcon && <Icon type={icons[bsStyle ? bsStyle : 'info']} />}
          <div className="Alert-text">{children}</div>
        </div>
        {dismissable && <Icon type="close" onClick={onClose} />}
      </div>
  );
};

Alert.propTypes = {
  /* 配置alert内容 */
  children: PropTypes.node,
  /* 配置alert样式（主题）*/

  bsStyle: PropTypes.oneOf(['warning', 'error', 'info']),
  /* 配置alert文字的位置, 居中、靠左、无 */

  textAlign: PropTypes.oneOf(['left', 'center', 'inline']),
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
  textAlign: 'left',
  show: true,
  dismissDirection: 'up',
};

export default Alert;