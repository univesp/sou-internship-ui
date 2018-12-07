import React from 'react';

import { Container, Text, Actions, Action } from './styles';

const Probation = () => (
  <Container>
    <Text>Você não possui nenhum estágio cadastrado.</Text>
    <Actions>
      <Action to="/aproveitamento">Aproveitamento de horas de estágio</Action>
      <Action to="/" hidden>
        Incluir novo processo de estágio
      </Action>
    </Actions>
  </Container>
);

export default Probation;
