import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BadgeProps } from '../../interface';
import './style.scss';

const Badge: React.FC<BadgeProps> = props => {
  const { count, overflowCount, dot, size, showZero, status, text, title, children } = props;
  const statusCls = `Badge--${status}`;
  const parentCls = children ? 'Badge Badge__wrapper' : 'Badge';
  if (count || showZero) {
    return (
      <span className={parentCls}>
        {children}
        <span className={`Badge__count ${statusCls}`} title={title || String(count)}>
          {Number(count) > Number(overflowCount) ? `${overflowCount}+` : count}
        </span>
      </span>
    );
  }
  if (dot || !count) {
    return (
      <span className={parentCls}>
        {children}
        <span className={`Badge__dot ${statusCls} ${size}`} title={title} />
        {text && <span className="Badge__text">{text}</span>}
      </span>
    );
  }
  return null;
};

Badge.propTypes = {
  /**
   * 数值 number|string
   **/
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 数值为0时，是否展示 Badge
   **/
  showZero: PropTypes.bool,
  /**
   * 展示一个小点
   **/
  dot: PropTypes.bool,
  /**
   * 点的大小，只在dot为true的时候生效 ['small', 'middle', 'large']
   **/
  size: PropTypes.string,
  /**
   * 设置状态颜色 ['default', 'primary', 'success', 'info', 'critical', 'warning', 'danger']
   **/
  status: PropTypes.string,
  /**
   * 封顶数值
   **/
  overflowCount: PropTypes.number,
  /**
   * 状态点对应的文本
   **/
  text: PropTypes.string,
  /**
   * 鼠标hover在点上展现的文字, 默认为count
   **/
  title: PropTypes.string,
};

Badge.defaultProps = {
  size: 'small',
  status: 'danger',
  overflowCount: 99,
};

export default Badge;
