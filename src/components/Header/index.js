import React from 'react';

import { Header, Logo, Actions, Action } from './styles';

import VunespLogo from '../../assets/imgs/logo-univesp.png';

import Notify from '../../assets/imgs/alerta.svg';

const HeaderC = () => (
  <Header>
    <Logo src={VunespLogo} alt="UNIVESP" />
    <Actions>
      <Action icon={Notify}>Notificações</Action>
      {/* <Action icon={}>Configurações</Action> */}
      {/* <Action icon={}>Icones</Action> */}
      {/* <Action icon={}>Sair</Action> */}
    </Actions>
  </Header>
);

export default HeaderC;
