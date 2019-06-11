import * as React from 'react';
import { bsStyles } from 'react-bootstrap/lib/utils/bootstrapUtils';

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