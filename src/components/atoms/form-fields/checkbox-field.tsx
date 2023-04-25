import { FC } from 'react';
import { useField } from 'formik';
import { at } from 'lodash';
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@material-ui/core';

interface PropsType {
  name: string;
  label: string;
}

const CheckboxField: FC<PropsType> = props => {
  const { label, ...restProps } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  function onChange(e) {
    setValue(e.target.checked);
  }

  function renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    const isError = touched && error && true;

    if (isError) {
      return <FormHelperText>{ error }</FormHelperText>;
    }
  }

  return (
    <FormControl {...restProps}>
      <FormControlLabel
        value={field.checked}
        checked={field.checked}
        control={<Checkbox {...field} onChange={onChange} />}
        label={label}
      />
      {renderHelperText()}
    </FormControl>
  );
};

export default CheckboxField;
