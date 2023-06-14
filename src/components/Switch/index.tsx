import React from 'react';
import ReactIOSSwitch from 'react-ios-switch';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { SwitchProps } from '../../interface';
import './style.scss';

const Switch: React.FC<SwitchProps> = props => {
  const {
    inline,
    input,
    name,
    disabled,
    onChange,
    checked,
    loading,
    size = 'lg',
    colorIndex = 'default',
    ...rest
  } = props;

  const switchName = (input && input.name) || name;
  const handleSwitchChange = (checked: boolean) => {
    if (!disabled) {
      if (onChange) {
        onChange(checked);
      }
      input && input.onChange(checked);
    }
  };
  const switchClassName = classNames(
    `Switch Switch__${size} Switch__${colorIndex} Switch__${checked ? 'checked' : 'unchecked'}`,
    {
      Switch__inline: inline,
      Switch__disabled: disabled,
      Switch__loading: loading,
    },
  );
  return (
    <div
      data-name={switchName} // 兼容e2e测试中的page-object选择器
      className={switchClassName}
    >
      <ReactIOSSwitch
        className="react-ios-switch-Switch-switch"
        disabled={disabled}
        {...input}
        {...rest}
        checked={checked}
        onChange={!loading ? handleSwitchChange : undefined}
      />
    </div>
  );
};

Switch.propTypes = {
  /**
   * 颜色序号
   **/
  colorIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 开关大小,lg:大，sm:小
   **/
  size: PropTypes.string,
  /**
   * 是否加载中；
   **/
  loading: PropTypes.bool,
  /**
   * 是否禁用；
   **/
  disabled: PropTypes.bool,
  /**
   * 指定当前是否选中；
   **/
  checked: PropTypes.bool,
  /**
   * 是否同行显示；
   **/
  inline: PropTypes.bool,
  /**
   * 为了兼容 e2e 测试中的 page-object 选择器；
   **/
  name: PropTypes.string,
  /**
   * 值变化时候的回调函数；
   **/
  onChange: PropTypes.func,
};

export default Switch;
