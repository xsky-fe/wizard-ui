import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Panel as BootstrapPanel } from 'react-bootstrap';
import { PanelProps } from '../../interface';
import classNames from 'classnames';
import './index.scss';

const Panel: React.FC<PanelProps> = props => {
  const { bg = '', children, text, ...restProps } = props;
  const textClass = text ? `text-${text}` : 'text-dark';
  return (
    <div className="Panel">
      <BootstrapPanel {...restProps} className={classNames(bg, textClass)}>
        {children && children}
      </BootstrapPanel>
    </div>
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