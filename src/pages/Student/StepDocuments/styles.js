import styled from 'styled-components';
import { ErrorMessage } from 'formik';

const Title = styled.h2`
  display: block;
  font-size: 1.7rem;
  margin: 5vh 0;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const Col = styled.div`
  width: ${({ width }) => width || '100%'};
  height: 100%;
  border: 1px dashed var(--gray);
  text-align: center;
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
  color: var(--zero);
  letter-spacing: 0.05rem;
  font-size: 1.1rem;
  background-color: var(--gray-darken);
  text-transform: uppercase;
  margin: 0;
`;

const Text = styled.p`
  font-weight: 500;
`;

const Accepted = styled.span`
  display: block;
  font-size: 0.8rem;
  color: var(--gray);
`;

const Icon = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  margin: 1rem auto;
`;

const Error = styled(ErrorMessage)`
  display: inline-block;
  width: 100%;
  color: var(--zero);
  background-color: var(--red);
  padding: 10px;
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
  background-color: var(--zero);
  border: 1px solid var(--black-lighten);
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
  Error,
  Field,
  Button
};
