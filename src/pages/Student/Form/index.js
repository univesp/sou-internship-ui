import React, { Component } from 'react';
import Alert from 'react-s-alert';

import Stepper from '../../../components/Stepper';
import StepPersonal from '../StepPersonal';
import StepGrantor from '../StepGrantor';
import StepDocuments from '../StepDocuments';
import StepSummary from '../../StepSummary';

import api from '../../../services/api';

import { Container, Title, Subtitle, GroupButton, Button } from './styles';
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

class StudentForm extends Component {
  state = {
    step: 0,
    options: [
      { value: 1, label: 'Univesidade de São Paulo' },
      { value: 2, label: 'Universidade da Bahia' },
      { value: 3, label: 'Universidade do Paraná' }
    ],
    values: {
      grantorSelected: {},
      personal: {
        firstName: '',
        lastName: '',
        assumedName: '',
        birthDate: '',
        gender: '',
        countryBirth: '',
        nationality: '',
        race: '',
        marital: '',
        bloodType: '',
        organDonor: '',
        cellphone: '',
        personalEmail: '',
        professionalEmail: '',
        documents: {
          rg: {
            number: '',
            issuer: ''
          },
          cpf: '',
          electoralCard: '',
          certificateReservist: ''
        },
        address: {
          street: '',
          number: '',
          zip: '',
          district: '',
          city: '',
          state: '',
          complement: ''
        }
      },
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
        work: null,
        explotation: null,
        activities: null
      }
    }
  };

  async componentDidMount() {
    const { step, values } =
      JSON.parse(localStorage.getItem('state')) || this.state;

    const resPersonal = await api.get('/student/1');
    const resGrantor = await api.get('grantor');

    this.setState({
      step: Math.min(step, 2),
      grantorOptions: resGrantor.data.institution,
      values: {
        ...values,
        personal: {
          ...resPersonal.data.studentData[0],
          address: {
            street: 'Rua da Vitória',
            number: '66',
            zip: '07600-100',
            district: 'Anhangabau',
            city: 'São Paulo',
            state: 'SP'
          }
        },
        files: {
          work: null,
          explotation: null,
          activities: null
        }
      }
    });
  }

  previousStep = e => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  clickStep = step => {
    this.setState({ step });
  };

  saveOnLocalStorage = values => {
    const { step, values: stateValues } = this.state;
    localStorage.setItem(
      'state',
      JSON.stringify({ step, values: { ...stateValues, ...values } })
    );
  };

  submit = values => {
    const { step, values: oldValues } = this.state;
    this.setState({ values: { ...oldValues, ...values } });

    if (step === stepper.length - 1) {
      const { history } = this.props;
      Alert.success('Processo enviado com sucesso', {
        position: 'bottom-right',
        effect: 'slide'
      });
      history.push('/internship');
      localStorage.removeItem('state');
    } else {
      this.nextStep();
      this.saveOnLocalStorage({});
    }
  };

  renderButtons() {
    const { step } = this.state;
    return (
      <GroupButton>
        {step ? (
          <Button secondary onClick={this.previousStep}>
            Voltar
          </Button>
        ) : null}
        <Button primary type="submit">
          {step === stepper.length - 1 ? 'Concluir' : 'Próxima'}
        </Button>
      </GroupButton>
    );
  }

  render() {
    const { step, grantorOptions, values } = this.state;
    const steps = [
      <StepPersonal
        handleSubmit={this.submit}
        buttons={this.renderButtons()}
      />,
      <StepGrantor
        handleSubmit={this.submit}
        saveChanges={this.saveOnLocalStorage}
        initialValues={values}
        grantorOptions={grantorOptions}
        buttons={this.renderButtons()}
      />,
      <StepDocuments
        handleSubmit={this.submit}
        initialValues={values}
        saveChanges={this.saveOnLocalStorage}
        buttons={this.renderButtons()}
      />,
      <StepSummary
        handleSubmit={this.submit}
        values={values}
        buttons={this.renderButtons()}
      />
    ];
    return (
      <Container>
        <Stepper step={step} steps={stepper} clickStep={this.clickStep} />
        <Title>Nome da Disciplina de Estágio</Title>
        <Subtitle>Semestre e ano de oferta</Subtitle>
        {steps[step]}
      </Container>
    );
  }
}

export default StudentForm;
