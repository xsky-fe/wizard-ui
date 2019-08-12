import * as React from 'react';
import { SelectCallback, Sizes } from 'react-bootstrap';
import { Moment } from 'moment';

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
}

export interface StepsProps {
  steps: any[];
  currentStep: number;
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

export interface DropdownButtonMenuItem {
  key?: string | number;
  children: DropdownButtonMenuItem[];
  title: string;
}

export interface DropdownButtonProps {
  bsStyle?: string;
  id: string;
  onSelect?: SelectCallback;
  onToggle?: (isOpen: boolean) => void;
  bsSize?: Sizes;
  title?: string | React.ReactNode;
  menu?: DropdownButtonMenuItem[];
  children: React.ReactNode;
  componentClass?: any;
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

export interface PanelProps {
  // header?: React.ReactNode;
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  bsStyle?: string;
  bg?: string;
  text?: string;
}

