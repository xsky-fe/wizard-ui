import Loader from "components/Loader";
import React from "react";
import { FormControl as BsFormControl, FormControlProps as BsFormControlProps } from 'react-bootstrap';

interface Props extends BsFormControlProps {
  loading?: boolean;
  color?: string;
}

const FormControl: React.FC<Props> = (props) => {
  const { loading, ...restProps } = props;
  const { disabled } = restProps;
  return (
    <>
      <BsFormControl
        {...restProps}
        disabled={disabled ?? loading}
      />
      {loading && <Loader bsSize="xs" bsStyle="primary" />}
    </>
  )
}

export default FormControl;