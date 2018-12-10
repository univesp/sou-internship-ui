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
import PersonalData from '../../assets/imgs/dadospessoais.svg';
import CourseData from '../../assets/imgs/dadosdocurso.svg';
import Documents from '../../assets/imgs/documentos.svg';
import Report from '../../assets/imgs/relatorio.svg';

const stepper = [
  {
    name: 'Dados pessoais',
    icon: PersonalData
  },
  {
    name: 'Concedente',
    icon: CourseData
  },
  {
    name: 'Documentos',
    icon: Documents
  },
  {
    name: 'Resumo',
    icon: Report
  }
];
class StudentForm extends Component {
  state = {
    step: 0,
    options: [
      { value: 1, label: 'Univesidade de São Paulo' },
      { value: 2, label: 'Universidade da Bahia' },
      { value: 3, label: 'Universidade do Paraná' }
    ]
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
    const { step, options } = this.state;
    const steps = [
      <StepPersonal />,
      <StepGrantor options={options} />
      // <StepDocuments />,
      // <StepSummary />
    ];
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
