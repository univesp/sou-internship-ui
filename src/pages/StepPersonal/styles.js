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
  padding: 15px;
`;

const Datum = styled.label`
  font-weight: 600;
  font-size: 0.8rem;
  color: #7a8d9c;
  span {
    display: block;
    font-size: 1rem;
    color: #000;
    padding-left: 8px;
  }
`;

export { Title, Row, Col, Datum };
