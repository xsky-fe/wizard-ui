import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IconProps } from '../../interface';
import icons from 'wizard-icons';
import lodash from 'lodash';
import './style.scss';

const Icon: React.SFC<IconProps> = props => {
  const { type, color, ...rest } = props;
  const cls = `${color} icon icon-${type}`;
  const name = lodash.upperFirst(lodash.camelCase(type));
  const Icon = icons[name];
  return (
    <span className={cls} {...rest} >
      <Icon aria-hidden/>
    </span>
  );

}

Icon.propTypes = {
  /** 图标类型 */
  type: PropTypes.string.isRequired,
  /** 颜色 */
  color: PropTypes.string
}

export default Icon;