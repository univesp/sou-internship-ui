import React, { Component } from 'react';
import Alert from 'react-s-alert';
import LoadingScreen from 'react-loading-screen';

import Stepper from '../../../components/Stepper';
import StepPersonal from '../StepPersonal';
import StepOrganization from '../StepOrganization';
import StepDocuments from '../StepDocuments';
import StepSummary from '../../StepSummary';

import api from '../../../services/api';

import { Container, Title, Subtitle, GroupButton, Button } from './styles';
import PersonalData from '../../../assets/imgs/dadospessoais.svg';
import CourseData from '../../../assets/imgs/concedente.svg';
import Documents from '../../../assets/imgs/documentos.svg';
import Summary from '../../../assets/imgs/resumo.svg';

const stepper = [
	{
		name: 'Dados pessoais',
		icon: PersonalData
	},
	{
		name: 'Concedente',
		icon: CourseData
	},
	{
		name: 'Documentos',
		icon: Documents
	},
	{
		name: 'Resumo',
		icon: Summary
	}
];

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

class StudentForm extends Component {
	state = {
		loading: false,
		step: 0,
		values: {
			organizationSelected: {},
			personal: {
				firstName: '',
				lastName: '',
				assumedName: '',
				birthDate: '',
				gender: '',
				countryBirth: '',
				nationality: '',
				race: '',
				marital: '',
				bloodType: '',
				organDonor: '',
				cellphone: '',
				personalEmail: '',
				professionalEmail: '',
				documents: {
					rg: {
						number: '',
						issuer: ''
					},
					cpf: '',
					electoralCard: '',
					certificateReservist: ''
				},
				parents: {
					motherName: '',
					fatherName: ''
				},
				address: {
					street: '',
					number: '',
					zip: '',
					district: '',
					city: '',
					state: '',
					complement: ''
				}
			},
			organization: {
				organization_type_id: 1,
				document_number: '',
				organization_name: '',
				phone1: '',
				phone2: '',
				fax: '',
				zipcode: '',
				street: '',
				complement: '',
				number: '',
				city: '',
				state: ''
			},
			responsible: {
				name: '',
				phone: [],
				email: ''
			},
			professor: {
				name: '',
				phone: [],
				email: ''
			},
			files: {
				work: null,
				explotation: null,
				activities: null
			}
		}
	};

	async componentDidMount() {
		this.toggleLoading();

		const { step, values } = JSON.parse(localStorage.getItem('internship_state')) || this.state;

		const resPersonal = await api.get('/student/1').then((res) => res.data.studentData[0]);
		const resProfessor = await api.get('/professor/1').then((res) => res.data.professor[0]);
		const resOrganization = await api.get('organization').then((res) => {
			this.toggleLoading();
			return res.data.data;
		});

		this.setState({
			step: Math.min(step, 2),
			organizationOptions: resOrganization,
			values: {
				...values,
				personal: {
					...resPersonal
				},
				professor: { ...resProfessor },
				files: {
					work: null,
					explotation: null,
					activities: null
				}
			}
		});
	}

	toggleLoading = () => {
		const { loading } = this.state;
		this.setState({ loading: !loading });
	};

	previousStep = (e) => {
		e.preventDefault();
		const { step } = this.state;
		this.setState({ step: step - 1 });
	};

	nextStep = () => {
		const { step } = this.state;
		this.setState({ step: step + 1 });
	};

	clickStep = (step) => {
		this.setState({ step });
	};

	saveOnLocalStorage = (values) => {
		const { step, values: stateValues } = this.state;
		localStorage.setItem('internship_state', JSON.stringify({ step, values: { ...stateValues, ...values } }));
	};

	submit = async (valuesFormik) => {
		const { step, values: oldValues } = this.state;
		this.setState({ values: { ...oldValues, ...valuesFormik } });

		if (step === stepper.length - 1) {
			const { values } = this.state;
			const organization_id =
				JSON.stringify(values.organizationSelected) === '{}'
					? await api.post('organization', values.organization).then((res) => res.data.data.id)
					: values.organizationSelected.id;
			const student_id = 10;
			const user_id = 10;
			const internship_process_type_id = 1;
			const internship_responsible = 1;

			const internship_process_id = await api
				.post('/internship/process', {
					organization_id,
					user_id,
					student_id,
					internship_process_type_id,
					internship_responsible
				})
				.then((res) => res.data.process.id);

			const { values: { files } } = this.state;
			Object.keys(files).forEach((key, index) => {
				if (!files[key]) return;
				getBase64(files[key]).then((attachment) =>
					api.post('/internship/document', { internship_process_id, document_type_id: index+1, attachment })
				);
			});
			api.post('/internship/document');

			const { history } = this.props;

			Alert.success('Processo enviado com sucesso', {
				position: 'bottom-right',
				effect: 'slide'
			});
			history.push('/internship');
			localStorage.removeItem('internship_state');
		} else {
			this.nextStep();
			this.saveOnLocalStorage({});
		}
	};

	renderButtons() {
		const { step } = this.state;
		return (
			<GroupButton>
				{step ? (
					<Button secondary onClick={this.previousStep}>
						Voltar
					</Button>
				) : null}
				<Button primary type="submit">
					{step === stepper.length - 1 ? 'Concluir' : 'Próxima'}
				</Button>
			</GroupButton>
		);
	}

	render() {
		const { step, organizationOptions, values, loading } = this.state;
		const steps = [
			<StepPersonal handleSubmit={this.submit} values={values} buttons={this.renderButtons()} />,
			<StepOrganization
				handleSubmit={this.submit}
				saveChanges={this.saveOnLocalStorage}
				initialValues={values}
				organizationOptions={organizationOptions}
				buttons={this.renderButtons()}
			/>,
			<StepDocuments
				handleSubmit={this.submit}
				initialValues={values}
				saveChanges={this.saveOnLocalStorage}
				buttons={this.renderButtons()}
			/>,
			<StepSummary handleSubmit={this.submit} values={values} buttons={this.renderButtons()} />
		];
		return (
			<Container>
				<LoadingScreen loading={loading} bgColor="#FFF" spinnerColor="#ED3B48" />
				<Stepper step={step} steps={stepper} clickStep={this.clickStep} />
				<Title>Nome da Disciplina de Estágio</Title>
				<Subtitle>Semestre e ano de oferta</Subtitle>
				{steps[step]}
			</Container>
		);
	}
}

export default StudentForm;
