declare module 'react-ios-switch';
declare module 'wizard-ui-icon';
declare module 'rc-calendar/lib/Picker';
declare module 'rc-calendar/lib/RangeCalendar';
declare module 'rc-calendar/lib/locale/zh_CN';
declare module 'rc-calendar/lib/locale/en_US';
declare module 'rc-time-picker/lib/Panel';

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare namespace JSX {
  interface IntrinsicElements {
    ComposedComponent: any
  }
}
