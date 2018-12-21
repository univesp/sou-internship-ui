import React, { Component, Fragment } from 'react';
import LoadingScreen from 'react-loading-screen';

import {
  Container,
  Table,
  Head,
  Row,
  Th,
  Body,
  Td,
  Type,
  Grantor,
  MyLink as Link,
  Status,
  Text,
  Actions,
  Action
} from './styles';

import api from '../../services/api';

const status = ['Em análise', 'Deferido', 'Indeferido', 'Pendente'];
const type = ['Aproveitamento de horas', 'Incluir processo de estágio'];
class Internship extends Component {
  state = {
    process: null,
    grantor: null,
    loading: false
  };

  toggleLoading = () => {
    const { loading } = this.state;
    this.setState({ loading: !loading });
  };

  async componentDidMount() {
    this.toggleLoading();
    const resProcess = await api.get('/student/1/processes');
    const resGrantor = await api.get('/grantor/1').then(res => {
      this.toggleLoading();
      return res;
    });

    this.setState({
      process: resProcess.data.processes,
      grantor: resGrantor.data.grantor[0]
    });
  }

  renderTable = () => {
    const {
      match: { url }
    } = this.props;
    const { process, grantor } = this.state;
    return (
      <Table>
        <Head>
          <Row>
            <Th align="left">Processo</Th>
            <Th align="left">Enviado em</Th>
            <Th align="left">Status</Th>
            <Th align="left">Área/Responsável</Th>
            <Th />
          </Row>
        </Head>
        <Body>
          {process.map(item => (
            <Row key={item.id}>
              <Td align="left">
                <Type>
                  {type[item.type]}
                  <Grantor>{grantor.name}</Grantor>
                </Type>
              </Td>
              <Td align="left">
                {item.created_at.replace(
                  /^(\d{4})-(\d{2})-(\d{2}).*/,
                  '$3/$2/$1'
                )}
              </Td>
              <Td align="left">
                <Status finalized={item.status}>{status[item.status]}</Status>
              </Td>
              <Td align="left">
                <Status finalized={item.status}>{item.moderator_name}</Status>
              </Td>
              <Td>
                <Link to={`${url}/student/resume/${item.id}`}>
                  Visualizar resumo
                </Link>
              </Td>
            </Row>
          ))}
        </Body>
      </Table>
    );
  };
  render() {
    const {
      match: { url }
    } = this.props;
    const { process, loading } = this.state;
    return (
      <Container>
        <LoadingScreen
          loading={loading}
          bgColor="#FFF"
          spinnerColor="#ED3B48"
        />
        {process ? this.renderTable() : null}
        <Text>Selecione o processo que quer iniciar:</Text>
        <Actions>
          <Action to={`${url}/student/regulation`}>
            Aproveitamento de horas de estágio
          </Action>
          <Action to={`${url}`} disabled>
            Incluir novo processo de estágio
          </Action>
        </Actions>
      </Container>
    );
  }
}

export default Internship;
