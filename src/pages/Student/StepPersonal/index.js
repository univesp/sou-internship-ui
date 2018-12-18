import React from 'react';
import { Formik, Form } from 'formik';

import { Title, Row, Col, Datum } from './styles';

const StepPersonal = ({ handleSubmit, buttons, values }) => (
  <Formik onSubmit={handleSubmit}>
    <Form>
      <Title>Dados Pessoais</Title>
      <Row>
        <Col>
          <Datum>
            Nome Civil
            <span>
              {values.personal.firstName} {values.personal.lastName}
            </span>
          </Datum>
        </Col>
      </Row>
      <Row>
        <Col>
          <Datum>
            Nome Social
            <span>{values.personal.assumedName || 'Não possui'}</span>
          </Datum>
        </Col>
      </Row>
      <Row>
        <Col>
          <Datum>
            Documento de Identidade
            <span>{values.personal.documents.rg.number}</span>
          </Datum>
        </Col>
        <Col>
          <Datum>
            Emissor/Estado
            <span>{values.personal.documents.rg.issuer}</span>
          </Datum>
        </Col>
        <Col>
          <Datum>
            Nacionalidade
            <span>{values.personal.nationality}</span>
          </Datum>
        </Col>
      </Row>
      <Row>
        <Col>
          <Datum>
            CPF
            <span>{values.personal.documents.cpf}</span>
          </Datum>
        </Col>
        <Col>
          <Datum>
            Titulo de Eleitor
            <span>
              {values.personal.documents.electoralCard || 'Não Possui'}
            </span>
          </Datum>
        </Col>
        <Col>
          <Datum>
            Certificado de Reservista
            <span>
              {values.personal.documents.certificateReservist || 'Não Possui'}
            </span>
          </Datum>
        </Col>
      </Row>
      <Row>
        <Col>
          <Datum>
            Cidade de Nascimento
            <span>{values.personal.address.city}</span>
          </Datum>
        </Col>
        <Col>
          <Datum>
            Naturalidade
            <span>{values.personal.countryBirth}</span>
          </Datum>
        </Col>
        <Col>
          <Datum>
            Data de Nascimento
            <span>{values.personal.birthDate}</span>
          </Datum>
        </Col>
      </Row>
      <Row>
        <Col>
          <Datum>
            Nome da Mãe
            <span>Joyce da Silva Pereira</span>
          </Datum>
        </Col>
      </Row>
      <Row>
        <Col>
          <Datum>
            Nome do Pai
            <span>Cidescleison Rodrigues Sá</span>
          </Datum>
        </Col>
      </Row>
      <Row>
        <Col>
          <Datum>
            Endereço Residencial (com complementos)
            <span>
              {values.personal.address.street}, {values.personal.address.number}
              {values.personal.address.complement}
            </span>
          </Datum>
        </Col>
      </Row>
      <Row>
        <Col>
          <Datum>
            CEP
            <span>{values.personal.address.zip}</span>
          </Datum>
        </Col>
        <Col>
          <Datum>
            Bairro
            <span>{values.personal.address.district}</span>
          </Datum>
        </Col>
        <Col>
          <Datum>
            Cidade
            <span>{values.personal.address.city}</span>
          </Datum>
        </Col>
        <Col>
          <Datum>
            Estado
            <span>{values.personal.address.state}</span>
          </Datum>
        </Col>
      </Row>
      <Row>
        <Col>
          <Datum>
            E-mail Pessoal
            <span>{values.personal.personalEmail}</span>
          </Datum>
        </Col>
        <Col>
          <Datum>
            Telefone
            <span>{values.personal.cellphone}</span>
          </Datum>
        </Col>
      </Row>
      {buttons}
    </Form>
  </Formik>
);

export default StepPersonal;
