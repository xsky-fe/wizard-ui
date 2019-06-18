import * as React from 'react';

export interface BadgeProps {
  count?: number | string
  showZero?: boolean
  dot?: boolean
  size?: string
  status?: string
  overflowCount?: number
  text?: string
  title?: string
}

export interface IconProps {
  type: string
  className?: string
  onClick?: React.MouseEventHandler
  style?: object
}

export interface TooltipProps {
  iconClass?: string
  icon?: string
  iconAlign?: string
  onClick?: any
  label?: React.ReactNode,
  contrast?: boolean
  style?: string
  placement?: string
  children: React.ReactNode
}

export interface UsageBarProps {
  max?: number
  now?: number
  percent?: number
  unavailableData?: number
  isByte?: boolean
  isPercent?: boolean
  isBulk?: boolean
  withPercent?: boolean
  inline?: boolean
  hideNow?: boolean
  hideRight?: boolean
  showZeroMax?: boolean
  withUnavailable?: boolean
}

export interface LoaderProps {
  bsSize?: string
  bsStyle?: string
  children?: React.ReactNode
}

export interface TabsProps {
  tabs: any[]
  size?: 'small'
  eventKeyName?: string
  direction?: 'right'
  onSelect?: React.MouseEventHandler
}

export interface StepsProps {
  steps: any[]
  currentStep: number
}

export interface ModalProps {
  title: string
  onHide: any
  onOk?: any
  show?: boolean
  style?: React.CSSProperties
  bsSize?: 'sm' | 'medium' | 'lg' | 'xlarge'
  confirmText?: string
  okStyle?: string
  loading?: boolean
}

interface SwitchInput {
  name?: string
  onChange: any
}

export interface SwitchProps {
  inline?: boolean
  input?: SwitchInput
  name?: string
  disabled?: boolean
  handleChange: any
  checked?: boolean
  onChange?: any
}

export interface TimePickerProps {
  placeholder ?: string
  hourStart ?: boolean
  hourEnd ?: boolean
  allowEmpty ?: boolean
  value ?: any
  defaultValue ?: string
  onChange ?: any
}