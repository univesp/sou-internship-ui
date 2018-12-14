import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Alert from 'react-s-alert';

import Stepper from '../../../components/Stepper';
import StepPersonal from '../StepPersonal';
import StepGrantor from '../StepGrantor';
import StepDocuments from '../StepDocuments';
import StepSummary from '../../StepSummary';

import cep from '../../../services/viaCep';

import {
  Container,
  Title,
  Subtitle,
  Forms as Form,
  GroupButton,
  Button
} from './styles';
import PersonalData from '../../../assets/imgs/dadospessoais.svg';
import CourseData from '../../../assets/imgs/concedente.svg';
import Documents from '../../../assets/imgs/documentos.svg';
import Summary from '../../../assets/imgs/resumo.svg';

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
    icon: Summary
  }
];

const getSchema = Yup.object().shape({
  instituition: Yup.object()
    .shape({
      cnpj: Yup.string().required('O campo CNPJ é obrigatório'),
      name: Yup.string()
        .min(4, 'Nome muito pequeno')
        .max(50, 'Nome muito grande')
        .required('O campo Nome é obrigatório'),
      phone: Yup.array()
        .of(Yup.string())
        .min(1, 'Preencha ao menos um campo de telefone'),
      cep: Yup.string().required('O campo de CEP é obrigatório'),
      street: Yup.string()
        .min(4, 'Nome de logradouro muito pequeno')
        .max(25, 'Nome de logradouro muito grande')
        .required('O campo de CEP é obrigatório'),
      number: Yup.number()
        .min(0, 'Digite apenas números positivos')
        .required('O campo de número é obrigatório'),
      city: Yup.string()
        .min(4, 'Nome de cidade muito pequeno')
        .max(30, 'Nome de cidade muito grande')
        .required('O campo de cidade é obrigatório'),
      federatedState: Yup.string()
        .min(4, 'Nome do Estado muito pequeno')
        .max(30, 'Nome do Estado muito grande')
        .required('O campo de Estado é obrigatório')
    })
    .required(),
  responsible: {
    name: Yup.string()
      .min(4, 'Nome muito pequeno')
      .max(50, 'Nome muito grande')
      .required('O campo Nome é obrigatório'),
    phone: Yup.array()
      .of(Yup.string())
      .min(1, 'Preencha ao menos um campo de telefone'),
    email: Yup.string()
      .email('Preencha com um e-mail valido')
      .required('O campo e-mail é obrigatório')
  },
  regent: {
    name: Yup.string()
      .min(4, 'Nome muito pequeno')
      .max(50, 'Nome muito grande')
      .required('O campo Nome é obrigatório'),
    phone: Yup.array()
      .of(Yup.string())
      .min(1, 'Preencha ao menos um campo de telefone'),
    email: Yup.string()
      .email('Preencha com um e-mail valido')
      .required('O campo e-mail é obrigatório')
  },
  advisor: {
    name: Yup.string()
      .min(4, 'Nome muito pequeno')
      .max(50, 'Nome muito grande')
      .required('O campo Nome é obrigatório'),
    phone: Yup.array()
      .of(Yup.string())
      .min(1, 'Preencha ao menos um campo de telefone'),
    email: Yup.string()
      .email('Preencha com um e-mail valido')
      .required('O campo e-mail é obrigatório')
  }
});

class StudentForm extends Component {
  state = {
    step: 0,
    options: [
      { value: 1, label: 'Univesidade de São Paulo' },
      { value: 2, label: 'Universidade da Bahia' },
      { value: 3, label: 'Universidade do Paraná' }
    ]
  };

  previousStep = e => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = e => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  clickStep = step => {
    this.setState({ step });
  };

  handleCep = async (e, setFieldValue) => {
    const res = await cep.get(`${e.target.value}/json`);
    const {
      logradouro: street,
      localidade: city,
      uf: federatedState
    } = res.data;

    setFieldValue('institution.street', street);
    setFieldValue('institution.city', city);
    setFieldValue('institution.federatedState', federatedState);
  };

  submit = values => {
    console.log('Values: ', values);
    const { history } = this.props;
    Alert.success('Processo enviado com sucesso', {
      position: 'bottom-right',
      effect: 'slide'
    });
    history.push('/internship');
  };

  render() {
    const { step, options } = this.state;
    return (
      <Container>
        <Stepper step={step} steps={stepper} clickStep={this.clickStep} />
        <Title>Nome da Disciplina de Estágio</Title>
        <Subtitle>Semestre e ano de oferta</Subtitle>
        <Formik
          onSubmit={this.submit}
          validationSchema={getSchema}
          initialValues={{
            grantorSelected: {},
            instituition: {
              cnpj: '',
              name: '',
              phone: [],
              fax: '',
              cep: '',
              street: '',
              complement: '',
              number: '',
              city: '',
              federatedState: ''
            },
            responsible: {
              name: '',
              phone: [],
              email: ''
            },
            regent: {
              name: '',
              phone: [],
              email: ''
            },
            advisor: {
              name: '',
              phone: [],
              email: ''
            },
            files: {
              work: {},
              explotation: {},
              activities: {}
            }
          }}
          render={({
            values,
            setFieldValue,
            errors,
            touched,
            validateField
          }) => {
            const steps = [
              <StepPersonal />,
              <StepGrantor
                options={options}
                errors={errors}
                touched={touched}
                handleCep={this.handleCep}
                setFieldValue={setFieldValue}
              />,
              <StepDocuments setFieldValue={setFieldValue} values={values} />,
              <StepSummary values={values} />
            ];
            return (
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
            );
          }}
        />
      </Container>
    );
  }
}

export default StudentForm;
