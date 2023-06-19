import * as React from 'react';
// import { SelectCallback, Sizes } from 'react-bootstrap';
import { Moment } from 'moment';
import {
  ModalProps as BsModalProps,
  DropdownButtonProps as BsDropdownButtonProps,
  DropdownProps as BsDropdownProps,
  PaginationProps as BsPaginationProps,
} from 'react-bootstrap';
import { ButtonProps as BaseButtonProps } from '@restart/ui/Button';
import { ButtonVariant } from 'react-bootstrap/esm/types';
import CSS from 'csstype';
import { TreeProps as RCTreeProps } from 'rc-tree';

export interface Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  entries(): IterableIterator<[K, V]>;
  forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
  get(key: K): V;
  has(key: K): boolean;
  keys(): IterableIterator<K>;
  set(key: K, value?: V): Map<K, V>;
  size: number;
  values(): IterableIterator<V>;
  [Symbol.iterator](): IterableIterator<[K, V]>;
  [Symbol.toStringTag]: string;
}

export interface Query {
  offset?: number;
  limit?: number;
  q?: string;
}

export interface FetchResponse<T = any> {
  response?: {
    [res: string]: T | T[];
  };
  error?: string;
}

export interface BadgeProps {
  /**数值 */
  count?: number | string;
  /**数值为0时，是否展示 Badge */
  showZero?: boolean;
  /**展示一个小点 */
  dot?: boolean;
  /**点的大小，只在dot为true的时候生效 */
  size?: string;
  /**设置状态颜色 ['default', 'primary', 'success', 'info', 'critical', 'warning', 'danger'] */
  status?: string;
  /**封顶数值 */
  overflowCount?: number;
  /**状态点对应的文本 */
  text?: string;
  /**鼠标hover在点上展现的文字, 默认为count */
  title?: string;
}

export interface IconProps {
  type: string;
  color?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
  style?: object;
  cursor?: boolean;
  size?: number | string;
}

export interface TooltipProps {
  iconClass?: string;
  icon?: string;
  iconAlign?: string;
  onClick?: any;
  label?: React.ReactNode;
  contrast?: boolean;
  style?: React.CSSProperties;
  placement?: string;
  children: React.ReactNode;
  className?: string;
}

export interface PopoverProps {
  /**提示框的位置，可选'top'，'right'，'bottom'，'left'。若不传入这一属性，会根据 OverlayTrigger 的位置，自适应选取提示框的位置； */
  placement?: string;
  /**触发动作，字符串或数组，默认为`hover`； */
  trigger?: 'hover' | 'click' | 'focus' | Array<'hover' | 'click' | 'focus'>;
  /**提示框的内容，子节点； */
  content: React.ReactNode;
  /**选定的元素 */
  children: React.ReactNode;
  /**箭头颜色,默认白色,为true时为紫色 */
  shadow?: boolean;
  /**自定义添加的类名className */
  modifer?: string;
  /**是否点击外部区域关闭popover； */
  rootClose?: boolean;
}

interface UsageBarSerie {
  name: any;
  value: number;
  bsStyle?: string;
}

export interface UsageBarProps {
  max?: number;
  now?: number;
  percent?: number;
  unavailableData?: number;
  isByte?: boolean;
  isPercent?: boolean;
  isBulk?: boolean;
  withPercent?: boolean;
  inline?: boolean;
  hideNow?: boolean;
  hideRight?: boolean;
  showZeroMax?: boolean;
  withUnavailable?: boolean;
  isExcludeWarning?: boolean;
  waterLine?: number;
  isHideFooter?: boolean;
  extraFooterInfo?: string;
  formatType?: string;
  series?: Array<UsageBarSerie>;
  withLenged?: boolean;
}

export interface LoaderProps {
  bsSize?: string;
  bsStyle?: string;
  children?: React.ReactNode;
}

export interface TabsProps {
  /**包含选项卡的title、key、面板内容 */
  tabs: any[];
  /**大小，提供默认和 small 两种大小 */
  size?: 'small';
  /**key的名称可自定义 */
  eventKeyName?: string;
  /**tab位置，默认靠左，提供默认和 right 两种位置 */
  direction?: 'right';
  /**切换面板回调 */
  onSelect?: () => void;
  /**状态为active的选项的key */
  activeKey?: string;
  /**展示一行中可见的tab个数，其他tab数放到下拉栏目中 */
  limitNum?: number;
  /**切换内容是否使用动画过渡效果 */
  transition?: boolean;
  /**切换到一个新的选项卡时，仅挂载该选项卡的内容到 DOM 中 */
  mountOnEnter?: boolean;
  /**离开一个选项卡时在dom中卸载该选项卡的内容，默认隐藏，提升渲染性能 */
  unmountOnExit?: boolean;
  /**类名 */
  className?: string;
  /**可切换至secondary样式 */
  type?: 'secondary';
}

