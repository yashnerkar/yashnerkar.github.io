import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: ${(props) => `url(${props.image})`};
    background-size: cover;
    background-repeat: repeat;
    font - family: Open - Sans, Helvetica, Sans - Serif;
  }
`;

export default GlobalStyle;