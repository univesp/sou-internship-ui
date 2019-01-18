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
	HorizontalDivider,
	Radio,
	Check,
	Link,
	Error
} from './styles';

import cep from '../../../services/viaCep';

const colourStyles = {
	control: (styles) => ({ ...styles, backgroundColor: 'white' }),
	option: (styles) => ({
		...styles,
		color: 'black'
	}),
	input: (styles) => ({ ...styles }),
	placeholder: (styles) => ({ ...styles }),
	singleValue: (styles) => ({ ...styles })
};

class StepOrganization extends Component {
	handleCep = async (e, setFieldValue) => {
		const res = await cep.get(`${e.target.value}/json`);
		const { logradouro: street, localidade: city, uf: state } = res.data;

		setFieldValue('organization.street', street);
		setFieldValue('organization.city', city);
		setFieldValue('organization.state', state);
	};

	getValidationSchema = () =>
		Yup.object().shape({
			organization: Yup.object().shape({
				document_number: Yup.string().required('O campo de documento é obrigatório'),
				organization_name: Yup.string()
					.min(4, 'Nome da instituição muito pequeno')
					.max(80, 'Nome da instituição muito grande')
					.required('O campo Nome é obrigatório'),
				phone1: Yup.string().required('Preencha o campo de telefone 1'),
				zipcode: Yup.string().required('O campo de CEP é obrigatório'),
				street: Yup.string()
					.min(8, 'Nome de logradouro muito pequeno')
					.max(60, 'Nome de logradouro muito grande')
					.required('O campo de logradouro é obrigatório'),
				street_number: Yup.string().required('O campo de número é obrigatório'),
				city: Yup.string()
					.min(4, 'Nome de cidade muito pequeno')
					.max(40, 'Nome de cidade muito grande')
					.required('O campo de cidade é obrigatório'),
				state: Yup.string()
					.min(2, 'Digite a sigla do UF')
					.max(2, 'Digite a sigla do UF')
					.required('O campo de UF é obrigatório')
			}),
			responsible: Yup.object().shape({
				name: Yup.string()
					.min(4, 'Nome do responsável muito pequeno')
					.max(50, 'Nome do responsável muito grande')
					.required('O campo Nome é obrigatório'),
				phone: Yup.array().of(Yup.string()).compact().min(1, 'Preencha ao menos um campo de telefone'),
				email: Yup.string()
					.email('Preencha com um e-mail valido')
					.max(70, 'O E-mail é muito grande')
					.required('O campo e-mail é obrigatório')
			}),
			professor: Yup.object().shape({
				name: Yup.string()
					.min(4, 'Nome muito pequeno')
					.max(50, 'Nome muito grande')
					.required('O campo Nome é obrigatório'),
				phone: Yup.array().of(Yup.string()).compact().min(1, 'Preencha ao menos um campo de telefone'),
				email: Yup.string()
					.email('Preencha com um e-mail valido')
					.max(70, 'O E-mail é muito grande')
					.required('O campo e-mail é obrigatório')
			})
		});

