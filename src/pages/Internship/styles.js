import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  position: absolute;
  padding: 10rem 8rem;
  border: 1px solid rgba(3, 3, 3, 0.1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-family: 'Open-sans', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  color: #b13239;
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
