// PLUGINS IMPORTS //
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';
// COMPONENTS IMPORTS //
import { Wrapper } from 'components/layout'
// EXTRA IMPORTS //

const steps = ['Shipping address', 'Payment details', 'Review your order'];

const App = () => {
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
    </Wrapper>
  );
};

export default App;
