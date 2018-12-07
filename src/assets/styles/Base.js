import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Barlow:200i,400,400i,500,600|Open+Sans:400i');

  html {
    font-size: 16px;
    font-family: 'Barlow', sans-serif;
    letter-spacing: 0.2vw;
    box-sizing: border-box;
  }

  #root {
    display: grid;
    grid-template-columns: 80px 1fr 1fr;
    grid-template-rows: 80px 130px 1fr 1fr;
    grid-template-areas:
    "header header header"
    "sidebar jumbotron jumbotron"
    "sidebar content content"
    "sidebar content content";
  }

  * {
    box-sizing: border-box;
  }
`;

export default Base;
