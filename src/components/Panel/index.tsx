import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { PanelProps } from '../../interface';
import classNames from 'classnames';
import './index.scss';

const Panel: React.FC<PanelProps> = props => {
  const { bg, children, text, className, ...restProps } = props;
  const bgClass = bg ? `panel-${bg}-bg` : '';
  const textClass = text ? `text-${text}` : 'text-dark';
  return (
    <Card {...restProps} className={classNames(bgClass, textClass, className)}>
      {children && children}
    </Card>
  );
};

Panel.propTypes = {
  /**
   * 子节点panel内的具体内容；
   **/
  children: PropTypes.node,
  /**
   * 面板背景色；
   **/
  bg: PropTypes.string,
  /**
   * 面板文字颜色；
   **/
  text: PropTypes.string,
};

export default Panel;
