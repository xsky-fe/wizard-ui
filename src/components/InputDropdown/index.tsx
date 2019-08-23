import React from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import { DropdownButton, MenuItem, InputGroup } from 'react-bootstrap';
import { uuid } from '../../utils';
import { InputDropdownProps } from '../../interface';

const InputDropdown = (props: InputDropdownProps) => {
  function getValue() {
    const { input, value, defaultValue } = props;
    if (input && input.value !== undefined) {
      return input.value;
    }
    return value !== undefined ? value : defaultValue;
  }

  function getTitle() {
    const { options } = props;
    const option = lodash.find(options, { value: getValue() });
    return lodash.get(option, 'title');
  }

  function handleSelect(eventKey: any) {
    const { input, onChange } = props;
    if (onChange) {
      onChange(eventKey);
    } else if (input) {
      input.onChange(eventKey);
    }
  }
  const { input, meta, options, ...rest } = props;
  return (
    <DropdownButton
      id={uuid()}
      {...rest}
      componentClass={InputGroup.Button}
      onSelect={handleSelect}
      title={getTitle()}
    >
      {options &&
        options.map(option => (
          <MenuItem key={option.value} eventKey={option.value}>
            {option.title}
          </MenuItem>
        ))}
    </DropdownButton>
  );
}

InputDropdown.propTypes = {
  /**
   * 下拉选项
   **/
  options: PropTypes.array,
  /**
   * 下拉框是否右对齐，默认为 true
   **/
  pullRight: PropTypes.bool,
  /**
   * 默认值
   **/
  defaultValue: PropTypes.string,
  /**
   * value 变化后回调
   **/
  onChange: PropTypes.func,
  /**
   * value，传入 value 时变为受控组件
   **/
  value: PropTypes.string,
};

InputDropdown.defaultProps = {
  pullRight: true,
};

export default InputDropdown;