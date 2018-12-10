import styled, { css } from 'styled-components';

const Steps = styled.ul`
  display: flex;
  width: 100%;
  height: auto;
  list-style-type: none;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Step = styled.li`
  display: block;
  font-weight: 500;
  flex: 1 0 auto;
  position: relative;
  text-align: center;
  color: ${props => (props.active || props.completed ? '#00cfc6' : '#000')};
  &:before {
    content: '';
    box-sizing: border-box;
    display: block;
    width: 50px;
    height: 50px;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    background-size: 30px;
    background-origin: content-box;
    padding: 10px 0 0 10px;
    margin: 0 auto 10px;
    border-radius: 50%;
    background-color: ${props =>
      props.active || props.completed ? '#00cfc6' : '#dee5e8'};
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    ${props =>
      props.active
        ? css`
            background-image: linear-gradient(
              to right,
              #00cfc6 50%,
              #dee5e8 50%
            );
          `
        : css`
            background-color: #dee5e8;
          `}
    ${props =>
      props.completed &&
      css`
        background-color: #00cfc6;
      `}
    top: 25px;
    left: 50%;
    z-index: -1;
  }
  &:last-child:after {
    content: none;
  }
`;

export { Steps, Step };
