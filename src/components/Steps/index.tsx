import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Well } from 'react-bootstrap';
import Badge from '../Badge';
import { getBemClass } from '../../utils';
import { StepsProps } from '../../interface';
import Icon from '../Icon';
import './style.scss';

const Steps: React.FC<StepsProps> = props => {
  const { steps, currentStep, stepIcon, stepIconSize, stepIconStatus, alternativeLabel } = props;
  const badgeIcon = stepIcon ? stepIcon : 'dot';
  const badgeIconSize = stepIconSize ? stepIconSize : 'middle';
  const badgeIconStatus = stepIconStatus ? stepIconStatus : 'primary';
  return (
    <Well className="Steps">
      {steps.map((step, index) => {
        const stepLabel = typeof step === 'string' ? step : step.label;
        const stepCount = typeof step === 'string' ? false : step.count;
        return (
          <div
            className={getBemClass('Steps__Step', currentStep >= index + 1 && 'active')}
            key={index}
          >
            <Badge
              dot={badgeIcon === 'dot'}
              count={badgeIcon === 'count' ? (stepCount ? stepCount : index + 1) : ''}
              size={badgeIconSize}
              status={badgeIconStatus}
            />
            {stepLabel}
            {index !== steps.length - 1 && <Icon type="angle-left" />}
          </div>
        );
      })}
    </Well>
  );
};

Steps.propTypes = {
  /**
   * 步骤条title的集合`string`时候显示内容，`{label: string, count: string|number}`时显示`label`，当`stepIcon='count'`显示count内容
   **/
  steps: PropTypes.array.isRequired,
  /**
   * 当前步骤，从 1 开始计数
   **/
  currentStep: PropTypes.number.isRequired,
  /**
   * 步骤的图标 `dot`代表圆点，`count`代表数字
   **/
  stepIcon: PropTypes.string,
  /**
   * 步骤图标大小，stepIcon为`dot`时候生效 ['small', 'middle', 'large']
   **/
  stepIconSize: PropTypes.string,
  /**
   * 步骤图标状态，['default', 'primary', 'success', 'info', 'critical', 'warning', 'danger']
   **/
  stepIconStatus: PropTypes.string,
  /**
   * 是否将标签内容放在图标下方
   **/
  alternativeLabel: PropTypes.bool,
};

export default Steps;
