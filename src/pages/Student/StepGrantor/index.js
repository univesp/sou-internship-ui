import React, { Fragment } from 'react';
import Select from 'react-select';

import {
  Title,
  Subtitle,
  Row,
  Col,
  Label,
  MyField as Field,
  MyMask as InputMask,
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

const StepGrantor = ({
  options,
  errors,
  touched,
  handleCep,
  setFieldValue
}) => (
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
          CNPJ<span>*</span>
          <Field
            name="institution.cnpj"
            render={props => (
              <InputMask {...props} mask="99.999.999/9999-99" maskChar={null} />
            )}
          />
          {errors.institution &&
          errors.institution.cnpj &&
          touched.institution.cnpj ? (
            <span>{errors.institution.cnpj}</span>
          ) : null}
        </Label>
      </Col>
      <Col>
        <Label>
          Nome<span>*</span>
          <Field name="institution.name" />
          {errors.institution &&
          errors.institution.name &&
          touched.institution.name ? (
            <span>{errors.institution.name}</span>
          ) : null}
        </Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Telefone 1<span>*</span>
          <Field
            name="institution.phone[0]"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 9999-9999?"
                formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                maskChar={null}
              />
            )}
          />
          {errors.institution &&
          errors.institution.phone &&
          touched.institution.phone ? (
            <span>{errors.institution.phone}</span>
          ) : null}
        </Label>
      </Col>
      <Col>
        <Label>
          Telefone 2
          <Field
            name="institution.phone[1]"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 9999-9999?"
                formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                maskChar={null}
              />
            )}
          />
        </Label>
      </Col>
      <Col>
        <Label>
          FAX
          <Field
            name="institution.fax"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 9999-9999"
                formatChars={{ '9': '[0-9]' }}
                maskChar={null}
              />
            )}
          />
        </Label>
      </Col>
    </Row>
    <Row>
      <Col width="15%">
        <Label>
          CEP<span>*</span>
          <Field
            name="institution.cep"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="99999-999"
                onBlur={e => {
                  e.preventDefault();
                  handleCep(e, setFieldValue);
                  field.onBlur(e);
                }}
                maskChar={null}
              />
            )}
          />
          {errors.institution &&
          errors.institution.cep &&
          touched.institution.cep ? (
            <span>{errors.institution.cep}</span>
          ) : null}
        </Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Logradouro<span>*</span>
          <Field name="institution.street" />
          {errors.institution &&
          errors.institution.street &&
          touched.institution.street ? (
            <span>{errors.institution.street}</span>
          ) : null}
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
          Número<span>*</span>
          <Field name="institution.number" />
          {errors.institution &&
          errors.institution.number &&
          touched.institution.number ? (
            <span>{errors.institution.number}</span>
          ) : null}
        </Label>
      </Col>
      <Col width="30%">
        <Label>
          Cidade<span>*</span>
          <Field name="institution.city" />
          {errors.institution &&
          errors.institution.city &&
          touched.institution.city ? (
            <span>{errors.institution.city}</span>
          ) : null}
        </Label>
      </Col>
      <Col width="8%">
        <Label>
          UF<span>*</span>
          <Field name="institution.federatedState" />
          {errors.institution &&
          errors.institution.phone &&
          touched.institution.phone ? (
            <span>{errors.institution.phone}</span>
          ) : null}
        </Label>
      </Col>
    </Row>
    <HorizontalDivider />
    <Row>
      <Col>
        <Label>
          Diretor ou Coordenador responsável pela supervisão do estágio
          <span>*</span>
          <Field name="responsible.name" />
          {errors.responsible &&
          errors.responsible.name &&
          touched.responsible.name ? (
            <span>{errors.responsible.name}</span>
          ) : null}
        </Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Telefone 1 <span>*</span>
          <Field
            name="responsible.phone[0]"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 9999-9999?"
                formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                maskChar={null}
              />
            )}
          />
          {errors.responsible &&
          errors.responsible.phone &&
          touched.responsible.phone ? (
            <span>{errors.responsible.phone}</span>
          ) : null}
        </Label>
      </Col>
      <Col>
        <Label>
          Telefone 2
          <Field
            name="responsible.phone[1]"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 9999-9999?"
                formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                maskChar={null}
              />
            )}
          />
        </Label>
      </Col>
      <Col>
        <Label>
          E-mail institucional <span>*</span>
          <Field name="responsible.email" />
          {errors.responsible &&
          errors.responsible.email &&
          touched.responsible.email ? (
            <span>{errors.responsible.email}</span>
          ) : null}
        </Label>
      </Col>
    </Row>
    <HorizontalDivider />
    <Row>
      <Col>
        <Label>
          Professor regente ou afim <span>*</span>
          <Field name="regent.name" />
          {errors.regent && errors.regent.name && touched.regent.name ? (
            <span>{errors.regent.name}</span>
          ) : null}
        </Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Telefone 1 <span>*</span>
          <Field
            name="regent.phone[0]"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 9999-9999?"
                formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                maskChar={null}
              />
            )}
          />
          {errors.regent && errors.regent.phone && touched.regent.phone ? (
            <span>{errors.regent.phone}</span>
          ) : null}
        </Label>
      </Col>
      <Col>
        <Label>
          Telefone 2
          <Field
            name="regent.phone[1]"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 9999-9999?"
                formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                maskChar={null}
              />
            )}
          />
        </Label>
      </Col>
      <Col>
        <Label>
          E-mail institucional <span>*</span>
          <Field name="regent.email" />
          {errors.regent && errors.regent.email && touched.regent.email ? (
            <span>{errors.regent.email}</span>
          ) : null}
        </Label>
      </Col>
    </Row>
    <HorizontalDivider />
    <Row>
      <Col>
        <Label>
          Orientador(a) de Estágio <span>*</span>
          <Field name="advisor.name" />
          {errors.advisor && errors.advisor.name && touched.advisor.name ? (
            <span>{errors.advisor.name}</span>
          ) : null}
        </Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Departamento <span>*</span>
          <Field name="advisor.department" />
          {errors.advisor &&
          errors.advisor.department &&
          touched.advisor.department ? (
            <span>{errors.advisor.department}</span>
          ) : null}
        </Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>
          Telefone 1 <span>*</span>
          <Field
            name="advisor.phone[0]"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 9999-9999?"
                formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                maskChar={null}
              />
            )}
          />
          {errors.advisor && errors.advisor.phone && touched.advisor.phone ? (
            <span>{errors.advisor.phone}</span>
          ) : null}
        </Label>
      </Col>
      <Col>
        <Label>
          Telefone 2
          <Field
            name="advisor.phone[1]"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 9999-9999?"
                formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                maskChar={null}
              />
            )}
          />
        </Label>
      </Col>
      <Col>
        <Label>
          E-mail institucional <span>*</span>
          <Field name="advisor.email" />
          {errors.advisor && errors.advisor.email && touched.advisor.email ? (
            <span>{errors.advisor.email}</span>
          ) : null}
        </Label>
      </Col>
    </Row>
  </Fragment>
);

export default StepGrantor;
