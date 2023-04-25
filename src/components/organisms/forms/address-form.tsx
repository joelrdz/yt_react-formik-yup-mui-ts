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
      lastName,
      address1,
      address2,
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
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: lastName.name,
              label: lastName.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            defaultProps={{
              name: address1.name,
              label: address1.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            defaultProps={{
              name: address2.name,
              label: address2.label,
              fullWidth: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddressForm;
