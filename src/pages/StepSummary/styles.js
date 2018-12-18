import styled from 'styled-components';

const Title = styled.h2`
  display: block;
  font-size: 1.7rem;
  margin: 5vh 0 1rem;
`;

const Subtitle = styled.h3`
  display: block;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-top: 5vh;
`;

const Row = styled.div`
  width: ${({ width }) => width || '90%'};
  display: flex;
`;

const Col = styled.div`
  width: ${({ width }) => width || '100%'};
  height: 100%;
  padding: 8px;
  text-align: center;
  &:not(:last-of-type) {
    margin-right: 7%;
  }
`;

const Data = styled.ul`
  list-style: none;
  padding-left: 0.8rem;
`;

const Item = styled.li`
  display: flex;
  font-size: 1rem;
  color: var(--black-lighten);
  justify-content: space-between;
  font-weight: 600;
`;

const Datum = styled.span`
  font-size: 0.9em;
  color: #607989;
`;

export { Title, Subtitle, Row, Col, Data, Item, Datum };
