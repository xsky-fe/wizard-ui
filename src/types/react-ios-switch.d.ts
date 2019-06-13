export = index;
declare class index {
  constructor(props: any);
  clickChange(checked: any): void;
  componentDidMount(): void;
  componentWillUnmount(): void;
  forceUpdate(callback: any): void;
  getHandleColor(): any;
  getHandleCursor(): any;
  getHandleLength(): any;
  getHeight(): any;
  getOffColor(): any;
  getOffset(): any;
  getOffsetProgress(): any;
  getOffsetWidth(props: any): any;
  getOnColor(): any;
  getPendingColor(_ref: any): any;
  getPendingOffColor(): any;
  getPendingOnColor(): any;
  getWidth(): any;
  handleChange(e: any): void;
  handleClick(e: any): void;
  handleHandleClick(e: any): void;
  handleMouseDown(e: any): void;
  handleMouseUp(): void;
  isDisabled(): any;
  render(): any;
  setRef(ref: any): void;
  setState(partialState: any, callback: any): void;
}
declare namespace index {
  namespace defaultProps {
    const handleColor: string;
    const offColor: string;
    function onChange(): void;
    const onColor: string;
  }
  namespace propTypes {
    function checked(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace checked {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace disabled {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function handleColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace handleColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function name(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace name {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function offColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace offColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onChange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function pendingOffColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace pendingOffColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function pendingOnColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace pendingOnColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function readOnly(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace readOnly {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
