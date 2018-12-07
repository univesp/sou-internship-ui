import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 130px;
  padding: 3rem;
  background-color: #162834;
  align-items: center;
  grid-area: jumbotron;
`;

const Icon = styled.img`
  display: inline-block;
  width: 50px;
  height: 50px;
`;

const Title = styled.h1`
  display: inline-block;
  margin: 0 0 0 10px;
  color: #fff;
  text-transform: uppercase;
`;

export { Section, Icon, Title };
