import * as React from 'react';
import { Moment } from 'moment';
import {
  AlertProps as BSAlertProps,
  TabsProps as BSTabsProps,
} from 'react-bootstrap';
import { Placement } from 'react-bootstrap/Overlay'
import CSS from 'csstype';

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

export type Variant = "danger" | "info" | "warning" | "success" | "primary" | "secondary" | "dark" | "light";

export type BtnVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | 'link'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-dark'
  | 'outline-light';

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
  count?: number | string;
  showZero?: boolean;
  dot?: boolean;
  size?: string;
  status?: string;
  overflowCount?: number;
  text?: string;
  title?: string;
}

export interface IconProps {
  type: string;
  color?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
  style?: object;
}

export interface TooltipProps {
  iconClass?: string;
  icon?: string;
  iconAlign?: string;
  onClick?: any;
  label?: React.ReactNode;
  contrast?: boolean;
  style?: string;
  placement?: Placement;
  children: React.ReactNode;
  className?: string;
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
}

export interface LoaderProps {
  bsSize?: string;
  variant?: string;
  children?: React.ReactNode;
}

export interface TabsProps extends BSTabsProps {
  tabs: any[];
  size?: 'small';
  eventKeyName?: string;
  direction?: 'right';
}

export interface StepsProps {
  steps: any[];
  currentStep: number;
  showIcon?: boolean;
  iconSize?: string;
  iconStatus?: string;
}

export interface ModalProps {
  title: string;
  onHide: any;
  onOk?: any;
  show?: boolean;
  style?: React.CSSProperties;
  bsSize?: "sm" | "lg" | "xl";
  confirmText?: string;
  okStyle?: BtnVariant;
  loading?: boolean;
  hideFooter?: boolean;
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
  handleChange: any;
  checked?: boolean;
  onChange?: any;
}

export interface TimePickerProps {
  placeholder?: string;
  hourStart?: boolean;
  hourEnd?: boolean;
  allowEmpty?: boolean;
  value?: any;
  defaultValue?: string;
  onChange?: any;
}

export interface TreeData {
  title: string;
  disabled?: boolean;
  key: string;
  children?: TreeData[];
}

export interface TreeProps {
  data: TreeData[];
  checkable?: boolean;
  prefixCls?: string;
  showIcon?: boolean;
  selectable?: boolean;
}

export interface SubMenuProps {
  name?: string;
  title: string;
  children: React.ReactNode;
}

export type DropdownButtonMenuItem =
  | {
      key?: string | number;
      children?: DropdownButtonMenuItem[];
      title: string;
      eventKey?: string;
      'data-action'?: string;
    }
  | string;

export interface DefaultDropdownButtonProps {
  as: any;
}
export interface DropdownButtonProps extends DefaultDropdownButtonProps {
  variant?: string;
  id: string;
  onSelect?: Function;
  onToggle?: (isOpen: boolean) => void;
  bsSize?: string;
  title?: string | React.ReactNode;
  menu?: DropdownButtonMenuItem[];
  children?: React.ReactNode;
  modifer?: string;
  disabled?: boolean;
  dropup?: boolean;
  noCaret?: boolean;
  open?: boolean;
  pullRight?: boolean;
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
export interface AlertProps extends BSAlertProps {
  children: React.ReactNode;
  show?: boolean;
  showIcon?: boolean;
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
  children?: React.ReactNode;
  bg?: string;
  text?: string;
  className?: string;
  header?: React.ReactNode;
  collapsible?: boolean;
  expanded?: boolean;
}

export interface DropdownDefaultProps {
  id: string;
}

export interface DropdownProps extends DropdownDefaultProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  customToggle?: boolean;
  pullRight?: boolean;
}

export interface MenuItemOptions {
  title: string;
  value: string;
}
export interface InputDropdownProps {
  options?: MenuItemOptions[];
  defaultValue?: string;
  value?: string;
  onChange?: Function;
  input?: any;
  meta?: any;
}
export interface MultiVirtualSelectItem {
  label: string;
  value: number | string;
}
export type VirtualItem =
  | MultiVirtualSelectItem
  | object
  | string
  | number;
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
  onClose?: Function;
}
export interface NotificationListProps {
  notifications: Map<string, Map<string, NotificationItem>>;
  onClose?: Function;
  autoClose?: boolean;
  format?: Function;
}

export interface NotificationListStates {
  expanded?: boolean;
}
