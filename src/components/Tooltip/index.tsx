import * as React from 'react';
import * as PropTypes from 'prop-types';
import cn from 'classnames';
import { Overlay, Tooltip as BaseTooltip } from 'react-bootstrap';
import { TooltipProps } from '../../interface';
import Icon from '../Icon';
import './style.scss';

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
    children,
    placement: defaultPlacement,
    ...extra
  } = props;

  const wrapper = React.useRef<HTMLInputElement>(null);
  const [placement, setPlacement] = React.useState('top');
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
    <div ref={wrapper} className="Tooltip" onMouseEnter={handleShow} onMouseLeave={handleHide}>
      {placeholder}
      <Overlay
        {...extra}
        placement={defaultPlacement || placement}
        target={wrapper.current || undefined}
        show={show}
      >
        <BaseTooltip
          id="tooltip"
          style={Object.assign({}, { maxWidth: 280 }, style)}
          className={`${cn({ contrast })} ${className}`}
          onMouseEnter={handleShow}
          onMouseLeave={handleHide}
        >
          {children}
        </BaseTooltip>
      </Overlay>
    </div>
  );
};

Tooltip.propTypes = {
  /**
   * 提示框的内容，子节点；
   **/
  children: PropTypes.node.isRequired,
  /**
   * 选定的元素
   **/
  label: PropTypes.element,
  /**
   * 当选定的特定元素是一个图标的时候传入的参数，具体详见 icomoon；
   **/
  icon: PropTypes.string,
  /**
   * 设置图标的垂直对齐方式，具体参见 vertical-align 的可选值；
   **/
  iconAlign: PropTypes.string,
  /**
   * 提示框的位置，可选'top'，'right'，'bottom'，'left'。
   * 若不传入这一属性，会根据 OverlayTrigger 的位置，自适应选取提示框的位置；
   **/
  placement: PropTypes.string,
  /**
   * 提示框的颜色；
   **/
  contrast: PropTypes.bool,
  /**
   * 给图标传入的其他 class；
   **/
  iconClass: PropTypes.string,
};

Tooltip.defaultProps = {
  icon: 'tip-line',
  iconAlign: 'text-bottom',
  contrast: false,
};

export default Tooltip;
