import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IconProps } from '../../interface';

const Icon: React.FC<IconProps> = props => {
  const { type, className } = props;
  const cls = `${className} icon icon-${type}`;
  return <span className={cls}/>;
}

Icon.propTypes = {
  /** 图标类型 */
  type: PropTypes.string.isRequired,
  /** css 类 */
  className: PropTypes.string
}

export default Icon;