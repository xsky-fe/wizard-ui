import * as React from 'react';
import { SelectCallback, Sizes } from 'react-bootstrap';
import { Moment } from 'moment';
import CSS from 'csstype';

export interface Query {
  offset?: number;
  limit?: number;
  q?: string;
}

export interface FetchResponse <T = any> {
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
  placement?: string;
  children: React.ReactNode;
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
  bsStyle?: string;
  children?: React.ReactNode;
}

export interface TabsProps {
  tabs: any[];
  size?: 'small';
  eventKeyName?: string;
  direction?: 'right';
  onSelect?: SelectCallback;
  id?: string;
}

export interface StepsProps {
  steps: any[];
  currentStep: number;
  stepIcon?: string;
  stepIconSize?: string;
  stepIconStatus?: string;
  alternativeLabel?: boolean;
}

export interface ModalProps {
  title: string;
  onHide: any;
  onOk?: any;
  show?: boolean;
  style?: React.CSSProperties;
  bsSize?: 'sm' | 'medium' | 'lg' | 'xlarge';
  confirmText?: string;
  okStyle?: string;
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
  componentClass: any;
}
export interface DropdownButtonProps extends DefaultDropdownButtonProps {
  bsStyle?: string;
  id: string;
  onSelect?: SelectCallback;
  onToggle?: (isOpen: boolean) => void;
  bsSize?: Sizes;
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
  title: string;
  icon?: string;
  isFirst?: boolean;
  children?: any[];
}

export interface NavigationProps {
  navGroups: {
    [key: string]: NavigationGroup;
  };
  toggled?: boolean;
  logo?: boolean;
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
  children: React.ReactNode;
  bsStyle?: string;
  show?: boolean;
  showIcon?: boolean;
  bsClass?: string;
  onDismiss?: () => void;
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
  onChange?: SelectCallback;
  input?: any;
  meta?: any;
}
export type VirtualItem = {
  id?: number;
} | string | number
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
  fetchData: (isReloading: boolean, query: Query, search?: string) => Promise<{
    query: Query;
    items: T[];
    totalCount: number;
    error?: string;
  }>;
  item?: T;
  className?: string;
  clear?: boolean;
  onSelect?: (item: T) => void;
  formatOption?: (item: T) => T;
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
