import React, { Component } from 'react';
import Alert from 'react-s-alert';
import LoadingScreen from 'react-loading-screen';

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
    loading: false,
    step: 0,
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
        parents: {
          motherName: '',
          fatherName: ''
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
      grantor: {
        cnpj: '',
        name: '',
        phone: [],
        fax: '',
        zip: '',
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
      professor: {
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
    this.toggleLoading();
    const { step, values } =
      JSON.parse(localStorage.getItem('state')) || this.state;

    const resPersonal = await api.get('/student/1');
    const resProfessor = await api.get('/professor/1');
    const resGrantor = await api.get('grantor').then(res => {
      this.toggleLoading();
      return res;
    });

    this.setState({
      step: Math.min(step, 2),
      grantorOptions: resGrantor.data.grantors,
      values: {
        ...values,
        personal: {
          ...resPersonal.data.studentData[0]
        },
        professor: { ...resProfessor.data.professor[0] },
        files: {
          work: null,
          explotation: null,
          activities: null
        }
      }
    });
  }

  toggleLoading = () => {
    const { loading } = this.state;
    this.setState({ loading: !loading });
  };

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
    const { step, grantorOptions, values, loading } = this.state;
    const steps = [
      <StepPersonal
        handleSubmit={this.submit}
        values={values}
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
        <LoadingScreen
          loading={loading}
          bgColor="#FFF"
          spinnerColor="#ED3B48"
        />
        <Stepper step={step} steps={stepper} clickStep={this.clickStep} />
        <Title>Nome da Disciplina de Estágio</Title>
        <Subtitle>Semestre e ano de oferta</Subtitle>
        {steps[step]}
      </Container>
    );
  }
}

export default StudentForm;
