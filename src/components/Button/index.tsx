import React from 'react';
import { Button as BSButton } from 'react-bootstrap';
import Tooltip from '../Tooltip'
import { ButtonProps } from '../../interface';
import './style.scss';

interface Button extends ButtonProps {};

const  Button:React.FC<ButtonProps>  = props => {
  const { toolTip, children, ...restProps } = props;
  return (
    toolTip ? (
      <Tooltip
        label={
          <div className="Button_Tooltip-Div">
            <BSButton {...(restProps as any)} className={restProps.disabled ? 'Button_Tooltip-Div-Button' : ''}>
              {children}
            </BSButton>
          </div>
        }
        {...toolTip}
      />
    ) : <BSButton {...(restProps as any)}>{children}</BSButton>
  )
}

export default Button;