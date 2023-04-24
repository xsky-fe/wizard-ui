import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Badge from '../Badge';
import { getBemClass } from '../../utils';
import { StepsProps } from '../../interface';
import Icon from '../Icon';
import './style.scss';

const Steps: React.FC<StepsProps> = props => {
  const { steps, currentStep, showIcon, iconSize, iconStatus } = props;
  return (
    <Container className="Steps">
      {steps.map((step, index) => {
        const stepLabel = typeof step === 'string' ? step : step.label;
        const stepCount = typeof step === 'string' ? false : step.count;
        return (
          <div
            className={getBemClass('Steps__Step', currentStep >= index + 1 && 'active')}
            key={index}
          >
            <Badge
              dot={showIcon}
              count={!showIcon ? (stepCount ? stepCount : index + 1) : ''}
              size={iconSize}
              status={iconStatus}
            />
            {stepLabel}
            {index !== steps.length - 1 && <Icon type="angle-left" />}
          </div>
        );
      })}
    </Container>
  );
};

Steps.propTypes = {
  /**
   * 步骤条title的集合`string`时候显示内容，`{label: string, count: string|number}`时显示`label`，当`showIcon=false`显示count内容
   **/
  steps: PropTypes.array.isRequired,
  /**
   * 当前步骤，从 1 开始计数
   **/
  currentStep: PropTypes.number.isRequired,
  /**
   * 步骤的图标 `true`代表圆点，`false`代表数字
   **/
  showIcon: PropTypes.bool,
  /**
   * 步骤图标大小，stepIcon为`dot`时候生效 ['small', 'middle', 'large']
   **/
  iconSize: PropTypes.string,
  /**
   * 步骤图标状态，['default', 'primary', 'success', 'info', 'critical', 'warning', 'danger']
   **/
  iconStatus: PropTypes.string,
};

Steps.defaultProps = {
  showIcon: true,
  iconSize: 'middle',
  iconStatus: 'primary',
};

export default Steps;
