import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Card, Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { PanelProps, HeaderToggleProps } from '../../interface';
import { uuid } from '../../utils';
import classNames from 'classnames';
import './index.scss';

const Panel: React.FC<PanelProps> = props => {
  const { bg, children, text, className, collapsible, header, expanded, ...restProps } = props;
  const bgClass = bg ? `panel-${bg}-bg` : '';
  const textClass = text ? `text-${text}` : 'text-dark';
  const eventKey = uuid();

  const HeaderToggle: React.FC<HeaderToggleProps> = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);

    return <span onClick={decoratedOnClick}>{children}</span>;
  };
  return collapsible ? (
    <Accordion defaultActiveKey={eventKey}>
      <Card {...restProps} className={classNames(bgClass, textClass, className)}>
        {header && (
          <Card.Header>
            <HeaderToggle eventKey={eventKey}>{header}</HeaderToggle>
          </Card.Header>
        )}
        <Accordion.Collapse eventKey={expanded ? eventKey : ''}>
          <Card.Body>{children}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  ) : (
    <Card {...restProps} className={classNames(bgClass, textClass, className)}>
      {header && <Card.Header>{header}</Card.Header>}
      <Card.Body>{children}</Card.Body>
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
