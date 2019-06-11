import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IconProps } from '../../interface';

const Icon: React.SFC<IconProps> = props => {
  const { type, className, ...rest } = props;
  const cls = `${className} icon icon-${type}`;
  return <span className={cls} {...rest}/>;
}

Icon.propTypes = {
  /** 图标类型 */
  type: PropTypes.string.isRequired,
  /** css 类 */
  className: PropTypes.string
}

export default Icon;