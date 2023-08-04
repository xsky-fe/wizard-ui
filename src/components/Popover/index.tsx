import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Overlay, Popover as BasePopover } from 'react-bootstrap';
import classNames from 'classnames';
import lodash from 'lodash';
import { PopoverProps } from '../../interface';
import './style.scss';

const Popover: React.FC<PopoverProps> = props => {
  const { placement: defaultPlacement, children, content, shadow, modifer, ...extra } = props;
  let { trigger } = props;
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
  const handleClick = () => setShow(!show);

  if (typeof trigger === 'string') trigger = [trigger];
  const hoverTrigger = lodash.includes(trigger, 'hover');
  const clickTrigger = lodash.includes(trigger, 'click');
  const focusTrigger = lodash.includes(trigger, 'focus');
  const _placement: any = defaultPlacement ? defaultPlacement : placement;
  let className = classNames('Popover', {
    'space-between': true,
    'ArrowShadow': shadow,
  });
  if (modifer) {
    className += ' ' + modifer;
  }

  return (
    <div
      ref={wrapper}
      className="Popover__wrapper"
      onMouseEnter={hoverTrigger ? handleShow : undefined}
      onMouseLeave={hoverTrigger ? handleHide : undefined}
      onClick={clickTrigger ? handleClick : undefined}
      onFocus={focusTrigger ? handleShow : undefined}
      onBlur={focusTrigger ? handleHide : undefined}
    >
      {children}
      <Overlay
        {...extra}
        placement={_placement}
        target={wrapper.current || null}
        show={show}
        onHide={handleHide}
        popperConfig={{
          modifiers:[
            {
              name: 'offset',
              options: {
                offset: [0, 11],
              },
            },
          ]
        }}
      >
        <BasePopover
          id="popover"
          className={className}
          onMouseEnter={hoverTrigger ? handleShow : undefined}
          onMouseLeave={hoverTrigger ? handleHide : undefined}
          body
        >
          {content}
        </BasePopover>
      </Overlay>
    </div>
  );
};

Popover.propTypes = {
  /**
   * 触发动作，字符串或数组，默认为‘hover’；
   **/
  trigger: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**
   * 提示框的内容，子节点；
   **/
  content: PropTypes.node.isRequired,
  /**
   * 选定的元素
   **/
  children: PropTypes.node.isRequired,
  /**
   * 提示框的位置，可选'top'，'right'，'bottom'，'left'。
   * 若不传入这一属性，会根据 OverlayTrigger 的位置，自适应选取提示框的位置；
   **/
  //@ts-ignore
  placement: PropTypes.string,
  /**
   * 是否点击外部区域关闭popover；
   **/
  rootClose: PropTypes.bool,
};

Popover.defaultProps = {
  trigger: 'hover',
};

export default Popover;
