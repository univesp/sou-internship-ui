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

    setFieldValue('grantor.street', street);
    setFieldValue('grantor.city', city);
    setFieldValue('grantor.federatedState', federatedState);
  };

  getValidationSchema = () =>
    Yup.object().shape({
      grantor: Yup.object().shape({
        cnpj: Yup.string().required('O campo CNPJ é obrigatório'),
        name: Yup.string()
          .min(4, 'Nome muito pequeno')
          .max(50, 'Nome muito grande')
          .required('O campo Nome é obrigatório'),
        phone: Yup.array()
          .of(Yup.string())
          .compact()
          .min(1, 'Preencha ao menos um campo de telefone'),
        zip: Yup.string().required('O campo de CEP é obrigatório'),
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
      professor: Yup.object().shape({
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
      })
    });

  render() {
    const {
      handleSubmit,
      grantorOptions,
      buttons,
      initialValues: { grantorSelected, grantor, responsible, professor },
      saveChanges
    } = this.props;

    return (
      <Formik
        onSubmit={handleSubmit}
        validationSchema={this.getValidationSchema}
        initialValues={{
          grantorSelected,
          grantor,
          professor,
          responsible
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
                      options={grantorOptions}
                      getOptionLabel={option => option.name}
                      getOptionValue={option => option.id}
                      name={field.name}
                      placeholder="Busque por uma instituição..."
                      value={field.value}
                      onChange={option => {
                        setFieldValue(field.name, option);
                        setFieldValue('grantor.cnpj', option.cnpj);
                        setFieldValue('grantor.name', option.name);
                        setFieldValue('grantor.phone[0]', option.phone[0]);
                        setFieldValue('grantor.phone[1]', option.phone[1]);
                        setFieldValue('grantor.fax', option.fax);
                        setFieldValue('grantor.zip', option.zip);
                        setFieldValue('grantor.number', option.number);
                        const e = { target: { value: option.zip } };
                        this.handleCep(e, setFieldValue);
                        saveChanges(values);
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
                    name="grantor.cnpj"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="99.999.999/9999-99"
                        maskChar={null}
                        onBlur={e => {
                          field.onBlur(e);
                          setFieldValue(
                            field.name,
                            field.value
                              ? field.value.match(/\d+/g).join('')
                              : ''
                          );
                          saveChanges(values);
                        }}
                      />
                    )}
                  />
                  <ErrorMessage name="grantor.cnpj" component="span" />
                </Label>
              </Col>
              <Col>
                <Label>
                  Nome<span>*</span>
                  <Field
                    name="grantor.name"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="grantor.name" component="span" />
                </Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>
                  Telefone 1<span>*</span>
                  <Field
                    name="grantor.phone[0]"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="(99) 9999-9999?"
                        formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                        maskChar={null}
                        onBlur={e => {
                          field.onBlur(e);
                          setFieldValue(
                            field.name,
                            field.value
                              ? field.value.match(/\d+/g).join('')
                              : ''
                          );
                          saveChanges(values);
                        }}
                      />
                    )}
                  />
                  <ErrorMessage name="grantor.phone" component="span" />
                </Label>
              </Col>
              <Col>
                <Label>
                  Telefone 2
                  <Field
                    name="grantor.phone[1]"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="(99) 9999-9999?"
                        formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                        maskChar={null}
                        onBlur={e => {
                          field.onBlur(e);
                          setFieldValue(
                            field.name,
                            field.value
                              ? field.value.match(/\d+/g).join('')
                              : ''
                          );
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
                    name="grantor.fax"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="(99) 9999-9999"
                        formatChars={{ '9': '[0-9]' }}
                        maskChar={null}
                        onBlur={e => {
                          field.onBlur(e);
                          setFieldValue(
                            field.name,
                            field.value
                              ? field.value.match(/\d+/g).join('')
                              : ''
                          );
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
                    name="grantor.zip"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="99999-999"
                        onBlur={e => {
                          e.preventDefault();
                          this.handleCep(e, setFieldValue);
                          field.onBlur(e);
                          setFieldValue(
                            field.name,
                            field.value
                              ? field.value.match(/\d+/g).join('')
                              : ''
                          );
                          saveChanges(values);
                        }}
                        maskChar={null}
                      />
                    )}
                  />
                  <ErrorMessage name="grantor.zip" component="span" />
                </Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>
                  Logradouro<span>*</span>
                  <Field
                    name="grantor.street"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                    tabIndex="-1"
                  />
                  <ErrorMessage name="grantor.street" component="span" />
                </Label>
              </Col>
              <Col width="35%">
                <Label>
                  Complemento
                  <Field
                    name="grantor.complement"
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
                  <Field name="grantor.number" />
                  <ErrorMessage name="grantor.number" component="span" />
                </Label>
              </Col>
              <Col width="30%">
                <Label>
                  Cidade<span>*</span>
                  <Field
                    name="grantor.city"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                    tabIndex="-1"
                  />
                  <ErrorMessage name="grantor.city" component="span" />
                </Label>
              </Col>
              <Col width="8%">
                <Label>
                  UF<span>*</span>
                  <Field
                    name="grantor.federatedState"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                    tabIndex="-1"
                  />
                  <ErrorMessage
                    name="grantor.federatedState"
                    component="span"
                  />
                </Label>
              </Col>
            </Row>
            <HorizontalDivider />
            <Row>
              <Col>
                <Label>
                  Professor coordenador <span>*</span>
                  <Field
                    name="professor.name"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="professor.name" component="span" />
                </Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>
                  Telefone 1 <span>*</span>
                  <Field
                    name="professor.phone[0]"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="(99) 9999-9999?"
                        formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                        maskChar={null}
                        onBlur={e => {
                          field.onBlur(e);
                          setFieldValue(
                            field.name,
                            field.value
                              ? field.value.match(/\d+/g).join('')
                              : ''
                          );
                        }}
                      />
                    )}
                  />
                  <ErrorMessage name="professor.phone" component="span" />
                </Label>
              </Col>
              <Col>
                <Label>
                  Telefone 2
                  <Field
                    name="professor.phone[1]"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="(99) 9999-9999?"
                        formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
                        maskChar={null}
                        onBlur={e => {
                          field.onBlur(e);
                          setFieldValue(
                            field.name,
                            field.value
                              ? field.value.match(/\d+/g).join('')
                              : ''
                          );
                        }}
                      />
                    )}
                  />
                </Label>
              </Col>
              <Col>
                <Label>
                  E-mail institucional <span>*</span>
                  <Field
                    name="professor.email"
                    onBlur={e => {
                      handleBlur(e);
                      saveChanges(values);
                    }}
                  />
                  <ErrorMessage name="professor.email" component="span" />
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
                        onBlur={e => {
                          field.onBlur(e);
                          setFieldValue(
                            field.name,
                            field.value
                              ? field.value.match(/\d+/g).join('')
                              : ''
                          );
                        }}
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
                        onBlur={e => {
                          field.onBlur(e);
                          setFieldValue(
                            field.name,
                            field.value
                              ? field.value.match(/\d+/g).join('')
                              : ''
                          );
                        }}
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
            {buttons}
          </Form>
        )}
      </Formik>
    );
  }
}

export default StepGrantor;
