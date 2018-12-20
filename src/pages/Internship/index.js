import React, { Component, Fragment } from 'react';

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
    process: null
  };

  async componentDidMount() {
    const { toggleLoading } = this.props();

    toggleLoading();

    const resProcess = await api.get('/student/1/processes').then(res => {
      toggleLoading();
      return res;
    });
    const resGrantor = await api.get('/grantor/1');

    this.setState({
      process: resProcess.data.processes,
      grantor: resGrantor.data.grantor[0]
    });
  }

  renderTable = () => {
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
                <Link to={`resume/${item.id}`}>Visualizar resumo</Link>
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
    const { process } = this.state;
    return (
      <Fragment>
        <Container>
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
      </Fragment>
    );
  }
}

export default Internship;
