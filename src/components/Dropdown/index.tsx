import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { DropdownProps, DropdownDefaultProps } from '../../interface';

const defaultProps: DropdownDefaultProps = {
  id: 'CustomDropdown'
}

const CustomDropdown = (props: DropdownProps) => {
  const { className, id, title, children } = props;
  return (
    <Dropdown id={id} className={className}>
      <Dropdown.Toggle>{title}</Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  );
}

CustomDropdown.propTypes = {
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
  children: PropTypes.node.isRequired,
};

CustomDropdown.defaultProps = defaultProps;

export default CustomDropdown;
