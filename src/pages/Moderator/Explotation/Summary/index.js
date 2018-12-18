import React, { Component, Fragment } from 'react';
import StepSummary from '../../../StepSummary';
import { Formik, Form } from 'formik';
import Alert from 'react-s-alert';

import {
  Container,
  Title,
  Subtitle,
  Area,
  Text,
  MyField as Field,
  GroupButton,
  Button,
  Label,
  Textarea
} from './styles';

class Summary extends Component {
  state = {
    overrule: false,
    process: {
      personal: {
        firstName: 'Alice',
        lastName: 'Pereira Rodrigues',
        assumedName: '',
        birthDate: '1989-01-06',
        gender: 'F',
        countryBirth: 'Brasil',
        nationality: 'Brasileira',
        race: 0,
        marital: 2,
        bloodType: 2,
        organDonor: true,
        cellphone: '35992755126',
        personalEmail: 'alicepereirarodrigues@outlook.com',
        professionalEmail: 'alice.rodrigues@jourrapide.com',
        documents: {
          rg: {
            number: '273044576',
            issuer: 'Secretaria de Segurança Pública'
          },
          cpf: '17143053929',
          electoralCard: '',
          certificateReservist: ''
        },
        address: {
          street: 'Rua da Vitória',
          number: '66',
          zip: '07600-100',
          district: 'Anhangabau',
          city: 'São Paulo',
          state: 'SP'
        }
      },
      instituition: {
        cnpj: '12.321.312/3213-21',
        name: 'daswqdsaqdw',
        phone: ['(12) 3213-21321'],
        fax: '',
        cep: '08110-100',
        street: 'Rua Jangaba',
        complement: '',
        number: '132',
        city: 'São Paulo',
        federatedState: 'SP'
      },
      responsible: {
        name: 'dwqdwq',
        phone: ['(12) 3123-12321'],
        email: 'dasdsa@dasda.com'
      },
      regent: {
        name: 'saddwqsa',
        phone: ['(21) 3213-12312'],
        email: 'dsadsa@dasdsa.com'
      },
      advisor: {
        name: 'asddwqdsa',
        phone: ['(12) 3123-12312'],
        email: 'dqwdsa@das.com',
        department: 'asdsadsadsadas'
      },
      files: {
        work: {},
        explotation: {},
        activities: {}
      }
    }
  };

  overrule = e => {
    e.preventDefault();
    this.setState({ overrule: true });
  };

  submit = values => {
    console.log('Values: ', values);
    const { history } = this.props;
    Alert.success('Resposta de aproveitamento reencaminhada!', {
      position: 'bottom-right',
      effect: 'slide'
    });
    history.push('/internship/moderator/explotation');
  };

  renderJustification() {
    return (
      <Fragment>
        <Label>
          Justificativa para indeferimento<span>*</span>
          <Textarea
            component="textarea"
            placeholder="Digite aqui..."
            name="justification"
          />
        </Label>
        <GroupButton>
          <Button primary type="submit">
            Salvar
          </Button>
        </GroupButton>
      </Fragment>
    );
  }

  render() {
    const { process, overrule } = this.state;
    return (
      <Container>
        <Title>Nome da Disciplina deEstágio</Title>
        <Subtitle>Semestre e ano de oferta</Subtitle>
        <StepSummary values={process} />
        <Formik
          onSubmit={this.submit}
          initialValues={{
            hours: 0,
            justification: ''
          }}
        >
          <Form>
            <Area>
              <Text>
                Neste processo de aproveitamento de estágio são conferidos ao
                aluno
                <Field name="hours" type="number" min="0" /> horas comprovadas.
              </Text>
            </Area>
            <GroupButton>
              <Button secondary onClick={this.overrule}>
                Indeferir
              </Button>
              <Button primary type="submit" onClick={this.handleSubmit}>
                Deferir
              </Button>
            </GroupButton>
            {overrule ? this.renderJustification() : null}
          </Form>
        </Formik>
      </Container>
    );
  }
}

export default Summary;