	render() {
		const {
			handleSubmit,
			organizationOptions,
			buttons,
			initialValues: { organizationSelected, organization, responsible, professor },
			saveChanges
		} = this.props;

		return (
			<Formik
				onSubmit={handleSubmit}
				validationSchema={this.getValidationSchema}
				initialValues={{
					organizationSelected,
					organization,
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
									name="organizationSelected"
									component={({ field, form }) => (
										<Select
											options={organizationOptions}
											getOptionLabel={(option) => option.organization_name}
											getOptionValue={(option) => option.id}
											name={field.name}
											placeholder="Busque por uma instituição..."
											value={field.value}
											onChange={(option) => {
												setFieldValue(field.name, option);
												setFieldValue('organization.document_number', option.document_number);
												setFieldValue(
													'organization.organization_name',
													option.organization_name
												);
												setFieldValue('organization.phone1', option.phone1);
												setFieldValue('organization.phone2', option.phone2 || '');
												setFieldValue('organization.fax', option.fax || '');
												setFieldValue('organization.zipcode', option.zipcode);
												setFieldValue('organization.street_number', option.street_number);
												const e = { target: { value: option.zipcode } };
												this.handleCep(e, setFieldValue);
												saveChanges(values);
											}}
											styles={colourStyles}
											theme={(theme) => ({
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
										name="organization.document_number"
										render={({ field }) => (
											<InputMask
												{...field}
												mask="99.999.999/9999-99"
												maskChar={null}
												onBlur={(e) => {
													field.onBlur(e);
													setFieldValue(
														field.name,
														field.value.match(/\d+/g).length
															? field.value.match(/\d+/g).join('')
															: ''
													);
													saveChanges(values);
												}}
												disabled={JSON.stringify(values.organizationSelected) !== '{}'}
											/>
										)}
									/>
									<ErrorMessage name="organization.cnpj" component={Error} />
								</Label>
							</Col>
							<Col>
								<Label>
									Nome<span>*</span>
									<Field
										name="organization.organization_name"
										onBlur={(e) => {
											handleBlur(e);
											saveChanges(values);
										}}
										disabled={JSON.stringify(values.organizationSelected) !== '{}'}
									/>
									<ErrorMessage name="organization.organization_name" component={Error} />
								</Label>
							</Col>
						</Row>
						<Row>
							<Col>
								<Label>
									Telefone 1<span>*</span>
									<Field
										name="organization.phone1"
										render={({ field }) => (
											<InputMask
												{...field}
												mask="(99) 9999-9999?"
												formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
												maskChar={null}
												onBlur={(e) => {
													field.onBlur(e);
													setFieldValue(
														field.name,
														field.value.length > 1 ? field.value.match(/\d+/g).join('') : ''
													);
													saveChanges(values);
												}}
												disabled={JSON.stringify(values.organizationSelected) !== '{}'}
											/>
										)}
									/>
									<ErrorMessage name="organization.phone1" component={Error} />
								</Label>
							</Col>
							<Col>
								<Label>
									Telefone 2
									<Field
										name="organization.phone2"
										render={({ field }) => (
											<InputMask
												{...field}
												mask="(99) 9999-9999?"
												formatChars={{ '9': '[0-9]', '?': '[0-9 ]' }}
												maskChar={null}
												onBlur={(e) => {
													field.onBlur(e);
													setFieldValue(
														field.name,
														field.value.length > 1 ? field.value.match(/\d+/g).join('') : ''
													);
													saveChanges(values);
												}}
												disabled={JSON.stringify(values.organizationSelected) !== '{}'}
											/>
										)}
									/>
								</Label>
							</Col>
							<Col>
								<Label>
									FAX
									<Field
										name="organization.fax"
										render={({ field }) => (
											<InputMask
												{...field}
												mask="(99) 9999-9999"
												formatChars={{ '9': '[0-9]' }}
												maskChar={null}
												onBlur={(e) => {
													field.onBlur(e);
													setFieldValue(
														field.name,
														field.value.length > 1 ? field.value.match(/\d+/g).join('') : ''
													);
													saveChanges(values);
												}}
												disabled={JSON.stringify(values.organizationSelected) !== '{}'}
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
										name="organization.zipcode"
										render={({ field }) => (
											<InputMask
												{...field}
												mask="99999-999"
												onBlur={(e) => {
													e.preventDefault();
													this.handleCep(e, setFieldValue);
													field.onBlur(e);
													setFieldValue(
														field.name,
														field.value.match(/\d+/g).length
															? field.value.match(/\d+/g).join('')
															: ''
													);
													saveChanges(values);
												}}
												disabled={JSON.stringify(values.organizationSelected) !== '{}'}
												maskChar={null}
											/>
										)}
									/>
									<ErrorMessage name="organization.zipcode" component={Error} />
								</Label>
							</Col>
						</Row>
						<Row>
							<Col>
								<Label>
									Logradouro<span>*</span>
									<Field
										name="organization.street"
										onBlur={(e) => {
											handleBlur(e);
											saveChanges(values);
										}}
										disabled={JSON.stringify(values.organizationSelected) !== '{}'}
										tabIndex="-1"
									/>
									<ErrorMessage name="organization.street" component={Error} />
								</Label>
							</Col>
							<Col width="35%">
								<Label>
									Complemento
									<Field
										name="organization.complement"
										onBlur={(e) => {
											handleBlur(e);
											saveChanges(values);
										}}
										disabled={JSON.stringify(values.organizationSelected) !== '{}'}
									/>
								</Label>
							</Col>
							<Col width="10%">
								<Label>
									Número<span>*</span>
									<Field
										name="organization.street_number"
										disabled={JSON.stringify(values.organizationSelected) !== '{}'}
									/>
									<ErrorMessage name="organization.street_number" component={Error} />
								</Label>
							</Col>
							<Col width="30%">
								<Label>
									Cidade<span>*</span>
									<Field
										name="organization.city"
										onBlur={(e) => {
											handleBlur(e);
											saveChanges(values);
										}}
										disabled={JSON.stringify(values.organizationSelected) !== '{}'}
										tabIndex="-1"
									/>
									<ErrorMessage name="organization.city" component={Error} />
								</Label>
							</Col>
							<Col width="8%">
								<Label>
									UF<span>*</span>
									<Field
										name="organization.state"
										onBlur={(e) => {
											handleBlur(e);
											saveChanges(values);
										}}
										disabled={JSON.stringify(values.organizationSelected) !== '{}'}
										tabIndex="-1"
									/>
									<ErrorMessage name="organization.state" component={Error} />
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
										onBlur={(e) => {
											handleBlur(e);
											saveChanges(values);
										}}
										disabled="true"
									/>
									<ErrorMessage name="professor.name" component={Error} />
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
												onBlur={(e) => {
													field.onBlur(e);
													setFieldValue(
														field.name,
														field.value.length > 1 ? field.value.match(/\d+/g).join('') : ''
													);
												}}
												disabled="true"
											/>
										)}
									/>
									<ErrorMessage name="professor.phone" component={Error} />
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
												onBlur={(e) => {
													field.onBlur(e);
													setFieldValue(
														field.name,
														field.value.length > 1 ? field.value.match(/\d+/g).join('') : ''
													);
												}}
												disabled="true"
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
										onBlur={(e) => {
											handleBlur(e);
											saveChanges(values);
										}}
										disabled="true"
									/>
									<ErrorMessage name="professor.email" component={Error} />
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
										onBlur={(e) => {
											handleBlur(e);
											saveChanges(values);
										}}
									/>
									<ErrorMessage name="responsible.name" component={Error} />
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
												onBlur={(e) => {
													field.onBlur(e);
													setFieldValue(
														field.name,
														field.value.length > 1 ? field.value.match(/\d+/g).join('') : ''
													);
												}}
											/>
										)}
									/>
									<ErrorMessage name="responsible.phone" component={Error} />
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
												onBlur={(e) => {
													field.onBlur(e);
													setFieldValue(
														field.name,
														field.value.length > 1 ? field.value.match(/\d+/g).join('') : ''
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
										onBlur={(e) => {
											handleBlur(e);
											saveChanges(values);
										}}
									/>
									<ErrorMessage name="responsible.email" component={Error} />
								</Label>
							</Col>
						</Row>
						{/* <Row>
              <Col>
                <Field
                  name="agree"
                  render={({ field }) => (
                    <Radio
                      type="radio"
                      {...field}
                      id={field.name}
                      onChange={() => setFieldValue(field.name, true)}
                      checked={field.value}
                    />
                  )}
                />
                <Label htmlFor="agree">
                  <Check checked={values.agree === true} />
                  Eu li e aceito a{' '}
                  <Link href={Degrees} target="_blank">
                    regulamentação de aproveitamento de estágio
                  </Link>
                  <ErrorMessage name="agree" component={Error} />
                </Label>
              </Col>
            </Row> */}
						{buttons}
					</Form>
				)}
			</Formik>
		);
	}
}

export default StepOrganization;
