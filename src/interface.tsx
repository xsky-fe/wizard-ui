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