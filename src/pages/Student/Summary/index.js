import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';

import StepSummary from '../../StepSummary';

import { Container, Title, Subtitle, GroupButton, Button } from './styles';

class Summary extends Component {
  state = {
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
      grantor: {
        cnpj: '12.321.312/3213-21',
        name: 'daswqdsaqdw',
        phone: ['(12) 3213-21321'],
        fax: '',
        zip: '08110100',
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
      professor: {
        name: 'saddwqsa',
        phone: ['(21) 3213-12312'],
        email: 'dsadsa@dasdsa.com'
      },
      files: {
        work: {},
        explotation: {},
        activities: {}
      }
    }
  };

  render() {
    const { process, loading } = this.state;
    return (
      <Container>
        <LoadingScreen
          loading={loading}
          bgColor="#FFF"
          spinnerColor="#ED3B48"
        />
        <Title>Nome da Disciplina de Estágio</Title>
        <Subtitle>Semestre e ano de oferta</Subtitle>
        <StepSummary values={process} />
        <GroupButton>
          <Button primary to="/internship">
            Voltar
          </Button>
        </GroupButton>
      </Container>
    );
  }
}

export default Summary;
