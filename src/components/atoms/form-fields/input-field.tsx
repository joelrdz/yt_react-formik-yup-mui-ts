import { FC } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

interface PropsType {
  errorText?: string;
  defaultProps?: TextFieldProps;
}

const InputField: FC<PropsType> = props => {
  return <TextField />;
};

export default InputField;
