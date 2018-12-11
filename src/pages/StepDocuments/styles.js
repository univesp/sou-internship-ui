import styled from 'styled-components';

const Title = styled.h2`
  display: block;
  font-size: 1.7rem;
  margin: 5vh 0 1rem;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const Col = styled.div`
  width: ${({ width }) => width || '100%'};
  height: 100%;
  border: 1px dashed #c4d1d6;
  &:not(:last-of-type) {
    margin-right: 5%;
  }
`;

const DragDrop = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px;
  text-align: center;
`;

const Document = styled.h3`
  display: inline-block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background-color: #607989;
  text-transform: uppercase;
  margin: 0;
`;

const Text = styled.p``;

const Accepted = styled.span`
  font-size: 0.8rem;
  color: #c4d1d6;
`;

const Icon = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  margin: 1rem auto;
`;

const Field = styled.input`
  display: none;
`;

const Button = styled.a`
  display: block;
  width: 70%;
  height: 30px;
  line-height: 30px;
  margin: 0 auto 0.5rem;
  background-color: #fff;
  border: 1px solid #354551;
  cursor: pointer;
`;

export {
  Title,
  Row,
  Col,
  DragDrop,
  Document,
  Text,
  Accepted,
  Icon,
  Field,
  Button
};
