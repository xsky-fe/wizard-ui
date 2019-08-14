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
import { DatePickerProps } from '../../interface';

const format: string = 'YYYY-MM-DD HH:mm:ss';

function getFormat(time: boolean | undefined) {
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
  const [val, setVal] = React.useState();
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

  return (
    <RCDatePicker
      animation="slide-up"
      disabled={disabled}
      calendar={calendar}
      value={reset ? null : val || (defaultValue && moment(defaultValue))}
      onChange={handleChange}
    >
      {({ value }: any) => {
        return (
          <span>
            <input
              placeholder={placeholder}
              disabled={disabled}
              readOnly
              value={(value && value.format(getFormat(showTime))) || ''}
            />
          </span>
        );
      }}
    </RCDatePicker>
  );
};

DatePicker.propTypes = {
  disabled: PropTypes.bool,
  showTime: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  getTime: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  disabled: false,
  showTime: true,
};

export default DatePicker;
