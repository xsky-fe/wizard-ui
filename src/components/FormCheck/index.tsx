import React from 'react';
import classNames from 'classnames';
import { FormCheck, FormCheckProps } from 'react-bootstrap';

export default function FormCheckComponent(props: FormCheckProps) {
  const { type = 'checkbox', inline } = props;
  let basicClassName = type === 'radio' ? 'radio' : 'checkbox';
  if (inline) {
    basicClassName = `${type}-inline`;
  }

  return <FormCheck {...props} className={classNames(props.className, basicClassName)} />;
}
