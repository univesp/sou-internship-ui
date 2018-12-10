import React from 'react';
import PropTypes from 'prop-types';

import { Steps, Step } from './styles';

const Stepper = ({ step, steps }) => (
  <Steps>
    {steps.map(({ icon, name }, index) => (
      <Step
        active={step === index}
        completed={step > index}
        icon={icon}
        key={name}
      >
        {name}
      </Step>
    ))}
  </Steps>
);

Stepper.propTypes = {
  step: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.any.isRequired
    }).isRequired
  ).isRequired
};

export default Stepper;
