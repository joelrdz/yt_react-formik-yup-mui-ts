import { FC } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

interface PropsType {
  data: Array<{ label: string; value: string; }>;
  label: string;
  name: string;
  fullWidth?: boolean;
}

const SelectField: FC<PropsType> = props => {
  const { label, data, ...rest } = props;

  return (
    <FormControl { ...rest }>
      <InputLabel>{ label }</InputLabel>
      <Select>
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
