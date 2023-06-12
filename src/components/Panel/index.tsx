import * as React from 'react';
import { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Card, Collapse } from 'react-bootstrap';
import { PanelProps } from '../../interface';
import classNames from 'classnames';
import './index.scss';

const Panel: React.FC<PanelProps> = props => {
  const {
    children,
    className,
    collapsible,
    header,
    expanded,
    embedded = false,
    innerPaddingSize = 'default',
    ...restProps
  } = props;
  const embeddedClass = embedded && 'panel-embedded';
  const cardClassName = classNames(
    'panel',
    `panel-${innerPaddingSize}`,
    className,
    embeddedClass,
  );
  const [open, setOpen] = useState(expanded);

  return collapsible ? (
    <Card className={cardClassName}>
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
    <Card {...restProps} className={cardClassName}>
      {header && <Card.Header className="panel-heading">{header}</Card.Header>}
      {children && <Card.Body className="panel-body">{children}</Card.Body>}
    </Card>
  );
};

Panel.propTypes = {
  /**
   * 子节点panel内的具体内容；
   **/
  children: PropTypes.node,
  /**
   * 是否是内嵌面板
   **/
  embedded: PropTypes.bool,
  /**
   * 卡片内边距的大小
   **/
  innerPaddingSize: PropTypes.oneOf(['default', 'sm', 'xs']),
};

Panel.defaultProps = {
  collapsible: false,
  embedded: false,
  innerPaddingSize: 'default',
};

export default Panel;
