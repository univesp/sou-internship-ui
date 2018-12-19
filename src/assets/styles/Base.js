import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Barlow:200i,400,400i,500,600|Open+Sans:400,400i');

  body, html {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 14px;
    font-family: var(--text);
    letter-spacing: 0.1vw;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--title);
  }

  #root {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 60px 1fr 1fr;
    grid-template-rows: 60px 130px auto;
    grid-template-areas:
    "header header header"
    "sidebar jumbotron jumbotron"
    "sidebar content content";
  }

  * {
    box-sizing: border-box;
  }
`;

export default Base;
