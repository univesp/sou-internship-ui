import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 750px;
  height: 400px;
  border: 1px solid #000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const Actions = styled.div`
  display: flex;
  margin-top: 3rem;
`;

const Action = styled(Link)`
  display: ${props => (props.hidden ? 'none' : 'inline-block')};
  width: 280px;
  padding: 1rem;
  background-color: #b13239;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export { Container, Text, Actions, Action };
