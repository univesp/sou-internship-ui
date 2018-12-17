import React, { Component } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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

import cep from '../../../services/viaCep';

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

class StepGrantor extends Component {
  handleCep = async (e, setFieldValue) => {
    const res = await cep.get(`${e.target.value}/json`);
    const {
      logradouro: street,
      localidade: city,
      uf: federatedState
    } = res.data;

    setFieldValue('instituition.street', street);
    setFieldValue('instituition.city', city);
    setFieldValue('instituition.federatedState', federatedState);
  };

  getValidationSchema = () =>
    Yup.object().shape({
      instituition: Yup.object().shape({
        cnpj: Yup.string().required('O campo CNPJ é obrigatório'),
        name: Yup.string()
          .min(4, 'Nome muito pequeno')
          .max(50, 'Nome muito grande')
          .required('O campo Nome é obrigatório'),
        phone: Yup.array()
          .of(Yup.string())
          .compact()
          .min(1, 'Preencha ao menos um campo de telefone'),
        cep: Yup.string().required('O campo de CEP é obrigatório'),
        street: Yup.string()
          .min(4, 'Nome de logradouro muito pequeno')
          .max(25, 'Nome de logradouro muito grande')
          .required('O campo de CEP é obrigatório'),
        number: Yup.string().required('O campo de número é obrigatório'),
        city: Yup.string()
          .min(4, 'Nome de cidade muito pequeno')
          .max(30, 'Nome de cidade muito grande')
          .required('O campo de cidade é obrigatório'),
        federatedState: Yup.string()
          .min(2, 'Digite a sigla do Estado')
          .max(2, 'Digite a sigla do Estado')
          .required('O campo de Estado é obrigatório')
      }),
      responsible: Yup.object().shape({
        name: Yup.string()
          .min(4, 'Nome muito pequeno')
          .max(50, 'Nome muito grande')
          .required('O campo Nome é obrigatório'),
        phone: Yup.array()
          .of(Yup.string())
          .compact()
          .min(1, 'Preencha ao menos um campo de telefone'),
        email: Yup.string()
          .email('Preencha com um e-mail valido')
          .required('O campo e-mail é obrigatório')
      }),
      regent: Yup.object().shape({
        name: Yup.string()
          .min(4, 'Nome muito pequeno')
          .max(50, 'Nome muito grande')
          .required('O campo Nome é obrigatório'),
        phone: Yup.array()
          .of(Yup.string())
          .compact()
          .min(1, 'Preencha ao menos um campo de telefone'),
        email: Yup.string()
          .email('Preencha com um e-mail valido')
          .required('O campo e-mail é obrigatório')
      }),
      advisor: Yup.object().shape({
        name: Yup.string()
          .min(4, 'Nome muito pequeno')
          .max(50, 'Nome muito grande')
          .required('O campo Nome é obrigatório'),
        department: Yup.string()
          .min(4, 'Nome de departamento muito pequeno')
          .max(50, 'Nome de departamento muito grande')
          .required('O campo departamento é obrigatório'),
        phone: Yup.array()
          .of(Yup.string())
          .compact()
          .min(1, 'Preencha ao menos um campo de telefone'),
        email: Yup.string()
          .email('Preencha com um e-mail valido')
          .required('O campo e-mail é obrigatório')
      })
    });

