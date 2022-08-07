import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: ${(props) => `url(${props.image})`};
    font - family: Open - Sans, Helvetica, Sans - Serif;
  }
`;

export default GlobalStyle;