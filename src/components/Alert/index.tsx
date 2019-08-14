import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert as BSAlert } from 'react-bootstrap';
import { Icon } from "../";
import { AlertProps } from '../../interface';
import './style.scss';

const icons = {
  success: "check-circle",
  warning: "warning",
  info: "warning",
  danger: "times-circle",
}

const Alert: React.FC<AlertProps> = props => {
  const { children, bsStyle, show, showIcon, onDismiss, dismissDirection } = props;
  const [classes, setClasses] = useState([
    show ? 'show-alert': 'hidden-alert',
    showIcon ? 'with-icon': '',
    dismissDirection ? 'dismiss-' + dismissDirection : '',
  ]);

  function onClose() {
    const index = classes.indexOf("show-alert");
    const tempClass = classes;
    tempClass[index] = "hidden-alert";
    setClasses([...tempClass])
    onDismiss && onDismiss();
    setTimeout(() => {
      setClasses([...tempClass, 'hidden'])
    }, 500);
  }
  
  return(
    <BSAlert bsStyle={bsStyle} className={classes.join(' ')} onDismiss={onClose}>
      {/* 显示前面的图标？*/}
      {showIcon ? <Icon type={icons[
        bsStyle ? bsStyle : 'info'
      ]} /> : null}
      {children}
    </BSAlert>
  )
}

Alert.propTypes = {
  /* 内容 */
  children: PropTypes.node,
  /* 样式 */  
  bsStyle: PropTypes.oneOf(["success", "warning", "danger", "info"]),
  show: PropTypes.bool,
  showIcon: PropTypes.bool,
  onDismiss: PropTypes.func,
  dismissDirection: PropTypes.oneOf(["up", "right", "down", "left"]),
};
Alert.defaultProps = {
  bsStyle: 'info',
  showIcon: false,
  show: true,
  dismissDirection: 'up',
};

export default Alert;
