import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Overlay as BSOverlay, Tooltip } from 'react-bootstrap';
import { OverlayProps } from '../../interface';
import './style.scss';

const Overlay: React.FC<OverlayProps> = props => {
  const { show: propsShow, animation, placement, children, content, ...restProps } = props;
  const [ show, setShow ] = useState(propsShow || false);
  const wrapper = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    console.log(wrapper)
  })
  function handleClick() {
    setShow(!show);
  }
  return(
    <div className="overlay-wrapper">
      <div ref={wrapper} className="overlay-target" onClick={handleClick}>
        {children}
      </div>
      <BSOverlay
        show={show}
        target={wrapper.current || undefined}
        {...restProps}
      >
        <Tooltip placement="right" className="in" id="overload-right">
          {content}
        </Tooltip>
      </BSOverlay>
    </div>
  )
}

Overlay.propTypes = {
  show: PropTypes.bool,
  rootClose: PropTypes.bool,
  animation: PropTypes.string, 
  placement: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left'
  ])
};
Overlay.defaultProps = {
  show: false,
  rootClose: false,
  animation: 'fade',
  placement: 'right',
};



export default Overlay;