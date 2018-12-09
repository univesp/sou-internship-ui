import React, { Component } from 'react';
// import { Formik } from 'formik';

import Stepper from '../../components/Stepper';
// import Personal from '../Personal';
// import Grantor from '../Grantor';
// import Documents from '../Documents';
// import Summary from '../Summary';

import { Container, Title, Subtitle } from './styles';

const stepper = [
  {
    name: 'Dados pessoais',
    icon: 'User'
  },
  {
    name: 'Concedente',
    icon: 'Suitcase'
  },
  {
    name: 'Documentos',
    icon: 'Documents'
  },
  {
    name: 'Resumo',
    icon: 'Summary'
  }
]

// const steps = [<Personal />, <Grantor/>, <Documents/>, <Summary/>];
class StudentForm extends Component {
  state = {
    step: 0
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  nextStep = (e) => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  submit = values => {
    console.log("Values: ", values);
  }
  render() {
    const { step } = this.state;
    return (
      <Container>
        <Stepper step={step} steps={stepper}/>
        <Title>Nome da Disciplina de Estágio</Title>
        <Subtitle>Semestre e ano de oferta</Subtitle>
        <a href="/#" onClick={this.nextStep}>
          Próxima
        </a>
        {/* <Formik onSubmit={this.submit}>
          <Form>
            {steps[step]}
            {step && (
              <Button secondary onClick={this.previousStep}>
                Voltar
              </Button>
            )}
            {step === steps.length - 1 ? (
              <Button primary type="submit">
                Concluir
              </Button>
            ) : (
              <Button primary onClick={this.nextStep}>
                Próxima
              </Button>
            )}
          </Form>
        </Formik> */}
      </Container>
    );
  }
}

export default StudentForm;
