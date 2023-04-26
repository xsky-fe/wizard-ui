import * as React from 'react';
import { Button } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import Picker from 'rc-calendar/lib/Picker';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import 'rc-calendar/assets/index.css';
import 'rc-time-picker/assets/index.css';
import CALENDAR_ZH from 'rc-calendar/lib/locale/zh_CN';
import CALENDAR_EN from 'rc-calendar/lib/locale/en_US';
import moment, { Moment, DurationInputArg1, DurationInputArg2 } from 'moment';
import { RangePickerProps, RangePickerState } from '../../interface';
import isEmpty from 'lodash/isEmpty';
import Icon from '../Icon';
import './style.scss';

const isClient = typeof window === 'object';
const ranges = [
  {
    title: '3 小时内',
    value: '3 hours',
  },
  {
    title: '1 天内',
    value: '1 day',
  },
  {
    title: '1 周内',
    value: '1 week',
  },
  {
    title: '1 月内',
    value: '1 month',
  },
  {
    title: '3 月内',
    value: '3 months',
  },
];

function disabledDate(current: Moment) {
  if (!current) return false;
  const date = moment();
  return current.isAfter(date); // can not select days after today
}

export default class RangePicker extends React.PureComponent<RangePickerProps, RangePickerState> {
  static defaultProps = {
    disabled: false,
    showDuration: true,
    format: 'YYYY-MM-DD HH:mm:ss',
    defaultValue: [],
  };
  static propTypes = {
    /**
     * 禁用
     */
    disabled: PropTypes.bool,
    /**
     * 改变时间区间会触发 onChange 执行
     */
    onChange: PropTypes.func,
    /**
     * 点击确定会触发
     */
    onOk: PropTypes.func,
    /**
     * moment 格式化
     */
    format: PropTypes.string,
    /**
     * 是否展示直接选择区间
     */
    showDuration: PropTypes.bool,
    defaultValue: PropTypes.array,
  };
  constructor(props: RangePickerProps) {
    super(props);
    const value = props.value || props.defaultValue || [];
    this.state = {
      value,
      open: false,
    };
  }
  get lang() {
    const lang = isClient && window.localStorage.getItem('LOCALE');
    return lang && /en/.test(lang) ? 'en' : 'zh';
  }
  get locale() {
    return this.lang === 'en' ? CALENDAR_EN : CALENDAR_ZH;
  }
  get startPlaceholder() {
    /* eslint-disable-next-line */
    return this.lang === 'en' ? 'Start time' : '开始时间';
  }
  get endPlaceholder() {
    /* eslint-disable-next-line */
    return this.lang === 'en' ? 'End time' : '结束时间';
  }
  get seperator() {
    /* eslint-disable-next-line */
    return this.lang === 'en' ? 'To' : '至';
  }
  formatValue = (value: Moment) => {
    const { format } = this.props;
    return (value && value.format(format)) || '';
  };
  handleOuterChange = (value: Moment[]) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value, [this.formatValue(value[0]), this.formatValue(value[1])]);
    }
  };
  handleChange = (value: Moment[]) => {
    this.handleOuterChange(value);
    this.setState({ value });
  };
  handleRangeClick = (value: any) => {
    const { onOk } = this.props;
    const end: Moment = moment(new Date());
    const num: DurationInputArg1 = value.split(' ')[0];
    const unit: DurationInputArg2 = value.split(' ')[1];
    const start = moment(new Date()).subtract(num, unit);
    const duration = [start, end];
    this.handleOuterChange(duration);
    if (onOk) {
      onOk(duration);
    }
    this.setState({
      value: duration,
      open: false,
    });
  };
  handleOpenChange = (open: boolean) => {
    const { onOpenChange } = this.props;
    this.setState({ open });
    if (onOpenChange) {
      onOpenChange(open);
    }
  };
  clearSelection = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const { onOk } = this.props;
    this.setState({ value: [] });
    this.handleChange([]);
    if (onOk) {
      onOk([]);
    }
  };
  renderFooter = () => {
    if (!this.props.showDuration) {
      return;
    }
    return (
      <div className="RangePicker__duration">
        {ranges.map(({ title, value }) => {
          return (
            <Button key={value} onClick={() => this.handleRangeClick(value)}>
              {this.lang === 'en' ? value : title}
            </Button>
          );
        })}
      </div>
    );
  };
  renderCalendar = () => {
    const { onOk, format } = this.props;
    return (
      <RangeCalendar
        seperator={this.seperator}
        dateInputPlaceholder={[this.startPlaceholder, this.endPlaceholder]}
        locale={this.locale}
        format={format}
        onOk={onOk}
        disabledDate={disabledDate}
        timePicker={<TimePickerPanel />}
        renderFooter={this.renderFooter}
        showToday={false}
      />
    );
  };
  renderClearIcon = () => {
    if ((this.state.value as any).every(isEmpty)) {
      return;
    }
    return <Icon type="close" onClick={this.clearSelection} />;
  };
  render() {
    const { disabled } = this.props;
    return (
      <Picker
        value={this.state.value}
        disabled={disabled}
        onChange={this.handleChange}
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        animation="slide-up"
        calendar={this.renderCalendar()}
      >
        {({ value }: { value?: any }) => {
          const [start, end] = value;
          return (
            <span className="RangePicker form-control">
              <span className="glyphicon glyphicon-calendar" />
              <input
                placeholder={this.startPlaceholder}
                readOnly
                value={this.formatValue(start)}
                tabIndex={-1}
              />
              <span>{this.seperator}</span>
              <input
                placeholder={this.endPlaceholder}
                readOnly
                value={this.formatValue(end)}
                tabIndex={-1}
              />
              {this.renderClearIcon()}
            </span>
          );
        }}
      </Picker>
    );
  }
}
