import { FC } from 'react';
import { FormikValues } from 'formik';
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
      <InputField
        defaultProps={{
          name: firstName.name,
          label: firstName.label,
          fullWidth: true,
        }}
      />
    </div>
  );
};

export default AddressForm;
