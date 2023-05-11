import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';
import { DropdownProps, DropdownDefaultProps } from '../../interface';
import './style.scss';

const defaultProps: DropdownDefaultProps = {
  id: 'CustomDropdown',
};

const Dropdown = (props: DropdownProps) => {
  const { customToggle, align, className, id, title, children } = props;
  return (
    <BootstrapDropdown id={id} className={className} align={align}>
      {customToggle && title}
      {!customToggle && title && (
        <BootstrapDropdown.Toggle variant="default">{title}</BootstrapDropdown.Toggle>
      )}
      <BootstrapDropdown.Menu>{children}</BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
};

Dropdown.propTypes = {
  /**
   * 元素 class 名称 string
   **/
  className: PropTypes.string,
  /**
   * 下拉框收起时展示内容 string
   **/
  title: PropTypes.string,
  /**
   * 元素 id，默认为 CustomDropdown string
   **/
  id: PropTypes.string,
  /**
   * 下拉框展开时详细内容 React.ReactNode
   **/
  children: PropTypes.node,
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
