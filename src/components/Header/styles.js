import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #627981;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  grid-area: header;
`;

const Logo = styled.img`
  width: 117px;
  height: 41px;
`;

const Actions = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
`;

const Action = styled.li`
  width: 32px;
  height: 32px;
  text-indent: -9999px;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export { Header, Logo, Actions, Action };
