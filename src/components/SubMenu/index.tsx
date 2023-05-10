import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { SubMenuProps } from '../../interface';
import './style.scss';

const SubMenu = (props: SubMenuProps) => {
  const { title, children, name } = props;
  return (
    <div className="SubMenu" data-name={`SubMenu-${name}`}>
      <Dropdown.Item bsPrefix="dropdown-header dropdown-submenu dropdown-submenu-header">
        <span>{title}</span>
        <ul className="dropdown-menu">{children}</ul>
      </Dropdown.Item>
    </div>
  );
};

SubMenu.propTypes = {
  /** 级联节点添加 data-name */
  name: PropTypes.string,
  /** 文本标题 */
  title: PropTypes.string.isRequired,
  /** 子元素 */
  children: PropTypes.node.isRequired,
};

export default SubMenu;
