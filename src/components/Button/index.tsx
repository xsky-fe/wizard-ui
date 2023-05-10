import React from 'react';
import { Button as BSButton } from 'react-bootstrap';
import Tooltip from '../Tooltip';
import { ButtonProps } from '../../interface';
import './style.scss';

const Button: React.FC<ButtonProps> =  (props: any)  => {
  const { toolTip, children, ...restProps } = props;
  const { disabled, className=null, bsStyle } = restProps;
  return toolTip ? (
    <Tooltip
      label={
        <div className="Button_Tooltip-Div">
          <BSButton
            variant={bsStyle}
            {...restProps}
            className={disabled ? `Button_Tooltip-Div-Button ${className}` : `${className}`}
          >
            {children}
          </BSButton>
        </div>
      }
      {...toolTip}
    />
  ) : (
    <BSButton variant={bsStyle} {...restProps}>{children}</BSButton>
  );
};

export default Button;