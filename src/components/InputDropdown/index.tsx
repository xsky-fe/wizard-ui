import React from 'react';
import * as PropTypes from 'prop-types';
import find from 'lodash/find';
import get from 'lodash/get';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
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
    const option = find(options, { value: getValue() });
    return get(option, 'title');
  }

  function handleSelect(eventKey: unknown) {
    const { input, onChange } = props;
    if (onChange) {
      onChange(eventKey);
    } else if (input) {
      input.onChange(eventKey);
    }
  }
  const { input, meta, options, onChange, ...rest } = props;
  return (
    <DropdownButton
      id={uuid()}
      as={Button}
      variant="info"
      onSelect={handleSelect}
      title={getTitle()}
      {...rest}
    >
      {options &&
        options.map(option => (
          <Dropdown.Item key={option.value} eventKey={option.value}>
            {option.title}
          </Dropdown.Item>
        ))}
    </DropdownButton>
  );
};

InputDropdown.propTypes = {
  /**
   * 下拉选项
   **/
  options: PropTypes.array,
  /**
   * 下拉框是否右对齐，默认为 true
   **/
  align: PropTypes.string,
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
