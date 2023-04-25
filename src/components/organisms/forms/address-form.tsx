import { FC } from 'react';
import { FormikValues } from 'formik';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from 'components/atoms/form-fields';

interface PropsType {
  formField: FormikValues;
}

const AddressForm: FC<PropsType> = props => {
  const {
    formField: {
      firstName,
    }
  } = props;

  return (
    <div>
      <Typography>Shipping address</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: firstName.name,
              label: firstName.label,
              fullWidth: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddressForm;
