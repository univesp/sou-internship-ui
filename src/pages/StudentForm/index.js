import React, { Component } from 'react';
import { Formik } from 'formik';

import Stepper from '../../components/Stepper';
import StepPersonal from '../StepPersonal';
import StepGrantor from '../StepGrantor';
// import StepDocuments from '../StepDocuments';
// import StepSummary from '../StepSummary';

import {
  Container,
  Title,
  Subtitle,
  Forms as Form,
  GroupButton,
  Button
} from './styles';
import User from '../../assets/imgs/usuario.svg';

const stepper = [
  {
    name: 'Dados pessoais',
    icon: User
  },
  {
    name: 'Concedente',
    icon: 'Suitcase'
  },
  {
    name: 'Documentos',
    icon: 'StepDocuments'
  },
  {
    name: 'Resumo',
    icon: 'StepSummary'
  }
];

const steps = [
  <StepPersonal />,
  <StepGrantor />
  // <StepDocuments />,
  // <StepSummary />
];
class StudentForm extends Component {
  state = {
    step: 0
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = e => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  submit = values => {
    console.log('Values: ', values);
  };
  render() {
    const { step } = this.state;
    return (
      <Container>
        <Stepper step={step} steps={stepper} />
        <Title>Nome da Disciplina de Estágio</Title>
        <Subtitle>Semestre e ano de oferta</Subtitle>
        <Formik onSubmit={this.submit}>
          <Form>
            {steps[step]}
            <GroupButton>
              {step ? (
                <Button secondary onClick={this.previousStep}>
                  Voltar
                </Button>
              ) : null}
              {step === steps.length - 1 ? (
                <Button primary type="submit">
                  Concluir
                </Button>
              ) : (
                <Button primary onClick={this.nextStep}>
                  Próxima
                </Button>
              )}
            </GroupButton>
          </Form>
        </Formik>
      </Container>
    );
  }
}

export default StudentForm;
