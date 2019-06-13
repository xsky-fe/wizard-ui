import * as React from 'react';
import ReactIOSSwitch from 'react-ios-switch';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { SwitchProps } from '../../interface';
import 'react-ios-switch/build/bundle.css';
import './style.scss';

const Switch: React.FC<SwitchProps> = props => {
  const { inline, input, name, disabled, onChange, ...rest } = props;
  const switchName = (input && input.name) || name;
  const handleSwitchChange = (checked: boolean) => {
    if (!disabled) {
      if (onChange) {
        onChange(checked);
      }
      input && input.onChange(checked);
    };
  }
  const className = classNames('Switch', {
    'Switch--inline': inline,
  });
  return (
    <div
      data-name={switchName} // 兼容e2e测试中的page-object选择器
      className={className}
    >
      <ReactIOSSwitch className='react-ios-switch-Switch-switch' disabled={disabled} {...input} {...rest} onChange={handleSwitchChange} />
    </div>
  );
}

Switch.propTypes = {
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
