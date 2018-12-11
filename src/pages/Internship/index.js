import React, { Fragment } from 'react';

import { Container, Text, Actions, Action } from './styles';

const Internship = ({ match: { url } }) => (
  <Fragment>
    <Container>
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

export default Internship;
