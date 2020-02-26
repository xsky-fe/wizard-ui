import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IconProps } from '../../interface';
import cn from 'classnames';
import icons from 'wizard-icons';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import './style.scss';

const Icon: React.FC<IconProps> = props => {
  const { type, color, className, cursor, ...rest } = props;
  const cursorClsName = cursor? ' cursor' : '';
  // const colorClsName = color ? ' color' : '';
  const cls = cn(`icon icon-${type}`, {
    [`${color}`]: Boolean(color),
    [`${className}`]: Boolean(className),
  }) + cursorClsName ;
  const name = upperFirst(camelCase(type));
  const Icon = icons[name];
  return (
    <span className={cls}  {...rest}>
      {Icon && <Icon aria-hidden />}
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
};
export default Icon;
