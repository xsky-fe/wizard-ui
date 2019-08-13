import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Well } from 'react-bootstrap';
import Badge from '../Badge';
import { getBemClass } from '../../utils';
import { StepsProps } from '../../interface';
import './style.scss';

const Steps: React.FC<StepsProps> = props => {
  const { steps, currentStep } = props;
  return (
    <Well className="Steps">
      {steps.map((step, index) => (
        <div
          className={getBemClass('Steps__Step', currentStep >= index + 1 && 'active')}
          key={index}
        >
          <Badge dot size="middle" status="primary" />
          {step}
          {index !== steps.length - 1 && <span className="icon icon-angle-left" />}
        </div>
      ))}
    </Well>
  );
};

Steps.propTypes = {
  /**
   * 步骤条title的集合
   **/
  steps: PropTypes.array.isRequired,
  /**
   * 当前步骤，从 1 开始计数
   **/
  currentStep: PropTypes.number.isRequired,
};

export default Steps;
