import * as React from 'react';
import { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Card, Collapse } from 'react-bootstrap';
import { PanelProps } from '../../interface';
import classNames from 'classnames';
import './index.scss';

const Panel: React.FC<PanelProps> = props => {
  const {
    bg,
    children,
    text,
    className,
    collapsible,
    header,
    expanded,
    ...restProps
  } = props;
  const bgClass = bg ? `panel-${bg}-bg` : '';
  const textClass = text ? `text-${text}` : 'text-dark';
  const [open, setOpen] = useState(expanded);
  return collapsible ? (
    <Card className="panel">
      <Card.Header
        className="panel-heading"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        {header}
      </Card.Header>
      <Collapse in={open}>
        <div>
          <Card.Body className="panel-body">{children}</Card.Body>
        </div>
      </Collapse>
    </Card>
  ) : (
    <Card {...restProps} className={classNames('panel', bgClass, textClass, className)}>
      {header && <Card.Header className="panel-heading">{header}</Card.Header>}
      <Card.Body className="panel-body">{children}</Card.Body>
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
