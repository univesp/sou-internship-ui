import React from 'react';

import Course from '../../assets/imgs/percursos.svg';
import Collections from '../../assets/imgs/colecoes.svg';
import Collaboration from '../../assets/imgs/colaboracao.svg';
import Avaliations from '../../assets/imgs/avaliacoes.svg';
import Calendar from '../../assets/imgs/calendario.svg';
import Communication from '../../assets/imgs/comunicacao.svg';
import AcademicSecretary from '../../assets/imgs/secretaria-academica.svg';

import { Aside, Actions, Action } from './styles';

const Sidebar = () => (
  <Aside>
    <Actions>
      <Action icon={Course}>Percursos</Action>
      <Action icon={Collections}>Coleções</Action>
      <Action icon={Collaboration} active>
        Colaboração
      </Action>
      <Action icon={Avaliations}>Avaliações</Action>
      <Action icon={Calendar}>Calendário</Action>
      <Action icon={Communication}>Comunicação</Action>
      <Action icon={AcademicSecretary}>Secretaria Acadêmica</Action>
    </Actions>
  </Aside>
);

export default Sidebar;
