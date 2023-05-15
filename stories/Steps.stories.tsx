import React from 'react';
import { storiesOf } from '@storybook/react';
import { Steps } from '../src';

storiesOf('Steps', module).add('default', () => {
  const stepTexts = ['选择资源', '设置恢复任务', '确认信息'];
  return <Steps steps={stepTexts} currentStep={2} />;
});
