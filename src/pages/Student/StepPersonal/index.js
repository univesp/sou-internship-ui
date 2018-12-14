import React, { Fragment } from 'react';

import { Title, Row, Col, Datum } from './styles';

const StepPersonal = () => (
  <Fragment>
    <Title>Dados Pessoais</Title>
    <Row>
      <Col>
        <Datum>
          Nome Civil
          <span>Marco Antônio Barão Neves</span>
        </Datum>
      </Col>
    </Row>
    <Row>
      <Col>
        <Datum>
          Nome Social
          <span>Não possui</span>
        </Datum>
      </Col>
    </Row>
    <Row>
      <Col>
        <Datum>
          Documento de Identidade
          <span>12.345.678-9</span>
        </Datum>
      </Col>
      <Col>
        <Datum>
          Emissor/Estado
          <span>SSP</span>
        </Datum>
      </Col>
      <Col>
        <Datum>
          Nacionalidade
          <span>Brasileira</span>
        </Datum>
      </Col>
    </Row>
    <Row>
      <Col>
        <Datum>
          CPF
          <span>123.456.789-00</span>
        </Datum>
      </Col>
      <Col>
        <Datum>
          Titulo de Eleitor
          <span>458879564132879256328</span>
        </Datum>
      </Col>
      <Col>
        <Datum>
          Certificado de Reservista
          <span>74836721632178989316</span>
        </Datum>
      </Col>
    </Row>
    <Row>
      <Col>
        <Datum>
          Cidade de Nascimento
          <span>São Paulo</span>
        </Datum>
      </Col>
      <Col>
        <Datum>
          Naturalidade
          <span>Brasileira</span>
        </Datum>
      </Col>
      <Col>
        <Datum>
          Data de Nascimento
          <span>16/05/2000</span>
        </Datum>
      </Col>
    </Row>
    <Row>
      <Col>
        <Datum>
          Nome da Mãe
          <span>Lucia Maria Barão Neves</span>
        </Datum>
      </Col>
    </Row>
    <Row>
      <Col>
        <Datum>
          Nome do Pai
          <span>Marcio Ferreira Neves</span>
        </Datum>
      </Col>
    </Row>
    <Row>
      <Col>
        <Datum>
          Endereço Residencial (com complementos)
          <span>Av. Prof. Almeida Prado, 532 - Prédio 1</span>
        </Datum>
      </Col>
    </Row>
    <Row>
      <Col>
        <Datum>
          CEP
          <span>05508-280</span>
        </Datum>
      </Col>
      <Col>
        <Datum>
          Bairro
          <span>Butantã</span>
        </Datum>
      </Col>
      <Col>
        <Datum>
          Cidade
          <span>São Paulo</span>
        </Datum>
      </Col>
      <Col>
        <Datum>
          Estado
          <span>São Paulo</span>
        </Datum>
      </Col>
    </Row>
    <Row>
      <Col>
        <Datum>
          E-mail Pessoal
          <span>marco.barao@outlook.com</span>
        </Datum>
      </Col>
      <Col>
        <Datum>
          Telefone
          <span>(11) 98422-6444</span>
        </Datum>
      </Col>
    </Row>
  </Fragment>
);

export default StepPersonal;
