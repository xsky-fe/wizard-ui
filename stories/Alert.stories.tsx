import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert as BsAlert } from '../src';
import { AlertProps } from '../src/interface';

const STATUS = ['warning', 'info', 'error'];
const Alert = (props: Partial<AlertProps>) => {
  return (
    <>
      {STATUS.map(variant => (
        <BsAlert bsStyle={variant as AlertProps['bsStyle']} {...props}>
          This is a {variant} alert!
        </BsAlert>
      ))}
    </>
  );
};

storiesOf('DATA SHOW | Alert', module)
  .add('default', () => <Alert />)
  .add('icon', () => <Alert showIcon />)
  .add('align', () => (
    <>
      <p>
        <h3>left</h3>
        <Alert textAlign="left" showIcon />
      </p>
      <p>
        <h3>center</h3>
        <Alert textAlign="center" showIcon />
      </p>
      <p>
        <h3>inline</h3>
        <Alert textAlign="inline" showIcon />
      </p>
    </>
  ))
  .add('operation', () => (
    <>
      <Alert bsStyle="warning" showIcon dismissDirection="right" onDismiss={() => {}}>
        This is a warning alert with close and click!
        <a href="#" style={{ paddingLeft: 8 }}>
          click here
        </a>
      </Alert>
    </>
  ));
