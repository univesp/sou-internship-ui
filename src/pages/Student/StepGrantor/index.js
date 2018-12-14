import React, { Fragment } from 'react';
import Select from 'react-select';

import {
  Title,
  Subtitle,
  Row,
  Col,
  Label,
  MyField as Field,
  HorizontalDivider
} from './styles';

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: styles => ({
    ...styles,
    color: 'black'
  }),
  input: styles => ({ ...styles }),
  placeholder: styles => ({ ...styles }),
  singleValue: styles => ({ ...styles })
};

const StepGrantor = ({ options }) => (
  <Fragment>
    <Title>Dados da Instituição Concedente</Title>
    <Subtitle>Busque a empresa ou cadastre uma nova</Subtitle>
    <Row bottom>
      <Col>
        <Field
          name="grantorSelected"
          component={({ field, form }) => (
            <Select
              options={options}
              name={field.name}
              placeholder="Busque por uma instituição..."
              value={
                options
                  ? options.find(option => option.value === field.value)
                  : ''
              }
              onChange={option =>
                form.setFieldValue(field.name, option.value || null)
              }
              styles={colourStyles}
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary50: '#C4D1D6',
                  primary25: '#EBF1F2',
                  primary: '#EBF1F2',
                  neutral20: 'rgb(196, 209, 214)'
                }
              })}
              onBlur={field.onBlur}
            />
          )}
        />
      </Col>
    </Row>
    <Row>
      <Col width="22%">
        <Label>
          CNPJ
          <Field name="institution.cnpj" />
        </Label>
      </Col>
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
      <Col width="15%">
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
      <Col width="35%">
        <Label>
          Complemento
          <Field name="institution.complement" />
        </Label>
      </Col>
      <Col width="10%">
        <Label>
          Número
          <Field name="institution.number" />
        </Label>
      </Col>
      <Col width="30%">
        <Label>
          Cidade
          <Field name="institution.city" />
        </Label>
      </Col>
      <Col width="8%">
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
