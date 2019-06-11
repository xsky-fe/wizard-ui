import * as React from 'react';
import PropTypes from 'prop-types';
import { getBemClass } from '../../utils';
import { LoaderProps } from '../../interface';
import lodash from 'lodash';
import './style.scss';

const Loader: React.SFC<LoaderProps> = props => {
  const { children, bsSize, bsStyle } = props;
  const className: string = getBemClass('Loader', lodash.compact([bsSize, bsStyle]));
  return (
    <div className={className}>
      <div className="Loader__inner">
        <div className="Loader__circle" />
        {children && <div className="Loader__text">{children}</div>}
      </div>
    </div>
  );
};

Loader.propTypes = {
  /** 大小 ['mi', 'sm', 'xs'] */
  bsSize: PropTypes.string,
  /** 可以设置为 primary */
  bsStyle: PropTypes.string,
  /** 子元素 */
  children: PropTypes.node,
};

export default Loader;
