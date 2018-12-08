import React from 'react';

import { Section, Location, Icon, Title, Links, Item, Link } from './styles';

const Jumbotron = props => {
  const { icon, title, links } = props;
  return (
    <Section>
      <Location>
        <Icon src={icon} />
        <Title>{title}</Title>
      </Location>
      <Links>
        {links.map(item => (
          <Item key={item.name}>
            <Link active={item.active} href={item.url}>{item.name}</Link>
          </Item>
        ))}
      </Links>
    </Section>
  );
};

export default Jumbotron;
