import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';

import StepSummary from '../../StepSummary';

import api from '../../../services/api';
import { Container, Title, Subtitle, GroupButton, Button } from './styles';

class Summary extends Component {
	state = {
		loading: false,
		process: {}
	};

	async componentDidMount() {
		this.toggleLoading();
		const { match: { params: { id } } } = this.props;

		const process = await api.get(`internship/process/${id}`).then((res) => {
			this.toggleLoading();
			return res.data.process;
		});

		this.setState({ process });
	}

	toggleLoading = () => {
		const { loading } = this.state;
		this.setState({ loading: !loading });
	};

	render() {
		const { process, loading } = this.state;
		return (
			<Container>
				<LoadingScreen loading={loading} bgColor="#FFF" spinnerColor="#ED3B48" />
				<Title>Nome da Disciplina de Estágio</Title>
				<Subtitle>Semestre e ano de oferta</Subtitle>
				<StepSummary values={process} />
				<GroupButton>
					<Button primary to="/internship">
						Voltar
					</Button>
				</GroupButton>
			</Container>
		);
	}
}

export default Summary;
