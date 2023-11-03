import * as React from 'react';
import cn from 'classnames';
import { Overlay, Tooltip as BaseTooltip } from 'react-bootstrap';
import { TooltipProps } from '../../interface';
import Icon from '../Icon';
import './style.scss';
import get from 'lodash/get';

const Tooltip: React.FC<TooltipProps> = props => {
  const {
    iconClass,
    icon,
    iconAlign,
    onClick,
    label,
    contrast,
    className,
    style,
    arrowAlign,
    children,
    placement: defaultPlacement,
    expandHotZone,
    width,
    ...extra
  } = props;
  const wrapper = React.useRef<HTMLInputElement>(null);
  const labelRef = React.useRef<HTMLSpanElement>(null);
  const [placement, setPlacement] = React.useState<any>('top');
  const [offset, setOffset] = React.useState<number>(0);

  // 类似 componentDidMount。只会在 render 后执行一次
  React.useEffect(() => {
    const elem = wrapper.current;
    if (!elem) return;
    let placement = 'top';
    const docElem = document.documentElement;
    const box = elem.getBoundingClientRect();
    const elemOffsetLeft = box.left + docElem.scrollLeft;
    const elemOffsetTop = box.top + docElem.scrollTop;
    const pageWidth = document.documentElement.clientWidth;
    const pageHeight = document.documentElement.clientHeight;
    if (elemOffsetLeft > pageWidth * 0.8) {
      placement = 'left';
    }
    if (elemOffsetLeft < pageWidth * 0.2) {
      placement = 'right';
    }
    if (elemOffsetTop < pageHeight * 0.2) {
      placement = 'bottom';
    }
    if ((placement === 'top' || placement === 'bottom') && labelRef.current && expandHotZone ) {
      const labelOffsetLeft = get(labelRef.current, 'children[0].offsetLeft');
      const labelOffsetWidth = get(labelRef.current, 'children[0].offsetWidth');
      const elemOffsetWidth = elem.offsetWidth;
      const onLeft = labelOffsetLeft - elemOffsetLeft <= (elemOffsetWidth - labelOffsetWidth) / 2;
      let offset = 0;
      if (onLeft) {
        offset = -(
          elem.offsetWidth / 2 -
          (labelOffsetWidth / 2 + (labelOffsetLeft - elemOffsetLeft))
        );
      } else {
        offset = labelOffsetLeft - elemOffsetLeft - elemOffsetWidth / 2 + labelOffsetWidth / 2;
      }
      setOffset(offset);
    }

    setPlacement(placement);
  }, []);
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  const placeholder = label ? (
    label
  ) : icon ? (
    <Icon
      type={icon}
      className={`Tooltip__icon ${iconClass}`}
      onClick={onClick}
      style={{
        verticalAlign: iconAlign,
      }}
    />
  ) : (
    undefined
  );
  return (
    <div ref={wrapper} className="Tooltip" onMouseEnter={handleShow} onMouseLeave={handleHide} style={{width}}>
      <span ref={labelRef}>{placeholder}</span>
      <Overlay
        {...extra}
        placement={defaultPlacement || placement}
        target={wrapper.current || null}
        show={show}
        popperConfig={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [offset, 3],
              },
            },
          ],
        }}
      >
        <BaseTooltip
          id="tooltip"
          style={Object.assign({}, { maxWidth: 280 }, style)}
          className={`${cn({ contrast, 'tooltip-center': arrowAlign === 'center' })} ${className}`}
          onMouseEnter={handleShow}
          onMouseLeave={handleHide}
        >
          {children}
        </BaseTooltip>
      </Overlay>
    </div>
  );
};

Tooltip.defaultProps = {
  icon: 'tip-line',
  iconAlign: 'text-bottom',
  contrast: false,
  arrowAlign: 'center',
};

export default Tooltip;
