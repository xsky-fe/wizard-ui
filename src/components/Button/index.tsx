import React from 'react';
import * as PropTypes from 'prop-types';
import { Button as BSButton, ButtonProps as BsButtonProps } from 'react-bootstrap';
import Tooltip from '../Tooltip'
import { ButtonProps } from '../../interface';
import './style.scss';
function Button(props: ButtonProps & BsButtonProps) {
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

Button.propTypes = {
  /**
   * toolTip 即为 Tooltip 组件里的属性
   */
  toolTip: PropTypes.object,
  /**
   * Button 子节点内的具体内容；
   */
  children: PropTypes.node,
  /**
   * 
   */
  /**
   * 剩余即为 BS-Button 里的属性
   */
}

export default Button;