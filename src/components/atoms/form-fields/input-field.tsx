import { FC } from 'react';
import { useField } from 'formik';
import { TextField, TextFieldProps } from '@material-ui/core';

interface PropsType {
  errorText?: string;
  defaultProps?: TextFieldProps;
}

const InputField: FC<PropsType> = props => {
  const { errorText, ...restProps } = props;
  const [field, meta] = useField(props.defaultProps.name);

  return (
    <TextField
      type="text"
      helperText={'Helper text'}
      {...field}
      {...restProps.defaultProps}
    />
  );
};

export default InputField;
