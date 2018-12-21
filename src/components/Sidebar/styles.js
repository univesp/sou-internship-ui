import styled from 'styled-components';

const Aside = styled.aside`
  width: 60px;
  min-height: calc(100vh - 70px);
  height: 100%;
  background-color: var(--red);
  grid-area: sidebar;
`;

const Logo = styled.img`
  width: 117px;
  height: 41px;
`;

const Actions = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Action = styled.li`
  width: 48px;
  height: 48px;
  text-indent: -9999px;
  background-color: ${props =>
    props.active ? 'var(--red-darken)' : 'transparent'};
  background-image: url(${props => props.icon});
  background-size: 32px;
  background-repeat: no-repeat;
  background-origin: content-box;
  margin-top: 8px;
  border: 1px solid var(--zero);
  padding: 8px;
  box-sizing: border-box;
`;

export { Aside, Logo, Actions, Action };
