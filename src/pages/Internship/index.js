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

const status = ['Em análise', 'Deferido', 'Indeferido'];
class Internship extends Component {
  state = {
    process: [
      {
        id: 1,
        name: 'Aproveitamento de Horas',
        grantor: {
          name: 'Empresa XXX'
        },
        created_at: '01/01/2017',
        status: 0,
        responsible: 'Mediadora Paula Souza'
      }
    ]
  };
  renderTable = () => {
    const { process } = this.state;
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
            <Row>
              <Td align="left">
                <Type>
                  {item.name}
                  <Grantor>{item.grantor.name}</Grantor>
                </Type>
              </Td>
              <Td align="left">{item.created_at}</Td>
              <Td align="left">
                <Status finalized={false}>{status[item.status]}</Status>
              </Td>
              <Td align="left">
                <Status finalized={false}>{item.responsible}</Status>
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
            <Action to={`${url}/explotation`}>
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