  render() {
    const {
      options,
      handleSubmit,
      buttons,
      initialValues: {
        grantorSelected,
        instituition,
        responsible,
        regent,
        advisor
      },
      saveChanges
    } = this.props;

    return (
      <Formik
        onSubmit={handleSubmit}
        validationSchema={this.getValidationSchema}
        initialValues={{
          grantorSelected,
          instituition,
          responsible,
          regent,
          advisor
        }}
      >
        {({ setFieldValue, values, handleBlur }) => (
          <Form>
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
                      onChange={option => {
                        form.setFieldValue(field.name, option.value || null);
                      }}
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
                      onBlur={e => {
                        field.onBlur(e);
                        saveChanges(values);
                      }}
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
                    name="instituition.cnpj"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="99.999.999/9999-99"
                        maskChar={null}
                        onBlur={e => {
                          field.onBlur(e);
                          saveChanges(values);
                        }}
                      />
                    )}
                  />
                  <ErrorMessage name="instituition.cnpj" component="span" />
                </Label>
              </Col>
              <Col>
                <Label>
                  Nome<span>*</span>
                  <Field
                    name="instituition.name"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="instituition.name" component="span" />
                </Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>
                  Telefone 1<span>*</span>
                  <Field
                    name="instituition.phone[0]"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="(99) 9999-9999?"
                        formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                        maskChar={null}
                        onBlur={e => {
                          field.onBlur(e);
                          saveChanges(values);
                        }}
                      />
                    )}
                  />
                  <ErrorMessage name="instituition.phone" component="span" />
                </Label>
              </Col>
              <Col>
                <Label>
                  Telefone 2
                  <Field
                    name="instituition.phone[1]"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="(99) 9999-9999?"
                        formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                        maskChar={null}
                        onBlur={e => {
                          field.onBlur(e);
                          saveChanges(values);
                        }}
                      />
                    )}
                  />
                </Label>
              </Col>
              <Col>
                <Label>
                  FAX
                  <Field
                    name="instituition.fax"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="(99) 9999-9999"
                        formatChars={{ '9': '[0-9]' }}
                        maskChar={null}
                        onBlur={e => {
                          field.onBlur(e);
                          saveChanges(values);
                        }}
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
                    name="instituition.cep"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="99999-999"
                        onBlur={e => {
                          e.preventDefault();
                          this.handleCep(e, setFieldValue);
                          field.onBlur(e);
                          saveChanges(values);
                        }}
                        maskChar={null}
                      />
                    )}
                  />
                  <ErrorMessage name="instituition.cep" component="span" />
                </Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>
                  Logradouro<span>*</span>
                  <Field
                    name="instituition.street"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="instituition.street" component="span" />
                </Label>
              </Col>
              <Col width="35%">
                <Label>
                  Complemento
                  <Field
                    name="instituition.complement"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                </Label>
              </Col>
              <Col width="10%">
                <Label>
                  Número<span>*</span>
                  <Field name="instituition.number" />
                  <ErrorMessage name="instituition.number" component="span" />
                </Label>
              </Col>
              <Col width="30%">
                <Label>
                  Cidade<span>*</span>
                  <Field
                    name="instituition.city"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="instituition.city" component="span" />
                </Label>
              </Col>
              <Col width="8%">
                <Label>
                  UF<span>*</span>
                  <Field
                    name="instituition.federatedState"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage
                    name="instituition.federatedState"
                    component="span"
                  />
                </Label>
              </Col>
            </Row>
            <HorizontalDivider />
            <Row>
              <Col>
                <Label>
                  Diretor ou Coordenador responsável pela supervisão do estágio
                  <span>*</span>
                  <Field
                    name="responsible.name"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="responsible.name" component="span" />
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
                  <ErrorMessage name="responsible.phone" component="span" />
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
                  <Field
                    name="responsible.email"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="responsible.email" component="span" />
                </Label>
              </Col>
            </Row>
            <HorizontalDivider />
            <Row>
              <Col>
                <Label>
                  Professor regente ou afim <span>*</span>
                  <Field
                    name="regent.name"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="regent.name" component="span" />
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
                  <ErrorMessage name="regent.phone" component="span" />
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
                  <Field
                    name="regent.email"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="regent.email" component="span" />
                </Label>
              </Col>
            </Row>
            <HorizontalDivider />
            <Row>
              <Col>
                <Label>
                  Orientador(a) de Estágio <span>*</span>
                  <Field
                    name="advisor.name"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="advisor.name" component="span" />
                </Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>
                  Departamento <span>*</span>
                  <Field
                    name="advisor.department"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="advisor.department" component="span" />
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
                  <ErrorMessage name="advisor.phone" component="span" />
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
                  <Field
                    name="advisor.email"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="advisor.email" component="span" />
                </Label>
              </Col>
            </Row>
            {buttons}
          </Form>
        )}
      </Formik>
    );
  }
}

export default StepGrantor;
