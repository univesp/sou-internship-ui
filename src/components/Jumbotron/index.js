import React from 'react';

import { Section, Icon, Title } from './styles';

const Jumbotron = props => {
  const { icon, title } = props;
  return (
    <Section>
      <Icon src={icon} />
      <Title>{title} //</Title>
    </Section>
  );
};

export default Jumbotron;