export interface StepsProps {
  /**步骤条title的集合传入`string`时候显示内容，传入对象时显示`label`，当`showIcon=false`显示count内容 */
  steps: any[];
  /**当前步骤，从 1 开始计数 */
  currentStep: number;
  /**步骤的图标 `true`代表圆点，`false`代表数字 */
  showIcon?: boolean;
  /**步骤图标大小，stepIcon为`dot`时候生效 */
  iconSize?: string;
  /**步骤图标状态 */
  iconStatus?: string;
}

export interface ModalProps extends Omit<BsModalProps, 'size'> {
  /**标题 */
  title?: string;
  /**确定、提交操作 */
  onOk?: () => void;
  /**确定、提交按钮文案 */
  confirmText?: string;
  /**确定、提交按钮样式 */
  okStyle?: string;
  /**是否展示加载 UI */
  loading?: boolean;
  /**隐藏 footer */
  hideFooter?: boolean;
  /**隐藏 头部 */
  hideHeader?: boolean;
  /**开启拖拽功能（默认为true） */
  draggable?: boolean;
  /**在title区域禁掉拖拽功能 */
  preventDragByTitle?: boolean;
  /**对话框大小 */
  size?: BsModalProps['size'] | 'xlarge';
  /**点击close按钮时触发的回调 */
  onHide?: () => void;
}

interface SwitchInput {
  name?: string;
  onChange: any;
}

export interface SwitchProps {
  /**是否同行显示 */
  inline?: boolean;
  /** */
  input?: SwitchInput;
  /**为了兼容 e2e 测试中的 page-object 选择器 */
  name?: string;
  /**是否禁用 */
  disabled?: boolean;
  /**指定当前是否选中 */
  checked?: boolean;
  /**	值变化时候的回调函数 */
  onChange?: any;
}

export interface TimePickerProps {
  /**默认展示文本 */
  placeholder?: string;
  /**分钟固定为 0 的小时选择 */
  hourStart?: boolean;
  /**分钟固定为 59 的小时选择 */
  hourEnd?: boolean;
  /**是否显示秒 */
  showSecond?: boolean;
  /**是否允许为空 */
  allowEmpty?: boolean;
  /**当前值 */
  value?: Moment;
  /**默认值 */
  defaultValue?: Moment;
  /**改变时间会触发 onChange 执行 */
  onChange?: any;
}

export interface TreeData {
  title?: string;
  disabled?: boolean;
  key: string;
  children?: TreeData[];
}

export interface TreeProps extends RCTreeProps {
  /**tree 数据  */
  data: TreeData[];
  /**是否展示 checkbox 勾选框 */
  checkable?: boolean;
  /**是否展示收缩图标 */
  showIcon?: boolean;
  /**title 部分是否单独可选 */
  selectable?: boolean;
}

export interface SubMenuProps {
  name?: string;
  title?: string;
  children: React.ReactNode;
}

export type DropdownButtonMenuItem =
  | {
      key?: string | number;
      children?: DropdownButtonMenuItem[];
      title?: string;
      eventKey?: string;
      'data-action'?: string;
      onClick?: any;
      onSelect?: Function;
      disabled?: boolean;
      toolTip?: TooltipProps;
      divider?: boolean;
    }
  | string;

export type ButtonSizes = 'sm' | 'lg' | 'xs';

export interface DropdownButtonProps extends Omit<BsDropdownButtonProps, 'children' | 'size'> {
  /**下拉框展开状态更改时回调 */
  onToggle?: (isShow: boolean) => void;
  /**
   * 下拉菜单配置 array<string|object>, 会根据传入参数生成菜单。如果item是string，会把item作为MenuItem的key和children；
   * 如果是object，会把title属性作为MenuItem的children，其他属性作为MenuItem对应的属性，如果没有key属性，会把title作为key；
   * 如果有children属性，会根据children生成对应的SubItem
   **/
  menu?: DropdownButtonMenuItem[];
  /**下拉框子元素 node，不能和menu同时使用 */
  children?: React.ReactNode;
  /**下拉框样式修改器 在一些场景中下拉框有些特殊样式，支持table-toolbar, list-toolbar, detail-toolbar*/
  modifer?: string;
  /**是否取消插入符号 */
  noCaret?: boolean;
  /**大小 */
  size?: ButtonSizes;
}

export interface NavigationGroup {
  title: string | React.ReactNode;
  icon?: string;
  isFirst?: boolean;
  children?: any[];
  component?: any;
  toggled?: boolean;
}

