import styled, { css } from 'styled-components';
import { Field } from 'formik';

const Title = styled.h2`
  display: block;
  font-size: 1.7rem;
  margin: 5vh 0 1rem;
`;

const Subtitle = styled.h3`
  display: block;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-top: 8vh;
`;

const Row = styled.div`
  width: 90%;
  display: flex;
  ${({ bottom }) =>
    bottom &&
    css`
      margin-bottom: 10vh;
    `}
`;

const Col = styled.div`
  width: ${({ width }) => width || '100%'};
  height: 100%;
  padding: 8px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: var(--black-lighten);
`;

const MyField = styled(Field)`
  width: 100%;
  height: 25px;
  border: 1px solid var(--gray);
  padding: 5px;
  margin-top: 5px;
`;

const HorizontalDivider = styled.hr`
  width: 90%;
  margin: 5vh 0;
  height: 1px;
  color: rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
`;

export { Title, Subtitle, Row, Col, Label, MyField, HorizontalDivider };
