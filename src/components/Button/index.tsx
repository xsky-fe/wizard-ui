import React, { forwardRef } from 'react';
import { Button as BSButton } from 'react-bootstrap';
import Tooltip from '../Tooltip';
import { ButtonProps } from '../../interface';
import classNames from 'classnames';
import './style.scss';

const Button = forwardRef((props: ButtonProps, ref) => {
  const { tooltip, children, block, dark, size, ...restProps } = props;
  const { disabled, className = '', variant } = restProps;
  const tooltipClassName = disabled ? `Button_Tooltip-Div-Button` : '';
  const blockClassName = block ? 'btn-block' : '';
  const darkClassName = dark ? 'dark' : '';
  console.log(ref);
  return tooltip ? (
    <Tooltip
      label={
        <div className="Button_Tooltip-Div">
          <BSButton
            ref={ref}
            size={size as any}
            variant={variant ? variant : 'info'}
            {...restProps}
            className={classNames(tooltipClassName, blockClassName, className, darkClassName)}
          >
            {children}
          </BSButton>
        </div>
      }
      {...tooltip}
    />
  ) : (
    <BSButton
      ref={ref}
      size={size as any}
      variant={variant ? variant : 'info'}
      {...restProps}
      className={classNames(blockClassName, className, darkClassName)}
    >
      {children}
    </BSButton>
  );
});

Button.defaultProps = {
  variant: 'info',
  active: false,
  disabled: false,
  block: false,
};

export default Button;
