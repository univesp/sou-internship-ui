import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Table = styled.table`
  width: 80%;
  margin-bottom: 10vh;
  border-collapse: collapse;
  border-spacing: 0;
`;

const Head = styled.thead`
  border-bottom: 2px solid #000;
`;

const Row = styled.tr``;

const Th = styled.th`
  text-align: ${props => props.align || 'center'};
`;

const Body = styled.tbody``;

const Td = styled.td`
  text-align: ${props => props.align || 'center'};
`;

const Type = styled.p`
  font-weight: bold;
`;

const Grantor = styled.span`
  display: block;
  font-size: 0.8em;
  font-weight: normal;
`;

const Status = styled.span`
  color: var(--red-lighten);
  font-weight: bold;
`;

const MyLink = styled(Link)`
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-family: var(--title);
  font-weight: 500;
  text-align: center;
  color: var(--red);
`;

const Actions = styled.div`
  display: flex;
  margin-top: 3rem;
`;

const Action = styled(Link)`
  ${props =>
    props.disabled &&
    css`
      opacity: 0.2;
      cursor: not-allowed;
    `};
  display: inline-block;
  width: 280px;
  padding: 1rem;
  background-color: var(--red-darken);
  color: var(--zero);
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export {
  Container,
  Table,
  Head,
  Row,
  Th,
  Body,
  Td,
  Type,
  Grantor,
  MyLink,
  Text,
  Status,
  Actions,
  Action
};
