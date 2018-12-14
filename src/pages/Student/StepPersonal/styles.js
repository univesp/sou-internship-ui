import styled from 'styled-components';

const Title = styled.h2`
  display: block;
  font-size: 1.7rem;
  margin: 5vh 0 1rem;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 2px;
  border: 1px solid var(--gray-lighten);
`;

const Datum = styled.label`
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--gray);
  span {
    display: block;
    font-size: 1rem;
    color: #000;
    padding-left: 8px;
  }
`;

export { Title, Row, Col, Datum };
