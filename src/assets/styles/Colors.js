import { createGlobalStyle } from 'styled-components';

const Color = createGlobalStyle`
  :root {
    --zero: #FFF;
    --red: #D13239;
    --red-lighten: #ED3B48;
    --red-darken: #AF1C27;
    --cyan: #00AFAF;
    --cyan-lighten: #00D3CD;
    --cyan-darken: #009692;
    --purple: #6547BA;
    --purple-lighten: #7155D8;
    --purple-darken: #452F93;
    --gray: #C4D1D6;
    --gray-lighten: #DFE6E8;
    --gray-darken: #607989;
    --black: #172833;
    --black-lighten: #354551;
  }
`;
export default Color;
