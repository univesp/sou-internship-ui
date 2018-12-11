import React from 'react';
import PropTypes from 'prop-types';

import { Section, Location, Icon, Title, Links, Item, Link } from './styles';

const Jumbotron = ({ icon, title, links }) => (
  <Section>
    <Location>
      <Icon src={icon} />
      <Title>{title}</Title>
    </Location>
    <Links>
      {links.map(item => (
        <Item key={item.name}>
          <Link active={item.active} href={item.url}>
            {item.name}
          </Link>
        </Item>
      ))}
    </Links>
  </Section>
);

Jumbotron.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Jumbotron;
