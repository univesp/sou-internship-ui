import React, { Component, Fragment } from 'react';

import { Container, Text, Actions, Action } from './styles';

const dict = {
  name: 'Processo',
  created_at: 'Enviado em',
  status: 'Status',
  responsible: 'Área/Responsável'
};
class Internship extends Component {
  state = {
    process: [
      {
        name: 'Aproveitamento de Horas',
        grantor: {
          name: 'Empresa XXX'
        },
        created_at: '01/01/2017',
        status: 'Em análise',
        responsible: 'Mediadora Paula Souza'
      }
    ]
  };
  renderTable = () => {
    return <h1>Hello</h1>;
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
