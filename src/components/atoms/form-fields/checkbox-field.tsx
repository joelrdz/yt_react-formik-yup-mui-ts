import { FC } from 'react';
import { useField } from 'formik';
import { Checkbox, FormControl, FormControlLabel } from '@material-ui/core';

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

  return (
    <FormControl {...restProps}>
      <FormControlLabel
        value={field.checked}
        checked={field.checked}
        control={<Checkbox {...field} onChange={onChange} />}
        label={label}
      />
    </FormControl>
  );
};

export default CheckboxField;
