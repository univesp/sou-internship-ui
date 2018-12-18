import styled, { css } from 'styled-components';

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 130px;
  padding: 1.8rem 3rem 0 3rem;
  background-color: var(--black);
  flex-direction: column;
  grid-area: jumbotron;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  display: inline-block;
  width: 50px;
  height: 50px;
`;

const Title = styled.h1`
  display: inline-block;
  margin: 0 0 0 10px;
  color: var(--zero);
  text-transform: uppercase;
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  margin: 1.2rem 0 0 0;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  &:not(:last-of-type) {
    margin-right: 1.2rem;
  }
`;

const Link = styled.a`
  position: relative;
  color: var(--zero);
  text-decoration: none;
  ${props =>
    props.active &&
    css`
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        background-color: var(--red-darken);
        left: 0;
        bottom: -0.75rem;
      }
    `}
`;

export { Section, Location, Icon, Title, Links, Item, Link };
