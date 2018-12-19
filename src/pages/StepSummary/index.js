import React from 'react';
import { Formik, Form } from 'formik';

import Document from '../../components/Document';
import { Title, Subtitle, Row, Col, Data, Item, Datum } from './styles';

const dict = {
  work: 'Carteira de trabalho',
  explotation: 'Declaração',
  activities: 'Relatório de atividades'
};

const bloodType = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
const race = ['Negro(a)', 'Pardo(a)', 'Amarelo(a)', 'Indígena', 'Branco(a)'];
const marital = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'];

const StepSummary = ({ handleSubmit, buttons, values }) => (
  <Formik onSubmit={handleSubmit}>
    <Form>
      <Title>Resumo</Title>
      <Subtitle>Dados Pessoais</Subtitle>
      <Row>
        <Col>
          <Data>
            <Item>
              Nome <Datum>{values.personal.firstName}</Datum>
            </Item>
            <Item>
              Sobrenome <Datum>{values.personal.lastName}</Datum>
            </Item>
            <Item>
              Nome Social
              <Datum>{values.personal.assumedName || 'Não possui'}</Datum>
            </Item>
            <Item>
              Data de nascimento <Datum>{values.personal.birthDate}</Datum>
            </Item>
            <Item>
              Sexo <Datum>{values.personal.gender}</Datum>
            </Item>
            <Item>
              Naturalidade <Datum>{values.personal.countryBirth}</Datum>
            </Item>
            <Item>
              Nacionalidade <Datum>{values.personal.nationality}</Datum>
            </Item>
            <Item>
              CPF <Datum>{values.personal.documents.cpf}</Datum>
            </Item>
            <Item>
              Raça <Datum>{race[values.personal.race]}</Datum>
            </Item>
            <Item>
              Estado Civil <Datum>{marital[values.personal.marital]}</Datum>
            </Item>
            <Item>
              Tipo de Sanguíneo{' '}
              <Datum>{bloodType[values.personal.bloodType]}</Datum>
            </Item>
            <Item>
              Doador de órgãos?{' '}
              <Datum>{values.personal.organDonor ? 'Sim' : 'Não'}</Datum>
            </Item>
          </Data>
        </Col>
        <Col>
          <Data>
            <Item>
              Logradouro <Datum>{values.personal.address.street}</Datum>
            </Item>
            <Item>
              Número <Datum>{values.personal.address.number}</Datum>
            </Item>
            <Item>
              CEP <Datum>{values.personal.address.zip}</Datum>
            </Item>
            <Item>
              Bairro <Datum>{values.personal.address.district}</Datum>
            </Item>
            <Item>
              Cidade <Datum>{values.personal.address.city}</Datum>
            </Item>
            <Item>
              Estado <Datum>{values.personal.address.state}</Datum>
            </Item>
            <Item>
              Complemento{' '}
              <Datum>
                {values.personal.address.complement || 'Não possui'}
              </Datum>
            </Item>
            <Item>
              Celular <Datum>{values.personal.cellphone}</Datum>
            </Item>
            <Item>
              E-mail pessoal <Datum>{values.personal.personalEmail}</Datum>
            </Item>
            <Item>
              E-mail profissional
              <Datum>{values.personal.professionalEmail}</Datum>
            </Item>
          </Data>
        </Col>
      </Row>
      <Subtitle>Dados da Concedente</Subtitle>
      <Row>
        <Col>
          <Data>
            <Item>
              CNPJ <Datum>{values.instituition.cnpj}</Datum>
            </Item>
            <Item>
              Nome <Datum>{values.instituition.name}</Datum>
            </Item>
            <Item>
              Telefone 1 <Datum>{values.instituition.phone[0]}</Datum>
            </Item>
            <Item>
              Telefone 2
              <Datum>{values.instituition.phone[1] || 'Não informado'}</Datum>
            </Item>
            <Item>
              Fax <Datum>{values.instituition.fax || 'Não informado'}</Datum>
            </Item>
            <Item>
              Logradouro <Datum>{values.instituition.street}</Datum>
            </Item>
            <Item>
              Número <Datum>{values.instituition.number}</Datum>
            </Item>
            <Item>
              CEP <Datum>{values.instituition.cep}</Datum>
            </Item>
            <Item>
              Cidade <Datum>{values.instituition.city}</Datum>
            </Item>
            <Item>
              Estado <Datum>{values.instituition.federatedState}</Datum>
            </Item>
            <Item>
              Complemento
              <Datum>{values.instituition.complement || 'Não possui'}</Datum>
            </Item>
          </Data>
        </Col>
      </Row>
      <Subtitle>Dados do Professor coordenador</Subtitle>
      <Row>
        <Col>
          <Data>
            <Item>
              Nome <Datum>{values.professor.name}</Datum>
            </Item>
            <Item>
              Telefone 1 <Datum>{values.professor.phone[0]}</Datum>
            </Item>
            <Item>
              Telefone 2
              <Datum>{values.professor.phone[1] || 'Não informado'}</Datum>
            </Item>
            <Item>
              E-mail institucional
              <Datum>{values.professor.email}</Datum>
            </Item>
          </Data>
        </Col>
      </Row>
      <Subtitle>Dados do Diretor/Coordenador responsável</Subtitle>
      <Row>
        <Col>
          <Data>
            <Item>
              Nome <Datum>{values.responsible.name}</Datum>
            </Item>
            <Item>
              Telefone 1 <Datum>{values.responsible.phone[0]}</Datum>
            </Item>
            <Item>
              Telefone 2
              <Datum>{values.responsible.phone[1] || 'Não informado'}</Datum>
            </Item>
            <Item>
              E-mail institucional
              <Datum>{values.responsible.email}</Datum>
            </Item>
          </Data>
        </Col>
      </Row>
      <Subtitle>Documentos</Subtitle>
      <Row width="100%">
        {Object.keys(values.files).map(file => (
          <Col>
            <Document
              key={file}
              name={dict[file]}
              document={file}
              file={values.files[file]}
            />
          </Col>
        ))}
      </Row>
      {buttons}
    </Form>
  </Formik>
);

export default StepSummary;
