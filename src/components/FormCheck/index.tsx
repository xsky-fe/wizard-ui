import React from 'react';
import classNames from 'classnames';
import { FormCheck, FormCheckProps } from 'react-bootstrap';

function FormCheckComponent(props: FormCheckProps) {
  const { type = 'checkbox', inline } = props;
  let basicClassName = type === 'radio' ? 'radio' : 'checkbox';
  if (inline) {
    basicClassName = `${type}-inline`;
  }

  return <FormCheck {...props} className={classNames(props.className, basicClassName)} />;
}
export default Object.assign(FormCheckComponent, {
  Input: FormCheck.Input,
  Label: FormCheck.Label,
});
