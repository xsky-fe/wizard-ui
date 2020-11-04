import React from 'react';
import { Button as BSButton } from 'react-bootstrap';
import Tooltip from '../Tooltip'
import { ButtonProps } from '../../interface';

export default function Button(props: ButtonProps) {
  const { toolTip, children, ...restProps } = props;
  return (
    toolTip ? (
      <Tooltip
        label={
          <div style={restProps.disabled ? { cursor: "not-allowed" } : {}}>
            <BSButton {...restProps} style={restProps.disabled ? { pointerEvents: "none" } : {}}>
              {children}
            </BSButton>
          </div>
        }
        {...toolTip}
      >
        {toolTip.children}
      </Tooltip>
    ) : <BSButton {...restProps}>{children}</BSButton>
  )
}