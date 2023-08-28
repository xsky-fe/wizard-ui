import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IconProps } from '../../interface';
import cn from 'classnames';
import * as Icons from 'wizard-ui-icon';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import './style.scss';

const Icon: React.FC<IconProps> = props => {
  const { type, color, className, cursor, size, onClick, style } = props;
  const cls = cn(`icon icon-${type}`, {
    [`${color}`]: Boolean(color),
    [`${className}`]: Boolean(className),
    cursor: Boolean(cursor),
  });
  const name = upperFirst(camelCase(type));
  const IconComponent = Icons[name];

  return (
    <span className={cls} onClick={onClick} style={{ display: 'inline-flex', ...style }}>
      {IconComponent && <IconComponent size={size} />}
    </span>
  );
};

Icon.propTypes = {
  /** 图标类型 */
  type: PropTypes.string.isRequired,
  /** 颜色 */
  color: PropTypes.string,
  /** 图标交互 */
  cursor: PropTypes.bool,
};

Icon.defaultProps = {
  cursor: false,
  size: '1em',
};
export default Icon;
