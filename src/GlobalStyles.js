import { createGlobalStyle } from 'styled-components';

const GEStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,600');

  @font-face {
    font-family: 'GE Inspira Sans Regular',
    src: url(../src/utils/fonts/GEInspiraSans-Regular-v02.ttf)
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'GE Inspira Sans Regular', -apple-system, BlinkMacSystemFont, Arial,
      Helvetica, sans-serif;
    font-smoothing: antialiased;
  }
`;

export const Grid = createGlobalStyle`
 .container {
    max-width: 970px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .row {
    max-width: 880px;
    margin: 80px auto 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .column {
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export default GEStyles;
