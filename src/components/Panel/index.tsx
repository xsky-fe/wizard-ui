import React, { useState, useEffect } from 'react';
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
    onSelect,
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

  useEffect(() => {
    setOpen(expanded);
  }, [expanded]);

  const handleHeaderClick = () => {
    setOpen(!open);
    onSelect && onSelect();
  };

  return collapsible ? (
    <Card className={cardClassName}>
      <Card.Header
        className="panel-heading"
        onClick={handleHeaderClick}
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

Panel.defaultProps = {
  collapsible: false,
  embedded: false,
  innerPaddingSize: 'default',
};

export default Panel;
