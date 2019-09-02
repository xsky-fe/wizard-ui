import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse as BSCollapse } from 'react-bootstrap';
import { CollapseProps } from '../../interface';
import { Icon } from '..';
import classNames from 'classnames';
import './index.scss';

const Collapse: React.FC<CollapseProps> = props => {
  const { 
    showIcon, 
    title,
    collapseStyle,
    contentStyle,
    children,
    open: pOpen, 
    onOpen,
    onClose
  } = props;
  const [open, setOpen] = useState(pOpen || false);
  function handleClick() {
    if(open){
      setOpen(false);
      onClose && onClose();
    } else {
      setOpen(true);
      onOpen && onOpen();
    }
  }

  function renderIcon(open: boolean){
    const type = typeof showIcon === 'string' ? showIcon : open ? 'chevron-down' : 'chevron-up';
    return <Icon type={type} />
  }

  return(
    <div className="collapse-root" style={collapseStyle}>
      <div 
        className={classNames("collapse-title", showIcon ? 'with-icon' : '')} 
        onClick={handleClick}
      >
        {renderIcon(open)}{title}
      </div>
      <BSCollapse in={open}>
        <div style={contentStyle && contentStyle}>
          <div className="collapse-content">
            {children}
          </div>
        </div>
      </BSCollapse>
    </div>
  )
}

Collapse.propTypes = {
  /* 设置初始状态，默认为关（false） */
  open: PropTypes.bool,
  /* 设置面板标题 */
  title: PropTypes.node,
  /* 设置标题前icon，当为字符串时认为设置icon样式；当为bool时认为设置icon是否显示 */
  showIcon: PropTypes.bool,
  /* 设置面板内容 */
  children: PropTypes.node,
  /* 设置面板关闭时事件 */
  onClose: PropTypes.func,
  /* 设置面板打开时事件 */
  onOpen: PropTypes.func,
  /* 设置面板样式 */
  collapseStyle: PropTypes.object,
  /* 设置面板内容样式 */
  contentStyle: PropTypes.object,
};
Collapse.defaultProps = {
  showIcon: true,
  open: false,
};


export default Collapse;