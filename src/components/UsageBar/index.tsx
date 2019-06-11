import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import { bulk, xbytes } from '../../utils';
import { UsageBarProps } from '../../interface';
import './style.scss';

const PERCENT_WITH_STATUS = {
  warning: 0.75,
  danger: 0.85,
};

function calcPercent(p: number) {
  let percent: number | string = 100 * p;
  if (percent < 0.0001 && percent > 0) {
    percent = '0.01%';
  } else if (percent < 1) {
    percent = `${percent.toFixed(3)}%`;
  } else if (isNaN(percent)) {
    percent = 'NO';
  } else {
    percent = `${percent.toFixed(2)}%`;
  }
  return percent;
}

const UsageBar: React.SFC<UsageBarProps> = props => {
  const {
    max,
    isByte,
    isPercent,
    isBulk,
    withPercent,
    inline,
    hideNow,
    hideRight,
    showZeroMax,
    withUnavailable,
  } = props;
  const hasNow = props.hasOwnProperty('now');
  const hasPercent = props.hasOwnProperty('percent');
  const now = hasNow ? props.now : props.percent && max && props.percent * max;
  const percent = hasPercent ? props.percent : max ? props.now && props.now / max : 0;
  const errorPercent = props.unavailableData && max && props.unavailableData / max;
  let nowValue: number | string | undefined = now;
  let maxValue: number | string | undefined = max;
  let nowSuffix = '';
  let maxSuffix = '';
  let left;
  let right;
  let bsStyle;

  // bar 左边为百分比形式， 右边默认设为百分形式
  if (isPercent || hasPercent) {
    nowValue = percent && (percent * 100).toFixed(2);
    maxValue = 100;
    nowSuffix = maxSuffix = '%';
  }

  if (isByte) {
    // hasPercent 表明左边数据设置完成（百分比形式），不需要再调整
    if (!hasPercent && now) {
      const nowArr: any = xbytes(now, { splitUnit: true });
      nowValue = nowArr[0];
      nowSuffix = nowArr[1];
    }
    const maxArr: any = max && xbytes(max, { splitUnit: true });
    maxValue = maxArr[0];
    maxSuffix = maxArr[1];
  } else if (isBulk) {
    // hasPercent 表明左边数据设置完成（百分比形式），不需要再调整
    if (!hasPercent && now) {
      const nowArr = bulk(now, { splitUnit: true });
      nowValue = nowArr[0];
      nowSuffix = nowArr[1];
    }
    const maxArr: any = max && bulk(max, { splitUnit: true });
    maxValue = maxArr[0];
    maxSuffix = maxArr[1];
  }

  // max 为 0 时，设置为无限制
  // isPercent，hasPercent 涉及到百分比展示，此时 max 不应该为无限制
  // showZeroMax 直接展示 max 为处理后的 0 + 单位
  if (!max && !hasPercent && !isPercent && !showZeroMax) {
    maxValue = 'no limit';
    maxSuffix = '';
  }

  // 处理 bar 颜色
  if (percent && percent > PERCENT_WITH_STATUS.danger) {
    bsStyle = 'danger';
  } else if (percent && percent < PERCENT_WITH_STATUS.danger && percent > PERCENT_WITH_STATUS.warning) {
    bsStyle = 'warning';
  }

  if (withPercent) {
    // 左边百分比形式，右边展示数值
    left = percent && calcPercent(percent);
    // 右边只展示 max 数值
    if (hideNow) {
      right = maxValue + maxSuffix;
    } else {
      right = `${nowValue + nowSuffix}/${maxValue + maxSuffix}`;
    }
  } else {
    left = nowValue + nowSuffix;
    right = maxValue + maxSuffix;
  }
  //纯数字的进度条屏蔽右侧显示
  if (hideRight) {
    right = ''
  }

  return (
    <div className={`UsageBar ${inline ? 'inline' : ''}`}>
      {
        withUnavailable ?
          <ProgressBar>
            <ProgressBar bsStyle={bsStyle} now={percent} max={1} key={1} />
            <ProgressBar bsStyle='info' now={errorPercent} max={1} key={2} />
          </ProgressBar>
          : <ProgressBar bsStyle={bsStyle} now={percent} max={1} />
      }
      <div className="UsageBar__footer">
        <div className="UsageBar__footer--left">{left}</div>
        <div className="UsageBar__footer--right">{right}</div>
      </div>
    </div>
  );
}

UsageBar.propTypes = {
  /**
   * 当前量
   **/
  now: PropTypes.number,
  /**
   * 最大量
   **/
  max: PropTypes.number,
  /**
   * 百分比
   **/
  percent: PropTypes.number,
  /**
   * 数字以百分比为单位展示
   **/
  isPercent: PropTypes.bool,
  /**
   * 数字以字节（B, KB, MB, GB...）为单位展示
   **/
  isByte: PropTypes.bool,
  /**
   * 数字以数量（万, 亿, 兆, 京...）为单位展示
   **/
  isBulk: PropTypes.bool,
  /**
   * 设置组件行内展示，width 为 120px
   **/
  inline: PropTypes.bool,
  /**
   * 当 max 为 0 时，展示为 0+单位 或者无限制
   **/
  showZeroMax: PropTypes.bool,
  /**
   * 是否隐藏 now 的展示
   **/
  hideNow: PropTypes.bool,
  /**
   * 是否隐藏 right 的展示
   **/
  hideRight: PropTypes.bool,
  /**
   * 左边数值百分比展示
   **/
  withPercent: PropTypes.bool,
  /**
   * 2段以上数据的processbar
   * https://react-bootstrap.netlify.com/components/progress/#progress-bar-props
   * <ProgressBar>
   * <ProgressBar striped variant="success" now={35} key={1} />
   * <ProgressBar variant="warning" now={20} key={2} />
   * </ProgressBar>;
   */
  withUnavailable: PropTypes.bool,
  /**
   * 不可用数据量
   **/
  unavailableData: PropTypes.number,
};
UsageBar.defaultProps = {
  max: 0,
};

export default UsageBar;
