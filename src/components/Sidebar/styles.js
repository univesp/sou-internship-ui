import styled from 'styled-components';

const Aside = styled.aside`
  width: 80px;
  height: 90vh;
  background-color: #b13239;
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
  width: 60px;
  height: 60px;
  text-indent: -9999px;
  background-color: ${props => (props.active ? '#911b28' : 'transparent')};
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-origin: content-box;
  margin-top: 8px;
  border: 1px solid #fff;
  padding: 7.5px 0 0 7.5px;
  box-sizing: border-box;
`;

export { Aside, Logo, Actions, Action };
