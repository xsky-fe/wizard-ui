import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Panel as BsPanel } from 'react-bootstrap';
import { PanelProps } from '../../interface';
import classNames from 'classnames';
import './index.scss';

const Panel: React.FC<PanelProps> = props => {
  const { bsStyle, bg, children, text, header, footer } = props;
  const bgClass = bg ? bg : '';
  const textClass = text ? `text-${text}` : 'text-dark';
  const panelHeader = header ? header : null;
  const panelFooter = footer ? footer : null;
  return (
    <div>
      <BsPanel
        bsStyle={bsStyle}
        className={classNames(bgClass, textClass)}
        header={panelHeader}
        footer={panelFooter}
      >
        {children && children}
      </BsPanel>
    </div>
  );
};

Panel.propTypes = {
  /**
   * 子节点panel内的具体内容；
   **/
  children: PropTypes.node,
  /**
   * 子节点panel内的具体内容；
   **/
  header: PropTypes.node,
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
