import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DropdownButton as BootstrapDropdownButton, MenuItem, ButtonGroup } from 'react-bootstrap';
import SubMenu from '../SubMenu';
import {
  DropdownButtonMenuItem,
  DropdownButtonProps,
  DefaultDropdownButtonProps,
} from '../../interface';
import cloneDeep from 'lodash/cloneDeep';
import './style.scss';

type OpenProps = boolean | undefined;

function randomId() {
  return Math.random()
    .toString(36)
    .substring(2);
}
function renderContent(menu: DropdownButtonMenuItem[] = [], setButtonOpen: any, open: OpenProps) {
  if (menu instanceof Array) {
    return menu.map(m => renderMenu(m, setButtonOpen, open));
  }
  return menu;
}
function renderMenu(menu: DropdownButtonMenuItem, setButtonOpen: any, open: OpenProps) {
  const item = cloneDeep(menu);
  if (!item) {
    return null;
  }
  if (typeof item === 'string') {
    return <MenuItem key={item} onSelect={() => { setButtonOpen(typeof (open) !== 'undefined' ? open : false) }} >{item}</MenuItem>;
  }
  if (!item.key) {
    item.key = randomId();
  }
  if (item.children && item.children.length) {
    return (
      <SubMenu key={item.key} title={item.title} name={item.children[0]['data-action']}>
        {renderContent(item.children, setButtonOpen, open)}
      </SubMenu>
    );
  }
  return <MenuItem {...item} onSelect={() => { setButtonOpen(typeof (open) !== 'undefined' ? open : false) }} >{item.title}</MenuItem>;
}

const DropdownButton = (props: DropdownButtonProps) => {
  const getContainerClass = () => {
    const { modifer } = props;
    let className = 'dropdown-container';
    if (modifer) {
      className += ' ' + modifer;
    }
    return className;
  };

  const { bsStyle, id, onSelect, onToggle, bsSize, title, menu, children, componentClass, open } = props;
  const allBoolProps = ['disabled', 'dropup', 'noCaret', 'open', 'pullRight'];

  const boolProps = {};
  const [buttonOpen, setButtonOpen] = React.useState<boolean>(typeof (open) !== 'undefined' ? open : false);

  allBoolProps.forEach(prop => {
    if (props.hasOwnProperty(prop)) {
      boolProps[prop] = props[prop];
    }
  });
  const containerClassName = getContainerClass();
  return (
    <BootstrapDropdownButton
      {...boolProps}
      bsStyle={bsStyle}
      id={id}
      onSelect={onSelect}
      title={title}
      bsSize={bsSize}
      onToggle={isOpen => { if (typeof (open) === 'undefined') { if (isOpen !== open) { setButtonOpen(isOpen) } } if (onToggle) { onToggle(isOpen) } }}
      componentClass={componentClass}
      className={containerClassName}
      open={typeof (open) === 'undefined' ? buttonOpen : open}
    >
      {menu ? renderContent(menu, setButtonOpen, open) : children}
    </BootstrapDropdownButton>
  );
};

DropdownButton.propTypes = {
  /**
   * 样式 string，支持default，primary，success，info，warning，danger，默认为default
   **/
  bsStyle: PropTypes.string,
  /**
   * 下拉框子元素 node，不能和menu同时使用
   **/
  children: PropTypes.node,
  /**
   * 元素类型 elementType
   **/
  componentClass: PropTypes.any,
  /**
   * 下拉框样式修改器 string，在一些场景中下拉框有些特殊样式，支持table-toolbar, list-toolbar, detail-toolbar
   **/
  modifer: PropTypes.string,
  /**
   * 是否禁用 bool
   **/
  disabled: PropTypes.bool,
  /**
   * 下拉框是否向上弹出 bool
   **/
  dropup: PropTypes.bool,
  /**
   * html id属性 string
   **/
  id: PropTypes.string.isRequired,
  /**
   * 下拉菜单配置 array<string|object>, 会根据传入参数生成菜单。如果item是string，会把item作为MenuItem的key和children；
   * 如果是object，会把title属性作为MenuItem的children，其他属性作为MenuItem对应的属性，如果没有key属性，会把title作为key；
   * 如果有children属性，会根据children生成对应的SubItem
   **/
  menu: PropTypes.array,
  /**
   * 是否取消插入符号 bool
   **/
  noCaret: PropTypes.bool,
  /**
   * 下拉菜单选中时回调 function (eventKey: any, event: Object) => any
   **/
  onSelect: PropTypes.func,
  /**
   * 下拉框是否展开 bool；
   * 使用组件如未传入open属性，点击任何一级的MenuItem都会默认关闭下拉框；
   * 如有传入open属性，下拉框是否展开根据传入的open决定
   **/
  open: PropTypes.bool,
  /**
   * 下拉框展开状态更改时回调 function function(Boolean isOpen, Object event, { String source }) {}
   **/
  onToggle: PropTypes.func,
  /**
   * 下拉框是否右对齐 bool
   **/
  pullRight: PropTypes.bool,
  /**
   * 大小 string，支持large，default，small，xsmall，默认为default
   **/
  bsSize: PropTypes.oneOf(['xs', 'sm', 'medium', 'lg']),
  /**
   * 下拉框显示内容 string|element
   **/
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

const defaultProps: DefaultDropdownButtonProps = { componentClass: ButtonGroup };

DropdownButton.defaultProps = defaultProps;

export default DropdownButton;
