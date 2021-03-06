import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field } from 'formik';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
`;

const Title = styled.h2`
  display: block;
  font-size: 1.7rem;
  margin: 5vh 0 1rem;
`;

const Subtitle = styled.h4`
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 0 0 5vh;
`;

const GroupButton = styled.div`
  margin-top: 6vh;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled(Link)`
  background-color: ${props => (props.primary ? 'var(--zero)' : 'var(--red)')};
  text-decoration: none;
  border: 1px solid var(--red);
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  color: ${props => (props.primary ? 'var(--red)' : 'var(--zero)')};
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 0.8rem;
  }
`;

const Area = styled.div`
  width: 100%;
  padding: 2rem 0;
  margin: 8vh 0 0;
  span {
    color: var(--red);
  }
`;

const MyField = styled(Field)`
  width: 60px;
  margin: 0 10px;
  text-align: center;
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  margin-top: 3vh;
  margin-bottom: 6vh;
  padding-top: 3vh;
  span {
    color: var(--red);
  }
`;

const Textarea = styled(Field)`
  display: block;
  width: 100%;
  max-width: 900px;
  min-height: 200px;
  max-height: 200px;
  margin: 6vh auto 0;
`;

export {
  Container,
  Title,
  Subtitle,
  GroupButton,
  Button,
  Area,
  Text,
  MyField,
  Label,
  Textarea
};
