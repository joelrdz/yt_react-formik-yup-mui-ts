import { FC } from 'react';
import { Checkbox, FormControl, FormControlLabel } from '@material-ui/core';

interface PropsType {
  name: string;
  label: string;
}

const CheckboxField: FC<PropsType> = props => {
  const { label, ...restProps } = props;

  return (
    <FormControl {...restProps}>
      <FormControlLabel
        control={<Checkbox />}
        label={label}
      />
    </FormControl>
  );
};

export default CheckboxField;
