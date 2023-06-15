import React from 'react';
// import PropTypes from 'prop-types';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';
import { DropdownProps, DropdownDefaultProps } from '../../interface';
import './style.scss';

const defaultProps: DropdownDefaultProps = {
  id: 'CustomDropdown',
};

const Dropdown = (props: DropdownProps) => {
  const { customToggle, className, id, title, children, align } = props;
  return (
    <BootstrapDropdown id={id} className={className} align={align}>
      {customToggle && title && (
        <BootstrapDropdown.Toggle variant="default" as={title as React.ElementType} />
      )}
      {!customToggle && title && (
        <BootstrapDropdown.Toggle variant="default">{title}</BootstrapDropdown.Toggle>
      )}
      <BootstrapDropdown.Menu>{children}</BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
};

// Dropdown.propTypes = {
//   /**
//    * 元素 class 名称 string
//    **/
//   className: PropTypes.string,
//   /**
//    * 下拉框收起时展示内容 node
//    **/
//   title: PropTypes.node,
//   /**
//    * 元素 id，默认为 CustomDropdown string
//    **/
//   id: PropTypes.string,
//   /**
//    * 下拉框展开时详细内容 React.ReactNode
//    **/
//   children: PropTypes.node,
// };

Dropdown.defaultProps = defaultProps;

export default Object.assign(Dropdown, {
  Toggle: BootstrapDropdown.Toggle,
  Menu: BootstrapDropdown.Menu,
  Item: BootstrapDropdown.Item,
  ItemText: BootstrapDropdown.ItemText,
  Divider: BootstrapDropdown.Divider,
  Header: BootstrapDropdown.Header,
});
