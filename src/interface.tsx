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
  placement?: string;
  trigger?: string | string[];
  content: React.ReactNode;
  children: React.ReactNode;
  shadow?: boolean;
  modifer?: string;
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
  type?:'secondary'
}

export interface StepsProps {
  steps: any[];
  currentStep: number;
  showIcon?: boolean;
  iconSize?: string;
  iconStatus?: string;
}

export interface ModalProps extends Omit<BsModalProps, 'size'> {
  title: string;
  onOk?: () => void;
  confirmText?: string;
  okStyle?: string;
  loading?: boolean;
  hideFooter?: boolean;
  hideHeader?: boolean;
  draggable?: boolean;
  preventDragByTitle?: boolean;
  size?: BsModalProps['size'] | 'xlarge';
}

interface SwitchInput {
  name?: string;
  onChange: any;
}

export interface SwitchProps {
  inline?: boolean;
  input?: SwitchInput;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: any;
}

export interface TimePickerProps {
  placeholder?: string;
  hourStart?: boolean;
  hourEnd?: boolean;
  showSecond?: boolean;
  allowEmpty?: boolean;
  value?: Moment;
  defaultValue?: Moment;
  onChange?: any;
}

export interface TreeData {
  title?: string;
  disabled?: boolean;
  key: string;
  children?: TreeData[];
}

export interface TreeProps extends RCTreeProps {
  data: TreeData[];
  checkable?: boolean;
  showIcon?: boolean;
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
  onToggle?: (isShow: boolean) => void;
  menu?: DropdownButtonMenuItem[];
  children?: React.ReactNode;
  modifer?: string;
  noCaret?: boolean;
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
  value?: string[];
  disabled?: boolean;
  lang?: string;
  format?: string;
  onChange?: (data: Moment[], dataString: string[]) => void;
  onOk?: (date: Moment[]) => void;
  onOpenChange?: (open: boolean) => void;
  showDuration?: boolean;
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
  getTime?: (time: string) => void;
  placeholder?: string;
  reset?: boolean;
  defaultValue?: string;
  disabledDate?: (mtime: Moment | undefined) => boolean;
  lang?: 'en' | 'zh';
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
  id: string;
}

export interface DropdownAlignProps {
  align?: BsDropdownProps['align'];
}
export interface DropdownProps extends DropdownDefaultProps, DropdownAlignProps {
  className?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  customToggle?: boolean;
  pullRight?: boolean;
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
  options?: MenuItemOptions[];
  defaultValue?: string;
  value?: string;
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
  height?: number | string;
  data: T[];
  runwayItems?: number;
  runwayItemsOppsite?: number;
  loader?: React.ReactNode;
  placeholder?: React.ReactNode | string;
  noMoreHint?: React.ReactNode | boolean;
  debug?: boolean;
}
export interface VirtualListProps<T> extends VirtualListDefaultProps<T> {
  query?: Query;
  onQueryChange?: (query: Query) => Promise<void>;
  rowHeight?: number | ((item: object) => number);
  rowRenderer: (item: VirtualRowArgs<T>) => React.ReactNode | Element;
  isFetching?: boolean;
  isReloading?: boolean;
  noMore?: boolean;
  totalCount?: number;
  className?: string;
  isEstimate?: boolean;
}

export interface VirtualSelectBoxDefaultProps<T> {
  rowHeight: number;
  isBtn: boolean;
  disabled: boolean;
  placeholder: string;
  query: Query;
  defaultItem: T;
}
export interface VirtualSelectBoxProps<T> extends VirtualSelectBoxDefaultProps<T> {
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
  item?: T;
  className?: string;
  clear?: boolean;
  onSelect?: Function;
  // onSelect?: (item: T) => void;
  formatOption?: (item: T) => any;
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
  notifications: Map<string, Map<string, NotificationItem>>;
  onDismiss?: Function;
  autoClose?: boolean;
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
  prev?: boolean;
  next?: boolean;
  first?: boolean;
  last?: boolean;
  maxButtons?: number;
  items: number;
  activePage: number;
  onSelectChange: (activePage: number) => void;
}