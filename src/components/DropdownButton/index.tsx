import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DropdownButton as BootstrapDropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { DropdownButtonMenuItem, DropdownButtonProps } from '../../interface';
import cloneDeep from 'lodash/cloneDeep';
import omit from 'lodash/omit';
import Tooltip from '../Tooltip';
import SubMenu from '../SubMenu';
import './style.scss';

function randomId() {
  return Math.random()
    .toString(36)
    .substring(2);
}

function renderContent(
  menu: DropdownButtonMenuItem[] = [],
  setButtonShow: Function,
  isDifferentMenu: boolean,
  show?: boolean,
) {
  if (menu instanceof Array) {
    return menu.map(m => renderMenu(m, setButtonShow, isDifferentMenu, show));
  }
  return menu;
}

function usePrevious(value: any) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function renderMenu(
  menu: DropdownButtonMenuItem,
  setButtonShow: Function,
  isDifferentMenu: boolean,
  show?: boolean,
) {
  const item = cloneDeep(menu);
  if (!item) {
    return null;
  }
  if (typeof item === 'string') {
    return (
      <Dropdown.Item
        key={item}
        onClick={() => {
          setButtonShow(!!show);
        }}
      >
        {item}
      </Dropdown.Item>
    );
  }
  if (!item.key && isDifferentMenu) {
    item.key = randomId();
  }
  if (item.children && item.children.length) {
    return (
      <SubMenu key={item.key} title={item.title} name={item.children[0]['data-action']}>
        {renderContent(item.children, setButtonShow, isDifferentMenu, show)}
      </SubMenu>
    );
  }
  if (item.divider) {
    return <Dropdown.Divider key={item.key} />;
  }
  const handleItemSelect = (eventKey: any) => {
    const { onSelect } = item;
    setButtonShow(!!show);
    // 如果有传入 onSelect 回调函数，会继续执行传入的回调函数
    if (onSelect) onSelect(eventKey);
  };
  const menuProps = omit(item, ['tooltip', 'divider']);

  return (
    <Dropdown.Item {...menuProps} onSelect={handleItemSelect}>
      {item.tooltip ? (
        <Tooltip {...item.tooltip} label={item?.tooltip?.label || item.title} placement={item?.tooltip?.placement || 'right'}>
          {item.tooltip.children}
        </Tooltip>
      ) : (
        item.title
      )}
    </Dropdown.Item>
  );
}

const DropdownButton = (props: DropdownButtonProps) => {
  const getContainerClass = () => {
    const { modifer, noCaret } = props;
    let className = 'dropdown-container';
    if (modifer) {
      className += ' ' + modifer;
    }
    if (noCaret) {
      className += ' ' + 'dropdown-noCaret';
    }
    return className;
  };
  const getOnToggle = (isShow: boolean) => {
    const { onToggle } = props;
    // 没有传入 show 属性，下拉框点击 MenuItem 会合起；
    if (!props.hasOwnProperty('show')) {
      setButtonShow(isShow);
    }
    // 如果有传入 onToggle 回调函数，会继续执行传入的回调函数
    if (onToggle) onToggle(isShow);
  };

  const { id, variant, menu, children, show, title, size, ...rest } = props;
  const prevMenu = usePrevious(menu);
  const isDifferentMenu = prevMenu !== menu;

  const [buttonShow, setButtonShow] = React.useState<boolean>(!!show);
  const containerClassName = getContainerClass();
  return (
    <BootstrapDropdownButton
      variant={variant || 'default'}
      id={id}
      title={title}
      onToggle={(isShow: boolean) => getOnToggle(isShow)}
      className={containerClassName}
      show={props.hasOwnProperty('show') ? show : buttonShow}
      /* @ts-ignore */
      size={size}
      {...rest}
    >
      {menu ? renderContent(menu, setButtonShow, isDifferentMenu, show) : children}
    </BootstrapDropdownButton>
  );
};

DropdownButton.propTypes = {
  /**
   * 样式 string，支持default，primary，success，info，warning，danger，默认为default
   **/
  variant: PropTypes.string,
  /**
   * 下拉框子元素 node，不能和menu同时使用
   **/
  children: PropTypes.node,
  /**
   * 元素类型 elementType
   **/
  as: PropTypes.element,
  /**
   * 下拉框样式修改器 string，在一些场景中下拉框有些特殊样式，支持table-toolbar, list-toolbar, detail-toolbar
   **/
  modifer: PropTypes.string,
  /**
   * 是否禁用 bool
   **/
  disabled: PropTypes.bool,
  /**
   * 下拉框弹出方向
   **/
  drop: PropTypes.oneOf(['up', 'up-centered', 'start', 'end', 'down', 'down-centered']),
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
   * 使用组件如未传入show属性，点击任何一级的MenuItem都会默认关闭下拉框；
   * 如有传入show属性，下拉框是否展开根据传入的show决定
   **/
  show: PropTypes.bool,
  /**
   * 下拉框展开状态更改时回调 function function(Boolean isShow, Object event, { String source }) {}
   **/
  onToggle: PropTypes.func,
  /**
   * 下拉框对齐方向
   **/
  align: PropTypes.string,
  /**
   * 大小 string，支持large，default，small，xsmall，默认为default
   **/
  size: PropTypes.string,
  /**
   * 下拉框显示内容 string|element
   **/
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

DropdownButton.defaultProps = { as: ButtonGroup };

export default DropdownButton;