export interface NavigationProps {
  navGroups: {
    [key: string]: NavigationGroup;
  };
  toggled?: boolean;
  logo?: React.ReactNode | string;
  expandedKeys?: string[];
}

export interface RangePickerProps {
  /**当前值 */
  value?: string[];
  /**是否禁用 */
  disabled?: boolean;
  /**语言,可选中文/英文,根据浏览器的本地存储变量LOCALE决定切换。 */
  lang?: string;
  /**格式化日期 */
  format?: string;
  /**改变时间区间时触发的回调 */
  onChange?: (data: Moment[], dataString: string[]) => void;
  /**点击确定触发的回调 */
  onOk?: (date: Moment[]) => void;
  /**打开/关闭选择器时调用 */
  onOpenChange?: (open: boolean) => void;
  /**是否展示直接选择区间 */
  showDuration?: boolean;
  /**默认时间区间 */
  defaultValue?: Moment[];
}

export interface RangePickerState {
  value: Moment[] | string[];
  open: boolean;
}
export interface AlertProps {
  /**配置alert内容 */
  children: React.ReactNode;
  /**配置alert样式（主题） */
  bsStyle?: 'warning' | 'error' | 'info';
  /**配置alert文字的位置, 居中、靠左、无 */
  textAlign?: 'left' | 'center' | 'inline';
  /**配置alert是否显示 */
  show?: boolean;
  /**配置是否显示图标 */
  showIcon?: boolean;
  bsClass?: string;
  /**配置关闭alert时触发的事件 */
  onDismiss?: () => void;
  /**配置alert关闭时消失方向 */
  dismissDirection?: string;
}

export interface DatePickerDefaultProps {
  disabled?: boolean;
  showTime?: boolean;
}

export interface DatePickerProps extends DatePickerDefaultProps {
  /**获取时间的回调 */
  getTime?: (time: string) => void;
  /**占位文本 */
  placeholder?: string;
  /**是否重置 */
  reset?: boolean;
  /**默认值 */
  defaultValue?: string;
  /**是否禁用当前日期的选择 */
  disabledDate?: (mtime: Moment | undefined) => boolean;
  /**语言选择:中文/英文 */
  lang?: 'en' | 'zh';
  /**是否禁用 */
  disabled?: boolean;
}

export interface PanelProps {
  /**展示卡片内容 */
  children: React.ReactNode;
  /**类名 */
  className?: string;
  /**面板头部内容 */
  header?: React.ReactNode;
  /**是否折叠 */
  collapsible?: boolean;
  /**是否展开(需要和collapsible配合使用) */
  expanded?: boolean;
  /**是否是内嵌面板 */
  embedded?: boolean;
  /**卡片内边距的大小 */
  innerPaddingSize?: 'default' | 'sm' | 'xs';
  /**点击的回调 */
  onSelect?: () => void;
}

export interface DropdownDefaultProps {
  /**元素 id，默认为 CustomDropdown */
  id: string;
}

export interface DropdownAlignProps {
  /**下拉框的位置 */
  align?: BsDropdownProps['align'];
}
export interface DropdownProps extends DropdownDefaultProps, DropdownAlignProps {
  /**元素 class 名称 */
  className?: string;
  /**下拉框收起时展示内容;启用customToggle时在此传入自定义内容,不传默认为三角 */
  title?: React.ReactNode;
  /**下拉框展开时详细内容 */
  children?: React.ReactNode;
  /**启用自定义toggle */
  customToggle?: boolean;
}

