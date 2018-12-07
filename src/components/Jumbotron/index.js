import React from 'react';

import { Section, Icon, Title } from './styles';

const Jumbotron = props => (
  <Section>
    <Icon src={props.icon} />
    <Title>{props.title} //</Title>
  </Section>
);

export default Jumbotron;
