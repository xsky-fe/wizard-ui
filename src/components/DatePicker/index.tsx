import * as React from 'react';
import * as PropTypes from 'prop-types';
import Calendar from 'rc-calendar';
import RCDatePicker from 'rc-calendar/lib/Picker';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import 'rc-calendar/assets/index.css';
import 'rc-time-picker/assets/index.css';
import CALENDAR_ZH from 'rc-calendar/lib/locale/zh_CN';
import CALENDAR_EN from 'rc-calendar/lib/locale/en_US';
import moment, { Moment } from 'moment';
import { DatePickerDefaultProps, DatePickerProps } from '../../interface';
import './style.scss';

const format = 'YYYY-MM-DD HH:mm:ss';

const defaultProps: DatePickerDefaultProps = {
  disabled: false,
  showTime: true,
};

function getFormat(time?: boolean) {
  return time ? format : 'YYYY-MM-DD';
}

const DatePicker: React.FC<DatePickerProps> = props => {
  const {
    getTime,
    disabled,
    showTime,
    placeholder,
    reset,
    defaultValue,
    disabledDate,
    lang,
  } = props;
  const [val, setVal] = React.useState<Moment>();
  const calendarContainerRef = React.useRef<HTMLDivElement>(null);
  const handleChange = React.useCallback(
    (value: Moment) => {
      setVal(value);
      if (getTime) {
        getTime(value && value.format(format));
      }
    },
    [getTime],
  );

  const timePickerElement = showTime ? <TimePickerPanel /> : null;
  const calendar = (
    <Calendar
      locale={lang === 'en' ? CALENDAR_EN : CALENDAR_ZH}
      timePicker={timePickerElement}
      disabledDate={disabledDate}
      showToday={false}
    />
  );
  const getCalendarContainer = () => calendarContainerRef.current;

  return (
    <RCDatePicker
      animation="slide-up"
      disabled={disabled}
      calendar={calendar}
      value={reset ? null : val || (defaultValue && moment(defaultValue))}
      onChange={handleChange}
      getCalendarContainer={getCalendarContainer}
    >
      {({ value }: any) => {
        return (
          <span className="DatePicker">
            <input
              placeholder={placeholder}
              disabled={disabled}
              readOnly
              value={(value && value.format(getFormat(showTime))) || ''}
            />
            <div ref={calendarContainerRef} />
          </span>
        );
      }}
    </RCDatePicker>
  );
};

DatePicker.propTypes = {
  disabled: PropTypes.bool,
  showTime: PropTypes.bool,
  placeholder: PropTypes.string,
  getTime: PropTypes.func,
  reset: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabledDate: PropTypes.func,
};

DatePicker.defaultProps = defaultProps;

export default DatePicker;
