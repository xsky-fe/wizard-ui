import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Steps, Button } from '../src';

const stepTexts = ['选择资源', '设置恢复任务', '确认信息'];

const meta: Meta<typeof Steps> = {
  title: 'COMPONENTS/Steps',
  component: Steps,
  args: { steps: stepTexts, currentStep: 2 },
  argTypes: {
    steps: {
      table: {
        type: { summary: 'array' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Steps>;

export const Basic: Story = {};

export const Size: Story = {
  args: { iconSize: 'small' },
};

export const Color: Story = {
  args: { iconStatus: 'danger' },
};

export const IconNumber: Story = {
  args: { showIcon: false },
};

export const StepsObject: Story = {
  args: {
    showIcon: false,
    steps: [
      { label: '第一步', count: 99 },
      { label: '第二步', count: 'Y' },
      { label: '第三步', count: 'Z' },
    ],
  },
};

export const Interaction: Story = {
  render: props => {
    const [step, setStep] = React.useState(1);
    const prevStep = () => setStep(step - 1);
    const nextStep = () => setStep(step + 1);
    return (
      <div>
        <Steps {...props} steps={['A', 'B', 'C', 'D']} currentStep={step} />
        <p>第 {step} 步</p>
        {step > 1 && (
          <Button variant="info" onClick={prevStep}>
            上一步
          </Button>
        )}
        <span style={{ paddingLeft: '40px' }} />
        {step < 4 && (
          <Button variant="primary" onClick={nextStep}>
            下一步
          </Button>
        )}
      </div>
    );
  },
};
