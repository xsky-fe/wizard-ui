import React from 'react';
import { Button as BSButton } from 'react-bootstrap';
import Tooltip from '../Tooltip';
import { ButtonProps } from '../../interface';
import classNames from 'classnames';
import './style.scss';

const Button: React.FC<ButtonProps> = (props: any) => {
  const { toolTip, children, ...restProps } = props;
  const { disabled, className = null, bsStyle, bsSize, block } = restProps;
  const disabledClassName = disabled ? `Button_Tooltip-Div-Button ${className}` : '';
  const blockClassName = block ? 'btn-block' : '';

  return toolTip ? (
    <Tooltip
      label={
        <div className="Button_Tooltip-Div">
          <BSButton
            variant={bsStyle ? bsStyle : 'default'}
            size={bsSize}
            {...restProps}
            className={classNames(disabledClassName, blockClassName, className)}
          >
            {children}
          </BSButton>
        </div>
      }
      {...toolTip}
    />
  ) : (
    <BSButton
      variant={bsStyle ? bsStyle : 'default'}
      size={bsSize}
      className={classNames(disabledClassName, blockClassName, className)}
      {...restProps}
    >
      {children}
    </BSButton>
  );
};

export default Button;
