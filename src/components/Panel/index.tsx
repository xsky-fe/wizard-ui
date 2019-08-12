import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Panel as BsPanel } from 'react-bootstrap';
import { PanelProps } from '../../interface';
import classNames from 'classnames';
import './index.scss';

const Panel: React.FC<PanelProps> = props => {
  const {
    bsStyle,
    id,
    bg = '',
    children,
    text,
    header = null,
    footer = null,
    collapsible,
    defaultExpanded,
    expanded,
    headerRole,
    panelRole,
    eventKey,
  } = props;
  const textClass = text ? `text-${text}` : 'text-dark';
  return (
    <div className="Panel">
      <BsPanel
        bsStyle={bsStyle}
        id={id}
        className={classNames(bg, textClass)}
        header={header}
        footer={footer}
        headerRole={headerRole}
        panelRole={panelRole}
        collapsible={collapsible}
        expanded={expanded}
        eventKey={eventKey}
        defaultExpanded={defaultExpanded}
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
   * 面板颜色；
   **/
  bsStyle: PropTypes.string,
  /**
   * 面板背景色；
   **/
  bg: PropTypes.string,
  /**
   * 面板文字颜色；
   **/
  text: PropTypes.string,
  /**
   * 是否可以折叠(true时才可以折叠)；
   **/
  collapsible: PropTypes.bool,
  /**
   * 是否展开；
   **/
  expanded: PropTypes.bool,
  /**
   * 默认是否展开；
   **/
  defaultExpanded: PropTypes.bool,
};

export default Panel;
