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
  type: string,
  className?: string,
}