export interface MenuItemOptions {
  title: string;
  value: string;
}
export interface InputMeta {
  touched: boolean;
  error: string;
  warning: string;
  valid: boolean;
  invalid: boolean;
  asyncValidating: boolean;
  submitFailed: boolean;
}
export interface InputDropdownProps extends DropdownAlignProps {
  /**下拉选项 */
  options?: MenuItemOptions[];
  /**默认值 */
  defaultValue?: string;
  /**传入 value 时变为受控组件 */
  value?: string;
  /**value 变化后回调 */
  onChange?: Function;
  input?: {
    [key: string]: any;
    value: string;
  };
  meta?: InputMeta;
}
export interface MultiVirtualSelectItem {
  label: string;
  value: number | string;
}
export type VirtualItem = MultiVirtualSelectItem | object | string | number;
export interface SelectCheckItemProps {
  onSelect: Function;
  selected: boolean;
  option: MultiVirtualSelectItem;
  className?: string;
  style?: object;
}
export interface VirtualRowArgs<T> {
  index: number;
  item: T;
  prevItem: T | null;
  nextItem: T | null;
  style: CSS.Properties;
}
export interface VirtualAnchorItem {
  index: number;
  offset: number;
}
export interface VirtualListState {
  startIndex: number;
  endIndex: number;
}
export interface VirtualListDefaultProps<T> {
  /**虚拟列表的高度 */
  height?: number | string;
  /**列表数据 */
  data: T[];
  /** 行高 */
  runwayItems?: number;
  /** 行高 */
  runwayItemsOppsite?: number;
  /** 数据加载中时展示 */
  loader?: React.ReactNode;
  /** 默认展示文本 */
  placeholder?: React.ReactNode | string;
  /** 没有需要加载的数据时的展示 */
  noMoreHint?: React.ReactNode | boolean;
  /** Debug */
  debug?: boolean;
}
export interface VirtualListProps<T> extends VirtualListDefaultProps<T> {
  /** 确定异步数据的 offset 和 limit */
  query?: Query;
  /** 监听 query 改变 */
  onQueryChange?: (query: Query) => Promise<void>;
  /** 行高 */
  rowHeight?: number | ((item: object) => number);
  /** 渲染 row UI */
  rowRenderer: (item: VirtualRowArgs<T>) => React.ReactNode | Element;
  /** 是否在获取数据 */
  isFetching?: boolean;
  isReloading?: boolean;
  /** 是否展示没有多余的数据 */
  noMore?: boolean;
  /** 总数 */
  totalCount?: number;
  className?: string;
  /** 是否开启计算 */
  isEstimate?: boolean;
}

export interface VirtualSelectBoxDefaultProps<T> {
  /** 每项 select 的行高 */
  rowHeight: number;
  /** 是否使用 button 格式 UI */
  isBtn: boolean;
  /** 是否禁用操作 */
  disabled: boolean;
  /**默认展示文案 */
  placeholder: string;
  /**查询条件 */
  query: Query;
  defaultItem: T;
}
export interface VirtualSelectBoxProps<T> extends VirtualSelectBoxDefaultProps<T> {
  /**获取异步数据的函数 */
  fetchData: (
    isReloading: boolean,
    query: Query,
    search?: string,
  ) => Promise<{
    query: Query;
    items: T[];
    totalCount: number;
    error?: string;
  }>;
  /**选中资源项 */
  item?: T;
  className?: string;
  /**是否有清除按钮 */
  clear?: boolean;
  /**选中时的回调 */
  onSelect?: Function;
  // onSelect?: (item: T) => void;
  /**格式化 onSelect 输出数据 */
  formatOption?: (item: T) => any;
  /**多选 */
  multi?: boolean;
  value?: any[];
}
export interface VirtualSelectBoxState<T> {
  search: string;
  items: T[];
  query: Query;
  isFetching: boolean;
  totalCount: number;
  isOpen: boolean;
  isReloading: boolean;
  error?: string;
}

export type NotificationItemStatus = 'success' | 'info' | 'process' | 'warning' | 'danger';
export interface NotificationItem {
  id: string;
  status: NotificationItemStatus;
  text: string;
  title?: React.ReactNode | string;
}
export interface NotificationProps extends NotificationItem {
  autoClose?: boolean;
  counter: number;
  intervalMap?: {
    set: (key: string | number, func: () => void, time: number) => void;
    clear: (key: string | number) => void;
    has: (key: string | number) => boolean;
  };
  onDismiss?: Function;
}
export interface NotificationListProps {
  /**通知栏信息 */
  notifications: Map<string, Map<string, NotificationItem>>;
  /**操作移除单个通知栏时的回调 */
  onDismiss?: Function;
  /**2s后自动关闭 */
  autoClose?: boolean;
  /**统一格式化通知栏目的数据 */
  format?: Function;
}

export interface NotificationListStates {
  expanded?: boolean;
}

export interface ButtonProps extends BaseButtonProps {
  /**按钮文字提示 */
  toolTip?: TooltipProps;
  /**按钮占据整行 */
  block?: boolean;
  /**按钮的状态 */
  active?: boolean;
  /**按钮的背景颜色 */
  variant?: ButtonVariant;
  /**按钮的大小 */
  size?: ButtonSizes;
  /**按钮禁用 */
  disabled?: boolean;
}

export interface HeaderToggleProps {
  eventKey: string | any;
}

export interface PaginationProps extends BsPaginationProps {
  /**显示上一页 */
  prev?: boolean;
  /**显示下一页 */
  next?: boolean;
  /**显示第一页 */
  first?: boolean;
  /**显示最后页 */
  last?: boolean;
  /**可显示的最多页码数 */
  maxButtons?: number;
  /**页码数 */
  items: number;
  /**active状态的页码 */
  activePage: number;
  /**页码改变的回调 */
  onSelectChange: (activePage: number) => void;
}
