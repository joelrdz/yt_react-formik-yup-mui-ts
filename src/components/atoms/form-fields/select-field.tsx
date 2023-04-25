import { FC } from 'react';
import { useField } from 'formik';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

interface PropsType {
  data: Array<{ label: string; value: string; }>;
  label: string;
  name: string;
  fullWidth?: boolean;
}

const SelectField: FC<PropsType> = props => {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;

  return (
    <FormControl { ...rest }>
      <InputLabel>{ label }</InputLabel>
      <Select {...field} value={selectedValue ? selectedValue : ''}>
        {data.map((item, index) => (
          <MenuItem key={ index } value={ item.value }>
            { item.label }
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
