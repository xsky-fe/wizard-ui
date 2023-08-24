import React from 'react';
import { Button as BSButton } from 'react-bootstrap';
import Tooltip from '../Tooltip';
import { ButtonProps } from '../../interface';
import classNames from 'classnames';
import './style.scss';

const Button: React.FC<ButtonProps> = (props: any) => {
  const { tooltip, children, block, isIcon, filled, ...restProps } = props;
  const { disabled, className = '', variant } = restProps;
  const tooltipClassName = disabled ? `Button_Tooltip-Div-Button` : '';
  const blockClassName = block ? 'btn-block' : '';
  const iconClassName = isIcon ? 'iconButton' : '';
  const filledClassName = filled ? 'filled' : '';

  return tooltip ? (
    <Tooltip
      label={
        <div className="Button_Tooltip-Div">
          <BSButton
            variant={variant ? variant : 'info'}
            {...restProps}
            className={classNames(
              tooltipClassName,
              blockClassName,
              className,
              iconClassName,
              filledClassName,
            )}
          >
            {children}
          </BSButton>
        </div>
      }
      {...tooltip}
    />
  ) : (
    <BSButton
      variant={variant ? variant : 'info'}
      {...restProps}
      className={classNames(blockClassName, className, iconClassName, filledClassName)}
    >
      {children}
    </BSButton>
  );
};

Button.defaultProps = {
  variant: 'info',
  active: false,
  disabled: false,
  block: false,
};

export default Button;
