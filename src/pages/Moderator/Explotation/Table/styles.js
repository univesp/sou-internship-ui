import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
`;

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--gray);
`;

const Actions = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Action = styled.li`
  position: relative;
  text-decoration: none;
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        background-color: var(--red);
        left: 0;
        bottom: -0.5rem;
      }
    `}
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const Title = styled.h2`
  display: block;
  font-size: 1.7rem;
  margin: 5vh 0 5vh;
`;

const Section = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid var(--gray);
`;

const Search = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
  border-bottom: 2px solid #000;
  margin-bottom: 5vh;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  padding: 3px;
`;

const Table = styled.table`
  width: 100%;
  margin: 0 auto;
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
  padding: 10px;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-image: url(${props => props.avatar || ''});
  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export {
  Title,
  Container,
  Table,
  Head,
  Row,
  Th,
  Body,
  Td,
  Avatar,
  Icon,
  Search,
  SearchInput,
  Section,
  Nav,
  Actions,
  Action
};
