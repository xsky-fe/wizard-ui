import React from 'react';
import { Button as BSButton } from 'react-bootstrap';
import Tooltip from '../Tooltip'
import { ButtonProps } from '../../interface';

export default function Button(props: ButtonProps) {
  const { toolTip, children, ...restProps } = props;
  // const { label, children, iconClass } = toolTip || {};
  const title = '1111111';
  const disabled = true;

  return (
    toolTip ? (
      <Tooltip label={title}>
        <span>
          <BSButton {...restProps} disabled={disabled} style={disabled ? { pointerEvents: "none" } : {}}>
            {'一个禁用的按钮'}
          </BSButton>
        </span>
      </Tooltip>
    ) : (
        <BSButton  {...restProps}>{children}</BSButton>
      )
  )
}