import React from 'react';
import { SelectCheckItemProps } from '../../interface';

class SelectCheckItem extends React.PureComponent<SelectCheckItemProps> {
  handleSelect = () => {
    this.props.onSelect(this.props.option);
  };
  render() {
    const { option, selected, className, style } = this.props;
    const { label } = option;
    return (
      <div className={className} style={style} onClick={this.handleSelect} title={label}>
        <input type="checkbox" checked={selected} readOnly /> {label}
      </div>
    );
  }
}

export default SelectCheckItem;
