import React from 'react';

import { Steps, Step } from "./styles";

const Stepper = ({ step, steps }) => (
  <Steps>
    {steps.map(({icon, name}, index) => (
      <Step active={(step === index)} completed={(step > index)} icon={icon}>{name}</Step>
    ))}
  </Steps>
);

export default Stepper;
