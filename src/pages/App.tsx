// PLUGINS IMPORTS //
import { useState } from 'react';
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';
import { Form, Formik } from 'formik';
// COMPONENTS IMPORTS //
import { Wrapper } from 'components/layout';
import initialValues from 'utils/initial-values';
// EXTRA IMPORTS //

const steps = ['Shipping address', 'Payment details', 'Review your order'];

const App = () => {
  const [activeStep, setActiveStep] = useState(1);

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <div>Shipping address</div>;
      case 1:
        return <div>Payment details</div>;
      case 2:
        return <div>Review your order</div>;
    }
  };

  return (
    <Wrapper>
      <Typography>Checkout</Typography>
      <Stepper>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Formik initialValues={ initialValues } onSubmit={() => {}}>
        <Form>
          { renderStepContent(activeStep) }
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default App;
