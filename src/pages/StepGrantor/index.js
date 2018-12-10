import React, { Fragment } from 'react';

import {
  Title,
  Subtitle,
  Row,
  Col,
  Label,
  MyField as Field,
  HorizontalDivider
} from './styles';

const StepGrantor = () => (
  <Fragment>
    <Title>Dados da Instituição Concedente</Title>
    <Subtitle>Busque a empresa ou cadastre uma nova</Subtitle>
    <Row bottom>
      <Col>
        <Field name="selectGrantor" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Nome
          <Field name="institution.name" />
        </Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Telefone 1
          <Field name="institution.phone[0]" />
        </Label>
      </Col>
      <Col>
        <Label>
          Telefone 2
          <Field name="institution.phone[1]" />
        </Label>
      </Col>
      <Col>
        <Label>
          FAX
          <Field name="institution.fax" />
        </Label>
      </Col>
    </Row>
    <Row>
      <Col width="150px">
        <Label>
          CEP
          <Field name="institution.cep" />
        </Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Logradouro
          <Field name="institution.street" />
        </Label>
      </Col>
      <Col width="350px">
        <Label>
          Complemento
          <Field name="institution.complement" />
        </Label>
      </Col>
      <Col width="100px">
        <Label>
          Número
          <Field name="institution.number" />
        </Label>
      </Col>
      <Col width="300px">
        <Label>
          Cidade
          <Field name="institution.city" />
        </Label>
      </Col>
      <Col width="70px">
        <Label>
          UF
          <Field name="institution.federatedState" />
        </Label>
      </Col>
    </Row>
    <HorizontalDivider />
    <Row>
      <Col>
        <Label>
          Diretor ou Coordenador responsável pela supervisão do estágio
          <Field name="responsible.name" />
        </Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Telefone 1
          <Field name="responsible.phone[0]" />
        </Label>
      </Col>
      <Col>
        <Label>
          Telefone 2
          <Field name="responsible.phone[1]" />
        </Label>
      </Col>
      <Col>
        <Label>
          E-mail institucional
          <Field name="responsible.email" />
        </Label>
      </Col>
    </Row>
    <HorizontalDivider />
    <Row>
      <Col>
        <Label>
          Professor regente ou afim
          <Field name="regent.name" />
        </Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Telefone 1
          <Field name="regent.phone[0]" />
        </Label>
      </Col>
      <Col>
        <Label>
          Telefone 2
          <Field name="regent.phone[1]" />
        </Label>
      </Col>
      <Col>
        <Label>
          E-mail institucional
          <Field name="regent.email" />
        </Label>
      </Col>
    </Row>
    <HorizontalDivider />
    <Row>
      <Col>
        <Label>
          Orientador(a) de Estágio
          <Field name="advisor.name" />
        </Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Departamento
          <Field name="advisor.name" />
        </Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Telefone 1
          <Field name="advisor.phone[0]" />
        </Label>
      </Col>
      <Col>
        <Label>
          Telefone 2
          <Field name="advisor.phone[1]" />
        </Label>
      </Col>
      <Col>
        <Label>
          E-mail institucional
          <Field name="advisor.email" />
        </Label>
      </Col>
    </Row>
  </Fragment>
);

export default StepGrantor;
