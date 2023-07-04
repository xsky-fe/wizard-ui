import React from 'react';
import { Button as BSButton } from 'react-bootstrap';
import Tooltip from '../Tooltip';
import { ButtonProps } from '../../interface';
import classNames from 'classnames';
import './style.scss';

const Button: React.FC<ButtonProps> = (props: any) => {
  const { toolTip, children, ...restProps } = props;
  const { disabled, className = null, block, variant } = restProps;
  const toolTipClassName = disabled ? `Button_Tooltip-Div-Button ${className}` : '';
  const blockClassName = block ? 'btn-block' : '';

  return toolTip ? (
    <Tooltip
      label={
        <div className="Button_Tooltip-Div">
          <BSButton
            variant={variant ? variant : 'default'}
            {...restProps}
            className={classNames(toolTipClassName, blockClassName, className)}
          >
            {children}
          </BSButton>
        </div>
      }
      {...toolTip}
    />
  ) : (
    <BSButton
      variant={variant ? variant : 'default'}
      className={classNames(blockClassName, className)}
      {...restProps}
    >
      {children}
    </BSButton>
  );
};

Button.defaultProps = {
  variant:'info',
  active: false,
  disabled: false,
  block: false
}

export default Button;
